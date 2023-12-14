import { useMemo } from "react";
import styles from "./StateDefault1.module.css";

const StateDefault1 = ({
  inicio,  

  
  onHeaderLinkContainerClick,
}) => {
  return (
    <div
      className={styles.statedefault1}
      onClick={onHeaderLinkContainerClick}
    >
      <div className={styles.div3}>
        #
      </div>
      <div className={styles.inicio}>
        {inicio}
      </div>
    </div>
  );
};

export default StateDefault1;
