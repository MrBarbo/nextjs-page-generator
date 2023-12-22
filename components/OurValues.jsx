import { useMemo } from "react";
import H2 from "./H2";
import styles from "./OurValues.module.css";

const OurValues = ({
  propMis,
  propVis, 
  propObj,  
}) => {
  if(propMis===""&&propVis===""&&propObj===""||!propMis){
    return null;
  }  

  return (
    <div className={styles.our_values}>
      <H2
        propHeader="Nuestros valores"        
      />
      <div className={styles.titles}>
        <div className={styles.titles1}>Mission</div>
      </div>
      <div className={styles.lorem_ipsum_dolor_sit_amet_co}>
        <div className={styles.lorem_ipsum_dolor5}>{propMis}</div>
      </div>
      <div className={styles.titles2}>
        <div className={styles.titles1}>Vission</div>
      </div>
      <div className={styles.lorem_ipsum_dolor_sit_amet_co1}>
        <div className={styles.lorem_ipsum_dolor5}>{propVis}</div>
      </div>
      <div className={styles.titles4}>
        <div className={styles.titles1}>Objectives</div>
      </div>
      <div className={styles.lorem_ipsum_dolor_sit_amet_co2}>
        <div className={styles.lorem_ipsum_dolor5}>{propObj}</div>
      </div>
    </div>
  );
};

export default OurValues;
