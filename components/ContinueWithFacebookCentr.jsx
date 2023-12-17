import { useMemo } from "react";
import styles from "./ContinueWithFacebookCentr.module.css";

const ContinueWithFacebookCentr = ({
  continueWithFacebookCentrCursor,
  googleLogoJustifyContent,
  onContinueWithFacebookCentrClick,
}) => {
  const continueWithFacebookCentrStyle = useMemo(() => {
    return {
      cursor: continueWithFacebookCentrCursor,
    };
  }, [continueWithFacebookCentrCursor]);

  const googleLogoStyle = useMemo(() => {
    return {
      justifyContent: googleLogoJustifyContent,
    };
  }, [googleLogoJustifyContent]);

  return (
    <div
      className={styles.continue_with_facebook_centr}
      style={continueWithFacebookCentrStyle}
      onClick={onContinueWithFacebookCentrClick}
    >
      <div className={styles.google_logo1} style={googleLogoStyle}>
        <img className={styles.path14_icon} alt="" src="/path14.svg" />
      </div>
      <div className={styles.continue_with_facebook}>Continue with Facebook</div>
    </div>
  );
};

export default ContinueWithFacebookCentr;
