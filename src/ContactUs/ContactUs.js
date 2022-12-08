import React from "react";
import "./ContactUs.css";
import Form from "../Form/Form";

const ContactUs = () => {
  return (
    <div>
      <div className="wrapper">
        <div className="heading">
          <h1>Contact Us</h1>
          <br />
          <div style={{ width: "70%" }}>
            <h5>
              Need to get in touch with us? Either fill out the form with your
              enquiry or give a missed call to the below displayed Number
            </h5>
          </div>
        </div>
        <div className="form">
          <Form></Form>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;
