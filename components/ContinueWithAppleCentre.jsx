import { useMemo } from "react";
import styles from "./ContinueWithAppleCentre.module.css";

const ContinueWithAppleCentre = ({
  continueWithAppleCentreCursor,
  onContinueWithAppleCentreClick,
}) => {
  const continueWithAppleCentreStyle = useMemo(() => {
    return {
      cursor: continueWithAppleCentreCursor,
    };
  }, [continueWithAppleCentreCursor]);

  return (
    <div
      className={styles.continue_with_apple_centre}
      style={continueWithAppleCentreStyle}
      onClick={onContinueWithAppleCentreClick}
    >
      <div className={styles.google_logo3}>
        <img className={styles.path4_icon} alt="" src="/path4.svg" />
      </div>
      <div className={styles.continue_with_apple}>Continue with Apple</div>
    </div>
  );
};

export default ContinueWithAppleCentre;
