import React from "react";
import "./footer.scss";
const Footer = () => {
  return (
    <div className="section footer">
      <div className="custom-container">
        <div className="row">
          <div className="col-md-3 col-6 mb-3">
            <h4 className="fs-4 fw-bold">Delivery</h4>
            <ul className="navbar-nav">
              <li className="nav-item">Order Products Faster</li>
              <li className="nav-item">Easier</li>
            </ul>
          </div>
          <div className="col-md-3 col-6 mb-3">
            <h4 className="fs-4 fw-bold">Our Services</h4>
            <ul className="navbar-nav">
              <li className="nav-item">Pricing</li>
              <li className="nav-item">Easier</li>
            </ul>
          </div>
          <div className="col-md-3 col-6 mb-3">
            <h4 className="fs-4 fw-bold">Delivery</h4>
            <ul className="navbar-nav">
              <li className="nav-item">Pricing</li>
              <li className="nav-item">Discounts</li>
              <li className="nav-item">Report a bug</li>
              <li className="nav-item">Terms of Service</li>
            </ul>
          </div>
          <div className="col-md-3 col-6 mb-3">
            <h4 className="fs-4 fw-bold">Our Company</h4>
            <ul className="navbar-nav">
              <li className="nav-item">Blog</li>
              <li className="nav-item">Our mision</li>
              <li className="nav-item">Get in touch</li>
            </ul>
          </div>
        </div>
        <div className="rights pt-4 text-center">
          <p>&copy; a7mdmo74. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
