import { giphyApiTrendingClass,giphyApiSearchClass } from "./ApiFunctions.js";
import * as API from "./GiphyAPI.js";

let trendingImgArr = [];
let topics = ["Internet Cats", "Meme's", "Typing", "Space", "Rick and Morty"];

giphyApiTrendingClass.initialiseSuggestions(topics);
giphyApiTrendingClass.renderSugestions(topics);

API.giphyTrendingURL
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    trendingImgArr = res.data;
    giphyApiTrendingClass.addEventListenerTrending(res, trendingImgArr);
  });

  let mypromise = new Promise;

  mypromise.then
API.giphySearchURL
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    trendingImgArr = res.data;
    giphyApiSearchClass.addEventListenerTrending(res, trendingImgArr);
  });
