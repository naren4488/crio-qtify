import React from "react";
import { useOutletContext } from "react-router-dom";
import HeroSection from "../../componenets/HeroSection/HeroSection";
import Section from "../../componenets/Section/Section";
import style from "./HomePage.module.css";
import { fetchFilters } from "../../api/api";
import songsData from './../../api/songs.json'

export default function HomePage(props) {
  const { data } = useOutletContext();
  const { topAlbums, newAlbums, songs } = data;
  // console.log("home page", data);
  return (
    <div>
      <HeroSection />
      <div className={style.wrapper}>
        <Section title="Top Albums" data={topAlbums} type="album" />
        <Section title="New Albums" data={newAlbums} type="album" />
        <Section
          title="Songs"
          data={songs}
          type="songs"
          filterSource={fetchFilters}
        />
      </div>
    </div>
  );
}
