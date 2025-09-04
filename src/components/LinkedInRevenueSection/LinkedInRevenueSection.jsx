import React from "react";
import "./LinkedInRevenueSection.css";
import { FaArrowRight } from "react-icons/fa";

const LinkedInRevenueSection = ({ id }) => {
  return (
    <section className="linkedin-revenue-section" id={id}>
      <div className="heading-above">
        <h1>Join Thousands of Professionals Using LeadCRM</h1>
      </div>

      <div
        className="bg-image-section"
        style={{
          backgroundImage:
            "url('https://img.leadcrm.io/wp-content/uploads/2025/07/11083207/Product-hunt-banner-image.webp')",
        }}
      >
        <h2 className="overlay-text">
          Your LinkedIn Powerhouse for Smarter Lead Management
        </h2>
      </div>

      <div className="button-wrapper">
        <button className="cta-button">
          <span>Get Started Today</span>
          <FaArrowRight style={{ marginLeft: "8px" }} />
        </button>
      </div>
    </section>
  );
};

export default LinkedInRevenueSection;
