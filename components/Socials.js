import { useMemo } from "react";
import H2 from "./H2";
import "./Socials.css";

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
    <div className="socials1" style={socialsStyle}>
      <H2
        loremIpsumDolorSitAmet="Socials"
        h2AlignSelf="unset"
        h2ZIndex="unset"
        h2JustifyContent="flex-start"
      />
      <div className="frame-div" style={frameDiv2Style}>
        <div className="discord-parent">
          <img className="discord-icon" alt="" src="/discord.svg" />
          <div className="rectangle-wrapper">
            <div className="instance-child" style={rectangleDivStyle} />
          </div>
        </div>
        <div className="facebook-parent">
          <img className="facebook-icon" alt="" src="/facebook.svg" />
          <div className="rectangle-wrapper">
            <div className="instance-child" style={rectangleDiv1Style} />
          </div>
        </div>
        <div className="linkedin-parent">
          <img
            className="linkedin-icon1"
            alt=""
            src="/linkedin.svg"
            onClick={onLinkedinIconClick}
            style={linkedinIconStyle}
          />
          <div className="rectangle-wrapper">
            <div className="instance-child" style={rectangleDiv2Style} />
          </div>
        </div>
        <div className="instagram-parent">
          <img
            className="instagram-icon1"
            alt=""
            src="/instagram.svg"
            onClick={onInstagramIconClick}
            style={instagramIconStyle}
          />
          <div className="rectangle-wrapper">
            <div className="instance-child" style={rectangleDiv3Style} />
          </div>
        </div>
        <div className="github-parent">
          <img
            className="linkedin-icon1"
            alt=""
            src="/github.svg"
            onClick={onGithubIconClick}
            style={githubIconStyle}
          />
          <div className="rectangle-wrapper">
            <div className="instance-child" style={rectangleDiv4Style} />
          </div>
        </div>
        <div className="email-group">
          <img
            className="linkedin-icon1"
            alt=""
            src="/email.svg"
            onClick={onEmailIconClick}
            style={emailIconStyle}
          />
          <div className="rectangle-wrapper">
            <div className="instance-child" style={rectangleDiv5Style} />
          </div>
        </div>
        <div className="telegram-parent">
          <img className="discord-icon" alt="" src="/telegram.svg" />
          <div className="rectangle-wrapper">
            <div className="instance-child" style={rectangleDiv6Style} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Socials;
