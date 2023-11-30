import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import style from "./RightNav.module.css";
import { ReactComponent as RightArrow } from "./../../../assets/rightarrow.svg";

export default function RightNav() {
  const swiper = useSwiper();
  const [isEnd, setIsEnd] = useState(swiper.isEnd);
  console.log('from rightnav isEnd: ',isEnd)

  useEffect(() => {
    swiper.on("slideChange", function() {
      setIsEnd(swiper.isEnd);
    });
  }, []);

  return (
    <div className={style.rightNav}>
      {!isEnd && <RightArrow onClick={() => swiper.slideNext()} />}
    </div>
  );
}
