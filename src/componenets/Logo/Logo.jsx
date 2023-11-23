import React from 'react'
import LogoImage from './../../assets/logo.png'
import style from "./Logo.module.css"

export default function Logo() {
  return (
    <div className={style.logo}>
        <img src={LogoImage} alt="logo" width={67}/>
    </div>
  )
}
