import { useMemo } from "react";
import styles from "./Footer.module.css";

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
    <div className={styles.footer} >
      <div className={styles.footer_child} />
      <div className={styles.frame_parent} >
        <div className={styles.frame_group}>
          <div className={styles.frame_container}>
            <div className={styles.frame_wrapper}>
              <div className={styles.logo_parent}>
                <img className={styles.logo_icon} alt="" src="/logo@2x.png" />
                <div className={styles.supersite}>SuperSite</div>
              </div>
            </div>
            <div className={styles.lore_ipsum_dolor}>Lore Ipsum dolor sit amet</div>
          </div>
          <div className={styles.socials_parent}>
            <div className={styles.socials}>Socials</div>
            <div className={styles.email_parent}>
              <img
                className={styles.email_icon}
                alt=""
                src={socialIcon3}
                onClick={onEmailIconClick}
              />
              <img
                className={styles.email_icon}
                alt=""
                src={socialIcon}
                onClick={onLinkedinIconClick}
              />
              <img
                className={styles.instagram_icon}
                alt=""
                src={socialIcon1}
                onClick={onInstagramIconClick}
              />
              <img
                className={styles.email_icon}
                alt=""
                src={socialIcon2}
                onClick={onGithubIconClick}
              />
            </div>
          </div>
        </div>
        <div className={styles.copyright}>© Copyright</div>
      </div>
    </div>
  );
};

export default Footer;
