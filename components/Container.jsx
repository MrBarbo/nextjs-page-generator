"use client";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import H2 from "./H2";
import ProductFormContainer from "./ProductFormContainer";
import styles from "./Container.module.css";
import { useRouter } from 'next/navigation'

const Container = () => {
  const router = useRouter();
  const onFrameContainer18Click = useCallback(() => {() => router.push('/dashboard')});

  return (
    <div className={styles.what_we_have1}>
      <H2
        propHeader="Products"        
      />
      <ProductFormContainer />
    </div>
  );
};

export default Container;
