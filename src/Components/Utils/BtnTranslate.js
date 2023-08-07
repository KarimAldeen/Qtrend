"use client"
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
const BtnTranslate = () => {
  const [Word, setWord] = useState("AR")
  const [t, i18n] = useTranslation();
  function Trans(){
      if(Word === "AR"){
        lungAR()
      }
      else{
        lungEN()
      }
  }
  function lungAR() { i18n.changeLanguage('ar'); document.body.classList.add('ar'); localStorage.setItem("Lung", "ar");setWord("EN") }
  function lungEN() { i18n.changeLanguage('en'); document.body.classList.remove('ar'); localStorage.setItem("Lung", "en");setWord("AR") }

  return (
    <div className='Lung'>
      <span className="switch-left" onClick={() => Trans()}>{t(Word)}</span>
    </div>
  )
}

export default BtnTranslate