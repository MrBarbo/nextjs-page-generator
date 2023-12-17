"use client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRouter } from 'next/navigation';
import styles from "./LoginPage.module.css";


const LoginPage = () => {

  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  

  return (
    <div className={styles.loginpage}>
      <img className={styles.frame_icon} alt="" src="/frame@2x.png" />
      <div className="login_div">
        <div className={styles.frame}>
          <div className={styles.content}>
            <input
              placeholder="Email"
              value={email}
              onChange={handleEmail}
              className="input_element"
              type="text"
            />
            <input
              placeholder="Clave"
              value={password}
              onChange={handlePassword}
              className="input_element"
              type="password"
            />
          </div>
        </div>
        <div className="frame2">
          <div
            className="buttoncreateacc"
            onClick={() => //meter acá la direccion del register
            router.push('/Formulario')}
          >
            <div className="create-account">Create Account</div>
          </div>
        </div>
        <div className="frame3">        
          <div className="already-have-a">Already have an account?</div>
          <div className="log-in" onClick={() => //meter aca la direccion del login
            router.push('/Formulario')}>
            Log in
          </div>        
        </div>
      </div>
      
    </div>
  );
};

export default LoginPage;
