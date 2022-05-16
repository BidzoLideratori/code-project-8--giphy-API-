var queryURL = "https://api.giphy.com/v1/gifs/trending?";
let searchURL = "https://api.giphy.com/v1/gifs/search?";
var query;
var params = {
  q: query,
  api_key: "aFFKTuSMjd6j0wwjpFCPXZipQbcnw3vB",
  fmt: "json",
};

let trendingDataArr = [];

let trendingImgArr = [];

let topics = ["Internet Cats", "Meme's", "Typing", "Space", "Rick and Morty"];

let imageGrid = document.getElementById("img-grid-id");

let giphySearchURL = "";

let giphyTrendingURL = fetch(
  `${queryURL}api_key=${params.api_key}&limit=${params.limit}`
);

export {
  params,
  trendingDataArr,
  trendingImgArr,
  topics,
  imageGrid,
  giphySearchURL,
  giphyTrendingURL,
};
