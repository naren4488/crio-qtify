import React from "react";
import style from "./Card.module.css";
import { Chip, Tooltip } from "@mui/material";

export default function Card({image, follows, title, slug, type}) {
  console.log("card", image, follows, title, slug);
  return (
    <Tooltip>
      <div className={style.wrapper}>
        <div className={style.card}>
          <img
            src={image}
            alt="album"
          />
          <div className={style.banner}>
            <Chip className={style.pill} size="small" label={`${follows} Follows`} />
          </div>
        </div>
        <div className={style.title}>
          <p>{title}</p>
        </div>
      </div>
    </Tooltip>
  );
}
