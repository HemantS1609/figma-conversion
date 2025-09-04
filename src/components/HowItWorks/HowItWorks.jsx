import React from "react";
import "./HowItWorks.css";

const steps = [
  {
    number: "1",
    title: "Install the Extension",
    description:
      "Add LeadCRM to Chrome and connect your CRM in 2 minutes—secure and seamless.",
    image:
      "https://img.leadcrm.io/wp-content/uploads/2025/07/08131216/install-the-extension.webp",
    alt: "Install the Extension",
  },
  {
    number: "2",
    title: "Browse LinkedIn",
    description:
      "Use LinkedIn normally, our extension auto-captures data and reveals CRM contacts instantly.",
    image:
      "https://img.leadcrm.io/wp-content/uploads/2025/07/08132934/Browse-LinkedIn.webp",
    alt: "Browse LinkedIn",
  },
  {
    number: "3",
    title: "Get Enriched Data",
    description:
      "Enrich profiles with verified emails, phones, and company data with 95%+ accuracy guaranteed.",
    image:
      "https://img.leadcrm.io/wp-content/uploads/2025/07/08132935/Get-Enriched-Data.webp",
    alt: "Get Enriched Data",
  },
  {
    number: "4",
    title: "Sync to CRM Instantly",
    description:
      "Prospect data syncs to your CRM instantly with history, tracking, and AI powered insights for better follow ups.",
    image:
      "https://img.leadcrm.io/wp-content/uploads/2025/07/08132933/Sync-to-CRM-Instantly.webp",
    alt: "Sync to CRM Instantly",
  },
];

const HowItWorks = ({ id }) => {
  return (
    <section className="how-it-works" id={id}>
      <h2 className="">How it Works</h2>
      <p>
        From setup to success in <b>4 simple steps</b>
      </p>

      <div className="steps-grid">
        {steps.map((step) => (
          <div className="step-card" key={step.number}>
            <div className="step-number">{step.number}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
            <img src={step.image} alt={step.alt} loading="lazy" />
          </div>
        ))}
      </div>

      <div className="cta">
        <button className="cta-btn">Try LeadCRM Now →</button>
      </div>

      <img
        className="decorative-ball"
        src="https://img.leadcrm.io/wp-content/uploads/2025/07/11124315/Ball.webp"
        alt="Ball"
      />
    </section>
  );
};

export default HowItWorks;
