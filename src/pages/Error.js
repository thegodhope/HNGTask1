import React from "react";
import { NavLink } from "react-router-dom";
import zurilogo from "../images/zurilogo.png";
import zurisecondlogo from "../images/secondloogo.png";
import Icon from "../images/Icon.png";

const Error = () => {
  return (
    <div>
      <div className="section404">
        <div className="container404">
          <div className="content404">
            <span>404 Error</span>
            <h1>We Can't find that page</h1>
            <p>Sorry the page you are looking for doesn't exist</p>

            <div className="navbtn">
              <NavLink className="homelink" to="/">
                <img src={Icon}></img>
                Go Back
              </NavLink>
              <button className="takehome">Take Home</button>
            </div>
          </div>
        </div>
        <footer className="footer">
          <div className="footersection"></div>
          <div>
            <a href="https://zuri.com" target={"_blank"}>
              <img src={zurilogo} alt="zuri-logo" />
            </a>
            <p className="footertext">HNG Internship 9 Frontend Task</p>
            <a href="https://zuri.com" target={"_blank"}>
              <img src={zurisecondlogo} alt="zuri-logo" className="" />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};
export default Error;
