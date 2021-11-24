import Button from "@restart/ui/esm/Button";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import logo from "../../Images/apointment.jpg";

const Apointment = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="text-center">
      <Button className="bg-primary p-3" variant="primary" onClick={handleShow}>
        <img src={logo} alt="" width="80" height="80" />
        <h3 className="text-light">Make Appiontment</h3>
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Make Appointment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="p-3">
            <label htmlFor="name">Patient's Full Name *</label>
            <input className="m-3" id="name" type="text" />
            <br />
            <label htnlFor="birthday">Birthday:</label>
            <input
              className="m-3"
              type="date"
              id="birthday"
              name="birthday"
            ></input>
            <br />
            <label htmlFor="gander">Sex:</label>
            <input className="m-2" name="gander" type="radio" value="Male" />
            Male
            <input className="m-2" name="gander" type="radio" value="Female" />
            Female
            <br />
            <label htmlFor="mobile">Mobile:</label>
            <input className="m-2" type="tell" />
            <br />
            <label htmlFor="email">Email:</label>
            <input className="m-2" type="email" />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="btn-primary w-25 rounded-pill"
            variant="primary"
            onClick={handleClose}
          >
            Request
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Apointment;
