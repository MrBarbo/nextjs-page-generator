'use client'
import { useRouter } from 'next/navigation';
import styles from "./StateDefaultTypePrimary.module.css";

const StateDefaultTypePrimary = ({
  go,
  goClick,
}) => {
  const router = useRouter();  

  return (  
    <div
      className={styles.statedefault_typeprimary}      
      //onClick={() => router.push(goClick)}
    > 
      <div className={styles.go}>
        {go}
      </div>
    </div>
  );
};

export default StateDefaultTypePrimary;
