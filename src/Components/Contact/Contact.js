import React from "react";
import { Form } from "react-bootstrap";

const Contact = () => {
  return (
    <div className=" mx-5">
      <h1>Contact Us</h1>
      <div className="row">
        <div className="col-md-6">
          <form className="my-5">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="Type Your Name" />
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Type Your Email" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={6} />
            </Form.Group>
            <input type="submit" value="Send Massage" />
          </form>
        </div>
        <div className="col-md-6">
          <h3>Get in Tuch</h3>
          <p>
            Royal Hospital started its journey in June 2015 and within few days
            due to its accuracy of the reports and quality of the service,
            Popular became an unparallel symbol of reliability and trust from
            the end of respective doctors and the people of our country. To get
            any service and support from us, please contact us.
          </p>
          <hr />
          <h3>The Office</h3>
          <p>
            <b>Address: </b> 20/3 Babor Road, Mohammadpur, Dhaka-1207
          </p>
          <p>
            <b>Phone: </b>+8801703305302
          </p>
          <p>
            <b>Email: </b>royalmultihospital@gmail.com
          </p>
          <h5>Business Hours</h5>
          <p>7 AM - 11 PM (Everyday)</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
