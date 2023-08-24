import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Welcome to EchoTech! We are your ultimate destination for
            cutting-edge tech products. Our mission is to provide you with the
            latest and most innovative gadgets and electronics while ensuring
            top-notch quality and customer satisfaction. Join our tech
            enthusiast community and embark on an exciting journey of tech
            exploration with us!
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">V.P.O. Kaimla, Gharaunda, Karnal, 132114</div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">Phone: +91 9817581856</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">Email: sainikaimla001@gmail.com</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Categories</div>
          <span className="text">Headphones</span>
          <span className="text">Smart Watches</span>
          <span className="text">Bluetooth Speakers</span>
          <span className="text">Wireless Earbuds</span>
          <span className="text">Home Theater</span>
          <span className="text">Projectors</span>
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <span className="text">Home</span>
          <span className="text">About</span>
          <span className="text">Returns</span>
          <span className="text">Privacy Policy</span>
          <span className="text">Terms & Conditions</span>
          <span className="text">Contact Us</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <div className="text">© ECHOTECH LTD 2023 All Rights Reserved</div>
          <img src={Payment} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
