import { useMemo } from "react";
import styles from "./StateDefault.module.css";
import LanguageSelector from "./LanguageSelector"

const StateDefault = ({ stateDefaultFlex}) => {

  return (
    <div className={styles.statedefault}>
      <div className={styles.es}></div>      
      <LanguageSelector></LanguageSelector>      
    </div>
  );
};

export default StateDefault;
