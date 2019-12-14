import React from "react";
import NavLink from "../Helper/Link";

import {
  FaUmbrellaBeach,
  FaFacebook,
  FaInstagram,
  FaGoogle,
  FaTwitter,
  FaWhatsapp
} from "react-icons/fa";

import { MdPhone, MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <>
      <div className="contact-page-bg-container">
        <img
          classname="contact-page-bg"
          src={require("../../Images/generic-contact-background.jpg")}
          alt="smtn"
        />
      </div>
      <NavLink />
      <div className="contact-container">
        <div className="contact-logo">
          <FaUmbrellaBeach />
          <h1 className="contact-header">Contact</h1>
        </div>
        <h3 className="contact-lorem">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet
          sagittis id consectetur purus ut faucibus. Dolor morbi non arcu risus
          quis. Malesuada fames ac turpis egestas maecenas pharetra convallis
          posuere morbi. Lacus laoreet non curabitur gravida arcu ac tortor.
        </h3>

        <div className="contact-contats">
          <p>
            <MdPhone /> 800-2345-678
          </p>
          <p>
            <MdEmail /> hcarmila@info.com
          </p>
        </div>
        <div className="contact-links">
          <FaFacebook />
          <FaInstagram />
          <FaGoogle />
          <FaTwitter />
          <FaWhatsapp />
        </div>
        <p className="privacy-policy">
          Hotel Carmila 2019
          <span>Privacy Policy</span>
        </p>
      </div>
    </>
  );
};

export default Contact;
