import { useMemo } from "react";
import H2 from "./H2";
import "./WhoWeAre.css";

const WhoWeAre = ({
  textHeader,
  textHeaderColor,
  textHeaderCont,
  image,
  propParagraph,  
}) => {  

  return (
    <div className="who-we-are">
      <H2
        propHeader="¿Who we are?"        
      />
      <div className="lorem-ipsum-dolor-sit-amet-co-parent">
        <div className="lorem-ipsum-dolor-container">
          <span>{textHeader}</span>
          <span
            className="consectetur-adipiscing"            
          >
            {textHeaderColor}
          </span>
          <span>{textHeaderCont}</span>
        </div>
        <div className="image-wrapper">
          <img
            className="image-icon"
            alt=""
            src={image}            
          />
        </div>
      </div>
      <div className="lorem-ipsum-dolor8">
        {propParagraph}
      </div>
    </div>
  );
};

export default WhoWeAre;
