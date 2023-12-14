import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import "../pages/Landing.css";

const Footer = () => {
    return (
        <footer className="footer1">
        <div className="footer-item" />
        <div className="frame-parent1">
          <div className="frame-parent2">
            <div className="frame-parent3">
              <div className="frame-wrapper1">
                <div className="logo-container">
                  <img className="logo-icon2" alt="" src="/logo@2x.png" />
                  <div className="div12">SuperSite</div>
                </div>
              </div>
              <div className="service-name7">Lore Ipsum dolor sit amet</div>
            </div>
            <div className="socials-group">
              <div className="socials1">Socials</div>
              <img className="frame-item" alt="" src="/group-22.svg" />
            </div>
          </div>
          <div className="copyright1">© Copyright</div>
        </div>
      </footer>
    );
};
export default Footer;
