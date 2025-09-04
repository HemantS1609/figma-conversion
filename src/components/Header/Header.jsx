import React, { useState } from "react";
import { FaChevronDown, FaBars, FaTimes, FaUser } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: "Product", icon: <FaChevronDown /> },
    { name: "Pricing" },
    { name: "Resources", icon: <FaChevronDown /> },
    { name: "Company", icon: <FaChevronDown /> },
  ];

  return (
    <header className="nav-header">
      <div className="header-container">
        <div className="logo">
          <img
            src="https://www.leadcrm.io/wp-content/uploads/2024/12/LeadCRM-removebg-preview-1.webp"
            alt="LeadCRM"
          />
        </div>

        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <ul>
            {menuItems.map((item, index) => (
              <li key={index} className="menu-item">
                <button className="menu-btn">
                  {item.name}{" "}
                  {item.icon && <span className="chevron">{item.icon}</span>}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-buttons">
          <button className="header-btn signup">Get your free account</button>
          <button className="header-btn login">
            <FaUser className="login-icon" />
            Login
          </button>
        </div>

        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
};

export default Header;
