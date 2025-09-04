import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonials.css";

const testimonials = [
  {
    id: 1,
    text: "“Reliable Data Sync I’ve only had to refresh the extension a couple of times. The multi-contact enrichment is still a huge plus, and support is very responsive.“",
    rating: 5,
    author: "David Fincher",
    role: "On Capterra",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    text: "My experience with LeadCRM has been excellent. It has streamlined my workflow, improved lead tracking, and made follow-ups more efficient. The responsive customer support is a big plus. Highly recommend it for reliable lead management!",
    rating: 5,
    author: "Lillian Williams",
    role: "On Capterra",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    text: "“Reliable Data Sync I’ve only had to refresh the extension a couple of times. The multi-contact enrichment is still a huge plus, and support is very responsive.“",
    rating: 5,
    author: "Michael",
    role: "On Capterra",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    id: 4,
    text: "LeadCRM helped us organize thousands of customer records in just a week. The automation tools saved my team hours of manual work every day.",
    rating: 5,
    author: "Sophia Patel",
    role: "Marketing Manager",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: 5,
    text: "The best CRM I've worked with! Intuitive interface, great integration options, and the analytics dashboard is a game changer.",
    rating: 5,
    author: "James Anderson",
    role: "Sales Director",
    avatar: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    id: 6,
    text: "As a startup founder, I needed something easy but powerful. LeadCRM has been exactly that — simple to onboard, but full of features.",
    rating: 5,
    author: "Ava Martinez",
    role: "Startup Founder",
    avatar: "https://randomuser.me/api/portraits/women/33.jpg",
  },
  {
    id: 7,
    text: "Customer support is top-notch. I had an issue with syncing contacts and their team resolved it in less than an hour.",
    rating: 5,
    author: "Ethan Clark",
    role: "Customer Success Lead",
    avatar: "https://randomuser.me/api/portraits/men/78.jpg",
  },
  {
    id: 8,
    text: "We switched from spreadsheets to LeadCRM and never looked back. The clarity it gives my team is incredible.",
    rating: 5,
    author: "Olivia Johnson",
    role: "Operations Head",
    avatar: "https://randomuser.me/api/portraits/women/29.jpg",
  },
  {
    id: 9,
    text: "Managing a remote sales team is tough, but LeadCRM keeps everyone aligned. Our conversion rates improved by 20% in 3 months.",
    rating: 5,
    author: "Daniel Lee",
    role: "Remote Team Manager",
    avatar: "https://randomuser.me/api/portraits/men/50.jpg",
  },
];

const Testimonials = ({ id }) => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 4 } },
      { breakpoint: 992, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="testimonials" id={id}>
      <div className="title-wrapper">
        <h2>What people are saying about LeadCRM</h2>
      </div>

      <Slider {...settings} className="carousel">
        {testimonials.map((item) => (
          <div className="testimonial-card" key={item.id}>
            <p className="testimonial-text">{item.text}</p>
            <div className="rating">
              <div className="star-wrapper">
                <img
                  src="https://img.leadcrm.io/wp-content/uploads/2025/02/18104714/capterra-icon.png"
                  className="attachment-image"
                ></img>
              </div>

              {"★".repeat(item.rating)}
            </div>
            <div className="author">
              <img src={item.avatar} alt={item.author} />

              <div>
                <h4>{item.author}</h4>
                <p>{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Testimonials;
