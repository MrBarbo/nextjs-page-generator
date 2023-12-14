import { useMemo } from "react";
import StateDefault1 from "./StateDefault1";
import StateDefault from "./StateDefault";
import "./Header.css";

const Header = ({
  showFrameDiv,    
  onHeaderLinkContainerClick,
}) => {
  
  return (
    <div className="header">
      <div className="logo-group">
        <img className="logo-icon1" alt="" src="/logo1@2x.png" />
        <b className="supersite1">SuperSite</b>        
      </div>
      {showFrameDiv && (
        <div className="header-link-parent">
          <StateDefault1
            inicio="Home"            
            divColor="var(--primary)"
            divFontWeight="500"
            inicioColor="var(--white)"
            onHeaderLinkContainerClick="unset"
            
          />
          <StateDefault1
            inicio="About us"
            stateDefaultFlex="1"            
            divColor="var(--primary)"
            divFontWeight="unset"
            inicioColor="#var(--gray)"
            inicioFontWeight="unset"
          />
          <StateDefault1
            inicio="Services"
            divColor="var(--primary)"
            divFontWeight="unset"
            inicioColor="var(--gray)"
            onHeaderLinkContainerClick="unset"
          />
          <StateDefault1
            inicio="Products"
            divColor="var(--primary)"
            divFontWeight="unset"
            inicioColor="var(--gray)"
            onHeaderLinkContainerClick
          />
          <StateDefault1
            inicio="Projects"
            divColor="var(--primary)"
            divFontWeight="unset"
            inicioColor="var(--gray)"
            onHeaderLinkContainerClick
          />
          <StateDefault/>
        </div>
      )}
    </div>
  );
};

export default Header;
