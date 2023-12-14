import { useMemo } from "react";
import StateDefault1 from "./StateDefault1";
import StateDefault from "./StateDefault";
import styles from "./Header.module.css";

const Header = ({
  showFrameDiv,    
  onHeaderLinkContainerClick,
}) => {
  
  return (
    <div className={styles.header}>
      <div className={styles.logo_group}>
        <img className={styles.logo_icon1} alt="" src="/logo1@2x.png" />
        <b className={styles.supersite1}>SuperSite</b>        
      </div>
      {showFrameDiv && (
        <div className={styles.header_link_parent}>
          <StateDefault1
            inicio="Home"            
            
            onHeaderLinkContainerClick="unset"
            
          />
          <StateDefault1
            inicio="About us"
            
          />
          <StateDefault1
            inicio="Services"
            
            onHeaderLinkContainerClick="unset"
          />
          <StateDefault1
            inicio="Products"
            
            onHeaderLinkContainerClick
          />
          <StateDefault1
            inicio="Projects"
            onHeaderLinkContainerClick
          />
          <StateDefault/>
        </div>
      )}
    </div>
  );
};

export default Header;
