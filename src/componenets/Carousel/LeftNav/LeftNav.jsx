import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import style from "./LeftNav.module.css";
import { ReactComponent as LeftArrow } from "./../../../assets/leftarrow.svg";

export default function LeftNav() {
  const swiper = useSwiper();
  const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);
  // let [count, setCount] = useState(0);
  // console.log("leftnavigation is beginning", isBeginning);

  useEffect(() => {
    swiper.on("slideChange", function() {
      // console.log("slidechange is running in leftNav");
      setIsBeginning(swiper.isBeginning);
      // console.log(swiper.isBeginning);
    });
  }, []);


  return (
    <div className={style.leftNav}>
      {!isBeginning && (
        <LeftArrow  onClick={() => {swiper.slidePrev()}} />
      )}
    </div>
  );
}
