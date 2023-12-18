import { useMemo } from "react";
import styles from "./Property1Form1.module.css";

const Property1Form1 = ({
  rectangle22,
  
  productName,
  shortDescription,
  productLink,

}) => {

  return (
    <div className={styles.property_1form1}>
      <img
        className={styles.property_1form_item}
        alt=""
        src={rectangle22}        
      />
      <div className={styles.product_name_parent}>
        <div className={styles.product_name}>
          {productName}
        </div>
        <div className={styles.short_description_container}>
          <div className={styles.product_link}>
            {shortDescription}
          </div>
        </div>
        <div className={styles.short_description_container}>
          <div className={styles.product_link}>
            {productLink}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property1Form1;
