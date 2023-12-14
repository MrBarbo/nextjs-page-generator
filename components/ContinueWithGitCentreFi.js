import { useMemo } from "react";
import "./ContinueWithGitCentreFi.css";

const ContinueWithGitCentreFi = ({
  continueWithGitCentreFiCursor,
  onContinueWithGitCentreFiClick,
}) => {
  const continueWithGitCentreFiStyle = useMemo(() => {
    return {
      cursor: continueWithGitCentreFiCursor,
    };
  }, [continueWithGitCentreFiCursor]);

  return (
    <div
      className="continue-with-git-centre"
      style={continueWithGitCentreFiStyle}
      onClick={onContinueWithGitCentreFiClick}
    >
      <div className="google-logo2">
        <img className="github-142-icon" alt="" src="/github142.svg" />
      </div>
      <div className="continue-with-github">Continue with GitHub</div>
    </div>
  );
};

export default ContinueWithGitCentreFi;
