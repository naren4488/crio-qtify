import React from 'react'
import style from './HeroSection.module.css'
import vibratingHeadphone from './../../assets/vibrating-headphone.png'

export default function HeroSection() {
  return (
    <div className={style.wrapper}>
        <div className={style.content}>
            <div className={style.para}>
            <p>100 Thousand Songs, ad-free</p>
            <p>Over thousands podcast episodes</p>
            </div>
            <div className={style.image}>
                <img src={vibratingHeadphone} alt='headphone' width={212}/>
            </div>
        </div>
    </div>
  )
}
