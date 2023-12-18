"use client"
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import H2 from "./H2";
import ProjectFormContainer from "./ProjectFormContainer";
import styles from "./ContainerForm.module.css";
import { useRouter } from 'next/navigation'

const ContainerForm = () => {
  const router = useRouter()

  const onFrameContainer32Click = useCallback(() => {() => router.push('/dashboard')});

  return (
    <div className={styles.what_we_do1}>
      <H2
        loremIpsumDolorSitAmet="Projects"
        h2AlignSelf="stretch"
        h2ZIndex="unset"
        h2JustifyContent="flex-start"
      />
      <ProjectFormContainer />
    </div>
  );
};

export default ContainerForm;
