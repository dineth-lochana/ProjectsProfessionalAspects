import React, { useState, useEffect } from 'react';
import { BrowserRouter,Routes,Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


//For Dineth
import Projects from "./pages/dineth/projects";
import Addprojects from "./pages/dineth/addprojects";
import Updateprojects from "./pages/dineth/updateprojects";
import ProjectDetails from "./pages/dineth/projectdetails";
import Addopinion from "./pages/dineth/addopinion"
import Updateopinions from "./pages/dineth/updateopinion";
import Settings from "./pages/dineth/settings"
import AddNews from './pages/dineth/addnews';
import ManageNews from './pages/dineth/managenews';
import UpdateNews from './pages/dineth/updatenews';
import ManageNewsLetter from './pages/dineth/ManageNewsLetter';

//For Shehan
import ItemList from "./pages/shehan/itemlist";
import ProductList from "./pages/shehan/ProductList";
import Quolist from "./pages/shehan/Quolist";
import NotFound from "./pages/shehan/notfound";
import QuolistA from "./pages/shehan/quotation";

//For Nisansa
//import Home from './pages/nisansa/home/Home';
import Login from './pages/nisansa/login/Login';
import Signup from './pages/nisansa/signup/Signup';
import Nav from './components/navBar/Nav';
import Profile from './pages//nisansa/profile/Profile';


//For Dhananjaya
import AddProduct from "./pages/dhananjaya/AddProduct";
import Product from "./pages/dhananjaya/Product";
import UpdateProduct from "./pages/dhananjaya/UpdateProduct";
import AdminDashbord from "./pages/dhananjaya/AdminDashbord";
import ManageAcounts from "./pages/dhananjaya/manageAcounts";
import Footer from "./pages/dhananjaya/Footer";
import NavigationBar from "./pages/dhananjaya/NavigationBar";
import Home from "./pages/dhananjaya/home";
import ImageSlider from './pages/dhananjaya/ImageSlider';
import FireProducts from './pages/dhananjaya/FireProducts';
import SolarProducts from './pages/dhananjaya/SolarProducts';
import ControlsProducts from './pages/dhananjaya/ControlsProducts';
import Educated from './pages/dhananjaya/Educated';
import QuestionManage from './pages/dhananjaya/QuestionManage';
import "./Style.css";


function App() {

  const [useremail, setUseremail] = useState(localStorage.getItem('useremail') || '');

  useEffect(() => {
    const checkSession = async () => {
      // Instead of fetching session state from the server, use local storage
      const email = localStorage.getItem('useremail');
      if (email) {
        setUseremail(email);
      }
    };

    checkSession();
  }, []);

  // Modify setUseremail to update local storage as well
  const handleSetUseremail = (email) => {
    setUseremail(email);
    if (email) {
      localStorage.setItem('useremail', email);
    } else {
      localStorage.removeItem('useremail');
    }
  };



  return (
    <div className="App">
      <BrowserRouter>
      
      <Nav useremail={useremail} setUseremail={handleSetUseremail}/>
      
      <Routes>

        <Route path="/projects" element={<Projects/>}/>
        <Route path="/addprojects" element={<Addprojects/>}/>
        <Route path="/updateprojects/:id" element={<Updateprojects/>}/>
        <Route path="/projectdetails/:id" element={<ProjectDetails/>}/>
        <Route path="/addopinion" element={<Addopinion/>}/>
        <Route path="/updateopinion/:opinionid" element={<Updateopinions/>}/>
        <Route path="/settings" element={<Settings/>}/>
        <Route path="/AddNews" element={<AddNews/>}/>
        <Route path="/ManageNews" element={<ManageNews/>}/>
        <Route path="/UpdateNews/:newsid" element={<UpdateNews/>}/>
        <Route path="/ManageNewsLetter" element={<ManageNewsLetter/>}/>




        <Route path="/itemlist" element={<ItemList/>} />
        <Route path="/productlist" element={<ProductList/>} />
        <Route path="/quotation" element={<Quolist/>} />
        <Route path="/quotation_admin" element={<QuolistA/>} />

        <Route exact path="/" element={<Home />} />  
        <Route path="/projects" element={<Projects />} />
        <Route path="/login" element={<Login setUseremail={handleSetUseremail}/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile useremail={useremail}/>} />


        <Route path="/Product" element={<Product />} />
        <Route path="/AddProduct" element={<AddProduct />} />
        <Route path="/UpdateProduct/:ProductID" element={<UpdateProduct />} />
        <Route path="/AdminDashbord" element={<AdminDashbord />} />
        <Route path="/Footer" element={<Footer />} />
        <Route path="/NavigationBar" element={<NavigationBar />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/ImageSlider" element={<ImageSlider />} />
        <Route path="/FireProducts" element={<FireProducts />} />
        <Route path="/SolarProducts" element={<SolarProducts />} />
        <Route path="/ControlsProducts" element={<ControlsProducts />} />
        <Route path="/manageAcounts" element={<ManageAcounts />} />
        <Route path="/Educated" element={<Educated />} />
        <Route path="/QuestionManage" element={<QuestionManage />} />


        <Route path="*" element={<NotFound />} />

      </Routes>
      <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
