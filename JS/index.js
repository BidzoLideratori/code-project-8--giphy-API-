import { giphyApiTrendingClass } from "./ApiFunctions.js";
import * as API from "./GiphyAPI.js";






giphyApiTrendingClass.renderSugestions(API.topics)

API.giphyTrendingURL
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    let 
    API.trendingDataArr = res.data;
    giphyApiTrendingClass.addEventListenerTrending(res,API.trendingImgArr);
  });