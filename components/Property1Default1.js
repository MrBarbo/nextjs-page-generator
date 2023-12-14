import { useMemo } from "react";
import StateDefaultTypePrimary from "./StateDefaultTypePrimary";
import "./Property1Default1.css";

const Property1Default1 = ({
  prodPhoto,
  produName,
  productDesc,  

  onClickEvent,
}) => {

  return (
    <div className="property-1default1">
      <img
        className="property-1default-item"
        alt=""
        src={prodPhoto}
      />
      <div className="produ-name-parent">
        <div className="produ-name">{produName}</div>
        <div className="lorem-ipsum-dolor1">{productDesc}
        </div>
        <div
          className="button-container"          
          onClick="unset"
        >
          <StateDefaultTypePrimary
            go={`Go <~>`}
            goClick= {onClickEvent}
          />
        </div>
      </div>
    </div>
  );
};

export default Property1Default1;
