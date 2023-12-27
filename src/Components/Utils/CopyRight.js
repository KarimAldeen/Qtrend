import React from 'react'
import { useTranslation } from 'react-i18next'

const CopyRight = () => {
  const [t] = useTranslation()
  return (
    <div className='CopyRight'>
        <p className='left'>
            {t("© Copyright 2023 SDNone For Advertising All Rights Reserved.")}
        </p>
        <p className='right'>
           {t("Develop and design by SDNone studio")}
        </p>
    </div>
  )
}

export default CopyRight

