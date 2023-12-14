import { useMemo } from "react";
import "./Property1Form.css";

const Property1Form = ({
  rectangle22,
  projectName,
  shortDescription,
  technologies,
  projectLink,
  property1FormBoxSizing,
  frameDivBoxSizing,
  projectNameFontSize,
  projectNameFontWeight,
  projectNameFontFamily,
  projectNameColor,
  projectNameTextAlign,
  projectNameDisplay,
  shortDescriptionFontSize,
  shortDescriptionFontFamily,
  shortDescriptionColor,
  shortDescriptionTextAlign,
  shortDescriptionDisplay,
  technologiesFontSize,
  technologiesFontFamily,
  technologiesColor,
  technologiesTextAlign,
  technologiesDisplay,
  projectLinkFontSize,
  projectLinkFontFamily,
  projectLinkColor,
  projectLinkTextAlign,
  projectLinkDisplay,
}) => {
  const property1FormStyle = useMemo(() => {
    return {
      boxSizing: property1FormBoxSizing,
    };
  }, [property1FormBoxSizing]);

  const frameDiv4Style = useMemo(() => {
    return {
      boxSizing: frameDivBoxSizing,
    };
  }, [frameDivBoxSizing]);

  const projectNameStyle = useMemo(() => {
    return {
      fontSize: projectNameFontSize,
      fontWeight: projectNameFontWeight,
      fontFamily: projectNameFontFamily,
      color: projectNameColor,
      textAlign: projectNameTextAlign,
      display: projectNameDisplay,
    };
  }, [
    projectNameFontSize,
    projectNameFontWeight,
    projectNameFontFamily,
    projectNameColor,
    projectNameTextAlign,
    projectNameDisplay,
  ]);

  const shortDescriptionStyle = useMemo(() => {
    return {
      fontSize: shortDescriptionFontSize,
      fontFamily: shortDescriptionFontFamily,
      color: shortDescriptionColor,
      textAlign: shortDescriptionTextAlign,
      display: shortDescriptionDisplay,
    };
  }, [
    shortDescriptionFontSize,
    shortDescriptionFontFamily,
    shortDescriptionColor,
    shortDescriptionTextAlign,
    shortDescriptionDisplay,
  ]);

  const technologiesStyle = useMemo(() => {
    return {
      fontSize: technologiesFontSize,
      fontFamily: technologiesFontFamily,
      color: technologiesColor,
      textAlign: technologiesTextAlign,
      display: technologiesDisplay,
    };
  }, [
    technologiesFontSize,
    technologiesFontFamily,
    technologiesColor,
    technologiesTextAlign,
    technologiesDisplay,
  ]);

  const projectLinkStyle = useMemo(() => {
    return {
      fontSize: projectLinkFontSize,
      fontFamily: projectLinkFontFamily,
      color: projectLinkColor,
      textAlign: projectLinkTextAlign,
      display: projectLinkDisplay,
    };
  }, [
    projectLinkFontSize,
    projectLinkFontFamily,
    projectLinkColor,
    projectLinkTextAlign,
    projectLinkDisplay,
  ]);

  return (
    <div className="property-1form" style={property1FormStyle}>
      <img className="property-1form-child" alt="" src={rectangle22} />
      <div className="project-name-parent" style={frameDiv4Style}>
        <div className="project-name" style={projectNameStyle}>
          {projectName}
        </div>
        <div className="short-description-wrapper">
          <div className="short-description" style={shortDescriptionStyle}>
            {shortDescription}
          </div>
        </div>
        <div className="short-description-wrapper">
          <div className="short-description" style={technologiesStyle}>
            {technologies}
          </div>
        </div>
        <div className="short-description-wrapper">
          <div className="short-description" style={projectLinkStyle}>
            {projectLink}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property1Form;
