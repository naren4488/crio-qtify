import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./componenets/Navbar/Navbar";
import { StyledEngineProvider } from "@mui/material";
import { Outlet } from "react-router-dom";
import { fetchTopAlbums, fetchNewAlbums, fetchSongs } from "./api/api";
import apiData from './api/api.json'

function App() {
  // console.log('app is running')
  // const [data, setData] = useState({topAlbums:apiData, newAlbums:apiData});
  const [data, setData] = useState({})
  const generateData = (key, source) => {
    source().then((data) => {
      // console.log('printing data with key', key,  data)
      setData((prevState) => {
        return { ...prevState, [key]: data };
      });
    });
  };

  useEffect(() => {
    // console.log('hello world with useEffect')
    generateData("topAlbums", fetchTopAlbums);
    generateData("newAlbums", fetchNewAlbums);
    generateData("songs", fetchSongs);
  }, []);

  const {topAlbums = [], newAlbums = [], songs = []} = data;

  // console.log(data)
  return (
    <StyledEngineProvider>
      <Navbar />
      <Outlet context={{data:{topAlbums, newAlbums, songs}}}/>
    </StyledEngineProvider>
  );
}

export default App;
