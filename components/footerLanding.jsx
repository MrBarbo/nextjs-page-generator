import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import styles from "../pages/Landing.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer1}>
        <div className={styles.footer_item} />
        <div className={styles.frame_parent1}>
          <div className={styles.frame_parent2}>
            <div className={styles.frame_parent3}>
              <div className={styles.frame_wrapper1}>
                <div className={styles.logo_container}>
                  <img className={styles.logo_icon2} alt="" src="/logo@2x.png" />
                  <div className={styles.div12}>SuperSite</div>
                </div>
              </div>
              <div className={styles.service_name7}>Lore Ipsum dolor sit amet</div>
            </div>
            <div className={styles.socials_group}>
              <div className={styles.socials1}>Socials</div>
              <img className={styles.frame_item} alt="" src="/group_22.svg" />
            </div>
          </div>
          <div className={styles.copyright1}>© Copyright</div>
        </div>
      </footer>
    );
};
export default Footer;
