import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./componenets/Navbar/Navbar";
import { StyledEngineProvider } from "@mui/material";
import { Outlet } from "react-router-dom";
import { fetchTopAlbums, fetchNewAlbums } from "./api/api";


function App() {
  console.log('app is running')
  const [data, setData] = useState({})
  const generateData = (key, source) => {
    source().then((data) => {
      setData((prevState) => {
        return { ...prevState, [key]: data };
      });
    });
  };

  useEffect(() => {
    console.log('hello world with useEffect')
    generateData("topAlbums", fetchTopAlbums);
    generateData("newAlbums", fetchNewAlbums);
  }, []);

  const {topAlbums = [], newAlbums = []} = data;
  return (
    <StyledEngineProvider>
      <Navbar />
      <Outlet context={{data:{topAlbums, newAlbums}}}/>
    </StyledEngineProvider>
  );
}

export default App;
