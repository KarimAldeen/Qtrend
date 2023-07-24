import NavBar from "@/Components/NavBar";
import Image from "next/image";
import React from "react";
import HUMAN from "../../../public/works/human.png";

import {Inter , Roboto} from 'next/font/google'
import Line from "@/Components/works/Line";

const inter = Inter({ subsets: ['latin'] ,
weight:['400']})
const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
  })
function Works() {
  return (
    <div className="work-page">
      <NavBar />
      <Image
        width={702}
        height={582}
        className="human"
        src={HUMAN}
        alt="image f"
      />
      <div className="text-works">
        <p className="text-first"> OvereAll</p>
        <p className={"text-second " + roboto.className}>
         Extend Your Market Reach by Establishing a Distinct Brand
          Identity and Creating Appealing Marketing Content
          </p>
          <p className={"text-third " + inter.className}>
            Engage a Larger Customer Base with a Compelling Brand Identity and a
            Collection of <br/>Visually Striking Marketing Material s.Reach a Broader
            Customer Segment by Crafting a<br/> Standout Brand Identity and
            Compelling Visual Marketing Materials
          </p>
      </div>
      <Line />
      <div className="image-line-con">
            gggggggggggggggggggggggg
      </div>
    </div>
  );
}

export default Works;
