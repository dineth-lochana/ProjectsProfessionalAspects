import "./navbar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";
import img from './logo.jpeg';

const Navbar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);
  const { currentUser, logout } = useContext(AuthContext); // Add logout function

  const handleLogout = () => {
    logout(); // Call logout function from AuthContext
  };

  // Wrap JSX content inside a function block
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ display: "inline-block" }}>
          <img src={img} alt="" style={{ width: "80px", height: "80px" }} />
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <span> GREEN TECH WEB FORUM</span>
        </Link>
        
      </div>
      <div className="right">
      {darkMode ? (
          <WbSunnyOutlinedIcon onClick={toggle} />
        ) : (
          <DarkModeOutlinedIcon onClick={toggle} />
        )}
        <EmailOutlinedIcon />
        <NotificationsOutlinedIcon />
        <PersonOutlinedIcon />
        {/* Logout button */}
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;

