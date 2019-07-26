import React from 'react';
import { Link } from 'react-router-dom';

const PlanSection = () => {
  return (
    <section className="section-plans">
      <div className="row">
        <h2>Start eating healthy today</h2>
      </div>
      <div className="row">
        <div className="col span-1-of-3">
          <div className="plan-box">
            <div>
              <h3>Premium</h3>
              <p className="plan-price">
                399$ <span>/ month</span>
              </p>
              <p className="plan-price-meal">That’s only 13.30$ per meal</p>
            </div>
            <div>
              <ul>
                <li>
                  <i className="icon-small ion-ios-checkmark" />1 meal every day
                </li>
                <li>
                  <i className="icon-small ion-ios-checkmark" />
                  Order 24/7
                </li>
                <li>
                  <i className="icon-small ion-ios-checkmark" />
                  Access to newest creations
                </li>
                <li>
                  <i className="icon-small ion-ios-checkmark" />
                  Free delivery
                </li>
              </ul>
            </div>
            <div>
              <Link to="#" className="btn btn-full">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
        <div className="col span-1-of-3">
          <div className="plan-box">
            <div>
              <h3>Pro</h3>
              <p className="plan-price">
                149$ <span>/ month</span>
              </p>
              <p className="plan-price-meal">That’s only 14.90$ per meal</p>
            </div>
            <div>
              <ul>
                <li>
                  <i className="icon-small ion-ios-checkmark" />1 meal 10
                  days/month
                </li>
                <li>
                  <i className="icon-small ion-ios-checkmark" />
                  Order 24/7
                </li>
                <li>
                  <i className="icon-small ion-ios-checkmark" />
                  Access to newest creations
                </li>
                <li>
                  <i className="icon-small ion-ios-checkmark" />
                  Free delivery
                </li>
              </ul>
            </div>
            <div>
              <Link to="#" className="btn btn-ghost">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
        <div className="col span-1-of-3">
          <div className="plan-box">
            <div>
              <h3>Starter</h3>
              <p className="plan-price">
                19$ <span>/ meal</span>
              </p>
              <p className="plan-price-meal">&nbsp;</p>
            </div>
            <div>
              <ul>
                <li>
                  <i className="icon-small ion-ios-checkmark" />1 meal
                </li>
                <li>
                  <i className="icon-small ion-ios-checkmark" />
                  Order from 8 am to 12 pm
                </li>
                <li>
                  <i className="icon-small ion-ios-close" />
                  Access to newest creations
                </li>
                <li>
                  <i className="icon-small ion-ios-checkmark" />
                  Free delivery
                </li>
              </ul>
            </div>
            <div>
              <Link to="#" className="btn btn-ghost">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlanSection;
