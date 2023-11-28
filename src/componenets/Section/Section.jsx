import React, { useEffect, useState } from "react";
import style from "./Section.module.css";
import axios from "axios";
import { Grid } from "@mui/material";
import Card from "../Card/Card";

export default function Section() {
  let [apiData, setApiData] = useState([]);

  let getApiData = async () => {
    let apiURL = "https://qtify-backend-labs.crio.do/albums/top";
    try {
      let response = await axios.get(apiURL);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    (async () => {
      let data = await getApiData();
      console.log("data ", data);
      setApiData(data);
    })();
  }, []); 

  return (
    
    <div className={style.wrapper}>
      <div className={style.grid}>
        <div className={style.gridHeading}>
          <h2 className={style.albumType}>Top Albums</h2>
          <button className={style.collapseBtn}>Collapse</button>
        </div>
        <div className={style.albums}>
          <Grid container columnSpacing={5} rowSpacing={3}>
            {apiData.map((dataItem) => {
                // console.log('inside map', dataItem.id);
                const {title, image, slug, follows} = dataItem;
              return (
                <Grid key={dataItem.id} item>
                  <Card title={title} image={image} slug={slug} follows={follows} type={'album'} />
                </Grid>
              );
            })}
          </Grid>
        </div>
      </div>
    </div>
  );
}
