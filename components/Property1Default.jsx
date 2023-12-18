import { useMemo } from "react";
import StateDefaultTypePrimary from "./StateDefaultTypePrimary";
import styles from "./Property1Default.module.css";
import { useRouter } from 'next/navigation';

const Property1Default = ({
  projFoto,
  projName,
  projDesc, 
  onFrameClick,
}) => {   

  const router = useRouter();

  return (
    <div className={styles.property_1default}>      
      <img
        className={styles.property_1default_child}
        alt=""
        src={projFoto}        
      />
      <div className={styles.project_parent}>
        <div className={styles.project}>Project</div>
        <div className={styles.techs}>techs</div>
      </div>
      <div className={styles.project_name_group}>
        <div className={styles.project_name1}>{projName}</div>
        <div className={styles.lorem_ipsum_dolor}>{projDesc}
        </div>
        <div
          className={styles.button_container}          
          onClick={() => router.push(onFrameClick)}
        >
          <StateDefaultTypePrimary
            go={`Go <~>`}
            goClick={onFrameClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Property1Default;
