import React from 'react';
import { Link } from 'react-router-dom';

const CitySection = () => {
  return (
    <section className="section-cities" id="cities">
      <div className="row">
        <h2>We&apos;re currently in these cities</h2>
      </div>
      <div className="row">
        <div className="col span-1-of-4 box">
          <img src="../../images/lisbon-3.jpg" alt="Lisbon" />
          <h3>Lisbon</h3>
          <div className="city-feature">
            <i className="icon ion-ios-person icon-small" />
            1600+ happy eaters
          </div>
          <div className="city-feature">
            <i className="icon ion-ios-star icon-small" />
            60+ top chefs
          </div>
          <div className="city-feature">
            <i className="icon ion-logo-twitter icon-small" />
            <Link to="#">@omnifood_lx</Link>
          </div>
        </div>
        <div className="col span-1-of-4 box">
          <img src="../../images/san-francisco.jpg" alt="San Francisco" />
          <h3>San Francisco</h3>
          <div className="city-feature">
            <i className="icon ion-ios-person icon-small" />
            3700+ happy eaters
          </div>
          <div className="city-feature">
            <i className="icon ion-ios-star icon-small" />
            160+ top chefs
          </div>
          <div className="city-feature">
            <i className="icon ion-logo-twitter icon-small" />
            <Link to="#">@omnifood_sf</Link>
          </div>
        </div>
        <div className="col span-1-of-4 box">
          <img src="../../images/berlin.jpg" alt="Berlin" />
          <h3>Berlin</h3>
          <div className="city-feature">
            <i className="icon ion-ios-person icon-small" />
            2300+ happy eaters
          </div>
          <div className="city-feature">
            <i className="icon ion-ios-star icon-small" />
            110+ top chefs
          </div>
          <div className="city-feature">
            <i className="icon ion-logo-twitter icon-small" />
            <Link to="#">@omnifood_berlin</Link>
          </div>
        </div>
        <div className="col span-1-of-4 box">
          <img src="../../images/london.jpg" alt="London" />
          <h3>London</h3>
          <div className="city-feature">
            <i className="icon ion-ios-person icon-small" />
            1200+ happy eaters
          </div>
          <div className="city-feature">
            <i className="icon ion-ios-star icon-small" />
            50+ top chefs
          </div>
          <div className="city-feature">
            <i className="icon ion-logo-twitter icon-small" />
            <Link to="#">@omnifood_london</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CitySection;
