import React from 'react';

const Hero = () => (
  <div className="hero">
    <div className="hero__image">
      <img
        src="https://staticv2.amarstock.com/Content/ContentMarketGuru/images/mackbook/01.png"
        alt=""
        className="image"
      />
    </div>
    <div className="hero__info">
      <h1 className="hero__hading">এখন</h1>
      <h1 className="hero__hading color-text">শেয়ার বাজার ট্রেইনিং</h1>
      <h1 className="hero__hading">করুন অনলাইনে!!!</h1>
      <p>ঘরে বসেই মোবাইলে বা কম্পিউটারে আপনার পছন্দমত সময়ে কোর্স করুন।</p>
      <button className="button">Pricing</button>
    </div>
  </div>
);

export default Hero;
