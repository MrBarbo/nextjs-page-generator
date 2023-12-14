import { useMemo } from "react";
import "./StateHoverTypeForm.css";

const StateHoverTypeForm = ({
  prop,
  addService,  
  onServicesContainer3Click,
}) => {
  return (
    <div
      className="service-block-shown"      
      onClick={onServicesContainer3Click}
    >
      <b className="b">
        {prop}
      </b>
      <b className="add-service">
        {addService}
      </b>
    </div>
  );
};

export default StateHoverTypeForm;
