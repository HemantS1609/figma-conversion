import React from "react";
import "./HeroSection.css";
import ChromeLogo from "@/assets/chromeLogo.png";

const HeroSection = () => {
  const crms = [
    {
      name: "HubSpot",
      logo: "//img.leadcrm.io/wp-content/uploads/2025/01/24122951/HubSpot.webp",
    },
    {
      name: "Salesforce",
      logo: "//img.leadcrm.io/wp-content/uploads/2025/01/24122947/Salesforce.webp",
    },
    {
      name: "Pipedrive",
      logo: "//img.leadcrm.io/wp-content/uploads/2025/01/24122946/Pipedrive.webp",
    },
  ];

  return (
    <section className="hero-section" id="first-section">
      <div className="hero-content">
        <div className="d-flex align-items-center justify-content-center">
          <p className="hero-subtitle">
            <img
              src="https://img.leadcrm.io/wp-content/uploads/2025/07/08045258/rocket-icon.svg"
              alt="rocket icon"
              width="21"
              height="21"
            />{" "}
            Thousands of Professional using LeadCRM
          </p>
        </div>

        <h1 className="hero-title">
          <span className="line">LinkedIn CRM Integration</span>
          <span className="line">
            Capture, Sync and Enrich in{" "}
            <span className="highlight">
              Both Ways
              <img
                src="https://img.leadcrm.io/wp-content/uploads/2025/07/08050121/line-1.webp"
                alt="underline"
                className="underline-img"
              />
            </span>
          </span>
        </h1>

        <p className="hero-description">
          <span>
            Automatically sync LinkedIn prospects to your CRM and overlay
            existing CRM contacts on
          </span>
          <span>
            LinkedIn profiles. Complete bi-directional integration with HubSpot,
            Salesforce, and Pipedrive.
          </span>
        </p>

        <div className="crm-wrapper">
          <div className="crm-work-with">
            <span className="crm-text">Works with</span>
            <div className="crm-list">
              {crms.map((crm, index) => (
                <div key={index} className="crm-item">
                  <div className="crm-logo">
                    <img src={crm.logo} alt={crm.name} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rating-wrapper">
          <img
            src="//img.leadcrm.io/wp-content/uploads/2025/07/08062823/ratings-section-768x78.webp"
            alt="ratings"
            className="ratings-img"
          />
        </div>

        <div className="hero-action-wrapper">
          <div className="chrome-webstore">
            <h2 className="chrome-text">
              <span className="small-text">Available in</span>
              <span className="big-text">Chrome Web Store</span>
            </h2>
            <div className="chrome-icon-wrapper">
              <img
                src={ChromeLogo}
                alt="Chrome Web Store"
                className="chrome-icon"
              />
            </div>
          </div>

          <button className="btn-cta">Get Your Account Now!</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
