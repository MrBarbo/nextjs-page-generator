import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import CreateAccountForm from "../components/CreateAccountForm";
import ContinueWithAppleCentre from "../components/ContinueWithAppleCentre";
import ContinueWithGitCentreFi from "../components/ContinueWithGitCentreFi";
import ContinueWithFacebookCentr from "../components/ContinueWithFacebookCentr";
import ContinueWithGoogleCentre from "../components/ContinueWithGoogleCentre";
import styles from "./LoginPage.module.css";

const LoginPage = () => {
  
  const onContinueWithAppleCentreClick = useCallback(() => {
    // Please sync "Formulario" to the project
  }, []);

  const onContinueWithGitCentreFiClick = useCallback(() => {
    // Please sync "Formulario" to the project
  }, []);

  const onContinueWithFacebookCentrClick = useCallback(() => {
    // Please sync "Formulario" to the project
  }, []);

  const onContinueWithGoogleCentreClick = useCallback(() => {
    // Please sync "Formulario" to the project
  }, []);

  return (
    <div className={styles.loginpage}>
      <img className={styles.frame_icon} alt="" src="/frame@2x.png" />
      <div className={styles.frame}>
        <div className={styles.content}>
          <CreateAccountForm />
          <div className={styles.loginlinks}>
            <ContinueWithAppleCentre
              continueWithAppleCentreCursor="pointer"
              onContinueWithAppleCentreClick={onContinueWithAppleCentreClick}
            />
            <ContinueWithGitCentreFi
              continueWithGitCentreFiCursor="pointer"
              onContinueWithGitCentreFiClick={onContinueWithGitCentreFiClick}
            />
            <ContinueWithFacebookCentr
              continueWithFacebookCentrCursor="pointer"
              googleLogoJustifyContent="center"
              onContinueWithFacebookCentrClick={
                onContinueWithFacebookCentrClick
              }
            />
            <ContinueWithGoogleCentre
              continueWithGoogleCentreCursor="pointer"
              onContinueWithGoogleCentreClick={onContinueWithGoogleCentreClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
