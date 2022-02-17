import axios from "axios";

const URL = "https://inshorts-clone1.herokuapp.com";

export const getNews = async (page, size = 5) => {
  try {
    return await axios.get(`${URL}/news?page=${page}&size=${size}`);
  } catch (error) {
    console.log("Error while handling", error);
  }
};
