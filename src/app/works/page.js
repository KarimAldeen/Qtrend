import NavBar from "@/Components/NavBar";
import Image from "next/image";
import React from "react";
import Footer from "@/Components/Footer";

function Works() {
  return (
    <div className="work_page">
      <NavBar />
      <img className="works_img" src="../Works/Works_BG.jpg" alt=""/>

      <div className="text_works">
        <p className="text_first"> OverAll</p>
        <p className="text_second">
         Extend Your Market Reach by Establishing a Distinct<br/> Brand
          Identity and Creating Appealing Marketing <br/> Content
          </p>  
          <p className="text_third">
            Engage a Larger Customer Base with a Compelling Brand Identity and a
            Collection of <br/>Visually Striking Marketing Material s.Reach a Broader
            Customer Segment by Crafting a<br/> Standout Brand Identity and
            Compelling Visual Marketing Materials
          </p>
      </div>

      <div className="works_img" >

        <div className="img_first">
        <div className="img1">
          <img src="../Works/1.svg" alt=""/>
        </div>
        <div className="img4">
          <img src="../Works/2.svg" alt=""/>
        </div>
        </div>
        <div className="img_second">
        <div className="img3">
          <img src="../Works/1.svg" alt=""/>
        </div>
        <div className="img2">
          <img src="../Works/2.svg" alt=""/>
        </div>

          </div>
          
      </div>

      <Footer/>

    </div>
  );
}

export default Works;
