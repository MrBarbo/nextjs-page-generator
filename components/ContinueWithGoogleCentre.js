import { useMemo } from "react";
import "./ContinueWithGoogleCentre.css";

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
      className="continue-with-google-centre"
      style={continueWithGoogleCentreStyle}
      onClick={onContinueWithGoogleCentreClick}
    >
      <div className="google-logo">
        <div className="logo-googleg-48dp">
          <img className="shape-icon" alt="" src="/shape.svg" />
          <img className="shape-icon1" alt="" src="/shape1.svg" />
          <img className="shape-icon2" alt="" src="/shape2.svg" />
          <img className="shape-icon3" alt="" src="/shape3.svg" />          
        </div>
      </div>
      <div className="continue-with-google">Continue with Google</div>
    </div>
  );
};

export default ContinueWithGoogleCentre;
