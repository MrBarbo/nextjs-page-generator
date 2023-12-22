import H2 from "./H2";
import Property1Default from "./Property1Default";
import styles from "./WhatWeDo.module.css";

const WhatWeDo = ({
  projFoto,
  projTechs,
  projName,
  projDesc,
  projLink,
  projFoto1,
  projTechs1,
  projName1,
  projDesc1,
  projLink1,
  projFoto2,
  projTechs2,
  projName2,
  projDesc2,
  projLink2,
  projFoto3,  
  projTechs3,
  projName3,
  projDesc3,
  projLink3,
  projFoto4,
  projTechs4,
  projName4,
  projDesc4,
  projLink4,
  projFoto5,
  projTechs5,
  projName5,
  projDesc5,
  projLink5,
}) => {

  if(projName===""&&projDesc===""||!projName){
    return null;
  }  
  return (
    <div className={styles.what_we_do}>
      <H2
        propHeader="Proyectos"        
      />
      <div className={styles.project_group}>
        <Property1Default
          projTechs={projTechs}
          projFoto={projFoto}
          projName={projName}
          projDesc={projDesc}       
          onFrameClick={projLink}          
        />
        <Property1Default
          projTechs={projTechs1}
          projFoto={projFoto1}
          projName={projName1}
          projDesc={projDesc1}
          onFrameClick={projLink1}     
        />
        <Property1Default
          projTechs={projTechs2}
          projFoto={projFoto2}
          projName={projName2}
          projDesc={projDesc2}
          onFrameClick={projLink2}  
        />
        <Property1Default
          projTechs={projTechs3}
          projFoto={projFoto3}
          projName={projName3}
          projDesc={projDesc3}
          onFrameClick={projLink3}  
        />
        <Property1Default
          projTechs={projTechs4}
          projFoto={projFoto4}
          projName={projName4}
          projDesc={projDesc4}
          onFrameClick={projLink4}  
        />
        <Property1Default
          projTechs={projTechs5}
          projFoto={projFoto5}
          projName={projName5}
          projDesc={projDesc5}
          onFrameClick={projLink5}  
        />
      </div>
    </div>
  );
};

export default WhatWeDo;
