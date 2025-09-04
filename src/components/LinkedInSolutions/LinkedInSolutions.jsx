import React, { useState } from "react";
import "./LinkedInSolutions.css";

const tabs = [
  {
    id: 1,
    title: "CRM Data Enrichment",
    icon: "https://img.leadcrm.io/wp-content/uploads/2025/07/11073852/tab-icon-3.webp",
    heading: "It’s hard to find the accurate contact data for every prospects.",
    badge: "Incomplete Data",
    left: {
      title: "Get Access to 700M+ Prospects.",
      btnText: "Try LeadCRM Data Enrichment",
      btnLink: "https://www.leadcrm.io/linkedin-email-finder/",
      img: "https://img.leadcrm.io/wp-content/uploads/2025/07/09101433/CRM-Data-Enrichment-d-768x464.png",
    },
    right: {
      title: "Capture Every Lead. Every Time.",
      btnText: "Try Our Advanced Waterfall Enrichment",
      btnLink: "https://www.leadcrm.io/waterfall-data-enrichment/",
      img: "https://img.leadcrm.io/wp-content/uploads/2025/07/09101012/CRM-Data-Enrichment-768x474.webp",
    },
  },
  {
    id: 2,
    title: "CRM Data Sync",
    icon: "https://img.leadcrm.io/wp-content/uploads/2025/07/11073853/tab-icon-4.webp",
    heading: "40+ hours lost to copy-paste. Every. Single. Month..",
    badge: "Lost Lead Context",
    left: {
      title: "The Solution? LeadCRM's Instant Data Sync.",
      btnText: "Try LeadCRM Data Sync",
      btnLink: "https://www.leadcrm.io/linkedin-to-crm-data-sync/",
      img: "https://img.leadcrm.io/wp-content/uploads/2025/07/11075917/CRM-Data-Sync.png",
    },
    right: {
      title: "Unlock instant CRM insights on every profile you visit.",
      btnText: "Try LeadCRM Data Overlay",
      btnLink: "https://www.leadcrm.io/crm-data-overlay/",
      img: "https://img.leadcrm.io/wp-content/uploads/2025/07/11080104/CRM-Data-Sync-1.png",
    },
  },
  {
    id: 3,
    title: "Bulk Export & Enrichment",
    icon: "https://img.leadcrm.io/wp-content/uploads/2025/07/11073851/tab-icon-2.webp",
    heading: "Your Sales Navigator Workflow is Broken.",
    badge: "Lost Productivity",
    left: {
      title: "Enrich & Export 250 Profiles in Just 60 Seconds.",
      btnText: "Try LeadCRM Bulk Export",
      btnLink: "https://www.leadcrm.io/linkedin-data-bulk-export/",
      img: "https://img.leadcrm.io/wp-content/uploads/2025/07/11075922/Bulk-Export-Enrichment.png",
    },
    right: {
      title: "Export & enrich profiles to the CRM or G-Sheet",
      btnText: "Try LeadCRM Bulk Export",
      btnLink: "https://www.leadcrm.io/linkedin-data-bulk-export/",
      img: "https://img.leadcrm.io/wp-content/uploads/2025/07/11075921/Bulk-Export-Enrichment-1.png",
    },
  },
  {
    id: 4,
    title: "AI Productivity",
    icon: "https://img.leadcrm.io/wp-content/uploads/2025/07/11073854/tab-icon-1.webp",
    heading:
      "Your Most Valuable LinkedIn Activity is Also Your Biggest Time Sink.",
    badge: "No Smart Assistance",
    left: {
      title: "Get the same high-impact engagement in 80% less time.",
      btnText: "Try LeadCRM AI Response",
      btnLink: "https://www.leadcrm.io/ai-responses-inside-linkedin/",
      img: "https://img.leadcrm.io/wp-content/uploads/2025/05/28111308/AI-Comment-image-1-768x603.webp",
    },
    right: {
      title: "Use Shortcuts to reply faster.",
      btnText: "Try LeadCRM Templates",
      btnLink: "https://www.leadcrm.io/templates-and-shortcuts/",
      img: "https://img.leadcrm.io/wp-content/uploads/2025/05/29113839/Template-imges-2-768x529.webp",
    },
  },
];

const LinkedInSolutions = ({ id }) => {
  const [activeTab, setActiveTab] = useState(1);
  const tab = tabs.find((t) => t.id === activeTab);

  return (
    <section className="linkedin-solutions" id={id}>
      <img
        src="https://img.leadcrm.io/wp-content/uploads/2025/07/11124555/icon.webp"
        className="robo-image"
        alt="icon"
      ></img>
      <div className="header">
        <h2>Complete LinkedIn Sales Solutions</h2>
        <p>Everything you need for professional LinkedIn prospecting</p>
      </div>

      <div className="tabs">
        {tabs.map((t) => (
          <button
            key={t.id}
            className={`tab ${activeTab === t.id ? "active" : ""}`}
            onClick={() => setActiveTab(t.id)}
          >
            <img src={t.icon} alt={t.title} />
            {t.title}
          </button>
        ))}
      </div>

      <div className="content">
        <h3>
          {tab.heading} <span className="badge">{tab.badge}</span>
        </h3>

        <div className="grid">
          <div className="details-card">
            <h4>{tab.left.title}</h4>
            <span className="card-subtext">{tab.left.btnText} &gt;</span>
            <img src={tab.left.img} alt={tab.left.title} />
          </div>

          <div className="details-card">
            <h4>{tab.right.title}</h4>
            <span className="card-subtext">{tab.right.btnText} &gt;</span>
            <img src={tab.right.img} alt={tab.right.title} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LinkedInSolutions;
