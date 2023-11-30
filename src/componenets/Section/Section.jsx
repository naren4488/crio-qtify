import React, { useEffect, useState } from "react";
import { CircularProgress, Grid } from "@mui/material";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import style from "./Section.module.css";
// import axios from "axios";
import apiData from "./../../api/api.json";

export default function Section({ title, data }) {

  const [carouselToggle, setCarouselToggle] = useState(true);

  let handleToggle = () => {
    setCarouselToggle(!carouselToggle);
  };

 

  // data = apiData;

  return (
    <div className={style.wrapper}>
      <div className={style.grid}>
        <div className={style.gridHeading}>
          <h2 className={style.albumType}>{title}</h2>
          <button className={style.collapseBtn} onClick={handleToggle}>
            {carouselToggle ? "Show All" : "Collapse"}
          </button>
        </div>
        {data.length === 0 ? (
          <CircularProgress />
        ) : (
          <div className={style.albumsWrapper}>
            {carouselToggle ? (
              <Carousel 
                data={data}
                renderComponent={(data) => <Card data={data} type="album" />}
              />
            ) : (
             
                <Grid container columnSpacing={5} rowSpacing={3}>
                  {data.map((dataItem) => {
                    // console.log('inside map', dataItem.id);
                    // const { title, image, slug, follows } = dataItem;
                    return (
                      <Grid key={dataItem.id} item>
                        <Card data={dataItem} type={"album"} />
                      </Grid>
                    );
                  })}
                </Grid>

            )}
          </div>
        )}
      </div>
    </div>
  );
}
