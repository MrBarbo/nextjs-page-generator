"use client";
import { useCallback } from "react";
import Header from "../components/Header";
import WhoWeAre from "../components/WhoWeAre";
import OurValues from "../components/OurValues";
import WhatWeOffer from "../components/WhatWeOffer";
import WhatWeHave from "../components/WhatWeHave";
import WhatWeDo from "../components/WhatWeDo";
import Footer from "../components/Footer";
import { useRouter } from "next/router"
import Link from "next/link";
import "../app/globals.css";

import styles from "./Prefab.module.css";

const Prefab = () => {

  const router = useRouter();
  const  {
    query: { name, description, mission }
  } = router;

  const onHeaderLinkContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='whoWeAre']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

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

  return (
    <div className={styles.prefab}>
      <div className={styles.who_we_are_group}>
        <WhoWeAre
          textHeader={
            
              name
              
            }
          textHeaderColor={
            
              ""
              
            }
          textHeaderCont={
            
              ""
            
            }
          image="/image1@2x.png"
          propParagraph={
            
            description
            
            }
        />
        <OurValues
          propMis={

              mission

          }
          propVis={

            "<LoremIpsumshdbsbbsbsbsbsbsbbs"
 
          }
          propObj={

            "<LoremIpsumshdbsbbsbsbsbsbsbbs"
 
          }
        />
        <WhatWeOffer
          serviceName="<LoremIpsumshdbsbbsbsbsbsbsbbs"
          serviceDesc="<LoremIpsumshdbsbbsbsbsbsbsbbs"
          serviceName1="<LoremIpsumshdbsbbsbsbsbsbsbbs"
          serviceDesc1="<LoremIpsumshdbsbbsbsbsbsbsbbs"
          serviceName2="<LoremIpsumshdbsbbsbsbsbsbsbbs"
          serviceDesc2="<LoremIpsumshdbsbbsbsbsbsbsbbs"
          serviceName3="<LoremIpsumshdbsbbsbsbsbsbsbbs"
          serviceDesc3="<LoremIpsumshdbsbbsbsbsbsbsbbs"
        />
        <WhatWeHave
          prodPhot="/rectangle-22@2x.png"
          produName="<LoremIpsumshdbsbbsbsbsbsbsbbs"
          productDesc="<LoremIpsumshdbsbbsbsbsbsbsbbs"
          prodPhot1="/rectangle-225@2x.png"
          produName1="<LoremIpsumshdbsbbsbsbsbsbsbbs"
          productDesc1="<LoremIpsumshdbsbbsbsbsbsbsbbs"
          prodPhot2="/rectangle-227@2x.png"
          produName2="<LoremIpsumshdbsbbsbsbsbsbsbbs"
          productDesc2="<LoremIpsumshdbsbbsbsbsbsbsbbs"
          prodPhot3="/rectangle-22@2x.png"
          produName3="<LoremIpsumshdbsbbsbsbsbsbsbbs"
          productDesc3="<LoremIpsumshdbsbbsbsbsbsbsbbs"
          prodPhot4="/rectangle-225@2x.png"
          produName4="<LoremIpsumshdbsbbsbsbsbsbsbbs"
          productDesc4="<LoremIpsumshdbsbbsbsbsbsbsbbs"
          prodPhot5="/rectangle-227@2x.png"
          produName5="<LoremIpsumshdbsbbsbsbsbsbsbbs"
          productDesc5="<LoremIpsumshdbsbbsbsbsbsbsbbs"
        />
        <WhatWeDo
          projFoto="/rectangle-22@2x.png"
          projName="<LoremIpsumshdbsbbsbsbsbsbsbbs"
          projDesc="<LoremIpsumshdbsbbsbsbsbsbsbbs"
        
          projFoto1="/rectangle-225@2x.png"
          projName1="<LoremIpsumshdbsbbsbsbsbsbsbbs"
          projDesc1="<LoremIpsumshdbsbbsbsbsbsbsbbs"

          projFoto2="/rectangle-227@2x.png"
          projName2="<LoremIpsumshdbsbbsbsbsbsbsbbs"
          projDesc2="<LoremIpsumshdbsbbsbsbsbsbsbbs"

          projFoto3="/rectangle-22@2x.png"
          projName3="<LoremIpsumshdbsbbsbsbsbsbsbbs"
          projDesc3="<LoremIpsumshdbsbbsbsbsbsbsbbs"

          projFoto4="/rectangle-225@2x.png"
          projName4="<LoremIpsumshdbsbbsbsbsbsbsbbs"
          projDesc4="<LoremIpsumshdbsbbsbsbsbsbsbbs"

          projFoto5="/rectangle-227@2x.png"
          projName5="<LoremIpsumshdbsbbsbsbsbsbsbbs"
          projDesc5="<LoremIpsumshdbsbbsbsbsbsbsbbs"
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
