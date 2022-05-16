var queryURL = "https://api.giphy.com/v1/gifs/trending?";
let searchURL = "https://api.giphy.com/v1/gifs/search?";
var query;
var params = {
  q: query,
  api_key: "aFFKTuSMjd6j0wwjpFCPXZipQbcnw3vB",
  fmt: "json",
};

let hello = 'hello'

let giphyTrendingURL = fetch(
  `${queryURL}api_key=${params.api_key}&limit=${params.limit}`
);

let giphySearchURL = fetch(
    `${searchURL}q=${hello}&api_key=${params.api_key}`
)

export {
  giphyTrendingURL,
  giphySearchURL,
};
