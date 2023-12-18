"use client";
import { useRouter } from 'next/navigation'
import { useCallback } from "react";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Property1Form1 from "./Property1Form1";
import Property1FormAdd1 from "./Property1FormAdd1";
import StateDefaultTypePrimary from "./StateDefaultTypePrimary";
import styles from "./ProductFormContainer.module.css";

const ProductFormContainer = () => {
  const router = useRouter()

  const onFrameClick = useCallback(() => {() => router.push('/dashboard')});

  return (
    <div className={styles.product_group}>
      <Property1Form1
        rectangle22="/rectangle-22@2x.png"
      />
      <Property1Form1
        rectangle22="/rectangle-225@2x.png"

      />
      <Property1Form1
        rectangle22="/rectangle-227@2x.png"

      />
      <Property1FormAdd1
        rectangle22="/rectangle-22@2x.png"
        onClickEv={onFrameClick}
      />
      <div className={styles.product}>
        <img className={styles.product_child} alt="" src="/rectangle-227@2x.png" />
        <div className={styles.produ_name_group}>
          <div className={styles.produ_name1}>Produ Name</div>
          <div className={styles.lorem_ipsum_dolor9}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus
            vel facilisis volutpat est velit egestas dui id ornare.
          </div>
          <div className={styles.button_wrapper1}>
            <StateDefaultTypePrimary
              go={`Go <~>`}              
            />
          </div>
        </div>
      </div>
      <div className={styles.product}>
        <img className={styles.product_child} alt="" src="/rectangle-227@2x.png" />
        <div className={styles.produ_name_group}>
          <div className={styles.produ_name1}>Produ Name</div>
          <div className={styles.lorem_ipsum_dolor9}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus
            vel facilisis volutpat est velit egestas dui id ornare.
          </div>
          <div className={styles.button_wrapper1}>
            <StateDefaultTypePrimary
              go={`Go <~>`}              
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFormContainer;
