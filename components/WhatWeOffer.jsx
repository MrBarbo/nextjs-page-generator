import { useMemo } from "react";
import H2 from "./H2";
import StateHoverTypeForm from "./StateHoverTypeForm";
import styles from "./WhatWeOffer.module.css";

const   WhatWeOffer = ({
  serviceName,
  serviceDesc,
  serviceName1,
  serviceDesc1,
  serviceName2,
  serviceDesc2,
  serviceName3,
  serviceDesc3,
}) => {

  if(serviceName===""&&serviceDesc===""||!serviceName){
    return null;
  }  
  
  return (
    <section className={styles.what_we_offer}>
      <H2
        propHeader="Servicios"        
      />
      <div className={styles.services_parent}>
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
