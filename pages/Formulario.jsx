"use client";

import { Checkbox } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Router from "next/router";
import { useCallback, useState } from "react";
import "../app/globals.css";
import Footer from "../components/Footer";
import H2 from "../components/H2";
import Header from "../components/Header";
import Input from "../components/Input";
import Property1Form from "../components/Property1Form";
import Property1FormAdd from "../components/Property1FormAdd";
import Socials from "../components/Socials";
import StateDefaultTypePrimary from "../components/StateDefaultTypePrimary";

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
  const [checkeds, setCheckeds] = useState('');

  const handleInputChange = (inputName, value) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [inputName]: value,
    })    
    
    );    
    console.log(inputValues);
  };
  
  const handleCheckedChange = (name, checked) => {
    setCheckeds((prevValues) => ({
      ...prevValues,
      [name]: checked,
      
    })    
    ); 
    console.log(checkeds);
  }; 

  //-----------------------------
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
      /*
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
    */
    // Use Router.push to navigate to the "/Prefab" page with input values in the query
    Router.push({
      pathname: "/Prefab", // Make sure to replace "/Prefab" with your actual path
      query: {
        ...inputValues,         
        //linkimg
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
        <div className={styles.what_we_do1}>
          <H2
           propHeader="Projects"        
          />
          <div className={styles.project_container}>
            <Property1Form
              imgSrc="/rectangle-225@2x.png"
              inputName="projTechs1"
              inputId="25"
              inputLabel="Tecologias"
              inputName2="projName1"
              inputId2="26"
              inputLabel2="Nombre"
              inputName3="projDesc1"
              inputId3="27"
              inputLabel3="Descripcion"
              inputName4="projLink1"
              inputId4="28"
              inputLabel4="Link"
              onInputChange={(value) => handleInputChange('projTechs1', value)}
              onInputChange2={(value) => handleInputChange('projName1', value)}
              onInputChange3={(value) => handleInputChange('projDesc1', value)}
              onInputChange4={(value) => handleInputChange('projLink1', value)}
            />
            <Property1Form
              imgSrc="/rectangle-225@2x.png"
              inputName="projTechs2"
              inputId="29"
              inputLabel="Tecologias"
              inputName2="projName2"
              inputId2="30"
              inputLabel2="Nombre"
              inputName3="projDesc2"
              inputId3="31"
              inputLabel3="Descripcion"
              inputName4="projLink2"
              inputId4="32"
              inputLabel4="Link"
              onInputChange={(value) => handleInputChange('projTechs2', value)}
              onInputChange2={(value) => handleInputChange('projName2', value)}
              onInputChange3={(value) => handleInputChange('projDesc2', value)}
              onInputChange4={(value) => handleInputChange('projLink2', value)}
            />        
            <Property1FormAdd      
              imgSrc="/rectangle-225@2x.png"  
              onClickEv=""
            /> 
          </div>
        </div>
        <Socials            
          onInputChange1={(checked) => handleCheckedChange('linked', checked)}
          onInputChange2={(checked) => handleCheckedChange('insta', checked)}
          onInputChange3={(checked) => handleCheckedChange('gith', checked)}
          onInputChange4={(checked) => handleCheckedChange('email', checked)} 
        />
        <div className={styles.input_group}>
          {checkeds.linked && <Input            
              inputId="33"
              inputName="linked"                          
              inputLabel="Link de su linkedin..."          
              onInputChange={(value) => handleInputChange('linked', value)}            
          /> }
          {checkeds.insta &&<Input
            inputId="34"
            inputName="insta"                          
            inputLabel="Link de su instagram..."          
            onInputChange={(value) => handleInputChange('insta', value)}  
          /> }
          {checkeds.gith &&<Input
            inputId="35"
            inputName="gith"                          
            inputLabel="Link de su GitHub..."          
            onInputChange={(value) => handleInputChange('gith', value)}  
          />}
          {checkeds.email &&<Input
            inputId="36"
            inputName="email"                          
            inputLabel="Direccion de mail de contacto..."          
            onInputChange={(value) => handleInputChange('email', value)}  
          />}
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
