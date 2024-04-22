import express from "express";
const app = express();
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import commentRoutes from "./routes/comments.js";
import likeRoutes from "./routes/likes.js";

import cors from "cors";
import multer from "multer";
import cookieParser from "cookie-parser";


//middlewares
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
  })
);
app.use(cookieParser());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
  const file = req.file;
  res.status(200).json(file.filename);
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/likes", likeRoutes);

//app.listen(8800, () => {
//  console.log("API working!");
//});



//---------------------------------------------------


import mysql from "mysql2"
import path from "path"

//const app = express()

const db3 = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"test2"
})

app.use(express.json())
app.use(cors())
app.use(express.static('public'));


////////////////////////////////////////////////////////////////////////////////////////////////
// Dineth's Code

//Multer
const storage2 = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads') 
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload2 = multer({ storage: storage2 });

// Route for handling file upload
app.post("/uploadprojectcover", upload2.single('cover'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: "No file uploaded" });
    }
    // Return the file location URL
    res.json({ url: `uploads/${req.file.filename}` });
});


app.post("/uploadprojectimages", upload2.fields([
    { name: 'img1', maxCount: 1 },
    { name: 'img2', maxCount: 1 },
    { name: 'img3', maxCount: 1 }
]), (req, res) => {
    if (!req.files || !req.files['img1'] || !req.files['img2'] || !req.files['img3']) {
        return res.status(400).json({ error: "All image files are required" });
    }

    const urls = {
        img1: `uploads/${req.files['img1'][0].filename}`,
        img2: `uploads/${req.files['img2'][0].filename}`,
        img3: `uploads/${req.files['img3'][0].filename}`
    };

    res.json({ urls });
});

app.get("/", (req,res)=>{
    res.json("Hello, this is the backend.")
})



app.get("/projects", (req,res)=>{
    const q = "Select * from projects"
    db3.query(q,(err,data) =>{
        if(err) return res.json("Error!")
        return res.json(data)
    } )
})

app.post("/projects", (req,res) => {
    const q = "Insert into projects (`title`,`info`,`cover`,`images`,`client`,`img1`,`img2`,`img3`) values (?)"
    const values = [
        req.body.title,
        req.body.info,
        req.body.cover,
        req.body.images,
        req.body.client,
        req.body.img1,
        req.body.img2,
        req.body.img3
    ];

    db3.query(q,[values],(err,data) =>
    {
        if(err) return res.json("Error!")
        return res.json("Project has been created!")
    } 
    )
})

app.delete("/projects/:id", (req, res)=> {

    const projectid = req.params.id;
    const q ="delete from projects where id = ?"

    db3.query(q, [projectid], (err,data)=> {
        if(err) return res.json(err)
        return res.json("Project has been deleted succesfully!")
    })
})

app.put("/projects/:id", (req, res) => {
    const projectid = req.params.id;
    const q ="update projects set `title`=?, `info`=?, `cover`=?, `images`=?, `client`=?, `img1`=?, `img2`=?, `img3`=? where id = ?";
    const values = [
        req.body.title,
        req.body.info,
        req.body.cover,
        req.body.images,
        req.body.client,
        req.body.img1,
        req.body.img2,
        req.body.img3,
        projectid
    ];

    db3.query(q, values, (err,data) => {
        if(err) return res.json(err);
        return res.json("Project has been updated successfully!");
    });
});


app.get("/projects/:id", (req, res) => {
    const projectId = req.params.id;
    const q = "SELECT * FROM projects WHERE id = ?";
    db3.query(q, [projectId], (err, data) => {
        if (err) return res.status(500).json({ error: "Internal server error" });
        if (!data.length) return res.status(404).json({ error: "Project not found" });
        return res.json(data[0]); // Assuming only one project is returned
    });
});


app.get("/opinions", (req,res)=>{
    const q = "Select * from opinions"
    db3.query(q,(err,data) =>{
        if(err) return res.json("Error!")
        return res.json(data)
    } )
})

app.post("/opinions", (req,res) => {
    const q = "Insert into opinions (`opiniontext`,`customername`) values (?)"
    const values = [
        req.body.opiniontext,
        req.body.customername,
    ];

    db3.query(q,[values],(err,data) =>
    {
        if(err) return res.json("Error!")
        return res.json("Opinion has been created!")
    } 
    )
})

app.delete("/opinions/:opinionid", (req, res)=> {

    const projectid = req.params.opinionid;
    const q ="delete from opinions where opinionid = ?"

    db3.query(q, [projectid], (err,data)=> {
        if(err) return res.json(err)
        return res.json("Opinion has been deleted succesfully!")
    })
})

app.put("/opinions/:opinionid", (req, res)=> {

    const projectid = req.params.opinionid;
    const q ="update opinions set `opiniontext`=?, `customername`=? where opinionid = ?";

    const values = [
        req.body.opiniontext,
        req.body.customername,
    ];

    db3.query(q, [...values, projectid], (err,data)=> {
        if(err) return res.json(err)
        return res.json("Opinon has been updated succesfully!")
    })
})

