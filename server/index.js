import express from "express"
import mysql from "mysql2"
import cors from "cors"
import multer from "multer"
import path from "path"


const app = express()

const db = mysql.createConnection({
    host:"localhost",
    user:"green-user",
    password:"userpw",
    database:"test2"
}
)



app.use(express.json())

app.use(cors())

app.use(express.static('public'));













////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////
// Dineth's Code




//Multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads') 
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

// Route for handling file upload
app.post("/uploadprojectcover", upload.single('cover'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: "No file uploaded" });
    }
    // Return the file location URL
    res.json({ url: `uploads/${req.file.filename}` });
});


app.post("/uploadprojectimages", upload.fields([
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



//Try to reach server
app.get("/", (req,res)=>{
    res.json("Hello, this is the backend.")
})




//Creation of Methods for Project Management

app.get("/projects", (req,res)=>{
    const q = "Select * from projects"
    db.query(q,(err,data) =>{
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

    db.query(q,[values],(err,data) =>
    {
        if(err) return res.json("Error!")
        return res.json("Project has been created!")
    } 
    )
})

app.delete("/projects/:id", (req, res)=> {

    const projectid = req.params.id;
    const q ="delete from projects where id = ?"

    db.query(q, [projectid], (err,data)=> {
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

    db.query(q, values, (err,data) => {
        if(err) return res.json(err);
        return res.json("Project has been updated successfully!");
    });
});


app.get("/projects/:id", (req, res) => {
    const projectId = req.params.id;
    const q = "SELECT * FROM projects WHERE id = ?";
    db.query(q, [projectId], (err, data) => {
        if (err) return res.status(500).json({ error: "Internal server error" });
        if (!data.length) return res.status(404).json({ error: "Project not found" });
        return res.json(data[0]); // Assuming only one project is returned
    });
});








// Creation of methods of opinion management.
app.get("/opinions", (req,res)=>{
    const q = "Select * from opinions"
    db.query(q,(err,data) =>{
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

    db.query(q,[values],(err,data) =>
    {
        if(err) return res.json("Error!")
        return res.json("Opinion has been created!")
    } 
    )
})

app.delete("/opinions/:opinionid", (req, res)=> {

    const projectid = req.params.opinionid;
    const q ="delete from opinions where opinionid = ?"

    db.query(q, [projectid], (err,data)=> {
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

    db.query(q, [...values, projectid], (err,data)=> {
        if(err) return res.json(err)
        return res.json("Opinon has been updated succesfully!")
    })
})











////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////
// Shehan's Code



app.get("/msg/:email", (req, res) => {
  const userEmail = req.params.email;
  const q = "SELECT * FROM msg WHERE Email_Address = ?";
  db.query(q, [userEmail], (err, data) => {
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

db.query(q, [values], (err, data) => {
	if (err) return res.json(err);
	return res.json("Request Sent!");
	});
});

app.delete("/msg/:idmsg", (req,res)=>{
	const IDD = req.params.idmsg;
	const q = "DELETE FROM msg WHERE idmsg = ?";

	db.query(q,[IDD],(err,data)=>{
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

  db.query(q, values, (err, data) => {
    if (err) return res.json(err);
    return res.json("Data Updated!");
  });
});















////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////

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
  db.query(query, [fullname, contact, address, email, password], (err, result) => {
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
  db.query(query, [email, password], (err, results) => {
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
  db.query(query, [email], (err, results) => {
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

  db.query(query, [fullName, contactNo, address, password, email], (err, result) => {
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

////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////
// Dhananjayas 


app.get("/products", (req, res) => {
  const q = "SELECT * FROM `products`";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

// Use upload.single('Imagepath') middleware to handle single file upload
app.post("/products", upload.single('Imagepath'), (req, res) => {
  const { ProductName, description, Category, Price } = req.body;
  const Imagepath = req.file ? req.file.path : null; // Get the file path from req.file

  const q = "INSERT INTO products(`ProductName`, `description`, `Category`, `Imagepath`, `Price`) VALUES (?, ?, ?, ?, ?)";

  const values = [
    ProductName,
    description,
    Category,
    Imagepath,
    Price,
  ];

  db.query(q, values, (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.delete("/Products/:ProductID", (req, res) => {
  const ProductID = req.params.ProductID;
  const q = " DELETE FROM products WHERE ProductID = ? ";

  db.query(q, [ProductID], (err, data) => {
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

  db.query(q, [...values, ProductID], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});




















////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////
// Code For Starting Server



// Connect to the database
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to the database');
});


// Connection Test

app.listen(8800, ()=>{

    console.log("Connected to our Server!")

} )

