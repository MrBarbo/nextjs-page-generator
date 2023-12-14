"use client";
import React, { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import Footer from "../components/footerLanding";
import { useRouter } from 'next/navigation'

import "./Landing.css";


export default function Home(){
  const router = useRouter();
  const onFrameContainer3Click = useCallback(() => {
    // Please sync "LoginPage" to the project
  }, []);
  /*
  const onFrameContainer5Click = useCallback(() => {
    // Please sync "LoginPage" to the project
  }, []);
  */
  const onFrameContainer7Click = useCallback(() => {() => router.push('/LoginPage')});

  const onFrameContainer11Click = useCallback(() => {
    // Please sync "LoginPage" to the project
  }, []);

  const onFrameContainer13Click = useCallback(() => {
    // Please sync "LoginPage" to the project
  }, []);

  const onGithubIconClick = useCallback(() => {
    window.open("github.com/nicolasboattini");
  }, []);

  const onLinkedinIconClick = useCallback(() => {
    window.open("linkedin.com/in/nicoboattini");
  }, []);

  const onInstagramIconClick = useCallback(() => {
    window.open("https://www.instagram.com/nicolasboattini/");
  }, []);

  const onEmailIconClick = useCallback(() => {
    window.location.href = "mailto:nicoboattini@gmail.com";
  }, []);

  return (
    <div className="landing">
      <div className="who-we-are-parent">
        <div className="who-we-are1">
          <div className="h25">
            <div className="div12">#</div>
            <div className="lorem-ipsum-dolor21">¿Quienes somos?</div>
          </div>
          <div className="lorem-ipsum-dolor-sit-amet-co-group">
            <div className="lorem-ipsum-dolor-container1">
              <span>SuperSite</span>
              <span className="es-un-sistema">{` es un sistema el cual permite, a través de `}</span>
              <span>un formulario</span>
              <span className="es-un-sistema">{`, que el cliente obtenga una `}</span>
              <span>{`página web funcional `}</span>
              <span className="es-un-sistema">{`y adaptada a sus `}</span>
              <span>necesidades</span>
              <span className="es-un-sistema">.</span>
            </div>
            <div className="image-container">
              <img className="image-icon1" alt="" src="/image@2x.png" />
            </div>
          </div>
          <div className="lorem-ipsum-dolor-container2">
            <p className="en-el-mundo">
              En el mundo de hoy, cada vez más digitalizado, tener una presencia
              en línea se ha convertido en necesidad fundamental para empresas,
              organizaciones y profesionales de todos los rubros. Sin embargo,
              la creación y diseño de páginas web personalizadas puede ser un
              proceso costoso, complejo y que consume mucho tiempo, además de
              necesitar especialistas calificados que no siempre están
              disponibles. Este proyecto surge como respuesta a la demanda
              creciente de soluciones eficaces que permitan a las personas y
              organizaciones establecer su presencia en línea de manera
              efectiva.
            </p>
            <p className="en-el-mundo">&nbsp;</p>
            <p className="en-el-mundo">
              Mediante el uso de inteligencia artificial, el sistema puede
              proveer a la página de características que requiera el usuario,
              como ser colores, imágenes o texto.
            </p>
          </div>
        </div>
        <div className="our-values1">
          <div className="h26">
            <div className="div12">#</div>
            <div className="lorem-ipsum-dolor21">Nuestros valores</div>
          </div>
          <div className="titles6">
            <div className="titles7">Mision</div>
          </div>
          <div className="lorem-ipsum-dolor-sit-amet-co3">
            <div className="lorem-ipsum-dolor23">
              Ayudar a los individuos, empresas y organizaciones a prosperar
              mediante la posibilidad de aprovechar las capacidades del
              internet, para que puedan construir innovación y reducir su
              impacto ambiental.
            </div>
          </div>
          <div className="titles8">
            <div className="titles7">Vision</div>
          </div>
          <div className="lorem-ipsum-dolor-sit-amet-co4">
            <div className="lorem-ipsum-dolor23">
              Ser el principal aliado tecnológico de los individuos y
              organizaciones que trabajan para cambiar el mundo.
            </div>
          </div>
          <div className="titles10">
            <div className="titles7">Objetivos</div>
          </div>
          <div className="lorem-ipsum-dolor-sit-amet-co5">
            <div className="lorem-ipsum-dolor23">
              <ul className="desarrollar-un-sistema-de-crea">
                <li className="desarrollar-un-sistema">
                  Desarrollar un sistema de creación de páginas web que sea
                  accesible y fácil de usar para clientes sin necesidad de
                  conocimientos técnicos.
                </li>
                <li className="desarrollar-un-sistema">
                  Utilizar inteligencia artificial para automatizar el proceso
                  de diseño y personalización de las páginas web, incluyendo
                  elementos como colores, imágenes y texto.
                </li>
                <li>
                  Generar un sistema que sea amigable a todos los tipos de
                  usuario, ya sean empresas, organizaciones gubernamentales o no
                  gubernamentales e incluso personas particulares.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <section className="what-we-offer1">
          <div className="h25">
            <div className="div12">#</div>
            <div className="lorem-ipsum-dolor21">Servicios</div>
          </div>
          <div className="services-group">
            <div className="services4">
              <b className="service-name5">Pagina Web</b>
              <b className="lorem-ipsum-dolor26">
                Tras rellenar un formulario con la información necesaria, podrá
                obtener su página web con dominio personalizado.
              </b>
            </div>
            <div className="services4">
              <b className="service-name5">GenAI</b>
              <b className="lorem-ipsum-dolor26">
                Contamos con Inteligencia Artificial Generativa integrada para
                la generación de texto e imágenes para facilitar el trabajo a
                los clientes.
              </b>
            </div>
            <div className="services4">
              <b className="service-name7">Personalización</b>
              <b className="lorem-ipsum-dolor26">
                Luego de adquirir una membresía premium podrá acceder a un
                servicio dedicado para la personalización de su sitio web
              </b>
            </div>
            <div className="services4">
              <b className="service-name7">Insights</b>
              <b className="lorem-ipsum-dolor26">
                El sitio web recopila información relevante para el cliente para
                ayudar en la toma de decisiones.
              </b>
            </div>
          </div>
        </section>
        <div className="what-we-have1">
          <div className="h25">
            <div className="div12">#</div>
            <div className="lorem-ipsum-dolor21">Productos</div>
          </div>
          <div className="product-group">
            <div className= "product-grouprow">
              <div className="product6">
                <img
                  className="product-child3"
                  alt=""
                  src="/rectangle-22@2x.png"
                />
                <div className="produ-name-parent4">
                  <div className="produ-name7">LiteSite</div>
                  <div className="lorem-ipsum-dolor31">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Lacus vel facilisis volutpat est velit egestas dui id ornare.
                  </div>
                  <div
                    className="button-wrapper5"
                    onClick={onFrameContainer7Click}
                  >
                    <div className="button7">
                      <div className="div12">{`Go <~>`}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product6">
                <img
                  className="product-child3"
                  alt=""
                  src="/rectangle-221@2x.png"
                />
                <div className="produ-name-parent4">
                  <div className="produ-name7">MiniSite</div>
                  <div className="lorem-ipsum-dolor31">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Lacus vel facilisis volutpat est velit egestas dui id ornare.
                  </div>
                  <div
                    className="button-wrapper5"
                    onClick={() => router.push('/LoginPage')}
                  >
                    <div className="button7">
                      <div className="div12">{`Go <~>`}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product6">
                <img
                  className="product-child3"
                  alt=""
                  src="/rectangle-222@2x.png"
                />
                <div className="produ-name-parent4">
                  <div className="produ-name7">ProSite</div>
                  <div className="lorem-ipsum-dolor31">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Lacus vel facilisis volutpat est velit egestas dui id ornare.
                  </div>
                  <div
                    className="button-wrapper5"
                    onClick={onFrameContainer7Click}
                  >
                    <div className="button7">
                      <div className="div12">{`Go <~>`}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-grouprow">
              <div className="product6">
                <img
                  className="product-child3"
                  alt=""
                  src="/rectangle-22@2x.png"
                />
                <div className="produ-name-parent4">
                  <div className="produ-name7">MegaSite</div>
                  <div className="lorem-ipsum-dolor31">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Lacus vel facilisis volutpat est velit egestas dui id ornare.
                  </div>
                  <div className="button-wrapper8">
                    <div className="button7">
                      <div className="div12">{`Go <~>`}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product6">
                <img
                  className="product-child3"
                  alt=""
                  src="/rectangle-221@2x.png"
                />
                <div className="produ-name-parent4">
                  <div className="produ-name7">UltraSite</div>
                  <div className="lorem-ipsum-dolor31">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Lacus vel facilisis volutpat est velit egestas dui id ornare.
                  </div>
                  <div
                    className="button-wrapper5"
                    onClick={onFrameContainer7Click}
                  >
                    <div className="button7">
                      <div className="div12">{`Go <~>`}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product6">
                <img
                  className="product-child3"
                  alt=""
                  src="/rectangle-222@2x.png"
                />
                <div className="produ-name-parent4">
                  <div className="produ-name7">SuperSite</div>
                  <div className="lorem-ipsum-dolor31">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Lacus vel facilisis volutpat est velit egestas dui id ornare.
                  </div>
                  <div
                    className="button-wrapper5"
                    onClick={onFrameContainer7Click}
                  >
                    <div className="button7">
                      <div className="div12">{`Go <~>`}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>      
      <div className="header1">
        <div className="logo-parent1">
          <img className="logo-icon2" alt="" src="/logo@2x.png" />
          <b className="service-name7">SuperSite</b>
        </div>
        <div className="header-link-group">
          <div className="h25">
            <div className="div12">#</div>
            <div className="lorem-ipsum-dolor21">Home</div>
          </div>
          <div className="h25">
            <div className="service-name7">#</div>
            <div className="inicio8">Acerca de</div>
          </div>
          <div className="h25">
            <div className="service-name7">#</div>
            <div className="inicio8">Servicios</div>
          </div>
          <div className="h25">
            <div className="service-name7">#</div>
            <div className="inicio8">Productos</div>
          </div>
          <div className="header-link9">
            <div className="service-name7">#</div>
            <div className="inicio8">Proyectos</div>
          </div>
          <div className="language-switcher1">
            <div className="es2">ES</div>
            <img
              className="language-switcher-item"
              alt=""
              src="/group-58.svg"
            />
            <div className="ru-container">
              <div className="service-name7">RU</div>
              <div className="service-name7">UA</div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
    
  );
};
