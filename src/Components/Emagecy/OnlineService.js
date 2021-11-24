import Button from "@restart/ui/esm/Button";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import onlineService from "../../Images/online-service.png";

const OnlineService = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="text-center">
      <Button className="bg-primary p-3" variant="primary" onClick={handleShow}>
        <img src={onlineService} alt="" width="80" height="80" />
        <h3 className="text-light">Online Diagnostic Report</h3>
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Find Our Doctors</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <h3>Patient Portal</h3>
            <p>Sign in</p>
            <input
              className="p-1 m-2"
              placeholder="Registration Number"
              type="text"
            />
            <input
              className="p-1 m-2"
              placeholder="Enter Your Registred Mobile Number"
              type="tell"
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="btn-primary w-25"
            variant="primary"
            onClick={handleClose}
          >
            Sign in
          </Button>
          <Button
            className="btn-primary w-25 btn-danger"
            variant="primary"
            onClick={handleClose}
          >
            Reset
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default OnlineService;
