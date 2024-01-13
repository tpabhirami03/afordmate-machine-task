import React from "react";
import eXStore from "../assets/eXStore.png";
import instagram from "../assets/instagram.svg";
import youtube from "../assets/youtube.svg";
import twitter from "../assets/twitter.svg";
import message from "../assets/message.svg";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-wraper">
        <div className="footer-main">
          <div className="footer-col">
            <img src={eXStore} alt="no image" />
          </div>
          <div className="footer-col">
            <h4>Menu</h4>
            <ul>
              <li>Order Tracking</li>
              <li>Store Location</li>
              <li>Return Policy</li>
              <li>Support</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Resourses</h4>
            <ul>
              <li>Blog</li>
              <li>Help Center</li>
              <li>Documentation</li>
              <li>Guidelines</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Follow Us On :</h4>
            <div className="social-media">
              <img src={instagram} alt="" />
              <img src={youtube} alt="" />
              <img src={message} alt="" />
              <img src={twitter} alt="" />
            </div>
          </div>
        </div>
        <div className="copy-right">© 2024 Exstore</div>
      </div>
    </div>
  );
}

export default Footer;
