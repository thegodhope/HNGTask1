import React from "react";
import zurilogo from "../images/zurilogo.png";
import zurisecondlogo from "../images/secondloogo.png";

function Contact() {
  return (
    <div>
      <div className="contact">
        <div className="heading">
          <h1 className="heading-h1">Contact Me</h1>
          <p className="heading-p">
            Hi there, contact me to ask me about anything you have in mind.
          </p>
        </div>
        <form>
          <div className="lg-name">
            <div className="form-entries fst-name">
              <label>First name</label>
              <input
                id="first_name"
                placeholder="Enter your first name"
                className="entry"
                required="true"
              />
            </div>
            <div className="form-entries lst-name">
              <label>Last name</label>
              <input
                id="last_name"
                placeholder="Enter your last name"
                className="entry"
                required="true"
              />
            </div>
          </div>
          <div className="form-entries">
            <label>Email</label>
            <input
              id="email"
              placeholder="yourname@email.com"
              className="entry"
              required="true"
            />
          </div>
          <div className="form-entries">
            <label>Message</label>
            <textarea
              id="message"
              placeholder="Send me a message and I'll reply you as soon as possible..."
              className="entry"
              required="true"
            />
          </div>
          <div>
            <input type="checkbox" className="checkbox" />
            <span className="checkbox-span">
              You agree to providing your data to Idorenyin Etim who may contact
              you.
            </span>
          </div>
          <div>
            <button id="btn__submit" className="send-btn">
              Send message
            </button>
          </div>
        </form>
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
  );
}
export default Contact;
