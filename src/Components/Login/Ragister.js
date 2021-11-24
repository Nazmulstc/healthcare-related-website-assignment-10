import React from "react";
import { Link } from "react-router-dom";

const Ragister = () => {
  return (
    <div>
      <form>
        <input type="text" placeholder="Type your Name" />
        <br />
        <input type="email" placeholder="Type your Email" />
        <br />
        <input type="password" />
        <br />
        <input type="submit" value="submit" />
      </form>
      <Link to="/login">Already Registerd?</Link>
    </div>
  );
};

export default Ragister;
