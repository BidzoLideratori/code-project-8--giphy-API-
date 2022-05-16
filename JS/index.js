import { giphyApiTrendingClass, giphyApiSearchClass } from "./ApiFunctions.js";
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
    giphyApiTrendingClass.addEventListenerTrending(res, trendingImgArr);
  });

let p = new Promise((resolve, reject) => {
  API.submitButton.addEventListener("click", (event) => {resolve});
}).then((res) => {
  let userInput = "";
  res = fetch(
    `${API.searchURL}q=${userInput}&api_key=${API.params.api_key}`
  )
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      giphyApiSearchClass.addEventListenerSearch(
        res,
        trendingImgArr,
        userInput
      );
    });
});
