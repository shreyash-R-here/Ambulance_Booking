import React from 'react';
import '../styles/AboutUs.css';

const AboutUs = () => {
  return (
    <section id="about" className="about-us">
      <div className="about-content">
        <h2>About Us</h2>
        <p>We provide 24/7 emergency ambulance services with highly trained medical staff and state-of-the-art equipment. Our mission is to ensure timely and efficient medical transportation in times of need.</p>\
        <div className="info-boxes">
          <div className="info-box">
            <h3>Heart Attacks</h3>
            <p>Immediate medical attention for cardiac emergencies.</p>
          </div>
          <div className="info-box">
            <h3>Accidents</h3>
            <p>Quick and safe transportation for accident victims.</p>
          </div>
          <div className="info-box">
            <h3>Critical Care</h3>
            <p>Specialized transport for patients needing critical care.</p>
          </div>
        </div>
        {/* <button className="cta-button">Book Now</button> */}
        <br></br><p>We Spread Good Health.</p>
        <p>We Spread Smiles.</p>
        <p>We are AmbulanceEase.</p>

      </div>
      <div className="about-image">
        <img src={"https://img.freepik.com/free-vector/ambulance-concept-illustration_114360-7071.jpg?t=st=1716087610~exp=1716091210~hmac=51552f1736a575363c0637d6927760a8a38834535c19fa272e92fba035b9ebab&w=1380"} alt="Ambulance Booking" />
        <svg className="moving-svg" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="10" fill="#E74C3C" />
        </svg>
      </div>
    </section>
  );
};

export default AboutUs;
   





   

  

