import React from "react";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Button from "../Button/Button";
import style from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={style.navbar}>
      <Logo />
      <Search placeholder="Search a album of your choice" />
      <Button>Give Feedback</Button>
    </nav>
  );
}
