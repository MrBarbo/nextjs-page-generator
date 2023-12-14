import { useMemo } from "react";
import StateDefaultTypePrimary from "./StateDefaultTypePrimary";
import "./Property1Default.css";

const Property1Default = ({
  projFoto,
  projName,
  projDesc, 
  onFrameContainer6Click,
}) => {   
  return (
    <div className="property-1default">      
      <img
        className="property-1default-child"
        alt=""
        src={projFoto}        
      />
      <div className="project-parent">
        <div className="project">Project</div>
        <div className="techs">techs</div>
      </div>
      <div className="project-name-group">
        <div className="project-name1">{projName}</div>
        <div className="lorem-ipsum-dolor">{projDesc}
        </div>
        <div
          className="button-container"          
          onClick={onFrameContainer6Click}
        >
          <StateDefaultTypePrimary
            go={`Go <~>`}
            goClick="unset"
          />
        </div>
      </div>
    </div>
  );
};

export default Property1Default;
