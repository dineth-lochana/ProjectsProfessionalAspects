import { useContext, useState } from "react";
import "./comments.scss";
import { AuthContext } from "../../context/authContext";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import moment from "moment";

const Comments = ({ postId }) => {
  const [descr, setDescr] = useState("");
  const [selectedComment, setSelectedComment] = useState(null);
  const { currentUser } = useContext(AuthContext);

  const { isLoading, error, data } = useQuery(["comments"], () =>
    makeRequest.get("/comments?postId=" + postId).then((res) => {
      return res.data;
    })
  );

  const queryClient = useQueryClient();

  const addMutation = useMutation(
    (newComment) => {
      return makeRequest.post("/comments", newComment);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["comments"]);
      },
    }
  );

  const deleteMutation = useMutation(
    (commentId) => {
      return makeRequest.delete(`/comments/${commentId}`);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["comments"]);
      },
    }
  );

  const updateMutation = useMutation(
    (updatedComment) => {
      return makeRequest.put(`/comments/${updatedComment.id}`, updatedComment);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["comments"]);
      },
    }
  );

  const handleAddClick = async (e) => {
    e.preventDefault();
    addMutation.mutate({ descr, postId });
    setDescr("");
  };

  const handleDelete = async (commentId) => {
    // Check if the current user is the creator of the comment or an admin
    if (currentUser.id === data.find(comment => comment.id === commentId)?.userId || currentUser.isAdmin) {
      try {
        await makeRequest.delete(`/comments/${commentId}`);
        // Remove the deleted comment from the data array
        const newData = data.filter(comment => comment.id !== commentId);
        // Update the state with the new data
        queryClient.setQueryData(["comments"], newData);
        queryClient.invalidateQueries(["comments"]);
      } catch (error) {
        console.error("Error deleting comment:", error);
      }
    } else {
      console.log("You are not authorized to delete this comment.");
    }
  };
  

  const handleUpdate = async (commentId, updatedDescr) => {
    if (currentUser.id === data.find(comment => comment.id === commentId).userId || currentUser.isAdmin) {
      try {
        const updatedComment = { id: commentId, descr: updatedDescr };
        await updateMutation.mutate(updatedComment);
  
        // Find the index of the updated comment in the data array
        const index = data.findIndex(comment => comment.id === commentId);
  
        // Create a new data array with the updated comment
        const newData = [...data];
        newData[index] = { ...newData[index], descr: updatedDescr };
  
        // Update the state with the new data
        queryClient.setQueryData(["comments"], newData);
  
        setSelectedComment(null); 
      } catch (error) {
        console.error("Error updating comment:", error);
      }
    } else {
      console.log("You are not authorized to update this comment.");
    }
  };
  

  return (
    <div className="comments">
      <div className="write">
        <input
          type="text"
          placeholder="write a comment"
          value={descr}
          onChange={(e) => setDescr(e.target.value)}
        />
        <button onClick={handleAddClick}>Send</button>
      </div>
      {error ? (
        "Something went wrong"
      ) : isLoading ? (
        "loading"
      ) : (
        data.map((comment) => (
          <div className="comment" key={comment.id}>
            {selectedComment === comment.id ? (
              <div className="edit-comment">
                <input
                  type="text"
                  value={descr}
                  onChange={(e) => setDescr(e.target.value)}
                />
                <button
                  onClick={() => handleUpdate(comment.id, descr)}
                  disabled={!descr.trim()} // Disable if description is empty
                >
                  Save
                </button>
                <button onClick={() => setSelectedComment(null)}>Cancel</button>
              </div>
            ) : (
              <>
                <div className="info">
                  <span>{comment.username}</span>
                  <p>{comment.descr}</p>
                </div>
                <span className="date">{moment(comment.createdAt).fromNow()}</span>
                {(currentUser.id === comment.userId || currentUser.isAdmin) && (
                  <div className="actions">
                    <button onClick={() => handleDelete(comment.id)}>Delete</button>
                    <button onClick={() => setSelectedComment(comment.id)}>Update</button>
                  </div>
                )}
              </>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default Comments;

