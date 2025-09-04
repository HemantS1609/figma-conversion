import React, { useState } from "react";
import "./FAQSection.css";

const faqData = [
  {
    question: "1. What exactly does LeadCRM do?",
    answer:
      "LeadCRM is a browser extension that seamlessly connects your LinkedIn account (including Sales Navigator) to your CRM. It eliminates manual data entry by allowing you to instantly sync entire LinkedIn profiles—including contact information, experience, and skills—to your CRM in a single click. It saves your sales team dozens of hours a month, prevents data errors, and ensures your CRM is always up-to-date.",
  },
  {
    question: "2. Which CRMs do you integrate with?",
    answer:
      "We offer deep, bi-directional integrations with the most popular CRMs in the industry, including HubSpot, Salesforce, Zoho, and Pipedrive. Our two-way sync ensures that data flows seamlessly between LinkedIn and your CRM, keeping records enriched and current on both platforms.",
  },
  {
    question: "3. Can I integrate my CRM if it's not supported natively?",
    answer:
      "Yes, you can integrate any CRM with our system as long as it supports certain APIs. Reach out to support@leadcrm.io to learn more.",
  },
  {
    question: "4. Can I control what information gets synced to my CRM?",
    answer:
      "Yes, you have complete control. Our flexible field mapping allows you to define which data from a LinkedIn profile goes into specific fields in your CRM. This ensures your data is perfectly organized according to your workflow and prevents messy, inconsistent records.",
  },
  {
    question: "5. How is LeadCRM different from other tools?",
    answer: (
      <>
        LeadCRM stands out in three key ways:
        <ul>
          <li>
            <strong>True Bi-Directional Sync:</strong> We keep both LinkedIn and
            your CRM in sync.
          </li>
          <li>
            <strong>Waterfall Enrichment:</strong> Advanced process to find
            accurate, up-to-date contact info.
          </li>
          <li>
            <strong>Complete Profile Sync:</strong> Capture entire profile and
            control where data lands.
          </li>
        </ul>
      </>
    ),
  },
  {
    question: "6. Is LeadCRM safe and GDPR compliant?",
    answer:
      "Absolutely. LeadCRM is built with enterprise-grade security practices to protect your data and your customers' data. We are fully GDPR compliant and designed to help you maintain compliance while conducting your sales activities.",
  },
  {
    question: "7. What kind of support can I expect from LeadCRM?",
    answer:
      "We offer dedicated customer support via email and live chat to help with everything from initial setup to workflow optimization. Pro-tier customers also receive a dedicated account manager for priority support.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2 className="faq-heading">Frequently Asked Questions</h2>

      <div className="faq-wrapper">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <button
              className={`faq-question ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => toggleAccordion(index)}
            >
              {item.question}
              <span className="faq-icon">
                {activeIndex === index ? "-" : "+"}
              </span>
            </button>
            {activeIndex === index && (
              <div className="faq-answer">{item.answer}</div>
            )}
          </div>
        ))}
      </div>

      {/* Decorative Images */}
      <img
        className="faq-image comment-icon"
        src="https://img.leadcrm.io/wp-content/uploads/2025/07/11124853/comment-icon.webp"
        alt="Comment Icon"
      />
      <img
        className="faq-image collaboration-icon"
        src="https://img.leadcrm.io/wp-content/uploads/2025/07/11125144/Collaboration-115x150.webp"
        alt="Collaboration Icon"
      />
    </section>
  );
};

export default FAQSection;
