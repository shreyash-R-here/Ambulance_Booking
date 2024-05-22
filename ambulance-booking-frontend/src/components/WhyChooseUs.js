import React from 'react';
import '../styles/WhyChooseUs.css';

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="why-choose-us">
      <h2>Why Choose Us</h2>
      <div className="cards-container">
        <div className="card">
          <h3>Available 24/7</h3>
          <p>We are available around the clock to provide emergency medical services whenever you need them.</p>
        </div>
        <div className="card">
          <h3>Highly Trained Medical Staff</h3>
          <p>Our team consists of highly trained and experienced medical professionals dedicated to your care.</p>
        </div>
        <div className="card">
          <h3>Modern and Well-Equipped Ambulances</h3>
          <p>Our ambulances are equipped with the latest medical technology to ensure the best possible care during transportation.</p>
        </div>
        <div className="card">
          <h3>Quick Response Time</h3>
          <p>We prioritize quick response times to ensure that help reaches you as soon as possible.</p>
        </div>
        <div className="card">
          <h3>Affordable Services</h3>
          <p>We offer high-quality services at affordable prices to ensure that everyone has access to emergency medical care.</p>
        </div>
      </div>
      {/* <button className="cta-button">Book Now</button> */}
    </section>
  );
};

export default WhyChooseUs;
