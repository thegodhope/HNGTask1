import React from "react";
import giticon from "../images/giticon.png";
import slackicon from "../images/Slackicon.png";
import zurilogo from "../images/zurilogo.png";
import profileImage from "../images/mypicture.jpg";
import zurisecondlogo from "../images/secondloogo.png";
import { links } from "../components/data";
import "../index.css";

export default function() {
  return (
    <div>
      {/* PROFILE SECTION */}

      <div className="profilesection">
        <div>
          <img
            id="profile_img"
            src={profileImage}
            alt="profile-pic"
            className="w-88 h-90 rounded-full"
          />
        </div>

        <div>
          <h1 id="twitter"> Idorenyin Etim </h1>
        </div>
      </div>

      {/* PROFILE SECTION ENDS */}

      <div className="linkssection">
        {links.map((link, index) => {
          return (
            <div key={index} className="atag">
              <a id={link.id} href={link.link} target={""}>
                {link.name}
              </a>
            </div>
          );
        })}
        <div className="atag">
          <a id="contact" href="/Contact">
            Contact Me
          </a>
        </div>
      </div>

      {/* SOCIAL MEDIA AND FOOTER */}
      <div className="socials">
        <a href="https://slack.com/Hopecodes" target={"_blank"}>
          <img id="slack" src={slackicon} alt="git-icon" />
        </a>

        <a href="https://github.com/thegodhope" target="_blank">
          <img src={giticon} alt="slack-icon" />
        </a>
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
