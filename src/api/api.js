import axios from "axios";

export const BACKEND_ENDPOINT = "https://qtify-backend-labs.crio.do/";

export const fetchTopAlbums = async () => {
  try {
    let response = await axios.get(`${BACKEND_ENDPOINT}albums/top`);
    console.log('top album from api .js ', response.data);
    return response.data;
  } catch (e) {
    console.error(e);
  }
};

export const fetchNewAlbums = async () => {
    try {
      let response = await axios.get(`${BACKEND_ENDPOINT}albums/new`);
      console.log('new album from api .js ', response.data);
      return response.data;
    } catch (e) {
      console.error(e);
    }
  };
