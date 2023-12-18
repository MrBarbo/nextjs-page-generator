import { useMemo } from "react";
import styles from "./ContinueWithGoogleCentre..module.css";

const ContinueWithGoogleCentre = ({
  continueWithGoogleCentreCursor,
  onContinueWithGoogleCentreClick,
}) => {
  const continueWithGoogleCentreStyle = useMemo(() => {
    return {
      cursor: continueWithGoogleCentreCursor,
    };
  }, [continueWithGoogleCentreCursor]);

  return (
    <div
      className={styles.continue_with_google_centre}
      style={continueWithGoogleCentreStyle}
      onClick={onContinueWithGoogleCentreClick}
    >
      <div className={styles.google_logo}>
        <div className={styles.logo_googleg_48dp}>
          <img className={styles.shape_icon} alt="" src="/shape.svg" />
          <img className={styles.shape_icon1} alt="" src="/shape1.svg" />
          <img className={styles.shape_icon2} alt="" src="/shape2.svg" />
          <img className={styles.shape_icon3} alt="" src="/shape3.svg" />          
        </div>
      </div>
      <div className={styles.continue_with_google}>Continue with Google</div>
    </div>
  );
};

export default ContinueWithGoogleCentre;
