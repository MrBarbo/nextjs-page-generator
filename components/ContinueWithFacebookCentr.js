import { useMemo } from "react";
import "./ContinueWithFacebookCentr.css";

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
      className="continue-with-facebook-centr"
      style={continueWithFacebookCentrStyle}
      onClick={onContinueWithFacebookCentrClick}
    >
      <div className="google-logo1" style={googleLogoStyle}>
        <img className="path14-icon" alt="" src="/path14.svg" />
      </div>
      <div className="continue-with-facebook">Continue with Facebook</div>
    </div>
  );
};

export default ContinueWithFacebookCentr;
