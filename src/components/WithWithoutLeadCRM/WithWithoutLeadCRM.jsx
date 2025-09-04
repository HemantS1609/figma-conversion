import React from "react";
import "./WithWithoutLeadCRM.css";

const withoutLeadCRM = [
  {
    title: "Manual Data Entry",
    badge: "3+ Hours wasted daily",
    desc: "Copying LinkedIn contacts to CRM manually plus losing conversation history",
    badgeColor: "red",
    icon: "https://img.leadcrm.io/wp-content/uploads/2025/07/08091339/cross.webp",
  },
  {
    title: "Incomplete Data",
    badge: "60% Data Incomplete",
    desc: "LinkedIn profiles missing Email and Phones from 700M+ Database",
    badgeColor: "red",
    icon: "https://img.leadcrm.io/wp-content/uploads/2025/07/08091339/cross.webp",
  },
  {
    title: "No CRM Visibility",
    badge: "Zero context available",
    desc: "Can’t see existing CRM contacts when browsing LinkedIn profiles",
    badgeColor: "red",
    icon: "https://img.leadcrm.io/wp-content/uploads/2025/07/08091339/cross.webp",
  },
  {
    title: "Limited Productivity",
    badge: "No smart assistance",
    desc: "Writing messages manually plus no AI assistant for reply, Invite or comments.",
    badgeColor: "red",
    icon: "https://img.leadcrm.io/wp-content/uploads/2025/07/08091339/cross.webp",
  },
];

const withLeadCRM = [
  {
    title: "Complete Bi-Directional Sync",
    desc: "Automatically sync contacts, messages, and notes between LinkedIn and your CRM in real time.",
    badge: null,
    badgeColor: "green",
    icon: "https://img.leadcrm.io/wp-content/uploads/2025/07/16081050/with-leadcrm-section-1.webp",
  },
  {
    title: "700M+ Contacts + Enrichment",
    desc: "Get verified emails and phone numbers from a vast global database.",
    badge: null,
    badgeColor: "green",
    icon: "https://img.leadcrm.io/wp-content/uploads/2025/07/16081051/with-leadcrm-section-2.webp",
  },
  {
    title: "CRM Overlay on LinkedIn",
    desc: "See full CRM insights directly on LinkedIn profiles without switching tabs.",
    badge: null,
    badgeColor: "green",
    icon: "https://img.leadcrm.io/wp-content/uploads/2025/07/16081052/with-leadcrm-section-3.webp",
  },
  {
    title: "AI Response + Templates + Bulk Exports",
    desc: "Save time with AI-crafted replies, pre-built templates, and one-click data exports.",
    badge: null,
    badgeColor: "green",
    icon: "https://img.leadcrm.io/wp-content/uploads/2025/07/16081049/with-leadcrm-section-4.webp",
  },
];

const WithWithoutLeadCRM = ({ id }) => {
  return (
    <section className="workflow-comparison" id={id}>
      <h2 className="workflow-heading">
        Every LinkedIn Prospector faces these daily challenges
      </h2>

      <div className="comparison-container">
        <div className="comparison-box without-leadcrm">
          <div className="comparison-image-wrapper">
            <img
              src="https://img.leadcrm.io/wp-content/uploads/2025/07/08084651/Without-LeadCRM.webp"
              alt="Without LeadCRM"
              className="comparison-image"
            />
          </div>
          <h3 className="without-title">Without LeadCRM</h3>

          {withoutLeadCRM.map((item, index) => (
            <div key={index} className={`infobox ${item.badgeColor}`}>
              <img src={item.icon} alt="icon" className="icon" />
              <div>
                <h4 className="info-title">
                  {item.title}{" "}
                  {item.badge && (
                    <span className={`badge ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                  )}
                </h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="crm-container">
          <div className="crm-line">
            <img
              src="//img.leadcrm.io/wp-content/uploads/2025/07/08105840/line.webp"
              alt="line"
              width="2"
              height="250"
              loading="lazy"
            />
          </div>

          <div className="crm-vs">
            <h3>VS</h3>
          </div>

          <div className="crm-line">
            <img
              src="//img.leadcrm.io/wp-content/uploads/2025/07/08105840/line.webp"
              alt="line"
              width="2"
              height="250"
              loading="lazy"
            />
          </div>
        </div>

        <div className="comparison-box with-leadcrm">
          <div className="comparison-image-wrapper">
            <img
              src="https://img.leadcrm.io/wp-content/uploads/2025/07/08100321/With-LeadCRM.webp"
              alt="With LeadCRM"
              className="comparison-image"
            />
          </div>
          <h3 className="with-title">
            With LeadCRM{" "}
            <img
              src="https://img.leadcrm.io/wp-content/uploads/2025/07/08102846/leadcrm-favicon-logo.webp"
              alt="LeadCRM Logo"
              className="inline-logo"
            />
            <span className="badge green">4+ Hours/day Saved</span>
          </h3>

          {withLeadCRM.map((item, index) => (
            <div key={index} className={`infobox ${item.badgeColor}`}>
              <img src={item.icon} alt="icon" className="icon" />
              <div>
                <h4 className="info-title">
                  {item.title}{" "}
                  {item.badge && (
                    <span className={`badge ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                  )}
                </h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="cta">
        <button className="hero-cta-btn">Get a Free Account Now!</button>
      </div>
    </section>
  );
};

export default WithWithoutLeadCRM;
