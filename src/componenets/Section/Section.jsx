import React, { useEffect, useState } from "react";
import { CircularProgress, Grid } from "@mui/material";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import style from "./Section.module.css";
import apiData from "./../../api/api.json";
import songsData from './../../api/songs.json'
import genreData from './../../api/genres.json'
import Filter from "../Filter/Filter";

export default function Section({ title, data, filterSource, type }) {
  // console.log('type', type)
  // switch(type){
  //   case 'album':  data=apiData; break;
  //   case 'songs': data = songsData; break;
  //   default: data = apiData;
  // }
  // console.log("section page", data);
  const [filters, setFilters] = useState([{ key: "all", label: "All" }]);
  const [selectedFilterIndex, setSelectedFilterIndex] = useState(0);

  const [carouselToggle, setCarouselToggle] = useState(true);

  let handleToggle = () => {
    setCarouselToggle(!carouselToggle);
  };

  useEffect(() => {
    if (filterSource) {
      filterSource().then((response) => {
        const { data } = response;
        setFilters([...filters, ...data]);
      });
    }
  }, []);


  // data = apiData;

  const showFilters = filters.length > 1;
  const cardsToRender = data.filter((card) => {
    return showFilters && selectedFilterIndex !== 0
      ? card.genre.key === filters[selectedFilterIndex].key
      : card;
  });
  // console.log("cards to render on section page", cardsToRender);

  

  return (
    <div className={style.wrapper}>
      <div className={style.grid}>
        <div className={style.gridHeading}>
          <h2 className={style.albumType}>{title}</h2>
          <button className={style.collapseBtn} onClick={handleToggle}>
            {carouselToggle ? "Show All" : "Collapse"}
          </button>
        </div>
        {showFilters && (
          <div className={style.filterWrapper}>
            <Filter
              filters={filters}
              selectedFilterIndex={selectedFilterIndex}
              setSelectedFilterIndex={setSelectedFilterIndex}
            />
          </div>
        )}
        {data.length === 0 ? (
          <CircularProgress />
        ) : (
          <div className={style.albumsWrapper}>
            {carouselToggle ? (
              <Carousel
                data={cardsToRender}
                renderComponent={(data) => <Card data={data} type="album" />}
              />
            ) : (
              <Grid container columnSpacing={5} rowSpacing={3}>
                {cardsToRender.map((dataItem) => {
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
