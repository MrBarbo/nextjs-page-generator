import { useRouter } from 'next/navigation';
import styles from "./Property1Default.module.css";
import StateDefaultTypePrimary from "./StateDefaultTypePrimary";

const Property1Default = ({
  projFoto,
  projTechs,
  projName,
  projDesc, 
  projLink,
}) => {   

  const router = useRouter();
  console.log(projLink);

  if(projName===""&&projDesc===""||!projName){
    return null;
  }
  return (
    <div className={styles.property_1default}>      
      <img
        className={styles.property_1default_child}
        alt=""
        src={projFoto}        
      />
      <div className={styles.project_parent}>
        <div className={styles.project}>{projTechs}</div>
        
      </div>
      <div className={styles.project_name_group}>
        <div className={styles.project_name1}>{projName}</div>
        <div className={styles.lorem_ipsum_dolor}>{projDesc}
        </div>
        <div
          className={styles.button_container}          
          onClick={() => window.open(projLink)}
        >
          <StateDefaultTypePrimary
            go={`Go <~>`}
            goClick={() => window.open(projLink)}
          />
        </div>
      </div>
    </div>
  );
};

export default Property1Default;
