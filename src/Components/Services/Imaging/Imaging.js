import React from "react";
import imaging from "../../../Images/radiology.jpg";

const Imaging = () => {
  return (
    <div className="container row border my-2 p-5">
      <div className="col-md-2">
        <img src={imaging} alt="" width="100" height="100" />
        <h2>Imaging</h2>
      </div>
      <div className="col-md-5">
        <details>
          <summary>Philips Inginia 3.0Tesla Digital MRI</summary>
          <p>Price: 500 Tk</p>
        </details>
        <details>
          <summary>Philips Inginia 3.0Tesla Digital MRI</summary>
          <p>Price: 500 Tk</p>
        </details>
        <details>
          <summary>GE Light Speed 500 slice VCT (CT Scanner)</summary>
          <p>Price: 500 Tk</p>
        </details>
        <details>
          <summary>GE Prodigy Oracle-Bone Densitometer(BMD)</summary>
          <p>Price: 500 Tk</p>
        </details>
        <details>
          <summary>SIEMENS Lithotripsy (ESWL)</summary>
          <p>Price: 500 Tk</p>
        </details>
      </div>
      <div className="col-md-5">
        <details>
          <summary>Philips 12-Channel -ECG</summary>
          <p>Price: 500 Tk</p>
        </details>
        <details>
          <summary>
            GE Marquette 12 Channel ECG(Computer Analyzed & Interpreted)
          </summary>
          <p>Price: 500 Tk</p>
        </details>
        <details>
          <summary>GE Marquette ETT(Tress ECG)</summary>
          <p>Price: 500 Tk</p>
        </details>
        <details>
          <summary>GE 24 Hours Holter Monitor (Marquette)</summary>
          <p>Price: 500 Tk</p>
        </details>
        <details>
          <summary>24 Hours Ambulatory BP</summary>
          <p>Price: 500 Tk</p>
        </details>
      </div>
    </div>
  );
};

export default Imaging;
