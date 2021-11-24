import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MenuBar from "./Components/MenuBar/MenuBar";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Doctors from "./Components/Doctors/Doctors";
import Departments from "./Components/Departments/Departments";
import Laboratory from "./Components/Laboratory/Laboratory";
import Services from "./Components/Services/Services";
import Contact from "./Components/Contact/Contact";
import Login from "./Components/Login/Login";
import NotFound from "./Components/NotFound/NotFound";
import Space from "./Components/Space/Space";
import Ragister from "./Components/Login/Ragister";
import AuthProvaider from "./Context/AuthProvaider";
import PrivateRoute from "./Components/PrivateRoute/PrivatRoute";

function App() {
  return (
    <div>
      <AuthProvaider>
        <Router>
          <MenuBar></MenuBar>
          <Space></Space>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/doctors">
              <Doctors></Doctors>
            </Route>
            <Route path="/departments">
              <Departments></Departments>
            </Route>
            <Route path="/laboratory">
              <Laboratory></Laboratory>
            </Route>
            <PrivateRoute path="/services">
              <Services></Services>
            </PrivateRoute>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/ragister">
              <Ragister></Ragister>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvaider>
    </div>
  );
}

export default App;
