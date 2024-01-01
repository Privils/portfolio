import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <> <div class="wrapper wrapper1">
    <div class="box">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    </div>
  </div>
      <div className="main-info">
        <div className="contact-info">
          <div className="contact-div">
            <ul>
              <li>
                <Link to="https://www.facebook.com/php?id=100046809441429">
                  <i className="fa fa-facebook"></i>
                </Link>
              </li>
              <li>
                <Link to="https://www.fa-linkedin.com/in/privilledge-black-2a6a6b275">
                  <i className="fa fa-linkedin"></i>
                </Link>
              </li>
              <li>
                <Link to="https://github.com/Privils">
                  <i className="fa fa-github"></i>
                </Link>
              </li>
            </ul>
            <p>Email: privilledgeblack8@gmail.com</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
