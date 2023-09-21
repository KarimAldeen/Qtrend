"use client"
import React, { useState } from 'react'
import TopHeader from '../../Components/Print/TopHeader'
import PrintNavBar from '../../Components/Print/PrintNavBar'
import CategorySlider from '../../Components/Print/CategorySlider'
import { Footer } from '../../Components/Home'
import CopyRight from '../../Components/Utils/CopyRight'
import { BsWhatsapp } from 'react-icons/bs'
import { useGetProduct } from '../../api/product'
import { useSearchParams } from 'next/navigation'
import { useTranslation } from 'react-i18next'
import Moaz from '../../Components/mhmad/Moaz'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SingleProduct = (product) => {

    const productID = useSearchParams().get('product_id');
    const [t] = useTranslation()
    const { data, isLoading } = useGetProduct({ product_id: productID })

    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedOption2, setSelectedOption2] = useState(null);
    const [Customized, setCustomized] = useState(false);
 
    const options = Array.from({ length: 10 }, (_, i) => ({
        value: i + 1,
        label: `${i + 1} item`,
    }));

    const options2 = [
        { value: 'Standard', label: 'Standard Design' },
        { value: 'Customized', label: 'Customized Design' },
    ];
    const initialValues = {
        name: '',
        emailOrPhone: '',
        requirements: '',
    };
    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        emailOrPhone: Yup.string()
            .required('Email or Phone Number is required')
            .email('Invalid email address'),
        requirements: Yup.string().required('Requirements are required'),
    });
    const [imagePreview, setImagePreview] = useState(null);
    const [FieldValue, setFieldValue] = useState(null);

    const handleImageChange = (e, setFieldValue) => {
        const file = e.target.files[0];
        if (file) {
            setFieldValue('image', file);
            const reader = new FileReader();
            reader.onload = (e) => {
                setImagePreview(e.target.result);
            };
            reader.readAsDataURL(file);
        } else {
            setFieldValue('image', null);
            setImagePreview(null);
        }
    };

    const handleSubmit = (values, { resetForm }) => {
        // Handle form submission here, e.g., send data to a server
        const Data = { ...values, image: imagePreview }
        console.log('Form submitted with values:', Data);
        resetForm();
        setImagePreview(null)

    };


    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
      };
      const handleSelectChange2 = (event) => {
        setSelectedOption2(event.target.value);
        if(event.target.value === "Customized"){
            setCustomized(true)
            
        }else{
            setCustomized(false)

        }
      };
    return (
        <div className='CONTAINER'>
            <TopHeader />
            <PrintNavBar />
            <div className='SingleProduct_container'>
                <div className='SingleProduct_body'>
                    <div className='SingleProduct_body_body'>

                        <div className='swiper_section'>
                            <CategorySlider />
                        </div>

                        <div className='mid_section'>

                            <div className='mid_left_section'>
                                <div className='more_img'>
                                    <img src={'/Print/Rectangle 9629.png'} alt='more_img' />
                                    <img src={'/Print/Rectangle 9629.png'} alt='more_img' />
                                    <img src={'/Print/Rectangle 9629.png'} alt='more_img' />
                                    <img src={'/Print/Rectangle 9629.png'} alt='more_img' />
                                </div>
                                <div className='main_img'>
                                    <img src={'/Print/Rectangle 9629.png'}
                                        // {BaseURL + product.image}
                                        alt='more_img' />
                                </div>
                            </div>

                            <div key={data?.id} className='mid_right_section'>
                                <h1 className='header_word'>{t("Paper Prints")}  {'>'} <span>{data?.name}</span></h1>
                                <h2 className='SingleProduct_title'>{data?.name}</h2>
                                <h3 className='from_to'>{t("From")}<span> {data?.low_price} Qr</span> {t("to")} <span>{data?.high_price} QR</span></h3>
                                <div className='SingleProduct_desc'>
                                    <p className='first_SingleProduct_desc'>
                                        {/* {data?.description} */}
                                        Personal cards are the address of your company and it is also the first interface in front of
                                        your customers and thus gives the first and most important impression of the customer
                                        Accordingly, the company must give great attention to the cards to give a distinctive,
                                        attractive and correct impression of the company
                                        The importance of the cards is not only for companies, but also for small shops,
                                        institutions and home projects.
                                        We have many distinct options for personal cards to suit all required options at distinctive
                                        prices and suitable for different budgets
                                    </p>

                                </div>
                                <div className='SingleProduct_options'>
                                    <div className='first_option'>
                                        <div> {t("Quantity")}:</div>
                                        <select value={selectedOption} onChange={handleSelectChange}>
                                            {options.map((option) => (
                                                <option key={option.value} value={option.value}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </select>
                                       
                                    </div>

                                    <div className='second_option'>
                                        <div> {t("Design")}:</div>
                                        <select value={selectedOption2} onChange={handleSelectChange2}>
                                            {options2.map((option) => (
                                                <option key={option.value} value={option.value}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </select>
                                     
                                    </div>
                                </div>
                                <div className='SingleProduct_total'>
                                    <p className='TOTAL'>{t("Total")}:
                                    </p>
                                    <Moaz price={data?.product_price} />
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

                            {
                               Customized &&
                                <Formik
                                    initialValues={initialValues}
                                    validationSchema={validationSchema}
                                    onSubmit={handleSubmit}
                                >
                                    {({ errors, touched }) => (
                                        <Form>
                                            <div className="coustomized_design">
                                                <h1 className="coustomized_design_title">
                                                    {t("Customized Design")} <span>{t("(option)")}</span>
                                                </h1>
                                                <p className="coustomized_design_text">
                                                    {t(
                                                        "We are offering a consultation to understand your needs, brand identity, and the message they want to convey through your artwork in order to ensure readability and consistency with your brand."
                                                    )}
                                                </p>
                                                <div className="Input_top">
                                                    <label>{t("Name *")}</label>
                                                    <Field type="text" name="name" />
                                                    {errors.name && touched.name && (
                                                        <div className="error">{errors.name}</div>
                                                    )}
                                                </div>
                                                <div className="Input_mid">
                                                    <label>{t("Email Or Phone Number *")}</label>
                                                    <Field type="email" name="emailOrPhone" />
                                                    {errors.emailOrPhone && touched.emailOrPhone && (
                                                        <div className="error">{errors.emailOrPhone}</div>
                                                    )}
                                                </div>
                                                <div className="Input_last">
                                                    <label>{t("Requirements *")}</label>
                                                    <Field type="text" name="requirements" />
                                                    {errors.requirements && touched.requirements && (
                                                        <div className="error">{errors.requirements}</div>
                                                    )}
                                                </div>
                                                <div className="Input_image">

                                                    {imagePreview && (
                                                        <img
                                                            src={imagePreview}
                                                            alt="Selected"
                                                            className="image-preview"
                                                        />
                                                    )}
                                                    {errors.image && touched.image && (
                                                        <div className="error">{errors.image}</div>
                                                    )}
                                                </div>
                                                <div className="buttons_div">

                                                    <div className='input-file-container'>
                                                        <label htmlFor="file-input" className="custom-file-button">
                                                            {t("Upload file")}                                                        </label>
                                                        <input
                                                            type="file"
                                                            id="file-input"
                                                            accept="image/*"
                                                            onChange={(e) => handleImageChange(e, setFieldValue)}
                                                        />
                                                    </div>
                                                    <button className="quote_button" type="submit">
                                                        <BsWhatsapp /> {t("Get a quick quote")}
                                                    </button>
                                                </div>
                                            </div>
                                        </Form>
                                    )}
                                </Formik>
                            }
                        </div>


                    </div>
                </div>
            </div>
            <Footer />
            <CopyRight />
        </div>
    )
}

export default SingleProduct