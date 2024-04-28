import mysql from "mysql";

export const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  // password:"12345678",
  database:"social"
});

db.connect(function(err) {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    return;
  }
  console.log('Connected to MySQL database successfully');
});