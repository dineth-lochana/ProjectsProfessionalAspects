import React, { useRef } from "react";


function Footer() {



  return (

    <div>
      <footer className="footer success bg-success">
        <div className="footer-content ">
          <div className="about-section">
            <div>
              <h3>About</h3>
              <p>
              Greentech Lanka(Pvt) Ltd  specialized for Import, sell, installation, commissioning and service of Invertors, Pumps, Harmonic filters, Fire Detection and Protection systems,  Solar PV panels, Motor Control Devices and accessories, Electrical Switchgears, Variable Frequency Drives, Instrumentation Devices, Sensors, industrial automation devices and other accessories
              </p>
            </div>
            <div class="footer-social-icon">
                                <h3>Follow us</h3>
                                <a href="#"><i class="fab fa-facebook-f facebook-bg"> <img src="./images/Facebook_.png" alt="Facebook" /></i></a>
                                <a href="#"><i class="fab fa-twitter twitter-bg"> <img src="./images/x-.webp" alt="x" /></i></a>
                                <a href="#"><i class="fab fa-google-plus-g google-bg"> <img src="./images/Google_Maps.png" alt="Google_Maps" style={{ width:"30px"}}/></i></a>
                            </div>
          </div>

          <div className="quick-links">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li>
                <a>About Us</a>
              </li>
              <li>
                <a>Contact Us</a>
              </li>

              <li>
                <a>Privacy Policy</a>
              </li>

            </ul>
          </div>
        </div>

        <hr />
        <div style={{ backgroundcolor: "#023504" }} >
        <div className="copyright" >
          <p>Copyright &copy; 2024 All Rights Reserved by Greentech</p>
        </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

