"use client";
import { useRouter } from 'next/navigation';
import { useCallback } from "react";
import styles from "./ProjectFormContainer.module.css";
import Property1FormAdd from "./Property1FormAdd";

const ProjectFormContainer = ({
  imgSrc,
  inputName,
  inputId,
  inputLabel,
  inputType,
  inputName2,
  inputId2,
  inputLabel2,
  inputType2,
  inputName3,
  inputId3,
  inputLabel3,
  inputType3,

  onInputChange,
  onInputChange2,
  onInputChange3,

}) => {
  const router = useRouter()

  const onFrameClick = useCallback(() => {() => router.push('/Prefab')});

  return (
    <div className="what-we-do1">
      <H2
        propHeader="Projects"        
      />
      <div className={styles.project_container}>
        <Property1Form
          imgSrc={imgSrc}
          inputName={inputName}
          inputId={inputId}
          inputLabel={inputLabel}
          inputType={inputType}
          inputName2={inputName2}
          inputId2={inputId2}
          inputLabel2={inputLabel2}
          inputType2={inputType2}
          inputName3={inputName3}
          inputId3={inputId3}
          inputLabel3={inputLabel3}
          inputType3={inputType3}
        
          onInputChange={onInputChange}
          onInputChange2={onInputChange2}
          onInputChange3={onInputChange3}
        />
        <Property1Form
          imgSrc="/rectangle-225@2x.png"    
          inputName={inputName}
          inputId={inputId}
          inputLabel={inputLabel}
          inputType={inputType}
          inputName2={inputName2}
          inputId2={inputId2}
          inputLabel2={inputLabel2}
          inputType2={inputType2}
          inputName3={inputName3}
          inputId3={inputId3}
          inputLabel3={inputLabel3}
          inputType3={inputType3}
        
          onInputChange={onInputChange}
          onInputChange2={onInputChange2}
          onInputChange3={onInputChange3}    
        />
        <Property1FormAdd        
          onClickEv={onFrameClick}
        />      
      </div>
    </div>
  );
};

export default ProjectFormContainer;
