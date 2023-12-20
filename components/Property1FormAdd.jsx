import { useMemo } from "react";
import styles from "./Property1FormAdd.module.css";

const Property1FormAdd = ({ 
  
  onClickEv
}) => {
 

  return (
    <div className={styles.property_1form_add}>
      <img
        className={styles.property_1form_add_child}
        alt=""
        src="/rectangle_22@2x.png"
      />
      <div
        className={styles.parent}        
        onClick={onClickEv}
      >
        <div className={styles.div}>+</div>
        <div className={styles.add_project}>Add Project</div>
      </div>
    </div>
  );
};

export default Property1FormAdd;
