import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
import { Navigation } from "swiper";
import style from "./Carousel.module.css";
import "swiper/css";
import LeftNav from "./LeftNav/LeftNav";
import RightNav from "./RightNav/RightNav";

const Controls = ({ data }) => {
  const swiper = useSwiper();
  useEffect(() => {
    swiper.slideTo(0, 1);
    // console.log("useeffect of control");
  }, [data]);
};

export default function Carousel({ data, renderComponent }) {
//   console.log('data in carousel ', data);
  return (
    <div className={style.wrapper}>
      <Swiper
        style={{ padding: "0px 20px" }}
        initialSlide={0}
        modules={[Navigation]}
        slidesPerView={'auto'}
        spaceBetween={40}
        allowTouchMove
      >
        <Controls data={data} />
        <LeftNav />
        <RightNav />
        {data.map((ele) => { 
            // console.log(ele)
          return (<SwiperSlide key={ele.id}>{renderComponent(ele)}</SwiperSlide>)
        })}

        {/* <SwiperSlide className={style.carouselCard}>Slide 2</SwiperSlide>
        <SwiperSlide className={style.carouselCard}>Slide 3</SwiperSlide>
        <SwiperSlide className={style.carouselCard}>Slide 4</SwiperSlide>
        <SwiperSlide className={style.carouselCard}>Slide 5</SwiperSlide>
        <SwiperSlide className={style.carouselCard}>Slide 6</SwiperSlide>
        <SwiperSlide className={style.carouselCard}>Slide 7</SwiperSlide> */}
      </Swiper>
    </div>
  );
}
