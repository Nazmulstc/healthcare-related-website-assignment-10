import Button from "@restart/ui/esm/Button";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import consultent from "../../Images/consultant.png";

const FindConsultant = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="text-center">
      <Button className="bg-primary p-3" variant="primary" onClick={handleShow}>
        <img src={consultent} alt="" width="80" height="80" />
        <h3 className="text-light">Find Consultant</h3>
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Find Our Doctors</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <label htmlFor="doctors">
              Chose a Department or Type Doctors Name
            </label>
            <input
              className="m-3"
              placeholder="Select a Department"
              list="doctors"
            />
            <datalist id="doctors">
              <option value="Urology" />
              <option value="Uro-Oncology" />
              <option value="Pediatric Urology" />
              <option value="Nephrology" />
              <option value="Neuro Surgery" />
              <option value="Pediatric Gastroenterology" />
              <option value="Orthopaedic Surgery" />
              <option value="Cardiology" />
            </datalist>
            <input placeholder="Doctors Name" type="text" name="" id="" />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="btn-primary w-25 rounded-pill"
            variant="primary"
            onClick={handleClose}
          >
            Search
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default FindConsultant;
