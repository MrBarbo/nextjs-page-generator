"use client";
import { useMemo } from "react";
import H2 from "./H2";
import Property1Default1 from "./Property1Default1";
import { useRouter } from 'next/navigation';
import styles from "./WhatWeHave.module.css";

const WhatWeHave = ({
  onClickEvent,

  prodPhot,
  produName,
  productDesc,
  prodPhot1,
  produName1,
  productDesc1,
  prodPhot2,
  produName2,
  productDesc2,
  prodPhot3,
  produName3,
  productDesc3,
  prodPhot4,
  produName4,
  productDesc4,
  prodPhot5,
  produName5,
  productDesc5,
  
  
  onFrameContainer8Click,
  onFrameContainer10Click,
  onFrameContainer14Click,
  onFrameContainer16Click,
}) => {

  return (
    <div className={styles.what_we_have}>
      <H2
        propHeader="Products"
        
      />
      <div className={styles.product_parent}>
        <Property1Default1
          prodPhoto={prodPhot}
          produName={produName}
          productDesc={productDesc}  
          onClickEv={onClickEvent}        
        />
        <Property1Default1
          prodPhoto={prodPhot1}
          produName={produName1}
          productDesc={productDesc1}
          
        />
        <Property1Default1
          prodPhoto={prodPhot2}
          produName={produName2}
          productDesc={productDesc2}
          
        />
        <Property1Default1
          prodPhoto={prodPhot3}
          produName={produName3}
          productDesc={productDesc3}
          
        />
        <Property1Default1
          prodPhoto={prodPhot4}
          produName={produName4}
          productDesc={productDesc4}
          
        />
        <Property1Default1
          prodPhoto={prodPhot5}
          produName={produName5}
          productDesc={productDesc5}
          
        />
      </div>
    </div>
  );
};

export default WhatWeHave;
