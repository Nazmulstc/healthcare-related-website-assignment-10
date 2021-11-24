import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import banner from "../../Images/LABORATORY SERVICES/banner.jpeg";

import Lab from "./Lab";

const Laboratory = () => {
  const [lab, setLab] = useState([]);
  useEffect(() => {
    fetch("./labratory.json")
      .then((res) => res.json())
      .then((data) => setLab(data));
  }, []);
  return (
    <div className="banner-container">
      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-md-6">
          <img className="w-100 m-2" src={banner} alt="" />
        </div>
        <div className="col-md-6 p-5">
          <h1 className="my-5">LABORATORY SERVICES</h1>
          <p>
            A fully equipped modern laboratory capable of carrying out all
            laboratory investigations within a few minutes and includes a
            hematology Auto-analyzer, Biochemistry auto-analyzer, Electrolyte
            auto-analyzer, Blood culture and other Microbiology investigations
            etc. This is overseen by a qualified Laboratory Scientist &
            Laboratory Technologist.
          </p>
        </div>
      </div>
      <Row xs={1} md={3} className="g-4 mb-5 border border-radius-5 mx-5">
        {lab.map((lab) => (
          <Lab lab={lab} key={lab.Id}></Lab>
        ))}
      </Row>
    </div>
  );
};

export default Laboratory;
