var queryURL = "https://api.giphy.com/v1/gifs/trending?";
let searchURL = "https://api.giphy.com/v1/gifs/search?";
var query;
var params = {
  q: query,
  limit: 10,
  api_key: "aFFKTuSMjd6j0wwjpFCPXZipQbcnw3vB",
  fmt: "json",
};

let trendingDataArr = [];
let trendingImgArr = [];
let searchDataArr = [];
let searchImgArr = [];

let topics = ["Internet Cats", "Meme's", "Typing", "Space", "Rick and Morty"];

let imageGrid = document.getElementById("img-grid-id");

let giphySearchURL = "";

let giphyTrendingURL = fetch(
  `${queryURL}api_key=${params.api_key}&limit=${params.limit}`
);

function fetchSearchData(input) {
  document
    .getElementById("search-button-id")
    .addEventListener("click", (event) => {
      if (document.getElementById("search-bar-id").value != "") {
        console.log("work");
        input = fetch(
          `${searchURL}${
            document.getElementById("search-bar-id").value
          }&api_key=${params.api_key}`
        );
      }
    });
}

function returnImg(input) {
  return `<image class="img" src="${input}"></image>`;
}

function renderImg(input) {
  document.getElementById("img-grid-id").innerHTML += input;
}

function resetHTML() {
  document.getElementById("img-grid-id").innerHTML = null;
}

function initialiseSuggestions(topicArr) {
  let temp = [];
  for (let i = 0; i < topicArr.length; i++) {
    temp += `<button class="suggesion-button">${topicArr[i]}</button>`;
  }
  document.getElementById("suggestion-flex-id").innerHTML = temp;
}

function renderSugestions() {
  document
    .getElementById("search-button-id")
    .addEventListener("click", (event) => {
      if (document.getElementById("search-bar-id").value != "") {
        topics.shift();
        console.log("heee");
        topics.push(document.getElementById("search-bar-id").value);
        initialiseSuggestions(topics);
      }
    });
}

function addEventListenerTrending(input) {
  document
    .getElementById("tending-button-id")
    .addEventListener("click", (event) => {
      resetHTML();
      for (let i = 0; i < params.limit; i++) {
        trendingImgArr[i] = input.data[i].images;
        console.log(trendingImgArr[i].downsized.url);

        renderImg(returnImg(trendingImgArr[i].downsized.url));
      }
    });
}

function addEventListenerSearch(input) {
  document
    .getElementById("search-button-id")
    .addEventListener("click", (event) => {
      resetHTML();
      for (let i = 0; i < params.limit; i++) {
        searchImgArr[i] = input.data[i].images;
        console.log(searchImgArr[i].downsized.url);

        renderImg(returnImg(searchImgArr[i].downsized.url));
      }
    });
}

initialiseSuggestions(topics);
renderSugestions();

giphyTrendingURL
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    trendingDataArr = res.data;
    addEventListenerTrending(res);
  });

giphySearchURL
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    searchDataArr = res.data;
    addEventListenerSearch(res);
    console.log(res);
  });
