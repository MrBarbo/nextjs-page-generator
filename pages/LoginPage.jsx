"use client";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import axios from "axios";
import styles from "./LoginPage.module.css";
import "../app/globals.css";
const API_ENDPOINT = `http://localhost:3100`;

const LoginPage = () => {  
    
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [visBut, setVisBut] = useState(true);
  const [content, setContent] = useState('¿Aún no posees cuenta?');
  const [content2, setContent2] = useState('Regístrate');
  const [errorCont, setErrorCont] = useState("");
  const [errorVis, setErrorVis] = useState(false);
  const handleContent2 = () => {
    setContent2(content2 === 'Regístrate' ? 'Loguéate' : 'Regístrate');
  };
  const handleContent = () => {
    setContent(content === '¿Aún no posees cuenta?' ? '¿Ya tienes una cuenta?' : '¿Aún no posees cuenta?');
  };
  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const switchMode = (e) => {
    setVisBut(!visBut)
    handleContent2();
    handleContent();
    setIsVisible(false);    
  };

  async function translateErrorMessage(errVar, targetLang) {
    const response = await axios.post(
      "https://api-free.deepl.com/v2/translate", 
      new URLSearchParams({
      text: errVar,
      target_lang: targetLang,
    }), 
    {
      headers: { 
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': '230a466c-a529-44ca-a43d-2deabe774070:fx',
      },
    }
  );
  
    return response.data.translations[0].text;
  }

  

  const handleLogin = async(e) =>{
    try{      
      const response = await axios.post(
        "https://backend-supersite-production.up.railway.app/login",
        new URLSearchParams({
          'username': username,
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
        setIsVisible(true);
        console.log("estoy aca");
        console.log(error.response.data);
        throw(error.response.data.message);
      } else {        
        console.log(error.message);
        throw(error.message);
        }
    }
  } 

  const handleRegister = async(e) =>{
    try{      
      const response = await axios.post(
        "https://backend-supersite-production.up.railway.app/register",
        new URLSearchParams({
          'username': username,
          'password': password,
          'email': email,
        }),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );
        console.log(response.data);

        if (response.status === 200) {
          router.push('/Formulario');
        }
    }catch(error){
      if (error.response) {
        if (error.response.status === 200) {
          router.push('/Formulario');
        }
        
        setErrorVis(true);
        setErrorCont(error.response.data.error);        
        //----------------------
        //este translate no anda por politicas de CORS, hay que redireccionar la request al backend
        //const translatedError = await translateErrorMessage(error.response.data.error, 'ES'); 
        //
        //setErrorCont(translatedError);
        //----------------------
        console.log(error.response.data.error);

        throw(error.response.data.message);
      } else {                
        throw(error.message);
        }
    }
  }
  return (
    <div className={styles.loginpage}>
      <img className={styles.frameicon} alt="" src="/frame@2x.png" />
      <div className={styles.logindiv}>
        <div className={styles.frame}>
          <div className={styles.content}>            
            <input
              placeholder="Usuario"
              value={username}
              onChange={handleUsername}
              className={styles.inputelement}
              type="text"
            />
            <input
              placeholder="Clave"
              value={password}
              onChange={handlePassword}
              className={styles.inputelement}
              type="password"
            />
            { !visBut && <input
              placeholder="Correo Electrónico"
              value={email}
              onChange={handleEmail}
              className={styles.inputelement}
              type="email"
            /> }
          </div>
        </div>
        <div className={styles.frame2}>
          {errorVis && < div className={styles.logError}> {errorCont} </div>}
          {isVisible && <div className={styles.logError}> Usuario o Contraseña incorrectos</div>}
          <div className={styles.buttoncreateacc}>            
            { !visBut && <div className={styles.createaccount} onClick={handleRegister}>Registrarse</div> }
            { visBut && <div className={styles.createaccount} onClick={handleLogin}>Ingresar</div> }
          </div>
        </div>
        <div className={styles.frame3}>        
          <div className={styles.alreadyhavea}>{content}</div>
          <div className={styles.login} 
            onClick={switchMode}>
            {content2}
          </div>        
        </div>
      </div>
      
    </div>
  );
};

export default LoginPage;
