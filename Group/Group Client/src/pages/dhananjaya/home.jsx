import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageSlider from "./ImageSlider";
import { Link } from "react-router-dom";
import LatestNews from "../dineth/LatestNews";

const Home = () => {
  return (
    <div>
      <style>
        {`
        * {
          box-sizing: border-box;
        }

        .column {
          float: left;
          width: 40%;
          padding: 5px;
        }

        .row::after {
          content: "";
          clear: both;
          display: table;
        }

        @media screen and (max-width: 500px) {
          .column {
            width: 100%;
          }
        }
        `}
      </style>

      <div className="row">
        <div className="col-md-12" >
          <ImageSlider />
        </div>
      </div>

      <p style={{ textAlign: "center", paddingTop: "100px", fontSize: "50px" }}>
        Welcome to Green Tech Services
      </p>

      <div
        className="menu"
        style={{ paddingTop: "00px", paddingBottom: "100px" }}
      >
        <div className="products ">
          <Link to="/SolarProducts">
            <div className="mproduct bg-success bg-gradient">
              <div className="image">
                <img src="./images/c.png" alt="Solar Systems" />
              </div>
              <div className="name">
                <h3>Solar Systems</h3>
              </div>
            </div>
          </Link>

          <Link to="/FireProducts">
            <div className="mproduct bg-success bg-gradient">
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

          <Link to="/ControlsProducts">
            <div className="mproduct bg-success bg-gradient">
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

      <div style={{ padding: "50px" }}>
        <div className="row mt-5">
          <div className="col-md-6">
            <h4 className="text-center mb-4 fw-semibold">Company Profile</h4>
            <p className="text-center fs-5 text">
              Green Tech Services is providing a comprehensive range of products
              & services aimed at Building Facility Management. It was formed to
              meet an identified need in the marketplace for a specialist
              company to provide the latest technology with quality equipment
              and ‘fit for purpose’ engineering services to the targeted
              industries at reasonable cost.
            </p>
          </div>
          <div className="col-md-6">
            <img src="./images/nana.gif" alt="T-SHIRTS" className="img-fluid" />
          </div>
        </div>

        <br />
        <hr style={{ borderTop: "3px solid #73f573" }} />

        <div className="row mt-5">
          <div className="col-md-6">
            <img src="./images/6.png" alt="T-SHIRTS" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h4 className="text-center mb-4 fw-semibold">
              Company Experience and Operations
            </h4>
            <p className="text-center fs-5 text">
              As with any other company, regardless of its length of experience,
              the company experience is the sum total of the experience of its
              people at any given time. We are fortunate to have a number of
              personnel with many years of experience in their respective
              disciplines, building services engineering, and construction.
              Additionally, we have established supportive relationships with a
              number of related engineering companies who can provide the
              necessary assistance when required, in disciplines including HVAC
              & Refrigeration Engineering, Mechanical & Civil structural
              engineering, electrical & instrumentation engineering, and fire &
              gas engineering.
            </p>
          </div>
        </div>

        <br />
        <hr style={{ borderTop: "3px solid #73f573" }} />

        <div className="row mt-5">
          <div className="col-md-6">
            <h4 className="text-center mb-4 fw-semibold">Promote your merchandise</h4>
            <p className="text-center fs-5 text ">
              Well experienced in carrying out assignments, our personnel, as
              individuals, have also developed experience in a significant
              diversity and range of project sizes and types, and this is
              reflected in the overall capability of our company. Our personnel
              are also well experienced in providing repair and maintenance
              services & building services equipment. It is through the
              combination of the experience available within the company that we
              are well placed to support clients anywhere in Sri Lanka across
              the wide range of Engineering activities described earlier in this
              profile.
            </p>
          </div>
          <div className="col-md-6">
            <img src="./images/3.png" alt="T-SHIRTS" className="img-fluid" />
          </div>
        </div>

        <br />
        <hr style={{ borderTop: "3px solid #73f573" }} />

        <div className="row mt-5">
          <div className="col-md-6">
            <img src="./images/fin.gif" alt="T-SHIRTS" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h4 className="text-center mb-4 fw-semibold">
              Design, Supply & Installation of Complete Systems
            </h4>
            <p className="text-center fs-5 text">
              The Company has the capability to design, supply, install and
              commission complete systems in Fire Detection and Protection,
              Solar P.V, Air - Conditioning and Refrigeration, Electrical &
              Mechanical, Plumbing. We can design & install to meet particular
              specifications or, alternatively, supply proprietary equipment
              from all of the major manufacturers. Our Engineering services will
              typically include some or all of the following: Review of adequacy
              of performance of existing systems; System specification &
              detailed design to meet client requirements; CAD Drafting and
              production of engineering work-packs; Full certification &
              documentation pack to suit client requirements.
            </p>
          </div>
        </div>

        <div className="row">
          <LatestNews />
        </div>
      </div>
    </div>
  );
};

export default Home;
