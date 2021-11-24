import React from "react";
import pharmacy from "../../../Images/Pharmacy-icon.jpg";
import pharmacyImag from "../../../Images/Pharmacy.jpg";

const Pharmacy = () => {
  return (
    <div className="container row border my-2 p-5">
      <div className="col-md-2">
        <img src={pharmacy} alt="" width="100" height="100" />
        <h2>Pharmacy</h2>
      </div>
      <div className="col-md-6">
        <img src={pharmacyImag} alt="" width="100%" height="100%" />
      </div>
      <div className="col-md-4">
        <p>
          Royal Medicine corner is a well-known retailer of medicine in
          Bangladesh. We provide all kinds of life saving medicine, which are
          available in all branches of Popular Diagnostics Ltd. Our aim is to
          provide good medicine and best service quality to the patients.
        </p>
      </div>
    </div>
  );
};

export default Pharmacy;
