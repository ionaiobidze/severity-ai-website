import React from 'react';

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="container">
        <h2>Meet the Visionaries Behind Severity AI</h2>
        <div className="team-members">
          <div className="team-member">
            <div className="team-member-image-container">
            <img src={`${process.env.PUBLIC_URL}/images/tekle-tvildiani.jpg`} alt="Tekle Tvildiani" className="team-member-photo" />
            </div>
            <div className="team-member-info">
              <h3>Tekle Tvildiani</h3>
              <p>Management & Strategy</p>
            </div>
          </div>
          <div className="team-member">
            <div className="team-member-image-container">
            <img src={`${process.env.PUBLIC_URL}/images/iona-iobidze.jpg`} alt="Tekle Tvildiani" className="team-member-photo" />
            </div>
            <div className="team-member-info">
              <h3>Iona Iobidze</h3>
              <p>AI & Web Development</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;