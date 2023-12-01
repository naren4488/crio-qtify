import axios from "axios";
// import apiData from "./api.json";
// import songData from "./songs.json"
// import genreData from './genres.json'

export const BACKEND_ENDPOINT = "https://qtify-backend-labs.crio.do";

export const fetchTopAlbums = async () => {
  try {
    let response = await axios.get(`${BACKEND_ENDPOINT}/albums/top`);
    // console.log("top album from api .js ", response.data);
    return response.data;
    // return apiData;
  } catch (e) {
    console.error(e);
  }
};

export const fetchNewAlbums = async () => {
  try {
    let response = await axios.get(`${BACKEND_ENDPOINT}/albums/new`);
    // console.log("new album from api .js ", response.data);
    return response.data;
    // return apiData;
  } catch (e) {
    console.error(e);
  }
};

export const fetchSongs = async () => {
  try {
    let response = await axios.get(`${BACKEND_ENDPOINT}/songs`);
    // console.log("songs ", response.data);
    return response.data;
    // return songData;
  } catch (e) {
    console.error(e);
  }
};

export const fetchFilters = async () => {
  try {
    let response = await axios.get(`${BACKEND_ENDPOINT}/genres`);
    // console.log("new album from api .js ", response.data);
    return response.data;
    // return genreData;
  } catch (e) {
    console.error(e);
  }
};
