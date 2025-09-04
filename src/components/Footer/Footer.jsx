import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaQuestionCircle,
} from "react-icons/fa";
import { SiX } from "react-icons/si";
import "./Footer.css";

const Footer = ({ id }) => {
  return (
    <footer className="footer" id={id}>
      <div className="footer-container">
        <div className="footer-section logo-section">
          <img
            src="https://www.leadcrm.io/wp-content/uploads/2024/12/LeadCRM-removebg-preview-1.webp"
            alt="LeadCRM Logo"
            className="footer-logo"
          />
          <p>LeadCRM is LinkedIn integration tool for your CRM.</p>
          <div className="social-icons">
            <div className="social-icon-wrapper">
              <FaFacebookF />
            </div>
            <div className="social-icon-wrapper">
              <SiX />
            </div>
            <div className="social-icon-wrapper">
              <FaLinkedinIn />
            </div>
            <div className="social-icon-wrapper">
              <FaInstagram />
            </div>
          </div>
        </div>

        {/* Integrations */}
        <div className="footer-section">
          <h4>Integrations</h4>
          <ul>
            <li>HubSpot</li>
            <li>Salesforce</li>
            <li>Pipedrive</li>
            <li>
              Close.io <span className="coming-soon">Coming Soon</span>
            </li>
            <li>
              Insightly <span className="coming-soon">Coming Soon</span>
            </li>
          </ul>
        </div>

        {/* Alternative */}
        <div className="footer-section">
          <h4>Alternative</h4>
          <ul>
            <li>Surfe VS LeadCRM</li>
            <li>Linkmatch Alternative</li>
          </ul>
        </div>

        {/* Legal */}
        <div className="footer-section">
          <h4>Legal</h4>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h4>Contact Us</h4>
          <ul className="contact-list">
            <li>
              <span className="icon">@</span> support@leadcrm.io
            </li>
            <li>
              <FaPhone /> +1 231-538-7466
            </li>
            <li>
              <FaQuestionCircle /> Help Center
            </li>
          </ul>
          <button className="chrome-btn">
            Available in <span>Chrome</span>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/87/Google_Chrome_icon_%282011%29.png"
              alt="Chrome"
            />
          </button>
        </div>
      </div>

      {/* Disclaimer and Copyright */}
      <div className="footer-bottom">
        <p className="disclaimer">
          Disclaimer : LeadCRM is not endorsed or certified by LinkedIn. All
          LinkedIn(tm) logos and trademarks displayed on this tool are property
          of LinkedIn. LeadCRM is distributed AS IS. Your use of LeadCRM is at
          your own risk.
        </p>
        <p className="copyright">
          Copyright © 2025 LeadCRM. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
