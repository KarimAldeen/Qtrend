'use client'
import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";

const CustomToastContainer = (props) => {
    const [mount , setIsMount]  = useState(false)
    const  {i18n} = useTranslation()
    
    useEffect(()=>{
        setIsMount(true)
    },[])
    const dir = i18n.dir
  const position = dir === "ltr" ? "bottom-right" : "bottom-left";
  const rtl = dir === "rtl";

  return (
    mount&&
    <ToastContainer
      position={position}
      autoClose={10000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={rtl}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      {...props}
    />
  );
};

export default CustomToastContainer;
