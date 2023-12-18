import { useMemo } from "react";
import H2 from "./H2";
import styles from "./Socials.module.css";

const Socials = ({
  socialsAlignItems,
  frameDivFlex,
  frameDivAlignItems,
  frameDivJustifyContent,
  frameDivGap,
  rectangleDivBackgroundColor,
  rectangleDivBackgroundColor1,
  linkedinIconCursor,
  rectangleDivBackgroundColor2,
  instagramIconCursor,
  rectangleDivBackgroundColor3,
  githubIconCursor,
  rectangleDivBackgroundColor4,
  emailIconCursor,
  rectangleDivBackgroundColor5,
  rectangleDivBackgroundColor6,
  onLinkedinIconClick,
  onInstagramIconClick,
  onGithubIconClick,
  onEmailIconClick,
}) => {
  const socialsStyle = useMemo(() => {
    return {
      alignItems: socialsAlignItems,
    };
  }, [socialsAlignItems]);

  const frameDiv2Style = useMemo(() => {
    return {
      flex: frameDivFlex,
      alignItems: frameDivAlignItems,
      justifyContent: frameDivJustifyContent,
      gap: frameDivGap,
    };
  }, [frameDivFlex, frameDivAlignItems, frameDivJustifyContent, frameDivGap]);

  const rectangleDivStyle = useMemo(() => {
    return {
      backgroundColor: rectangleDivBackgroundColor,
    };
  }, [rectangleDivBackgroundColor]);

  const rectangleDiv1Style = useMemo(() => {
    return {
      backgroundColor: rectangleDivBackgroundColor1,
    };
  }, [rectangleDivBackgroundColor1]);

  const linkedinIconStyle = useMemo(() => {
    return {
      cursor: linkedinIconCursor,
    };
  }, [linkedinIconCursor]);

  const rectangleDiv2Style = useMemo(() => {
    return {
      backgroundColor: rectangleDivBackgroundColor2,
    };
  }, [rectangleDivBackgroundColor2]);

  const instagramIconStyle = useMemo(() => {
    return {
      cursor: instagramIconCursor,
    };
  }, [instagramIconCursor]);

  const rectangleDiv3Style = useMemo(() => {
    return {
      backgroundColor: rectangleDivBackgroundColor3,
    };
  }, [rectangleDivBackgroundColor3]);

  const githubIconStyle = useMemo(() => {
    return {
      cursor: githubIconCursor,
    };
  }, [githubIconCursor]);

  const rectangleDiv4Style = useMemo(() => {
    return {
      backgroundColor: rectangleDivBackgroundColor4,
    };
  }, [rectangleDivBackgroundColor4]);

  const emailIconStyle = useMemo(() => {
    return {
      cursor: emailIconCursor,
    };
  }, [emailIconCursor]);

  const rectangleDiv5Style = useMemo(() => {
    return {
      backgroundColor: rectangleDivBackgroundColor5,
    };
  }, [rectangleDivBackgroundColor5]);

  const rectangleDiv6Style = useMemo(() => {
    return {
      backgroundColor: rectangleDivBackgroundColor6,
    };
  }, [rectangleDivBackgroundColor6]);

  return (
    <div className={styles.socials1} style={socialsStyle}>
      <H2
        propHeader="Socials"        
      />
      <div className={styles.frame_div} style={frameDiv2Style}>
        <div className={styles.discord_parent}>
          <img className={styles.discord_icon} alt="" src="/discord.svg" />
          <div className={styles.rectangle_wrapper}>
            <div className={styles.instance_child} style={rectangleDivStyle} />
          </div>
        </div>
        <div className={styles.facebook_parent}>
          <img className={styles.facebook_icon} alt="" src="/facebook.svg" />
          <div className={styles.rectangle_wrapper}>
            <div className={styles.instance_child} style={rectangleDiv1Style} />
          </div>
        </div>
        <div className={styles.linkedin_parent}>
          <img
            className={styles.linkedin_icon1}
            alt=""
            src="/linkedin.svg"
            onClick={onLinkedinIconClick}
            style={linkedinIconStyle}
          />
          <div className={styles.rectangle_wrapper}>
            <div className={styles.instance_child} style={rectangleDiv2Style} />
          </div>
        </div>
        <div className={styles.instagram_parent}>
          <img
            className={styles.instagram_icon1}
            alt=""
            src="/instagram.svg"
            onClick={onInstagramIconClick}
            style={instagramIconStyle}
          />
          <div className={styles.rectangle_wrapper}>
            <div className={styles.instance_child} style={rectangleDiv3Style} />
          </div>
        </div>
        <div className={styles.github_parent}>
          <img
            className={styles.linkedin_icon1}
            alt=""
            src="/github.svg"
            onClick={onGithubIconClick}
            style={githubIconStyle}
          />
          <div className={styles.rectangle_wrapper}>
            <div className={styles.instance_child} style={rectangleDiv4Style} />
          </div>
        </div>
        <div className={styles.email_group}>
          <img
            className={styles.linkedin_icon1}
            alt=""
            src="/email.svg"
            onClick={onEmailIconClick}
            style={emailIconStyle}
          />
          <div className={styles.rectangle_wrapper}>
            <div className={styles.instance_child} style={rectangleDiv5Style} />
          </div>
        </div>
        <div className={styles.telegram_parent}>
          <img className={styles.discord_icon} alt="" src="/telegram.svg" />
          <div className={styles.rectangle_wrapper}>
            <div className={styles.instance_child} style={rectangleDiv6Style} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Socials;
