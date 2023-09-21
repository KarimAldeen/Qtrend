import React from 'react'

const GrayBG = () => {
  return (

   <div>
     <svg  
     className='GrayBG'
    //  style={{width:"100%",transform:"translate(-10vw)",zIndex:"0"}}
      xmlns="http://www.w3.org/2000/svg" width="180" height="85" viewBox="0 0 226 85" fill="none">
        <g filter="url(#filter0_d_76_189)">
        <path d="M23.6309 66C18.4824 66 14.7025 61.1649 15.945 56.1686L25.6839 17.0086C26.5619 13.4782 29.7319 11 33.3698 11L202.261 11C210.737 11 213.289 22.5177 205.607 26.0985L126.026 63.1914C122.057 65.0413 117.731 66 113.352 66L23.6309 66Z" fill="#D0D0D0"/>
        </g>
        <defs>
        <filter id="filter0_d_76_189" x="0.857031" y="0.11" width="224.185" height="84.7" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="3.96"/>
        <feGaussianBlur stdDeviation="7.425"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_76_189"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_76_189" result="shape"/>
        </filter>
        </defs>
    </svg>
   </div>
    )
}

export default GrayBG