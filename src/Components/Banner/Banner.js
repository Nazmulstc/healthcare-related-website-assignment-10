import React from "react";
import { Carousel } from "react-bootstrap";
import img01 from "../../Images/01.jpg";
import img02 from "../../Images/02.jpg";
import img03 from "../../Images/03.jpg";
const Banner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={img01} alt="First slide" />
          <Carousel.Caption>
            <div>
              <h3 className="text-primary">Welcome To</h3>
              <h1 className="text-warning">Royal Multispeciality Hospital</h1>
              <p className="text-light">
                A complete Hospital, Digital Diagnostic & Consultation Center
              </p>
              <br />
              <br />
              <br />
              <br />
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img02} alt="Second slide" />

          <Carousel.Caption>
            <h3 className="text-primary">BEST HOSPITAL IN TOWN</h3>

            <p className="text-light">When It Comes to Health Care</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img03} alt="Third slide" />

          <Carousel.Caption>
            <h1 className="text-warning">Emergency Services</h1>{" "}
            <h5>
              There is a 24 hours emergency service cases arriving after 7.00 AM
              to 11.00 PM are treated as emergency cases.
            </h5>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
