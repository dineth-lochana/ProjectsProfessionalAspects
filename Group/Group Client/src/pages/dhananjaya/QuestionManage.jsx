import React, { useEffect, useState } from "react";
import axios from "axios";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, FormGroup, Label, Input } from "reactstrap";
import swal from 'sweetalert';

const QuestionManage = () => {
  const [questions, setQuestions] = useState([]);
  const [modalAdd, setModalAdd] = useState(false);
  const [modalUpdate, setModalUpdate] = useState(false);
  const [newQuestion, setNewQuestion] = useState("");
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [addError, setAddError] = useState(false); 

  useEffect(() => {
    fetchQuestionData();
  }, []);

  const fetchQuestionData = async () => {
    try {
      const response = await axios.get("http://localhost:8800/questions");
      setQuestions(response.data);
    } catch (error) {
      console.error("Error fetching question data:", error);
    }
  };

  const toggleAddModal = () => {
    setModalAdd(!modalAdd);
  };

  const toggleUpdateModal = () => {
    setModalUpdate(!modalUpdate);
  };

  const handleAddQuestion = async () => {
    if (!newQuestion.trim()) { 
      setAddError(true);
      return;
    }

    try {
      swal("Success!", "Add Question successful!", "success")
      await axios.post("http://localhost:8800/questions", { Data: newQuestion });
      fetchQuestionData();
      toggleAddModal();
      setAddError(false); 
    } catch (error) {
      console.error("Error adding question:", error);
    }
  };

  const handleUpdateQuestion = async () => {
    try {
      swal("Success!", " Question updated successful!", "success")
      await axios.put(`http://localhost:8800/questions/${selectedQuestion.id}`, { Data: selectedQuestion.Data });
      fetchQuestionData();
      toggleUpdateModal();
    } catch (error) {
      console.error("Error updating question:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/questions/${id}`);
      fetchQuestionData();
    } catch (error) {
      console.error("Error deleting question:", error);
    }
  };

  return (
    <div >
     
      <br/><br/>
      <div className="text-center"> 
      <h1>Question Management</h1>
      <Button className="fs-5 bg-success w-50" onClick={toggleAddModal}>
  Add
</Button>

</div>
      <div className="container">

      
      <table className="table table-sm fs-5 ">
       
        <thead>
          <tr>
            <th>Questions</th>
            <th>Action</th>
          </tr>
        </thead>
       
        <tbody>
          {questions.map((question) => (
            <tr key={question.id}>
              <td>{question.Data}</td>
              <td>
              
                <button
                  className="btn btn-primary mr-2 w-30 fs-5"
                  onClick={() => {
                    setSelectedQuestion(question);
                    toggleUpdateModal();
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
  <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z"/>
</svg>
                </button>
               
                <button
                  className="btn btn-danger w-30 fs-5" 
                  onClick={() =>  swal({
                    title: "Are you sure?",
                    text: "Once deleted, you will not be able to recover this Question!",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                  })
                  .then(async (willDelete) => {
                    if (willDelete) {
                        handleDelete(question.id)
                      swal("Poof! Your product has been deleted!", {
                        icon: "success",
                      });
                      window.location.reload();
                    } else {
                      swal("Your product is safe!");
                    }
                  })}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
  <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
</svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

     
      <Modal isOpen={modalAdd} toggle={toggleAddModal}>
        <ModalHeader toggle={toggleAddModal}>Add Question</ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label for="newQuestion">Question</Label>
            <Input
              type="text"
              name="newQuestion"
              id="newQuestion"
              value={newQuestion}
              onChange={(e) => setNewQuestion(e.target.value)}
            />
          </FormGroup>
          {addError && <div className="text-danger">Please enter a question</div>} 
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={handleAddQuestion}>
            Add
          </Button>{" "}
          <Button color="secondary" onClick={toggleAddModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>

    
      <Modal isOpen={modalUpdate} toggle={toggleUpdateModal}>
        <ModalHeader toggle={toggleUpdateModal}>Update Question</ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label for="updateQuestion">Question</Label>
            <Input
              type="text"
              name="updateQuestion"
              id="updateQuestion"
              value={selectedQuestion ? selectedQuestion.Data : ""}
              onChange={(e) =>
                setSelectedQuestion({ ...selectedQuestion, Data: e.target.value })
              }
            />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleUpdateQuestion}>
            Update
          </Button>{" "}
          <Button color="secondary" onClick={toggleUpdateModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
    </div>
  );
};

export default QuestionManage;
