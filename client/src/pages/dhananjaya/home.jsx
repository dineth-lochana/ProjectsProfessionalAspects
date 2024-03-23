import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageSlider from "./ImageSlider";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div>
        <ImageSlider />
      </div>

      <p style={{ textAlign: "center", paddingTop: "100px", fontSize: "50px" }}>
        Welcome to Green Tech Services
      </p>

      <div
        className="menu"
        style={{ paddingTop: "00px", paddingBottom: "100px" }}
      >
        <div className="products">
          <Link to="/AddProduct">
            <div className="mproduct">
              <div className="image">
                <img src="./images/c.png" alt="Solar Systems" />
              </div>
              <div className="name">
                <h3>Solar Systems</h3>
              </div>
            </div>
          </Link>

          <Link to="/Product">
            <div className="mproduct">
              <div className="image">
                <img
                  src="./images/b.png"
                  alt="Fire Detection and Protection"
                  style={{
                    width: "400px",
                    paddingBottom: "80px",
                    paddingTop: "60px",
                  }}
                />
              </div>
              <div className="name">
                <h3>Fire Detection and Protection</h3>
              </div>
            </div>
          </Link>

          <Link to="/manageAcounts">
            <div className="mproduct">
              <div className="image">
                <img
                  src="./images/a.png"
                  alt="Controls"
                  style={{ paddingTop: "50px" }}
                />
              </div>
              <div className="name">
                <br />
                <br />
                <h3>Controls</h3>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className="rows">
        <div className="row">
          <div className="left" style={{ width: "500px" }}>
            <h4
              style={{
                color: "rgb(2, 2, 2)",
                fontSize: "35px",
                textAlign: "center",
              }}
            >
              Company Profile
            </h4>

            <p
              style={{
                color: "rgb(10, 10, 10)",
                fontSize: "25px",
                textAlign: "center",
              }}
            >
              Green Tech Services is providing a comprehensive range of product
              & services aimed at Building Facility Management. It was formed to
              meet an identified need in the marketplace for a specialist
              company to provide latest technology with quality equipments and
              ‘fit for purpose’ engineering service to the targeted industries
              at reasonable cost.
            </p>
          </div>

          <div className="right">
            <br />
            <br />
            <br />
            <br />
            <img
              src="./images/nana.gif"
              alt="T-SHIRTS"
              style={{ width: "630px", paddingTop: "30px" }}
            />
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <hr style={{ borderTop: "1px solid #73f573" }} />
        <div className="row">
          <div className="left">
            <br />
            <br />
            <br />
            <img
              src="./images/6.png"
              alt="T-SHIRTS"
              style={{ width: "500px" }}
            />
          </div>

          <div className="right">
            <br />
            <b>
              <h4
                style={{
                  color: "rgb(2, 2, 2)",
                  fontSize: "35px",
                  textAlign: "center",
                }}
              >
                Company Experience and Operations
              </h4>
            </b>
            <b></b>
            <p
              style={{
                color: "rgb(10, 10, 10)",
                fontSize: "25px",
                textAlign: "center",
              }}
            >
              As with any other company, regardless of its length of the company
              experience is the sum total of the experience of its people at any
              given time. We are fortunate to have a number of personnel with
              many years experience in their respective disciplines, building
              services engineering and construction, additionally, we have
              established supportive relationships with a number of related
              engineering companies who can provide the necessary assistance,
              when required, in disciplines. These include, HVAC & Refrigeration
              Engineering, Mechanical & Civil structural engineering, electrical
              & instrumentation engineering and fire & gas engineering.
            </p>
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />
        <hr style={{ borderTop: "1px solid #73f573" }} />
        <div className="row">
          <div className="left" style={{ width: "600px" }}>
            <h4
              style={{
                color: "rgb(2, 2, 2)",
                fontSize: "35px",
                textAlign: "center",
              }}
            >
              Promote your merchandise
            </h4>
            <p
              style={{
                color: "rgb(10, 10, 10)",
                fontSize: "25px",
                textAlign: "center",
              }}
            >
              Well experienced in the carrying out of assignments, our
              personnel, as individuals, have also developed experience in a
              significant diversity and range of project sizes and types and
              this is reflected in the overall capability of our company. Our
              personnel are also well experienced in providing repair and
              maintenance services & building services equipments. It is through
              the combination of the experience available within the company
              that we are well placed to support clients anywhere in the Sri
              Lanka across the wide range of Engineering activities described
              earlier in this profile
            </p>
          </div>

          <div className="right">
            <br />
            <br />
            <br />
            <br />
            <img
              src="./images/3.png"
              alt="T-SHIRTS"
              style={{
                width: "500px",
                paddingBottom: "80px",
                paddingTop: "60px",
              }}
            />
          </div>
        </div>

        <br /><br /><br />
       
        <hr style={{ borderTop: "1px solid #73f573" }} />
        <div className="row">
          <div className="left">
            <img
              src="./images/fin.gif"
              alt="T-SHIRTS"
              style={{
                width: "600px",
                
                paddingTop: "60px",
              }}
            />
          </div>

          <div className="right">
            <br />
            <br />
            <br />
            <h4
              style={{
                color: "rgb(2, 2, 2)",
                fontSize: "35px",
                textAlign: "center",
              }}
            >
              Design, Supply & Installation of Complete Systems
            </h4>

            <p
              style={{
                color: "rgb(10, 10, 10)",
                fontSize: "25px",
                textAlign: "center",
              
              }}
            >
              The Company has the capability to design, supply, install and
              commissioning of complete systems in Fire Detection and
              Protection, Solar P.V, Air - Conditioning and Refrigeration,
              Electrical & Mechanical, Plumbing. We can design & install to meet
              particular specifications or, alternatively, supply proprietary
              equipment from all of the major manufacturers. Our Engineering
              services will typically include some or all of the following:
              Review of adequacy of performance of existing systems; System
              specification & detailed design to meet client requirements; CAD
              Drafting and production of engineering work-packs; Full
              certification & documentation pack to suit client requirements.
            </p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Home;
