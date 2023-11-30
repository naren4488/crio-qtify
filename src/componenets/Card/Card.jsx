import React from "react";
import style from "./Card.module.css";
import { Chip, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";

export default function Card({ data, type }) {
  // console.log('type',type);
  // console.log('card is running with data as ', data.id)
  // const { image, follows, title, songs, slug } = data;
  // console.log(image, follows)
  // console.log("card", image, follows, title, slug);

  const getCard = (type) => {
    switch (type) {
      case "album": {
        // console.log('NARENDRA in album switch case')
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
      case "song": {
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
