import React from 'react'

const LogoAnimation = () => {
  return (
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  width={896}
  height={904}
  viewBox="0 0 896 904"
>
  <defs>
   
    <pattern
      id="pattern-2"
      preserveAspectRatio="none"
      width="100%"
      height="100%"
      viewBox="0 0 2000 2000"
    >
      <image
        width={2000}
        height={2000}
        xlinkHref="../Home/5/Home5_Image/Logo_Animation2.webp"
      />
       <image
        width={2000}
        height={2000}
        xlinkHref="../Home/5/Home5_Image/Logo_Animation.webp"
      />
    </pattern>
  </defs>
  <g id="Logo_Animations" transform="translate(-471 1289)">
   
  <rect
      id="Logo_Animation"
      width={896}
      height={904}
      transform="translate(471 -1589)"
      fill="url(#pattern-2)"
    />
    <rect
      id="Logo_Animation2"
      width={896}
      height={904}
      transform="translate(471 -1589)"
      fill="url(#pattern-2)"
      opacity={0}
    />
  </g>
</svg>

  )
}

export default LogoAnimation