app.get("/news", (req, res) => {
  const q = "SELECT * FROM news";
  db3.query(q, (err, data) => {
      if (err) return res.json("Error!");
      return res.json(data);
  });
});


// Create a new news item
app.post("/news", (req, res) => {
  const q = "INSERT INTO news (`newstitle`, `newstext`, `newsdate`) VALUES (?)";
  const values = [
      req.body.newstitle,
      req.body.newstext,
      req.body.newsdate
  ];

  db3.query(q, [values], (err, data) => {
      if (err) return res.json("Error!");
      return res.json("News item has been created!");
  });
});

// Delete a news item
app.delete("/news/:newsid", (req, res) => {
  const newsid = req.params.newsid;
  const q = "DELETE FROM news WHERE newsid = ?";

  db3.query(q, [newsid], (err, data) => {
      if (err) return res.json(err);
      return res.json("News item has been deleted successfully!");
  });
});

// Update a news item
app.put("/news/:newsid", (req, res) => {
  const newsid = req.params.newsid;
  const q = "UPDATE news SET `newstitle`=?, `newstext`=?, `newsdate`=? WHERE newsid = ?";

  const values = [
      req.body.newstitle,
      req.body.newstext,
      req.body.newsdate
  ];

  db3.query(q, [...values, newsid], (err, data) => {
      if (err) return res.json(err);
      return res.json("News item has been updated successfully!");
  });
});


////////////////////////////////////////////////////////////////////////////////////////////////
// Shehan's Code

app.get("/all", (req, res) => {
  const q = "SELECT * FROM msg";
  db3.query(q, (err, data) => {
    if (err) return res.json("Error fetching messages");
    return res.json(data);
  });
});


app.get("/msg/:email", (req, res) => {
  const userEmail = req.params.email;
  const q = "SELECT * FROM msg WHERE Email_Address = ?";
  db3.query(q, [userEmail], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/msg", (req,res)=>{ 
  const q = "INSERT INTO msg (Full_Name, Subject, Company_Name, Email_Address, Contact_Number, Details, admin_view) VALUES (?)";
const values = [
  req.body.fullName,
  req.body.subject,
  req.body.companyName,
  req.body.emailAddress,
  req.body.contactNumber,
  req.body.details,
  0,
];

db3.query(q, [values], (err, data) => {
  if (err) return res.json(err);
  return res.json("Request Sent!");
  });
});

app.delete("/msg/:idmsg", (req,res)=>{
  const IDD = req.params.idmsg;
  const q = "DELETE FROM msg WHERE idmsg = ?";

  db3.query(q,[IDD],(err,data)=>{
    if(err) return res.json(err)
    return res.json("DATA DELETED!")
  });
});

app.put("/msg/:idmsg", (req, res) => {
  const idmsg = req.params.idmsg;
  const {
    Full_Name,
    Subject,
    Company_Name,
    Email_Address,
    Contact_Number,
    Details,
    admin_view,
  } = req.body;

  const q =
    "UPDATE msg SET Full_Name=?, Subject=?, Company_Name=?, Email_Address=?, Contact_Number=?, Details=?, admin_view=? WHERE idmsg = ?";

  const values = [
    Full_Name,
    Subject,
    Company_Name,
    Email_Address,
    Contact_Number,
    Details,
    admin_view,
    idmsg,
  ];

  db3.query(q, values, (err, data) => {
    if (err) return res.json(err);
    return res.json("Data Updated!");
  });
});

app.put("/all/:idmsg", (req, res) => {
  const idmsg = req.params.idmsg;
  const {
    Full_Name,
    Subject,
    Company_Name,
    Email_Address,
    Contact_Number,
    Details,
    admin_view,
  } = req.body;

  const q =
    "UPDATE msg SET Full_Name=?, Subject=?, Company_Name=?, Email_Address=?, Contact_Number=?, Details=?, admin_view=1 WHERE idmsg = ?";

  const values = [
    Full_Name,
    Subject,
    Company_Name,
    Email_Address,
    Contact_Number,
    Details,
    idmsg,
  ];

  db3.query(q, values, (err, data) => {
    if (err) return res.json(err);
    return res.json("Data Updated!");
  });
});



import nodemailer from 'nodemailer';
const port = 588;


app.use(bodyParser.json());


app.post('/sendEmail', async (req, res) => {
  try {
    const { emailAddress, subject  } = req.body;


    let transporter = nodemailer.createTransport({
      service: 'Gmail', 
      auth: {
        user: 'etf.group.7b@gmail.com', 
        pass: 'mkmjgjpifbyhmveg' 
      }
    });

    let mailOptions = {
      from: 'etf.group.7b@gmail.com',
      to: emailAddress ,
      subject: 'New Contact Form Submission',
      text: `We Received Your Request for a Quotation for " ${subject} "`
    };


    let info = await transporter.sendMail(mailOptions);

    console.log('Email sent: ' + info.response);
    res.send('Email sent successfully!');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error sending email: ' + error.message);
  }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

////////////////////////////////////////////////////////////////////////////////////////////////
// Nisansas Code


import bodyParser from "body-parser"
import session from 'express-session'


app.use(bodyParser.json());


// Configure express-session
app.use(session({
  secret: 'your_secret_key',  
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }  
}));

app.get('/checkSession', (req, res) => {
  if (req.session.userId) {  
    res.json({ isLoggedIn: true, email: req.session.userEmail }); 
  } else {
    res.json({ isLoggedIn: false });
  }
});


// Handle POST request for user registration
app.post('/signup', (req, res) => {
  const { fullname, contact, address, email, password } = req.body;
  const query = `INSERT INTO users (fullname, contact, address, email, password) VALUES (?, ?, ?, ?, ?)`;
  db3.query(query, [fullname, contact, address, email, password], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Server error');
    } else {
      res.status(201).send('User registered successfully');
    }
  });
});

