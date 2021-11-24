import React from "react";
import logo from "../../Images/logo.png";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./MenuBar.css";
import useAuth from "../../Hooks/UseAuth";

const MenuBar = () => {
  const { user, logOut } = useAuth();
  return (
    <div className="fixed-top">
      <Navbar bg="light" expand="lg">
        <Container>
          <NavLink className="d-flex align-items-center " to="/home">
            <img width="50" height="48" className="mx-2" src={logo} alt="" />
            <h3 className="nav-style">Royal Hospital</h3>
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink className="nav-style" to="/home">
                Home
              </NavLink>
              <NavLink className="nav-style" to="/doctors">
                Doctors
              </NavLink>
              <NavLink className="nav-style" to="/departments">
                Departments
              </NavLink>
              <NavLink className="nav-style" to="/laboratory">
                Laboratory
              </NavLink>
              <NavLink className="nav-style" to="/services">
                Services
              </NavLink>
              <NavLink className="nav-style" to="/contact">
                Contact
              </NavLink>
              <NavLink className="nav-style" to="/login">
                Login
              </NavLink>
              <span className="nav-style">{user.displayName}</span>
              {user?.email && (
                <NavLink onClick={logOut} className="nav-style" to="/login">
                  Logout
                </NavLink>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default MenuBar;
