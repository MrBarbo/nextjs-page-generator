import { useRouter } from "next/navigation";
import { scroller } from 'react-scroll';
import styles from "./Header.module.css";
import StateDefault1 from "./StateDefault1";

const Header = ({
  showFrameDiv,    
  onHeaderClick,
}) => {
  const router = useRouter();
  const scrollTo = (elementName) => {
    scroller.scrollTo(elementName, {
      duration: 1000,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -65,
    });
  };
  
  return (
    <div className={styles.header}>
      <div className={styles.logo_group} onClick={() => router.push("/")}>
        <img className={styles.logo_icon1} alt="" src="/logo1@2x.png" />
        <b className={styles.supersite1}>SuperSite</b>        
      </div>
      {showFrameDiv && (
        <div className={styles.header_link_parent}>
          <StateDefault1
            inicio="Home"            
            onHeader= {() => scrollTo('whoWeAre')}
            
          />
          <StateDefault1
            inicio="About us"
            onHeader={() => scrollTo('ourValues')}
          />
          <StateDefault1
            inicio="Services"
            
            onHeader={() => scrollTo('whatWeOffer')}
          />
          <StateDefault1
            inicio="Products"
            
            onHeader={() => scrollTo('whatWeHave')}
          />
          <StateDefault1
            inicio="Projects"
            onHeader={() => scrollTo('whatWeDo')}
          />  
          <StateDefault1
            inicio="Login/Register"
            onHeader={() => router.push("/LoginPage")}
          />         
        </div>
      )}
    </div>
  );
};

export default Header;
