import { useMemo } from "react";
import H2 from "./H2";
import "./OurValues.css";

const OurValues = ({
  propMis,
  propVis, 
  propObj,  
}) => {  

  return (
    <div className="our-values">
      <H2
        propHeader="Our Values"        
      />
      <div className="titles">
        <div className="titles1">Mission</div>
      </div>
      <div className="lorem-ipsum-dolor-sit-amet-co">
        <div className="lorem-ipsum-dolor5">{propMis}</div>
      </div>
      <div className="titles2">
        <div className="titles1">Vission</div>
      </div>
      <div className="lorem-ipsum-dolor-sit-amet-co1">
        <div className="lorem-ipsum-dolor5">{propVis}</div>
      </div>
      <div className="titles4">
        <div className="titles1">Objectives</div>
      </div>
      <div className="lorem-ipsum-dolor-sit-amet-co2">
        <div className="lorem-ipsum-dolor5">{propObj}</div>
      </div>
    </div>
  );
};

export default OurValues;
