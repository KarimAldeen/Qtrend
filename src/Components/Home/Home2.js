import React from 'react'
import Services_Cards from '../../Components/Utils/Services_Cards'
import { FaFacebookF, FaTiktok, FaWhatsapp, FaSnapchatGhost, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import {DATASOCIALMEDIA} from '../../config/SOCIALMEDIA'
import Home23_BG from './Home23_BG';
const Home2 = ({t ,data}) => {
  return (
    <div className='Home2'>
        <Home23_BG t={t}/>
        <div className='Home2_Contain'>
          <div className='Home2_Text'>
            <h2>{t("Welcome")}</h2>
            <div className='Home2_Text_h1'>
              <h1>
                {t("Extend Your Market Reach by Establishing a Distinct")}
              </h1>
              <h1>
                {t("Brand Identity and Creating Appealing Marketing Content")}
              </h1>
            </div>
            <p>
             {t("Engage a Larger Customer Base with a Compelling Brand Identity and a Collection of Visually Striking Marketing Materials.Reach a Broader Customer Segment by Crafting a Standout Brand Identity and Compelling Visual Marketing Materials")}
            </p>
            <button className="btn">{t("Let’s Talk")}</button>

          </div>
          <div className='Home2_Services'>
            <Services_Cards  t={t} Key={1} Word1={"CREATIVE"} Word2={"DESIGNS"} />
            <Services_Cards  t={t} Key={2} Word1={"DIGITAL"} Word2={"MARKETING"} />
            <Services_Cards  t={t} Key={3} Word1={"PHOTOS"} Word2={"&VIDEOS"} />

          </div>
          <div className='Home2_Services2'>
            <Services_Cards t={t} Key={4} Word1={"MODELING"} Word2={"SERVICES"} />
            <Services_Cards t={t} Key={5} Word1={"APPS & WEB"} Word2={"DEVELOPMENT"} />
            <Services_Cards t={t} Key={6} Word1={"SOCIAL MEDIA ACCOUNTS VERIFICATION & BLOGGERS"} Word2={"SERVICES"} />


          </div>
          <div className='Services_Social'>
            
            {
              
              DATASOCIALMEDIA.map((icon ,index) =>{

                const object_is_exist = data?.find(social => social.icon == icon.key)
                return (
                  <div className={`Services_MIcon MIcon${index+1}`} key={index} style={{display:object_is_exist? 'block' :"none"}}>
                         <a href={object_is_exist?.link} target='_blank'>
                           {icon.icon}
                         </a>
   
                       </div>
                 )
              }
              )
            }

          </div>

        </div>
      </div>
  )
}

export default Home2