//  login route to create a session on successful login
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).send('Please provide email and password');
  }

  const query = 'SELECT * FROM users WHERE email = ? AND password = ?';
  db3.query(query, [email, password], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).send('An error occurred');
    }
    if (results.length > 0) {
      // Create a session for the logged-in user
      req.session.userId = results[0].id;  
      return res.status(200).json({email:email});
    } else {
      return res.status(401).send('Login failed');
    }
  });
});

app.get('/profile/:email', (req, res) => {
  const { email } = req.params;
  const query = 'SELECT fullname, contact, address, email, type, verified, password FROM users WHERE email = ?';
  db3.query(query, [email], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error fetching profile');
    }
    if (results.length > 0) {
      res.json(results[0]);
    } else {
      res.status(404).send('Profile not found');
    }
  });
});

app.put('/profile/:email', (req, res) => {
  const { email } = req.params;
  const { fullName, contactNo, address, password } = req.body;

  const query = `UPDATE users SET fullname = ?, contact = ?, address = ?, password = ? WHERE email = ?`;

  db3.query(query, [fullName, contactNo, address, password, email], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error updating profile');
    }
    if (result.affectedRows > 0) {
      res.send('Profile updated successfully');
    } else {
      res.status(404).send('Profile not found');
    }
  });
});

app.post('/logout', (req, res) => {
  if (req.session) {
    req.session.destroy(err => {
      if (err) {
        return res.status(500).send('Server error during logout');
      }
      res.send('Logout successful');
    });
  } else {
    res.status(200).send('No session to clear');
  }
});

////////////////////////////////////////////////////////////////////////////////////////////////
// Dhananjayas 


app.get("/products", (req, res) => {
  const q = "SELECT * FROM `products`";
  db3.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

// Use upload.single('Imagepath') middleware to handle single file upload
app.post("/products", upload2.single('Imagepath'), (req, res) => {
  const { ProductName, description, Category, Price } = req.body;
  const Imagepath = req.file ? req.file.path.replace('public\\uploads\\', 'uploads\\') : null; // Get the relative file path

  const q = "INSERT INTO products(`ProductName`, `description`, `Category`, `Imagepath`, `Price`) VALUES (?, ?, ?, ?, ?)";

  const values = [
    ProductName,
    description,
    Category,
    Imagepath,
    Price,
  ];

  db3.query(q, values, (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});


app.put("/Products/:ProductID", (req, res) => {
  const ProductID = req.params.ProductID;
  const q = "UPDATE products SET `ProductName`= ?, `description`= ?, `Category`= ?, `Imagepath`= ?, `Price`= ? WHERE ProductID = ?";

  const values = [
    req.body.ProductName,
    req.body.description,
    req.body.Category,
    req.body.Imagepath,
    req.body.Price,
  ];

  db3.query(q, [...values, ProductID], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});


//////////manage accounts
app.get("/users", (req, res) => {
  const q = "SELECT * FROM `users`";
  db3.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

app.delete("/Products/:ProductID", (req,res) => {
  const ProductID = req.params.ProductID;
  const q = "DELETE from products where ProductID = ?";

  db3.query(q,[ProductID], (err,data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.put("/users/:userId/verification", (req, res) => {
  const userId = req.params.userId;
  const { verified } = req.body;

  const q = "UPDATE users SET verified = ? WHERE id = ?";
  const values = [verified, userId];

  db3.query(q, values, (err, data) => {
    if (err) {
      console.error("Error updating user verification status:", err);
      return res.status(500).json({ error: "Failed to update user verification status" });
    }
    return res.json({ success: true, message: "User verification status updated successfully" });
  });
});


////////////////////////////////////////////////////////////////////////////////////////////////
// Code For Starting Server
// Connect to the database
db3.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to the database');
});


// Connection Test

app.listen(8800, ()=>{

    console.log("Connected to our Server!")

} )

