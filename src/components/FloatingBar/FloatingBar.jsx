import React, { useEffect, useRef, useState } from "react";
import "./FloatingBar.css";

const FloatingBar = () => {
  const [visible, setVisible] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    const wrapperId = "wrapper-for-floating";
    const wrapper = document.getElementById(wrapperId);
    if (!wrapper) return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
        else setVisible(false);
      },
      {
        threshold: 0,
        rootMargin: "0px 0px -80% 0px",
      }
    );

    observerRef.current.observe(wrapper);

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, []);
  return (
    <div className={`floating-bar ${visible ? "visible" : ""}`}>
      <div className="floating-bar-inner">
        <div className="floating-bar-top">
          <div className="floating-bar-content">
            <img
              src="https://img.leadcrm.io/wp-content/uploads/2025/09/02104725/Group-2147224151.webp"
              alt="Group"
            />
            <h4>Join with our Thousands of professionals Now!</h4>
            <button className="cta-button">Get Started for Free</button>
          </div>
        </div>

        <div className="floating-bar-bottom">
          <div className="feature-box">
            <img
              src="https://img.leadcrm.io/wp-content/uploads/2025/07/15053756/no-credit-card-icon.webp"
              alt="No Credit Card Required"
            />
            <h4>
              No Credit Card <span style={{ fontWeight: 400 }}>Required</span>
            </h4>
          </div>

          <div className="feature-box">
            <img
              src="https://img.leadcrm.io/wp-content/uploads/2025/07/15053755/free-trial-icon.webp"
              alt="Free Trial Icon"
            />
            <h4>
              Forever Free <span style={{ fontWeight: 400 }}>Account</span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingBar;
