import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <> 
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <div class="wrapper wrapper1">
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
                  <i className="fab fa-facebook"></i>
                </Link>
              </li>
              <li>
                <Link to="https://www.fa-linkedin.com/in/privilledge-black-2a6a6b275">
                  <i className="fab fa-linkedin"></i>
                </Link>
              </li>
              <li>
                <Link to="https://github.com/Privils">
                  <i className="fab fa-github"></i>
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
