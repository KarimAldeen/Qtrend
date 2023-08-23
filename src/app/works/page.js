"use client"

import NavBar from "../../Components/Utils/NavBar";
import Image from "next/image";
import React from "react";
import Footer from "../../Components/Utils/Footer";
import { useTranslation } from "react-i18next";
function Works() {
  const [t] = useTranslation()
  return (
    <>
    
    <div className="work_page">
      <NavBar />
      {/* <img className="works_img" src="../Works/Works_BG.jpg" alt=""/> */}
      <img className="works_img" src="../works/OurWorks.webp" alt=""/>
      <div className="OUR_PROJECTS">
        <p className="OUR">{t("OUR")}</p>
        <p className="PROJECTS">{t("PROJECTS")}</p>
      </div>
      <div className="text_works">
        <p className="text_first">{t("OverAll")}</p>
        <p className="text_second">
         {t("Extend Your Market Reach by Establishing a Distinct")}<br/>
          {t("Brand Identity and Creating Appealing Marketing")} <br/> {t(" Content")}
          </p>  
          <p className="text_third">
            {t("Engage a Larger Customer Base with a Compelling Brand Identity and aCollection of ")}
            <br/>{t("Visually Striking Marketing Material s.Reach a Broader Customer Segment by Crafting a")}
            <br/>{t(" Standout Brand Identity and Compelling Visual Marketing Materials")}
          </p>
      </div>

      <div className="works_img" >

        <div className="img_first">
        <div className="img1">
          <img src="../works/1.webp" alt=""/>
        </div>
        <div className="img4">
          <img src="../works/4.webp" alt=""/>
        </div>
        </div>
        <div className="img_second">
        <div className="img3">
          <img src="../works/3.webp" alt=""/>
        </div>
        <div className="img5">
          <img src="../works/6.webp" alt=""/>
        </div>
        <div className="img2">
          <img src="../works/5.webp" alt=""/>
        </div>
        <div className="img5">
          <img src="../works/5.png" alt=""/>
        </div>

          </div>
          
      </div>

      <Footer/>
    </div>
    

</>

  );
}

export default Works;
