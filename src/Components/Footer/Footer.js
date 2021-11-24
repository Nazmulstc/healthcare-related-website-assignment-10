import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="left-container text-start">
              <h1>Royal Hospital</h1>
              <div className="icons-container d-flex text-center ">
                <div className="icon">
                  <Link>
                    <FontAwesomeIcon icon={faInstagramSquare} />
                  </Link>
                </div>
                <div className="icon">
                  <Link>
                    <FontAwesomeIcon icon={faTwitterSquare} />
                  </Link>
                </div>
                <div className="icon">
                  <Link
                    to="https://www.youtube.com/channel/UCc9ztrma1g1p7TIDcg5vEHA"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faYoutube} />
                  </Link>
                </div>
                <div className="icon">
                  <Link
                    to="https://www.facebook.com/royalmultispeciality"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faFacebookSquare} />
                  </Link>
                </div>
              </div>
              <p className="mt-4 ">
                <Link>
                  ইউনিট-১: ২০/৩, বাবর রোড (ব্লক-বি), মোহাম্মাদপুর, ঢাকা- ১২০৭
                </Link>

                <br />
                <Link>
                  ইউনিট-২: মুক্তিযুদ্ধা টাওয়ার-১ (৫ম তলা), মোহাম্মাদপুর,
                  ঢাকা-১২০৭
                </Link>
              </p>
            </div>
          </div>
          <div className="col-md-2">
            <div className="footer-menu-container">
              <ul>
                <li className="footer-menu">
                  <NavLink to="/home">Home</NavLink>
                </li>
                <li className="footer-menu">
                  <NavLink to="/doctrors">Doctors</NavLink>
                </li>
                <li className="footer-menu">
                  <NavLink to="/department">Departments</NavLink>
                </li>
                <li className="footer-menu">
                  <NavLink to="/laboratory">Laboratory</NavLink>
                </li>
                <li className="footer-menu">
                  <NavLink to="/services">Services</NavLink>
                </li>
                <li className="footer-menu">
                  <NavLink to="/contact">Contact</NavLink>
                </li>
                <li className="footer-menu">
                  <NavLink to="/login">Login</NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-5">
            <div className="right-footer-container">
              <div className="phone ">
                <h5>
                  <Link to="mailto:nazmulislamnr@gmail.com">01703305302</Link>{" "}
                  (Unit-01)
                  <br />
                  <Link>01700999222 </Link> (Unit-02)
                </h5>
              </div>
              <div className="map d-flex align-items-center">
                <p>20/3 Babor Road, Mohammadpur, Dhaka-1207</p>
              </div>
            </div>
          </div>
        </div>
        <p className="my-3 text-center">
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <Link to="/home">Royal Hospital</Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
