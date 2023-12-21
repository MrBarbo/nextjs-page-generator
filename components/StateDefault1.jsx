import styles from "./StateDefault1.module.css";

const StateDefault1 = ({
  inicio,  
  onHeader,
}) => {
  return (
    <div
      className={styles.statedefault1}
      onClick={onHeader}
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
