import { db } from "../connect.js";
import jwt from "jsonwebtoken";
import moment from "moment";

export const getComments = (req, res) => {
  const q = `SELECT c.*, u.id AS userId, username FROM comments AS c JOIN users AS u ON (u.id = c.userId)
    WHERE c.postId = ? ORDER BY c.createdAt DESC
    `;

  db.query(q, [req.query.postId], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};

export const addComment = (req, res) => {
  const token = req.cookies.accessToken;
  console.log(req.body);
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const q = "INSERT INTO comments(`descr`, `createdAt`, `userId`, `postId`) VALUES (?)";
    const values = [
      req.body.descr,
      moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
      userInfo.id,
      req.body.postId
    ];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("Comment has been created.");
    });
  });
};

export const deleteComment = (req, res) => {
  const token = req.cookies.accessToken; // Corrected token key to accessToken
  if (!token) return res.status(401).json({ error: "Not authenticated!" });

  jwt.verify(token, "secretkey", (err, userInfo) => { // Adjusted secret key
    if (err) return res.status(403).json({ error: "Token is not valid!" });

    const commentId = req.params.id;
    const userId = userInfo.id;

    const q = "DELETE FROM `comments` WHERE `id`=? AND `userId`=?";

    db.query(q, [commentId, userId], (err, data) => {
      if (err) return res.status(500).json({ error: "Internal server error!" });

      if (data.affectedRows > 0) {
        return res.json({ message: "Comment has been deleted!" });
      } else {
        return res.status(403).json({ error: "You can delete only your comment!" });
      }
    });
  });
};

  export const updateComment = (req, res) => {
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("Not authenticated!");
  
    jwt.verify(token, "secretkey", (err, userInfo) => {
      if (err) return res.status(403).json("Token is not valid!");
  
      const commentId = req.params.id;
      const { descr } = req.body;
  
      const q = "UPDATE comments SET `descr` = ?, `updatedAt` = ? WHERE `id` = ? AND `userId` = ?";
      const values = [
        descr,
        moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
        commentId,
        userInfo.id
      ];
  
      db.query(q, values, (err, data) => {
        if (err) return res.status(500).json(err);
        if (data.affectedRows > 0) return res.json("Comment has been updated!");
        return res.status(403).json("You can update only your comment!");
      });
    });
  };
  

