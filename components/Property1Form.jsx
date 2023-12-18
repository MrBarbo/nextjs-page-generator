import { useMemo } from "react";
import styles from "./Property1Form.module.css";

const Property1Form = ({
  rectangle22,
  projectName,
  shortDescription,
  technologies,
  projectLink,


}) => {


  return (
    <div className={styles.property_1form}>
      <img className={styles.property_1form_child} alt="" src={rectangle22} />
      <div className={styles.project_name_parent}>
        <div className={styles.project_name}>
          {projectName}
        </div>
        <div className={styles.short_description_wrapper}>
          <div className={styles.short_description}>
            {shortDescription}
          </div>
        </div>
        <div className={styles.short_description_wrapper}>
          <div className={styles.short_description}>
            {technologies}
          </div>
        </div>
        <div className={styles.short_description_wrapper}>
          <div className={styles.short_description}>
            {/* 
            
                Implementar algo asi para abrir el link en otra ventana el link:
            
                const onEmailIconClick = useCallback(() => {
                window.location.href = "mailto:nicoboattini@gmail.com";
                }, []); 
                
            */}
            {projectLink}  
          </div> 
        </div>
      </div>
    </div>
  );
};

export default Property1Form;
