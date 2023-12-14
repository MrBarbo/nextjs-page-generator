import { useMemo } from "react";
import "./Footer.css";

const Footer = ({
  socialIcon,
  socialIcon1,
  socialIcon2,
  socialIcon3,

  onEmailIconClick,
  onLinkedinIconClick,
  onInstagramIconClick,
  onGithubIconClick,
}) => {
  return (
    <div className="footer" >
      <div className="footer-child" />
      <div className="frame-parent" >
        <div className="frame-group">
          <div className="frame-container">
            <div className="frame-wrapper">
              <div className="logo-parent">
                <img className="logo-icon" alt="" src="/logo@2x.png" />
                <div className="supersite">SuperSite</div>
              </div>
            </div>
            <div className="lore-ipsum-dolor">Lore Ipsum dolor sit amet</div>
          </div>
          <div className="socials-parent">
            <div className="socials">Socials</div>
            <div className="email-parent">
              <img
                className="email-icon"
                alt=""
                src={socialIcon3}
                onClick={onEmailIconClick}
              />
              <img
                className="email-icon"
                alt=""
                src={socialIcon}
                onClick={onLinkedinIconClick}
              />
              <img
                className="instagram-icon"
                alt=""
                src={socialIcon1}
                onClick={onInstagramIconClick}
              />
              <img
                className="email-icon"
                alt=""
                src={socialIcon2}
                onClick={onGithubIconClick}
              />
            </div>
          </div>
        </div>
        <div className="copyright">© Copyright</div>
      </div>
    </div>
  );
};

export default Footer;
