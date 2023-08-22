
import React from "react";
import Profile from "./Profile";
import ReactCalendar from "./ReactCalendar";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";


const App = () => {
  return (
    <div className="main">
      <div className="content">
        <Profile />
        <hr className="my-8 border-0 border-b-4" />
        <ReactCalendar />
        <div className="gap"></div>
      </div>
      <div className="footer">
          <div className="footer-location">
            <h3>LOCATED AT</h3>
            <p>Indian Institute of Technology Hyderabad</p>
            <p>Near NH-65, Sangareddy, Kandi</p>
            <p>Telangana 502285</p>
          </div>
          <div className="footer-contact">
            <h3>CONTACT US</h3>
            <p>Phone:</p>
            <a href="tel:+919946525172" style={{ color: "#A11A2B" }}>
              (+91) 9946525172
            </a>
            <p>Email us at:</p>
            <a
              href="mailto:milan.oc@gymkhana.iith.ac.in"
              style={{ color: "#A11A2B" }}
            >
              milan.oc@gymkhana.iith.ac.in
            </a>
          </div>
        <div className="footer-follow">
          <h3>FOLLOW US</h3>
          <div className="footer-follow-icons">
            <Link to="#" className="icon-link">
              <FaFacebook className="icon" />
            </Link>
            <Link to="#" className="icon-link">
              <FaTwitter className="icon" />
            </Link>
            <Link to="#" className="icon-link">
              <FaInstagram className="icon" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
