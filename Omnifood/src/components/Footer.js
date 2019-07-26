import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="row">
        <div className="col span-1-of-2">
          <ul className="footer-nav">
            <li>
              <Link to="#">About Us</Link>
            </li>
            <li>
              <Link to="#">Blog</Link>
            </li>
            <li>
              <Link to="#">Press</Link>
            </li>
            <li>
              <Link to="#">iOS App</Link>
            </li>
            <li>
              <Link to="#">Android App</Link>
            </li>
          </ul>
        </div>
        <div className="col span-1-of-2">
          <div className="social-links">
            <ul>
              <li>
                <Link to="#">
                  <i className="icon ion-logo-facebook" />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="icon ion-logo-instagram" />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="icon ion-logo-googleplus" />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="icon ion-logo-twitter" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <p>Copyright &copy; 2019 by Omnifood. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
