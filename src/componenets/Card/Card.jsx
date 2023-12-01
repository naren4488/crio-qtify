import React from "react";
import style from "./Card.module.css";
import { Chip, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import apiData from "./../../api/api.json";
import songsData from "./../../api/songs.json";
import genreData from "./../../api/genres.json";

export default function Card({ data, type }) {
  // data = apiData;
  // console.log('data in cards', data.title)
  // console.log('type',type);
  // console.log('card is running with data as ', data.id)
  // const { image, follows, title, songs, slug } = data;
  // console.log(image, follows)
  // console.log("card", image, follows, title, slug);
  // console.log('data recieved in cards is : ', data);

  const getCard = (type) => {
    switch (type) {
      case "album": {
        // console.log('NARENDRA in album switch case', data.songs.length)
        // data = apiData;
        const { image, follows, title, songs, slug } = data;
        return (
          <Tooltip title={`${songs.length} songs`} placement="top" arrow>
            <Link to={`/album/${slug}`}>
              <div className={style.wrapper}>
                <div className={style.card}>
                  <img src={image} alt="album" />
                  <div className={style.banner}>
                    <Chip
                      className={style.pill}
                      size="small"
                      label={`${follows} Follows`}
                    />
                  </div>
                </div>
                <div className={style.title}>
                  <p>{title}</p>
                </div>
              </div>
            </Link>
          </Tooltip>
        );
      }
      case "songs": {
        // data = apiData;
        const { image, likes, title } = data;
        return (
          <div className={style.wrapper}>
            <div className={style.card}>
              <img src={image} alt="song" />
              <div className={style.banner}>
                <Chip
                  className={style.pill}
                  size="small"
                  label={`${likes} Likes`}
                />
              </div>
            </div>
            <div className={style.title}>
              <p>{title}</p>
            </div>
          </div>
        );
      }
      default:
        return <></>;
    }
  };

  return getCard(type);
}
