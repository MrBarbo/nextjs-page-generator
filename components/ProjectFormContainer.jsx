"use client";
import { useCallback } from "react";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Property1Form from "./Property1Form";
import Property1FormAdd from "./Property1FormAdd";
import StateDefaultTypePrimary from "./StateDefaultTypePrimary";
import styles from "./ProjectFormContainer.module.css";
import { useRouter } from 'next/navigation'

const ProjectFormContainer = () => {
  const router = useRouter()

  const onFrameClick = useCallback(() => {() => router.push('/Prefab')});

  return (
    <div className={styles.project_container}>
      <Property1Form
        rectangle22="/rectangle-22@2x.png"

      />
      <Property1Form
        rectangle22="/rectangle-225@2x.png"
        
      />
      <Property1FormAdd        
        onClickEv={onFrameClick}
      />
      <div className={styles.project1}>
        <img className={styles.project_child} alt="" src="/rectangle-22@2x.png" />
        <div className={styles.project_parent1}>
          <div className={styles.project2}>Project</div>
          <div className={styles.techs1}>techs</div>
        </div>
        <div className={styles.projec_name_container}>
          <div className={styles.project_name2}>Project Name</div>
          <div className={styles.lorem_ipsum_dolor11}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus
            vel facilisis volutpat est velit egestas dui id ornare.
          </div>
          <div className={styles.button_wrapper3}>
            <StateDefaultTypePrimary
              go={`Go <~>`}              
            />
          </div>
        </div>
      </div>
      <div className={styles.project1}>
        <img className={styles.project_child} alt="" src="/rectangle-22@2x.png" />
        <div className={styles.project_parent1}>
          <div className={styles.project2}>Project</div>
          <div className={styles.techs1}>techs</div>
        </div>
        <div className={styles.project_name_container}>
          <div className={styles.project_name2}>Project Name</div>
          <div className={styles.lorem_ipsum_dolor11}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus
            vel facilisis volutpat est velit egestas dui id ornare.
          </div>
          <div className={styles.button_wrapper3}>
            <StateDefaultTypePrimary
              go={`Go <~>`}              
            />
          </div>
        </div>
      </div>
      <div className={styles.project1}>
        <img className={styles.project_child} alt="" src="/rectangle-22@2x.png" />
        <div className={styles.project_parent1}>
          <div className={styles.project2}>Project</div>
          <div className={styles.techs1}>techs</div>
        </div>
        <div className={styles.project_name_container}>
          <div className={styles.project_name2}>Project Name</div>
          <div className={styles.lorem_ipsum_dolor11}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus
            vel facilisis volutpat est velit egestas dui id ornare.
          </div>
          <div className={styles.button_wrapper3}>
            <StateDefaultTypePrimary
              go={`Go <~>`}              
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectFormContainer;
