import React from "react";
import "./LeadCRMSection.css";

const LeadCRMSection = ({ id }) => {
  return (
    <section className="leadcrm-section" id={id}>
      <div className="content-wrapper">
        <div className="text-content">
          <div className="heading-with-icon">
            <img
              className="icon-image desktop-only"
              src="//img.leadcrm.io/wp-content/uploads/2025/07/11124853/comment-icon.webp"
              alt="Comment Icon"
            />
            <h2>Our Supported LeadCRM</h2>
          </div>
          <p>
            LeadCRM provides Native Integrations with popular CRM tools to make
            the most out of your LinkedIn prospecting. We don’t want you to miss
            any revenue opportunity on the internet!
          </p>
        </div>

        <img
          className="main-image desktop-only"
          src="//img.leadcrm.io/wp-content/uploads/2025/07/11082644/leadcrm-supported-1536x636.png"
          alt="LeadCRM Supported"
        />

        <img
          className="side-image desktop-only"
          src="//img.leadcrm.io/wp-content/uploads/2025/07/11125144/Collaboration-115x150.webp"
          alt="Collaboration"
        />

        <img
          className="main-image mobile-only"
          src="//img.leadcrm.io/wp-content/uploads/2025/07/28075853/Your-CRM-768x1164.webp"
          alt="LeadCRM Mobile"
        />
      </div>

      <div className="d-flex align-items-center justify-content-center cmb-85 cmt-15">
        <button className="lead-cta-button">
          Lets Integrate your CRM Now!
        </button>
      </div>
    </section>
  );
};

export default LeadCRMSection;
