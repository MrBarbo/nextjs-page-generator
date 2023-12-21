import { useMemo } from "react";
import H2 from "./H2";
import styles from "./WhoWeAre.module.css";

const WhoWeAre = ({
  textHeader,
  textHeaderColor,
  textHeaderCont,
  image,
  propParagraph,  
}) => {  

  

  return (
    <div className={styles.who_we_are}>
      <H2
        propHeader="¿Who we are?"        
      />
      <div className={styles.lorem_ipsum_dolor_sit_amet_co_parent}>
        <div className={styles.lorem_ipsum_dolor_container}>
          <span>{textHeader}</span>
          <span
            className={styles.consectetur_adipiscing}            
          >
            {textHeaderColor}
          </span>
          <span>{textHeaderCont}</span>
        </div>
        <div className={styles.image_wrapper}>
          <img
            className={styles.image_icon}
            alt=""
            src={image}            
          />
        </div>
      </div>
      <div className={styles.lorem_ipsum_dolor8}>
        {propParagraph}
      </div>
    </div>
  );
};

export default WhoWeAre;
