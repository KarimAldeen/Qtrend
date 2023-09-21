import React from 'react'

const GreenBG = () => {
  return (
    <svg  
      xmlns="http://www.w3.org/2000/svg" width="150" height="90" viewBox="0 0 214 85" fill="none"
      className='GreenBG'>
        <g filter="url(#filter0_d_6_7652)">
        <path d="M190.601 11C196.578 11 200.401 17.3665 197.592 22.6419L176.685 61.9118C175.31 64.4955 172.622 66.1099 169.694 66.1099L23.2626 66.1099C14.6645 66.1099 12.227 54.3338 20.1186 50.9207L110.913 11.6508C111.906 11.2215 112.976 11 114.057 11L190.601 11Z" fill="#C4FD14"/>
        </g>
        <defs>
        <filter id="filter0_d_6_7652" x="0.482275" y="0.11" width="212.9" height="84.8099" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="3.96"/>
        <feGaussianBlur stdDeviation="7.425"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_6_7652"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_6_7652" result="shape"/>
        </filter>
        </defs>
    </svg>
    )
}

export default GreenBG