"use client";
import { useCallback } from "react";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Property1Form from "./Property1Form";
import Property1FormAdd from "./Property1FormAdd";
import StateDefaultTypePrimary from "./StateDefaultTypePrimary";
import "./ProjectFormContainer.css";
import { useRouter } from 'next/navigation'

const ProjectFormContainer = () => {
  const router = useRouter()

  const onFrameContainer32Click = useCallback(() => {() => router.push('/Prefab')});

  return (
    <div className="project-container">
      <Property1Form
        rectangle22="/rectangle-22@2x.png"
        property1FormBoxSizing="border-box"
        frameDivBoxSizing="border-box"
        projectNameFontSize="unset"
        projectNameFontWeight="unset"
        projectNameFontFamily="unset"
        projectNameColor="unset"
        projectNameTextAlign="unset"
        projectNameDisplay="unset"
        shortDescriptionFontSize="unset"
        shortDescriptionFontFamily="unset"
        shortDescriptionColor="unset"
        shortDescriptionTextAlign="unset"
        shortDescriptionDisplay="unset"
        technologiesFontSize="unset"
        technologiesFontFamily="unset"
        technologiesColor="unset"
        technologiesTextAlign="unset"
        technologiesDisplay="unset"
        projectLinkFontSize="unset"
        projectLinkFontFamily="unset"
        projectLinkColor="unset"
        projectLinkTextAlign="unset"
        projectLinkDisplay="unset"
      />
      <Property1Form
        rectangle22="/rectangle-225@2x.png"
        property1FormBoxSizing="border-box"
        frameDivBoxSizing="border-box"
        projectNameFontSize="unset"
        projectNameFontWeight="unset"
        projectNameFontFamily="unset"
        projectNameColor="unset"
        projectNameTextAlign="unset"
        projectNameDisplay="unset"
        shortDescriptionFontSize="unset"
        shortDescriptionFontFamily="unset"
        shortDescriptionColor="unset"
        shortDescriptionTextAlign="unset"
        shortDescriptionDisplay="unset"
        technologiesFontSize="unset"
        technologiesFontFamily="unset"
        technologiesColor="unset"
        technologiesTextAlign="unset"
        technologiesDisplay="unset"
        projectLinkFontSize="unset"
        projectLinkFontFamily="unset"
        projectLinkColor="unset"
        projectLinkTextAlign="unset"
        projectLinkDisplay="unset"
      />
      <Property1FormAdd
        frameDivCursor="pointer"
        onFrameContainer32Click={onFrameContainer32Click}
      />
      <div className="project1">
        <img className="project-child" alt="" src="/rectangle-22@2x.png" />
        <div className="project-parent1">
          <div className="project2">Project</div>
          <div className="techs1">techs</div>
        </div>
        <div className="project-name-container">
          <div className="project-name2">Project Name</div>
          <div className="lorem-ipsum-dolor11">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus
            vel facilisis volutpat est velit egestas dui id ornare.
          </div>
          <div className="button-wrapper3">
            <StateDefaultTypePrimary
              go={`Go <~>`}
              stateDefaultTypePrimaryAlignItems="center"
              stateDefaultTypePrimaryJustifyContent="center"
              stateDefaultTypePrimaryFlex="1"
              stateDefaultTypePrimaryWidth="unset"
              goFontSize="16px"
              goTextAlign="left"
              goFlex="unset"
            />
          </div>
        </div>
      </div>
      <div className="project1">
        <img className="project-child" alt="" src="/rectangle-22@2x.png" />
        <div className="project-parent1">
          <div className="project2">Project</div>
          <div className="techs1">techs</div>
        </div>
        <div className="project-name-container">
          <div className="project-name2">Project Name</div>
          <div className="lorem-ipsum-dolor11">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus
            vel facilisis volutpat est velit egestas dui id ornare.
          </div>
          <div className="button-wrapper3">
            <StateDefaultTypePrimary
              go={`Go <~>`}
              stateDefaultTypePrimaryAlignItems="center"
              stateDefaultTypePrimaryJustifyContent="center"
              stateDefaultTypePrimaryFlex="1"
              stateDefaultTypePrimaryWidth="unset"
              goFontSize="16px"
              goTextAlign="left"
              goFlex="unset"
            />
          </div>
        </div>
      </div>
      <div className="project1">
        <img className="project-child" alt="" src="/rectangle-22@2x.png" />
        <div className="project-parent1">
          <div className="project2">Project</div>
          <div className="techs1">techs</div>
        </div>
        <div className="project-name-container">
          <div className="project-name2">Project Name</div>
          <div className="lorem-ipsum-dolor11">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus
            vel facilisis volutpat est velit egestas dui id ornare.
          </div>
          <div className="button-wrapper3">
            <StateDefaultTypePrimary
              go={`Go <~>`}
              stateDefaultTypePrimaryAlignItems="center"
              stateDefaultTypePrimaryJustifyContent="center"
              stateDefaultTypePrimaryFlex="1"
              stateDefaultTypePrimaryWidth="unset"
              goFontSize="16px"
              goTextAlign="left"
              goFlex="unset"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectFormContainer;
