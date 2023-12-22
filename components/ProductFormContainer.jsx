"use client";
import { useRouter } from 'next/navigation';
import { useCallback } from "react";
import styles from "./ProductFormContainer.module.css";
import Property1Form1 from "./Property1Form1";
import Property1FormAdd1 from "./Property1FormAdd1";

const ProductFormContainer = () => {
  const router = useRouter()

  const onFrameClick = useCallback(() => {() => router.push('/dashboard')});

  return (
    <div className={styles.product_group}>
      <Property1Form1
        imgSrc="/rectangle-22@2x.png"
      />
      <Property1Form1
        imgSrc="/rectangle-225@2x.png"

      />
      <Property1Form1
        imgSrc="/rectangle-227@2x.png"
      />
      <Property1FormAdd1
        imgSrc="/rectangle-22@2x.png"
        onClickEv={onFrameClick}
      />      
    </div>
  );
};

export default ProductFormContainer;
