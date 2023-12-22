"use client";

import { Checkbox } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useCallback, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Input from "../components/Input";
import Socials from "../components/Socials";
import StateDefaultTypePrimary from "../components/StateDefaultTypePrimary";
import axios from "axios";
import Router from "next/router";
import "../app/globals.css";

import styles from "./Formulario.module.css";



const Formulario = () => {
  

  

  /*const onFrameContainer18Click = useCallback(() => {
    navigate("/prefab1");
  }, [navigate]);

  const onFrameContainer32Click = useCallback(() => {
    navigate("/prefab1");
  }, [navigate]);*/

  const onServicesContainer3Click = useCallback(() => {() => Router.push('/Prefab')});

  const onEmailIcon1Click = useCallback(() => {
    window.location.href = "mailto:nicoboattini@gmail.com";
  }, []);

  const onLinkedinIcon1Click = useCallback(() => {
    window.open("linkedin.com/in/nicoboattini");
  }, []);

  const onInstagramIcon1Click = useCallback(() => {
    window.open("https://www.instagram.com/nicolasboattini/");
  }, []);

  const onGithubIcon1Click = useCallback(() => {
    window.open("github.com/nicolasboattini");
  }, []);

  //Agregar states

  //--------------
  //Se agrega un handler para todos los componentes tipo Input y se guardan los valores para cada uno
  //para emplearlo, pasar como prop al componente lo siguiente:
  //onInputChange={(value) => handleInputChange('name', value)} donde name es la clave que identificará el contenido
  const [inputValues, setInputValues] = useState('');

  const handleInputChange = (inputName, value) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [inputName]: value,
    })    
    );    
  };

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const theme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  //--------------
  const [checked, setChecked] = useState(false);

  const link = "/"+inputValues.name;
  const prompt = "genera un logo o algo identificatorio para algo con nombre:"+inputValues.name+"y descripcion:"+inputValues.description

  //Manejador para mandar contenido por query a la pagina generada
  const handleSubmit2 = async() => {
      const response = await axios.post(
        "https://backend-supersite-production.up.railway.app/genimg",
        new URLSearchParams({
          'name': prompt,
        }),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );
      var linkimg = response.data;
    // Use Router.push to navigate to the "/Prefab" page with input values in the query
    Router.push({
      pathname: "/Prefab", // Make sure to replace "/Prefab" with your actual path
      query: {
        ...inputValues,
        linkimg
      },
    },link
    );
  };

  return (
    <div className={styles.formulario}>
      <Header
        showFrameDiv={false}
        showHeaderLink        
        frameDivJustifyContent="flex-start"
        frameDivGap="43px"
        headerLinkCursor="pointer"
      />             
      <main className={styles.input_parent}>          
        <Input
          inputId="1"
          inputName="name"  
          inputTitle="Titulo/Nombre"          
          inputLabel="Text goes here..."          
          onInputChange={(value) => handleInputChange('name', value)}
        />
        <Input
          inputId="2"
          inputName="description"  
          inputTitle="Descripcion"
          inputLabel="Text goes here..."
          onInputChange={(value) => handleInputChange('description', value)}
        />
        <div className={styles.div1}>
        <ThemeProvider theme={theme}>      
        <span className={styles.label1}>¿Representas a una Empresa/PyME/Organización?</span>
        <span className={styles.label2}>Si/No</span>
        <Checkbox        
        checked={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'controlled' }}
        />
        </ThemeProvider>
        </div>
        
        { checked && <Input
          inputId="3"
          inputName="mission"  
          inputTitle="Mision"
          inputLabel="Text goes here..." 
          onInputChange={(value) => handleInputChange('mission', value)}           
        /> }
        { checked && <Input
          inputId="4"
          inputName="vission"  
          inputTitle="Vision"
          inputLabel="Text goes here..."            
          onInputChange={(value) => handleInputChange('vission', value)}
        /> }
        
        { checked && <Input
          inputId="5"
          inputName="objectives"  
          inputTitle="Objetivos"          
          inputLabel="Text goes here..."  
          onInputChange={(value) => handleInputChange('objectives', value)}
        /> }
        <Input
          inputId="6"
          inputName="service1"  
          inputTitle="Servicios"          
          inputLabel="Nombre del servicio 1..."  
          onInputChange={(value) => handleInputChange('service1', value)}
        />
        <Input
          inputId="7"
          inputName="service2"  
          inputTitle=""          
          inputLabel="Nombre del servicio 2..."  
          onInputChange={(value) => handleInputChange('service2', value)}
        />
        <Input
          inputId="8"
          inputName="service3"  
          inputTitle=""          
          inputLabel="Nombre del servicio 3..."  
          onInputChange={(value) => handleInputChange('service3', value)}
        />
        <Input
          inputId="9"
          inputName="service4"  
          inputTitle=""          
          inputLabel="Nombre del servicio 4..."  
          onInputChange={(value) => handleInputChange('service4', value)}
        />
        
        
        
        <Socials
          socialsAlignItems="center"
          frameDivFlex="unset"
          frameDivAlignItems="center"
          frameDivJustifyContent="space-between"
          frameDivGap="unset"
          rectangleDivBackgroundColor="unset"
          rectangleDivBackgroundColor1="unset"
          linkedinIconCursor="unset"
          rectangleDivBackgroundColor2="unset"
          instagramIconCursor="unset"
          rectangleDivBackgroundColor3="unset"
          githubIconCursor="unset"
          rectangleDivBackgroundColor4="unset"
          emailIconCursor="unset"
          rectangleDivBackgroundColor5="unset"
          rectangleDivBackgroundColor6="unset"
        />
        <div className={styles.input_group}>
          <Input
            inputPlaceholder="InputType"
            showH2={false}
            inputWidth="unset"
            inputAlignSelf="stretch"
            h2AlignSelf="stretch"
            frameDivBoxSizing="border-box"
            inputTextHereFontSize="unset"
            inputTextHereFontFamily="unset"
            inputTextHereColor="unset"
            inputTextHereTextAlign="unset"
            inputTextHereDisplay="unset"
          />
          <Input
            inputPlaceholder="InputType"
            showH2={false}
            inputWidth="unset"
            inputAlignSelf="stretch"
            h2AlignSelf="stretch"
            frameDivBoxSizing="border-box"
            inputTextHereFontSize="unset"
            inputTextHereFontFamily="unset"
            inputTextHereColor="unset"
            inputTextHereTextAlign="unset"
            inputTextHereDisplay="unset"
          />
          <Input
            inputPlaceholder="InputType"
            showH2={false}
            inputWidth="unset"
            inputAlignSelf="stretch"
            h2AlignSelf="stretch"
            frameDivBoxSizing="border-box"
            inputTextHereFontSize="unset"
            inputTextHereFontFamily="unset"
            inputTextHereColor="unset"
            inputTextHereTextAlign="unset"
            inputTextHereDisplay="unset"
          />
          <Input
            inputPlaceholder="InputType"
            showH2={false}
            inputWidth="unset"
            inputAlignSelf="stretch"
            h2AlignSelf="stretch"
            frameDivBoxSizing="border-box"
            inputTextHereFontSize="unset"
            inputTextHereFontFamily="unset"
            inputTextHereColor="unset"
            inputTextHereTextAlign="unset"
            inputTextHereDisplay="unset"
          />
        </div>
        <div className={styles.button_frame} onClick={handleSubmit2}>
          <StateDefaultTypePrimary
            go="SuperSitea!"
            stateDefaultTypePrimaryAlignItems="center"
            stateDefaultTypePrimaryJustifyContent="center"
            stateDefaultTypePrimaryFlex="unset"
            stateDefaultTypePrimaryWidth="357px"
            goFontSize="48px"
            goTextAlign="center"
            goFlex="1"
            //goClick={onServicesContainer3Click}
            goCursor="pointer"
          />
        </div>
      </main>
      <Footer
        iconId="/linkedin1.svg"
        iconTextId="/instagram1.svg"
        imageIconId="/github1.svg"
        footerHeight="unset"
        frameDivFlex="unset"
        frameDivHeight="119px"
        frameDivAlignSelf="stretch"
        frameDivJustifyContent="flex-end"
        onEmailIconClick={onEmailIcon1Click}
        onLinkedinIconClick={onLinkedinIcon1Click}
        onInstagramIconClick={onInstagramIcon1Click}
        onGithubIconClick={onGithubIcon1Click}
      />
    </div>
  );
};

export default Formulario;
