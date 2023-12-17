import { useMemo } from "react";
import styles from "./ContinueWithGitCentreFi.module.css";

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
      className={styles.continue_with_git_centre}
      style={continueWithGitCentreFiStyle}
      onClick={onContinueWithGitCentreFiClick}
    >
      <div className={styles.google_logo2}>
        <img className={styles.github_142_icon} alt="" src="/github142.svg" />
      </div>
      <div className={styles.continue_with_github}>Continue with GitHub</div>
    </div>
  );
};

export default ContinueWithGitCentreFi;
