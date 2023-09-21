"use client"
import React from 'react'
import TopHeader from '../../Components/Print/TopHeader'
import PrintNavBar from '../../Components/Print/PrintNavBar'
import CategorySlider from '../../Components/Print/CategorySlider'
import { Footer } from '../../Components/Home'
import CopyRight from '../../Components/Utils/CopyRight'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'
import ShopIcon from '../../Components/Print/Icon/ShopIcon'
import GrayBG from './grayBG'
import GreenBG from './greenBG'
import { BaseURL } from '../../api/config'
import {useGetProduct} from '../../api/product'
import { useSearchParams } from 'next/navigation'
import { useTranslation } from 'react-i18next'
import Moaz from '../../Components/mhmad/Moaz'
const SingleProduct = (product) => {
    const productID = useSearchParams().get('product_id');
    const [t] = useTranslation()
    
    const {i18n} = useTranslation()    
   
    const {data, isLoading} = useGetProduct({product_id:productID})
    
    console.log(data);
  return (
        <div className='CONTAINER'>
            <TopHeader/>
            <PrintNavBar/>
            <div className='SingleProduct_container'>
                <div className='SingleProduct_body'>
                  <div className='SingleProduct_body_body'>

                    <div className='swiper_section'>
                        <CategorySlider/>
                    </div>
                  
                    <div className='mid_section'>

                        <div className='mid_left_section'>
                            <div className='more_img'>
                                <img src={'/Print/Rectangle 9629.png'} alt='more_img'/>
                                <img src={'/Print/Rectangle 9629.png'} alt='more_img'/>
                                <img src={'/Print/Rectangle 9629.png'} alt='more_img'/>
                                <img src={'/Print/Rectangle 9629.png'} alt='more_img'/>
                            </div>
                            <div className='main_img'>
                            <img src={'/Print/Rectangle 9629.png'}
                            // {BaseURL + product.image}
                             alt='more_img'/>
                            </div>
                        </div>
                        
                        <div key={data?.id} className='mid_right_section'>
                            <h1 className='header_word'>{t("Paper Prints")}  {'>'} <span>{data?.name}</span></h1>
                            <h2 className='SingleProduct_title'>{data?.name}</h2>
                            <h3 className='from_to'>{t("From")}<span> {data?.low_price} Qr</span> {t("to")} <span>{data?.high_price} QR</span></h3>
                            <div className='SingleProduct_desc'>
                            <p className='first_SingleProduct_desc'>{data?.description}</p>
                            {/* <p className='second_SingleProduct_desc'>{product.secondDesc}</p>
                            <p className='third_SingleProduct_desc'>{product.thirdDesc}</p> */}
                            </div>
                            <div className='SingleProduct_options'>
                                <div className='first_option'>
                                    {t("Quantity")}:
                                    <select type="text" id="option" placeholder='Choose an option' name="option"/>
                                </div>

                                <div className='second_option'>
                                    {t("Design")}:
                                    <select type="text" placeholder='Choose an option' id="option" name="option"/>
                                </div>
                            </div>
                            <div className='SingleProduct_total'>
                                <p className='TOTAL'>{t("Total")}:    
                                {/* <span>{data?.product_price}</span> */}
                                </p>
                                <Moaz price={data?.product_price}/>
                                {/* <div className='Gray_Green_bg'>
                                <GrayBG/>
                                        <div className='add_to_cart_container'>
                                            <GreenBG/>
                                            <div className='cart_body_button'>
                                                <p>Add to Cart</p>
                                                <ShopIcon />
                                            </div>
                                        </div>
                                    </div> */}
                               
                                        
                            </div>
                        </div>
                          
                    </div>
                       

                    <div className='last_section'>
                        <div className='important_notes'>
                            <h1 className='important_notes_title'>{t("Important notes:")}</h1>
                            <p className='important_notes_text'>{t("Delivery within 3 working days, design must be submitted before 12 noon on working days.")}</p>
                            <p className='important_notes_desc'>{t("When requesting the service of Business Card  please note the following:")}</p>
                            <p className='important_notes_first'><span>.</span> {t("Send a copy of the commercial register with the attachments")}</p>
                            <p className='important_notes_second'><span>.</span> {t("Bring the original commercial register upon receipt")}</p>
                            <p className='important_notes_third'><span>.</span> {t("A letter of authorization from the facility to Raya Al Rowad Agency to make the stamp")}</p>
                            <p className='important_notes_fourth'><span>.</span> {t("The stamp is given to the authorized person only")}</p>
                            <p className='important_notes_fifth'><span>.</span> {t("We do not make seals for government agencies")}</p>

                        </div>

                        <div className='coustomized_design'>
                            <h1 className='coustomized_design_title'>{t("Customized Design")} <span>{t("(option)")}</span></h1>
                            <p className='coustomized_design_text'>{t("We are offering a consultation to understand your needs, brand identity, and the message they want to convey through your art work in order to ensure readability and consistency with your brand.")}</p>
                            <div className='Input_top'>
                                <label>{t("Name *")}</label>
                                <input type='text'/>
                            </div>
                            <div className='Input_mid'>
                                <label>{t("Email Or Phone Number *")}</label>
                                <input type='email'/>
                            </div>
                            <div className='Input_last'>
                                <label>{t("Requirements *")}</label>
                                <input type='text'/>
                            </div>
                            <div className='buttons_div'>
                                <button className='Upload_button'>{t("Upload file")}</button>
                                <button className='quote_button'><BsWhatsapp/>{t("Get a quick quote")}</button>
                            </div>
                        </div>
                    </div>


                  </div>
                </div>
            </div>
            <Footer/>
            <CopyRight/> 
        </div>
    )
}

export default SingleProduct