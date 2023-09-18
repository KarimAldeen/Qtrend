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
const SingleProduct = () => {
    const data = {
        products:[
            {
                id:1,
                name:"Business Cards",
                from:130,
                to:150,
                firstDesc:"Personal cards are the address of your company and it is also the first interface in front of your customers and thus gives the first and most important impression of the customer Accordingly, the company must give great attention to the cards to give a distinctive, attractive and correct impression of the company",
                secondDesc:"The importance of the cards is not only for companies, but also for small shops, institutions and home projects.",
                thirdDesc:"We have many distinct options for personal cards to suit all required options at distinctive prices and suitable for different budgets",
                price:"140.00",
            },
            // {
            //     id:1,
            //     name:"Business Cards",
            //     from:130,
            //     to:150,
            //     firstDesc:"jabkb",
                
            // },
            
        ]
    }
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
                            <img src={'/Print/Rectangle 9629.png'} alt='more_img'/>
                            </div>
                        </div>
                        {
                            data?.products?.map(product => (
                        <div key={product.id} className='mid_right_section'>
                            <h1 className='header_word'>Paper Prints  {'>'} <span>{product.name}</span></h1>
                            <h2 className='SingleProduct_title'>{product.name}</h2>
                            <h3 className='from_to'>From <span>{product.from} Qr</span> to <span>{product.to} QR</span></h3>
                            <div className='SingleProduct_desc'>
                            <p className='first_SingleProduct_desc'>{product.firstDesc}</p>
                            <p className='second_SingleProduct_desc'>{product.secondDesc}</p>
                            <p className='third_SingleProduct_desc'>{product.thirdDesc}</p>
                            </div>
                            <div className='SingleProduct_options'>
                                <div className='first_option'>
                                    Quantity :
                                    <select type="text" id="option" placeholder='Choose an option' name="option"/>
                                </div>

                                <div className='second_option'>
                                    Design :
                                    <select type="text" placeholder='Choose an option' id="option" name="option"/>
                                </div>
                            </div>
                            <div className='SingleProduct_total'>
                                <p className='TOTAL'>Total:     <span>{product.price} Qr</span></p>
                                {/* Gray SVG */}
                                <GrayBG/>
                                {/* end Green SVG */}

                                {/* add to cart container */}
                                <div className='add_to_cart_container'>
                                <div className='add_to_cart_container'>
                                    <GreenBG/>
                                    <div className='cart_body_button'>
                                        <p>Add to Cart</p>
                                        <ShopIcon />
                                    </div>
                                </div>
                                {/* Start Green SVG */}
                                
                                {/* end Green SVG */}
                                </div>
                            </div>
                        </div>
                          ))
                        }
                    </div>


                    <div className='last_section'>
                        <div className='important_notes'>
                            <h1 className='important_notes_title'>Important notes:</h1>
                            <p className='important_notes_text'>Delivery within 3 working days, design must be submitted before 12 noon on working days.</p>
                            <p className='important_notes_desc'>When requesting the service of Business Card  please note the following:</p>
                            <p className='important_notes_first'><span>.</span> Send a copy of the commercial register with the attachments</p>
                            <p className='important_notes_second'><span>.</span> Bring the original commercial register upon receipt</p>
                            <p className='important_notes_third'><span>.</span> A letter of authorization from the facility to Raya Al Rowad Agency to make the stamp</p>
                            <p className='important_notes_fourth'><span>.</span> The stamp is given to the authorized person only</p>
                            <p className='important_notes_fifth'><span>.</span> We do not make seals for government agencies</p>

                        </div>

                        <div className='coustomized_design'>
                            <h1 className='coustomized_design_title'>Customized Design <span>(option)</span></h1>
                            <p className='coustomized_design_text'>We are offering a consultation to understand your needs, brand identity, and the message they want to convey through your art work in order to ensure readability and consistency with your brand.</p>
                            <div className='Input_top'>
                                <label>Name*</label>
                                <input type='text'/>
                            </div>
                            <div className='Input_mid'>
                                <label>Email Or Phone Number *</label>
                                <input type='email'/>
                            </div>
                            <div className='Input_last'>
                                <label>Requirements *</label>
                                <input type='text'/>
                            </div>
                            <div className='buttons_div'>
                                <button className='Upload_button'>Upload file</button>
                                <button className='quote_button'><BsWhatsapp/>Get a quick quote</button>
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