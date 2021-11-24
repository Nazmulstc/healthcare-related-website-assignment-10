import React from "react";
import pathology from "../../../Images/Pathology.png";
const Pathology = () => {
  return (
    <div className="container row border my-2 p-5">
      <div className="col-md-2">
        <img src={pathology} alt="" width="100" height="100" />
        <h2>Pathology</h2>
      </div>
      <div className="col-md-5">
        <details>
          <summary>
            Biochemistry, Immunology, Serology, Microbiology, Clinical
            Pathology, Histopathology, Molecular Laboratory
          </summary>
          <p>Price: 500 Tk</p>
        </details>
        <details>
          <summary>
            Haematology –sysmex XN2000 :(Full Automated Reticulocyte Counter and
            5 parts Differential Analyzer)
          </summary>
          <p>Price: 500 Tk</p>
        </details>
        <details>
          <summary>
            Cobas 6000 (Full Automated Multibatch Biochemistry and Immunology
            Analyzer)
          </summary>
          <p>Price: 500 Tk</p>
        </details>
        <details>
          <summary>
            BECKMAN Coulter Au 680 (Random Access Multibatch Chemistry Analyzer)
          </summary>
          <p>Price: 500 Tk</p>
        </details>
        <details>
          <summary>
            Abbott-Architect i2000SR (Full Automated Random Access Immunology
            Analyzer)
          </summary>
          <p>Price: 500 Tk</p>
        </details>
      </div>
      <div className="col-md-5">
        <details>
          <summary>
            Molecular (PCR) Lab. (HBV-DNA)(HPV-DNA)(HCV-RNA)HCV-RNA Genotype),
            HLA-B27
          </summary>
          <p>Price:500</p>
        </details>
        <details>
          <summary>Microbiology</summary>
          <p>Price: 500 Tk</p>
        </details>
        <details>
          <summary>Clinical Pathology</summary>
          <p>Price: 500 Tk</p>
        </details>
        <details>
          <summary>Histopathology</summary>
          <p>Price: 500 Tk</p>
        </details>
        <details>
          <summary>Cytology</summary>
          <p>Price: 500 Tk</p>
        </details>
      </div>
    </div>
  );
};

export default Pathology;
