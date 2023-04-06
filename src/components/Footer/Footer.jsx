import { GrFacebook } from 'react-icons/gr';

import './footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="social-row">
          <span>Follow us! We're friendly:</span>
          <a className="social-link" href="#">
            <img
              src="https://assets.taskrabbit.com/v3/assets/web/icons/facebook-white-14587e3307c05b8b2c129aba84842f81b8da82f5190435a3e9241bee3184342b.svg"
              alt=""
            />
          </a>
          |
          <a className="social-link" href="#">
            <img
              src="https://assets.taskrabbit.com/v3/assets/web/icons/twitter-white-840a388a6dfc95fefccb5767afb4f65e1ac846649c7d79019b7293692ebc7615.svg"
              alt=""
            />
          </a>
          |
          <a className="social-link" href="#">
            <img
              src="https://assets.taskrabbit.com/v3/assets/web/icons/instagram-white-3291191b9be780876b7e626737343ebaf9f94c298b1080d88edee6b68d923342.svg"
              alt=""
            />
          </a>
        </div>
        <div className="footer-content">
          <div className="footer-column">
            <span className="footer-title">Discover</span>
            <div className="links">
              <a href="#" className="box-no-padding">
                Become a Tasker
              </a>
              <a href="#" className="box-no-padding">
                Services By City
              </a>
              <a href="#" className="box-no-padding">
                All Services
              </a>
              <a href="#" className="box-no-padding">
                Elite Taskers
              </a>
              <a href="#" className="box-no-padding">
                Help
              </a>
            </div>
          </div>
          <div className="footer-column">
            <span className="footer-title">Company</span>
            <div className="links">
              <a href="#" className="box-no-padding">
                About Us
              </a>
              <a href="#" className="box-no-padding">
                Careers
              </a>
              <a href="#" className="box-no-padding">
                Press
              </a>
              <a href="#" className="box-no-padding">
                TaskRabbit For Good
              </a>
              <a href="#" className="box-no-padding">
                Blog
              </a>
              <a href="#" className="box-no-padding">
                Terms & Privacy
              </a>
              <a href="#" className="box-no-padding">
                California Consumer Notice
              </a>
              <a href="#" className="box-no-padding">
                Do Not Sell My Personal Information
              </a>
            </div>
          </div>
          <div className="footer-column">
            <div className="mobile-apps">
              <span className="footer-title">Download our app</span>
              <p className="apps-message">
                Tackle your to-do list wherever you are with our mobile app.
              </p>
              <a href="" className="box-no-padding appstore-badge">
                <img
                  src="https://assets.taskrabbit.com/v3/assets/web/en-US/appstore_badge-86c9954e1457d27db013c1f10a96ffaba845e5af7765c4ef9df4ac1549e47d67.svg"
                  alt=""
                />
              </a>
              <a href="" className="box-no-padding appstore-badge">
                <img
                  src="https://assets.taskrabbit.com/v3/assets/web/en-US/google_play_badge-49e6ea4ba78ca19b1246873b3369891cb6e289515c11418f1fce4cb3a694c18a.svg"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
