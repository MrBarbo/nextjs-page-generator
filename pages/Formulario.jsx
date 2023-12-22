"use client";
import axios from "axios";
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
import Property1Form1 from '../components/Property1Form1';
import Property1FormAdd from "../components/Property1FormAdd";
import Property1FormAdd1 from '../components/Property1FormAdd1';
import Socials from "../components/Socials";
import StateDefaultTypePrimary from "../components/StateDefaultTypePrimary";
import axios from "axios"
import styles from "./Formulario.module.css";



const Formulario = () => {
  
  const onEmailIconClick = useCallback(() => {
    window.location.href = "mailto:nicoboattini@gmail.com";
  }, []);

  const onLinkedinIconClick = useCallback(() => {
    window.open("linkedin.com/in/nicoboattini");
  }, []);

  const onInstagramIconClick = useCallback(() => {
    window.open("https://www.instagram.com/nicolasboattini/");
  }, []);

  const onGithubIconClick = useCallback(() => {
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
  const prompt = "Diseña un logo o elemento distintivo para identificar de manera única y expcepcional a una Empresa/PyME/Organización llamada "+inputValues.name+" tomando en cuenta la siguiente descripción de su actividad para capturar toda su esencia: "+inputValues.description
  const prompttext = inputValues.description;

  //Manejador para mandar contenido por query a la pagina generada
  const handleSubmit2 = async() => {   
    //Generador de imagen   
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
    //Mejorador de texto
    const response2 = await axios.post(
      "https://backend-supersite-production.up.railway.app/bettertext",
      new URLSearchParams({
        'name': prompttext,
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );
    var bettertext = response2.data;
    //Enrutado
    Router.push({
      pathname: "/Prefab", 
      query: {
        ...inputValues,         
        linkimg,bettertext
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
          inputLabel="Nombre del servicio..."  
          onInputChange={(value) => handleInputChange('service1', value)}
        />
        <Input
          inputId="10"
          inputName="service1d"  
          inputTitle=""          
          inputLabel="Descripcion del servicio..."  
          onInputChange={(value) => handleInputChange('service1d', value)}
        />
        <Input
          inputId="7"
          inputName="service2"  
          inputTitle=""          
          inputLabel="Nombre del servicio..."  
          onInputChange={(value) => handleInputChange('service2', value)}
        />
        <Input
          inputId="11"
          inputName="service2d"  
          inputTitle=""          
          inputLabel="Descripcion del servicio..."  
          onInputChange={(value) => handleInputChange('service2d', value)}
        />
        <Input
          inputId="8"
          inputName="service3"  
          inputTitle=""          
          inputLabel="Nombre del servicio..."  
          onInputChange={(value) => handleInputChange('service3', value)}
        />
        <Input
          inputId="12"
          inputName="service3d"  
          inputTitle=""          
          inputLabel="Descripcion del servicio..."  
          onInputChange={(value) => handleInputChange('service3d', value)}
        />
        <Input
          inputId="9"
          inputName="service4"  
          inputTitle=""          
          inputLabel="Nombre del servicio..."  
          onInputChange={(value) => handleInputChange('service4', value)}
        />
        <Input
          inputId="13"
          inputName="service4d"  
          inputTitle=""          
          inputLabel="Descripcion del servicio..."  
          onInputChange={(value) => handleInputChange('service4d', value)}
        />
        <div className={styles.what_we_have1}>
          <H2
          propHeader="Productos"        
          />
          <div className={styles.product_group}>
            <Property1Form1
              imgSrc="/rectangle-225@2x.png"
              inputName="prodTitle"
              inputId="40"
              inputLabel="Nombre del Producto"
              inputName2="prodDesc"
              inputId2="41"
              inputLabel2="Descripcion del producto"
              inputName3="prodLink"
              inputId3="42"
              inputLabel3="Link al producto"              
              onInputChange={(value) => handleInputChange('prodTitle', value)}
              onInputChange2={(value) => handleInputChange('prodDesc', value)}
              onInputChange3={(value) => handleInputChange('prodLink', value)}              
            />
            <Property1Form1
              imgSrc="/rectangle-225@2x.png"
              inputName="prodTitle2"
              inputId="43"
              inputLabel="Nombre del Producto"
              inputName2="prodDesc2"
              inputId2="44"
              inputLabel2="Descripcion del producto"
              inputName3="prodLink2"
              inputId3="44"
              inputLabel3="Link al producto"              
              onInputChange={(value) => handleInputChange('prodTitle2', value)}
              onInputChange2={(value) => handleInputChange('prodDesc2', value)}
              onInputChange3={(value) => handleInputChange('prodLink2', value)}              
            />
            <Property1Form1
              imgSrc="/rectangle-225@2x.png"
              inputName="prodTitle3"
              inputId="45"
              inputLabel="Nombre del Producto"
              inputName2="prodDesc3"
              inputId2="46"
              inputLabel2="Descripcion del producto"
              inputName3="prodLink3"
              inputId3="47"
              inputLabel3="Link al producto"              
              onInputChange={(value) => handleInputChange('prodTitle3', value)}
              onInputChange2={(value) => handleInputChange('prodDesc3', value)}
              onInputChange3={(value) => handleInputChange('prodLink3', value)}              
            />
            <Property1FormAdd1
              imgSrc="/rectangle-22@2x.png"
              onClickEv=""
            /> 
          </div>
        </div>
        <div className={styles.what_we_do1}>
          <H2
           propHeader="Proyectos"        
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
          />
        </div>
      </main>
      <Footer
        socialIcon="/linkedin1.svg"
        socialIcon1="/instagram1.svg"
        socialIcon2="/github1.svg"
        socialIcon3="/email1.svg"

        onEmailIconClick={onEmailIconClick}
        onLinkedinIconClick={onLinkedinIconClick}
        onInstagramIconClick={onInstagramIconClick}
        onGithubIconClick={onGithubIconClick}
      />
    </div>
  );
};

export default Formulario;
