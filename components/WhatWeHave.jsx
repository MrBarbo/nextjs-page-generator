"use client";
import H2 from "./H2";
import Property1Default1 from "./Property1Default1";
import styles from "./WhatWeHave.module.css";

const WhatWeHave = ({
  onClickEvent,

  prodPhot,
  produName,
  productDesc,
  prodLink,
  prodPhot1,
  produName1,
  productDesc1,
  prodLink1,
  prodPhot2,
  produName2,
  productDesc2,
  prodLink2,
  prodPhot3,
  produName3,
  productDesc3,
  prodLink3,
  prodPhot4,
  produName4,
  productDesc4,
  prodLink4,
  prodPhot5,
  produName5,
  productDesc5,
  prodLink5,
  
  
  
}) => {

  if(produName===""&&productDesc===""||!produName){
    return null;
  }  
  return (
    <div className={styles.what_we_have}>
      <H2
        propHeader="Productos"
        
      />
      <div className={styles.product_parent}>
        <Property1Default1
          prodPhoto={prodPhot}
          produName={produName}
          productDesc={productDesc}  
          onClickEv={prodLink}        
        />
        <Property1Default1
          prodPhoto={prodPhot1}
          produName={produName1}
          productDesc={productDesc1}
          onClickEv={prodLink1}  
          
        />
        <Property1Default1
          prodPhoto={prodPhot2}
          produName={produName2}
          productDesc={productDesc2}
          onClickEv={prodLink2}  
        />
        <Property1Default1
          prodPhoto={prodPhot3}
          produName={produName3}
          productDesc={productDesc3}
          onClickEv={prodLink3}  
        />
        <Property1Default1
          prodPhoto={prodPhot4}
          produName={produName4}
          productDesc={productDesc4}
          onClickEv={prodLink4}  
        />
        <Property1Default1
          prodPhoto={prodPhot5}
          produName={produName5}
          productDesc={productDesc5}
          onClickEv={prodLink5}  
        />
      </div>
    </div>
  );
};

export default WhatWeHave;
