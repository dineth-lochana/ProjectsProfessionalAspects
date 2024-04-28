import React, { useState, useEffect } from "react";
import Post from "../post/Post";
import "./posts.scss";
import { makeRequest } from "../../axios";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Fetch posts data from API
    const fetchData = async () => {
      try {
        const response = await makeRequest.get("/posts");
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchData();
  }, []);

  // Update filtered posts when search term changes
  useEffect(() => {
    const filtered = posts.filter((post) =>
      post.descr.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPosts(filtered);
  }, [posts, searchTerm]);

  return (
    <div className="posts">
      {/* Search input */}
      <input
        type="text"
        placeholder="Search by description..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Display posts */}
      {filteredPosts.length > 0 ? (
        filteredPosts.map((post) => <Post post={post} key={post.id} />)
      ) : (
        <p>No posts found.</p>
      )}
    </div>
  );
};

export default Posts;
