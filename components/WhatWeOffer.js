import { useMemo } from "react";
import H2 from "./H2";
import StateHoverTypeForm from "./StateHoverTypeForm";
import "./WhatWeOffer.css";

const WhatWeOffer = ({
  serviceName,
  serviceDesc,
  serviceName1,
  serviceDesc1,
  serviceName2,
  serviceDesc2,
  serviceName3,
  serviceDesc3,
}) => {
  
  return (
    <section className="what-we-offer">
      <H2
        propHeader="Services"        
      />
      <div className="services-parent">
        <StateHoverTypeForm
          prop={serviceName}
          addService={serviceDesc}          
        />
        <StateHoverTypeForm
          prop={serviceName1}
          addService={serviceDesc1}          
        />
        <StateHoverTypeForm
          prop={serviceName2}
          addService={serviceDesc2}
          
        />
        <StateHoverTypeForm
          prop={serviceName3}
          addService={serviceDesc3}          
        />
      </div>
    </section>
  );
};

export default WhatWeOffer;
