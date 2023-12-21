import { useMemo } from "react";
import styles from "./H2.module.css";

const H2 = ({
  propHeader,  
}) => {
  
  if (propHeader===""){
    return null
  }

  return (
    <div className={styles.h2}>
      <div className={styles.div2}>#</div>
      <div className={styles.lorem_ipsum_dolor4}>
         {propHeader}</div>
    </div>
  );
};

export default H2;
