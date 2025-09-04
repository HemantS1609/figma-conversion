import "./FeatureSlider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const features = [
  {
    title: (
      <>
        Access to <span className="bold-text">700M+ Contacts</span>
      </>
    ),
    img: "https://img.leadcrm.io/wp-content/uploads/2025/07/10113540/feature-leadcrm-6.webp",
  },
  {
    title: (
      <>
        Automated <span className="bold-text">LinkedIn Sync</span>
      </>
    ),
    img: "https://img.leadcrm.io/wp-content/uploads/2025/07/10113540/feature-leadcrm-6.webp",
  },
  {
    title: (
      <>
        CRM <span className="bold-text">Data Enrichment</span>
      </>
    ),
    img: "https://img.leadcrm.io/wp-content/uploads/2025/07/10113540/feature-leadcrm-6.webp",
  },
  {
    title: (
      <>
        Seamless <span className="bold-text">Integration</span>
      </>
    ),
    img: "https://img.leadcrm.io/wp-content/uploads/2025/07/10113540/feature-leadcrm-6.webp",
  },
  {
    title: (
      <>
        Real-time <span className="bold-text">Notifications</span>
      </>
    ),
    img: "https://img.leadcrm.io/wp-content/uploads/2025/07/10113540/feature-leadcrm-6.webp",
  },
  {
    title: (
      <>
        Lead Scoring <span className="bold-text">Insights</span>
      </>
    ),
    img: "https://img.leadcrm.io/wp-content/uploads/2025/07/10113540/feature-leadcrm-6.webp",
  },
  {
    title: (
      <>
        Detailed <span className="bold-text">Analytics Reports</span>
      </>
    ),
    img: "https://img.leadcrm.io/wp-content/uploads/2025/07/10113540/feature-leadcrm-6.webp",
  },
  {
    title: (
      <>
        Smart <span className="bold-text">Follow-ups</span>
      </>
    ),
    img: "https://img.leadcrm.io/wp-content/uploads/2025/07/10113540/feature-leadcrm-6.webp",
  },
  {
    title: (
      <>
        Multi-Account <span className="bold-text">Support</span>
      </>
    ),
    img: "https://img.leadcrm.io/wp-content/uploads/2025/07/10113540/feature-leadcrm-6.webp",
  },
  {
    title: (
      <>
        Customizable <span className="bold-text">Dashboards</span>
      </>
    ),
    img: "https://img.leadcrm.io/wp-content/uploads/2025/07/10113540/feature-leadcrm-6.webp",
  },
  {
    title: (
      <>
        Team <span className="bold-text">Collaboration</span>
      </>
    ),
    img: "https://img.leadcrm.io/wp-content/uploads/2025/07/10113540/feature-leadcrm-6.webp",
  },
  {
    title: (
      <>
        Priority <span className="bold-text">Leads bold-text</span>
      </>
    ),
    img: "https://img.leadcrm.io/wp-content/uploads/2025/07/10113540/feature-leadcrm-6.webp",
  },
  {
    title: (
      <>
        Secure <span className="bold-text">Data Encryption</span>
      </>
    ),
    img: "https://img.leadcrm.io/wp-content/uploads/2025/07/10113540/feature-leadcrm-6.webp",
  },
];

const FeatureSlider = ({ id }) => {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 4 } },
      { breakpoint: 992, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="feature-slider-section" id={id}>
      <Slider {...settings}>
        {features.map((feature, index) => (
          <div key={index} className="feature-item">
            <div className="feature-card">
              <div className="feature-icon">
                <img src={feature.img} alt={feature.title} />
              </div>
              <h3 className="feature-title">{feature.title}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FeatureSlider;
