import React from "react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div>
      <p style={{ textAlign: "center", paddingTop: "100px", fontSize: "50px" }}>
        Admin Dashboard
      </p>

      <div className="menu" style={{ paddingTop: "00px", paddingBottom: "100px" }}>
        <div className="products">
          <Link to="/AddProduct">
            <div className="mproduct">
              <div className="image">
                <img src="./images/add.png" alt="Add Product" />
              </div>
              <div className="name">
                <h3>Add Product</h3>
              </div>
            </div>
          </Link>

          <Link to="/Product">
            <div className="mproduct">
              <div className="image">
                <img src="./images/view.png" alt="View Products" style={{ width: "350px", paddingTop: "10px" }} />
              </div>
              <div className="name">
                <h3>View Products</h3>
              </div>
            </div>
          </Link>

          <Link to="/manageAcounts">
            <div className="mproduct">
              <div className="image">
                <img src="./images/acounts.png" alt="Manage Accounts" style={{ width: "320px", paddingTop: "10px", paddingLeft: "10px" }} />
              </div>
              <div className="name">
                <br />
                <h3>Manage Accounts</h3>
              </div>
            </div>
          </Link>

          <Link to="/quotation_admin">
            <div className="mproduct">
              <div className="image">
                <img src="./images/quotation.png" alt="Quotation" style={{ width: "350px", paddingTop: "10px", paddingLeft: "10px" }} />
              </div>
              <div className="name">
                <br />
                <h3>Quotation</h3>
              </div>
            </div>
          </Link>
          <Link to="/QuestionManage">
            <div className="mproduct">
              <div className="image">
                <img src="./images/Blue_question_mark_icon.svg.png" alt="Quotation" style={{ width: "340px", paddingTop: "10px", paddingLeft: "10px" }} />
              </div>
              <div className="name">
                <br />
                <h3>Question Management</h3>
              </div>
            </div>
          </Link>

          {/* New tile to open ManageNews route */}
          <Link to="/ManageNews">
            <div className="mproduct">
              <div className="image">
                <img src="./images/news-94.png" alt="Manage News" style={{ width: "345px", paddingTop: "10px", paddingLeft: "10px" }} />
              </div>
              <div className="name">
                <br />
                <h3>Manage News</h3>
              </div>
            </div>
          </Link>

          {/* New tile to open ManageNews route */}
          <Link to="/ManageNewsLetter">
            <div className="mproduct">
              <div className="image">
                <img src="./images/[removal.ai]_05e853ea-6bf7-43cc-bcd6-8e84abc6ca0e-360_f_80410550_acki20ri6u9uvwywobnd7qwu2osfybqz.png" alt="Manage News" style={{ width: "350px", paddingTop: "10px", paddingLeft: "10px" }} />
              </div>
              <div className="name">
                <br />
                <h3>Manage News Letter</h3>
              </div>
            </div>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
