"use client";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { Element } from 'react-scroll';
import "../app/globals.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import OurValues from "../components/OurValues";
import WhatWeDo from "../components/WhatWeDo";
import WhatWeHave from "../components/WhatWeHave";
import WhatWeOffer from "../components/WhatWeOffer";
import WhoWeAre from "../components/WhoWeAre";
import styles from "./Prefab.module.css";

const Prefab = () => {

  const router = useRouter();
  const  {
    query: { name, description, mission, vission, objectives, 
    service1, service2, service3, service4,
    service1d,service2d,service3d,service4d,
    linkimg,
    prodTitle, prodDesc, prodLink,
    prodTitle2, prodDesc2, prodLink2,
    prodTitle3, prodDesc3, prodLink3,
    projTechs1, projName1, projDesc1, projLink1,
    projTechs2, projName2, projDesc2, projLink2,  
    linked, insta, gith, email,bettertext  
}
  } = router;


  const onEmailIconClick = useCallback(() => {
    window.location.href = `mailto:${email}`;
  }, []);

  const onLinkedinIconClick = useCallback(() => {
    window.open(linked);
  }, []);

  const onInstagramIconClick = useCallback(() => {
    window.open(insta);
  }, []);

  const onGithubIconClick = useCallback(() => {
    window.open(gith);
  }, []);

  return (
    <div className={styles.prefab}>
      <Header
        showFrameDiv        
      />
      <div className={styles.who_we_are_group}>
      <Element name="whoWeAre"></Element>
        <WhoWeAre
          textHeader={
            
              name
              
            }          
          image={linkimg}
          propParagraph={
            
            bettertext
            
            }
        />
        <Element name="ourValues"></Element>
        <OurValues
          propMis={

              mission

          }
          propVis={

              vission
 
          }
          propObj={

              objectives
 
          }
        />
        <Element name="whatWeOffer"></Element>
        <WhatWeOffer
          serviceName= {service1}
          serviceDesc= {service1d}
          serviceName1={service2}
          serviceDesc1={service2d}
          serviceName2={service3}
          serviceDesc2={service3d}
          serviceName3={service4}
          serviceDesc3={service4d}
        />
        <Element name="whatWeHave"></Element>
        <WhatWeHave
          prodPhot="/rectangle-22@2x.png"
          produName={prodTitle}
          productDesc={prodDesc}
          prodLink={prodLink}
          prodPhot1="/rectangle-225@2x.png"
          produName1={prodTitle2}
          productDesc1={prodDesc2}
          prodLink1={prodLink2}
          prodPhot2="/rectangle-227@2x.png"
          produName2={prodTitle3}
          productDesc2={prodDesc3}
          prodLink2={prodLink3}
          prodPhot3="/rectangle-22@2x.png"
          produName3=""
          productDesc3=""
          prodPhot4="/rectangle-225@2x.png"
          produName4=""
          productDesc4=""
          prodPhot5="/rectangle-227@2x.png"
          produName5=""
          productDesc5=""
        />
        <Element name="whatWeDo"></Element>
        <WhatWeDo
          projFoto={"/rectangle-22@2x.png"}
          projTechs={projTechs1}
          projName={projName1}
          projDesc={projDesc1}
          projLink={projLink1}
        
          projFoto1={"/rectangle-22@2x.png"}
          projTechs1={projTechs2}
          projName1={projName2}
          projDesc1={projDesc2}
          projLink1={projLink2}

          projFoto2="/rectangle-227@2x.png"
          projName2=""
          projDesc2=""

          projFoto3="/rectangle-22@2x.png"
          projName3=""
          projDesc3=""

          projFoto4="/rectangle-225@2x.png"
          projName4=""
          projDesc4=""

          projFoto5="/rectangle-227@2x.png"
          projName5=""
          projDesc5=""
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
