"use client";
import { useRouter } from 'next/navigation';
import { useCallback } from "react";
import styles from "./Container.module.css";
import H2 from "./H2";
import ProductFormContainer from "./ProductFormContainer";

const Container = () => {
  const router = useRouter();
  const onFrameContainer18Click = useCallback(() => {() => router.push('/dashboard')});

  return (
    <div className={styles.what_we_have1}>
      <H2
        propHeader="Productos"        
      />
      <ProductFormContainer />
    </div>
  );
};

export default Container;
