import React from "react";
import "./contact.scss";
const Contact = () => {
  return (
    <section className="section contact" id="contact">
      <div className="custom-container">
        <div className="row">
          <div className="col-md-4 col-12">
            <div>
              <h3 className="fs-4">
                Contact Us From
                <br /> Here
              </h3>
              <p>
                You can contact us from here, you can write to us, call us or
                visit our service center, we will gladly assist you.
              </p>
            </div>
          </div>
          <div className="col-md-4 col-12 ">
            <div>
              <p>
                <span className="fw-bold">Telephone:</span> 999 - 888 - 777
              </p>
              <p>
                <span className="fw-bold">Email:</span> a7mdmo74@gmail.com
              </p>
              <p>
                <span className="fw-bold">Location:</span> Mansoura - EG
              </p>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="btn btn-warning rounded-pill py-2 px-4">
              Contact Us
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
