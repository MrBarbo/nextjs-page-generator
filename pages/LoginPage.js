import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRouter } from 'next/navigation';
import axios from "axios";
import styles from "./LoginPage.module.css";
const API_ENDPOINT = `http://localhost:3100`;

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
  const handleLogin = async(e) =>{
    try{      
      const response = await axios.post(
        "http://localhost:3100/login",
        new URLSearchParams({
          'username': email,
          'password': password,
        }),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );
        console.log(response.data);

        if (response.status === 350) {
          router.push('/Formulario');
        }
    }catch(error){
      if (error.response) {
        if (error.response.status === 350) {
          router.push('/Formulario');
        }
        console.log(error.response.data.message);
        throw(error.response.data.message);
      } else {
        console.log(error.message);
        throw(error.message);
        }
    }
  }
  

  return (
    <div className={styles.loginpage}>
      <img className={styles.frame_icon} alt="" src="/frame@2x.png" />
      <div className="login_div">
        <div className={styles.frame}>
          <div className={styles.content}>
            <input
              placeholder="Nickname"
              value={email}
              onChange={handleEmail}
              className={styles.input_element}
              type="text"
            />
            <input
              placeholder="Clave"
              value={password}
              onChange={handlePassword}
              className={styles.input_element}
              type="password"
            />
          </div>
        </div>
        <div className={styles.frame2}>
          <div
            className={styles.buttoncreateacc}
            onClick={() => //meter acá la direccion del register
            router.push('/Formulario')}
          >
            <div className="create-account">Crear cuenta</div>
          </div>
        </div>
        <div className={styles.frame3}>        
          <div className="already-have-a">¿Ya tienes una cuenta?</div>
          <div className={styles.log_in} onClick={handleLogin}>
            Log in
          </div>        
        </div>
      </div>
      
    </div>
  );
};

export default LoginPage;
