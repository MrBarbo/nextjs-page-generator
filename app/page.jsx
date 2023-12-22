"use client";
import { useCallback } from "react";
import { Element } from 'react-scroll';
import Footer from "../components/Footer";
import Header from "../components/Header";
import OurValues from "../components/OurValues";
import WhatWeHave from "../components/WhatWeHave";
import WhatWeOffer from "../components/WhatWeOffer";
import WhoWeAre from "../components/WhoWeAre";
import './globals.css';

import styles from "./page.module.css";

const Prefab = () => {
  //const navigate = useNavigate();
  //const router = useRouter();

  //const onProjectClick = useCallback(() => {() => router.push('/LoginPage')});
  

  const onEmailIconClick = useCallback(() => {
    window.location.href = "mailto:proyecto.supersite@gmail.com";
  }, []);

  const onLinkedinIconClick = useCallback(() => {
    window.open("https://www.linkedin.com/in/supersite");
  }, []);

  const onInstagramIconClick = useCallback(() => {
    window.open("https://www.instagram.com/supersite/");
  }, []);

  const onGithubIconClick = useCallback(() => {
    window.open("github.com/supersite");
  }, []);

  
    
  return (
    <div className={styles.prefab}>
      <Header
        showFrameDiv             
      />
      <div className={styles.who_we_are_group}>
      <Element name="whoWeAre"></Element>
        <WhoWeAre
          textHeader=""
          textHeaderColor="SuperSite"
          textHeaderCont=" es un sistema el cual permite, a través de un formulario,  que el cliente obtenga una página web funcional y adaptada a sus necesidades."
          image="/image1@2x.png"
          propParagraph={
            <>
              En el mundo de hoy, cada vez más digitalizado, tener una presencia en línea se ha convertido en necesidad fundamental para empresas, 
              organizaciones y profesionales de todos los rubros. Sin embargo, 
              la creación y diseño de páginas web personalizadas puede ser un proceso costoso, complejo y que consume mucho tiempo, 
              además de necesitar especialistas calificados que no siempre están disponibles. 
              <br /> 
              <br /> 
              Este proyecto surge como respuesta a la demanda creciente de soluciones eficaces que permitan a las personas y organizaciones establecer su presencia en línea de manera efectiva.
              <br /> <br />              
              Mediante el uso de inteligencia artificial, el sistema puede proveer a la página de características que requiera el usuario, como ser colores, imágenes o texto.
            </>
          }
        />        
        <Element name="ourValues"></Element>
        <OurValues
          propMis="Ayudar a los individuos, empresas y organizaciones a prosperar mediante la posibilidad de aprovechar las capacidades del internet, para que puedan construir innovación y reducir su impacto ambiental."
          propVis="Ser el principal aliado tecnológico de los individuos y organizaciones que trabajan para cambiar el mundo."
          propObj={
            <>
             <li>
                  Utilizar inteligencia artificial para automatizar el proceso
                  de diseño y personalización de las páginas web, incluyendo
                  elementos como colores, imágenes y texto.
                </li>
                <li>
                  Generar un sistema que sea amigable a todos los tipos de
                  usuario, ya sean empresas, organizaciones gubernamentales o no
                  gubernamentales e incluso personas particulares.
              </li>
            </>
          }           
        />
        <Element name="whatWeOffer"></Element>
        <WhatWeOffer
          serviceName="Pagina Web"
          serviceDesc="Tras rellenar un formulario con la información necesaria, podrá obtener su página web con dominio personalizado."
          serviceName1="GenAI"
          serviceDesc1="Contamos con Inteligencia Artificial Generativa integrada para la generación de texto e imágenes para facilitar el trabajo."
          serviceName2="Personalización"
          serviceDesc2="Luego de adquirir una membresía premium podrá acceder a un servicio dedicado para la personalización de su sitio web."
          serviceName3="Insights"
          serviceDesc3="El sitio web recopila información relevante para el cliente para ayudar en la toma de decisiones."                  
        />        
        <Element name="whatWeHave"></Element>
        <WhatWeHave
          prodPhot="/rectangle-22@2x.png"
          produName="LiteSite"
          productDesc="Creación de páginas simple, sin costes y con tecnologías de IA"
          prodLink="/LoginPage"
          prodPhot1="/rectangle-225@2x.png"
          produName1="MiniSite"
          productDesc1="LiteSite+ Acceso a Analytics"
          prodLink1="/LoginPage"
          prodPhot2="/rectangle-227@2x.png"
          produName2="ProSite"
          productDesc2="Minisite+ Mayor variedad de temas y colores"  
          prodLink2="/LoginPage"        
          prodPhot3="/rectangle-22@2x.png"
          produName3="MegaSite"
          productDesc3="Prosite+ Posibilidad de usar nuestro editor de páginas para mas personalización"
          prodLink3="/LoginPage"
          prodPhot4="/rectangle-225@2x.png"
          produName4="UltraSite"
          productDesc4="Megasite+ Posibilidad de descargar las páginas creadas"
          prodLink4="/LoginPage"
          prodPhot5="/rectangle-227@2x.png"
          produName5="SuperSite"
          productDesc5="El producto más completo, hecho personalizadamente a tu medida"             
          prodLink5="/LoginPage"
        />        
      </div>
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


export default Prefab;