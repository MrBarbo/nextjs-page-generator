import { useMemo } from "react";
import "./ContinueWithAppleCentre.css";

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
      className="continue-with-apple-centre"
      style={continueWithAppleCentreStyle}
      onClick={onContinueWithAppleCentreClick}
    >
      <div className="google-logo3">
        <img className="path4-icon" alt="" src="/path4.svg" />
      </div>
      <div className="continue-with-apple">Continue with Apple</div>
    </div>
  );
};

export default ContinueWithAppleCentre;
