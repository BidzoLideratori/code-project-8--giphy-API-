export class giphyApiTrendingClass {
  static returnImg(input) {
    return `<image class="img" src="${input}"></image>`;
  }

  static renderImg(input) {
    document.getElementById("img-flex-id").innerHTML += input;
  }

  static resetHTML() {
    document.getElementById("img-flex-id").innerHTML = null;
  }

  static initialiseSuggestions(topicArr) {
    let temp = [];
    for (let i = 0; i < topicArr.length; i++) {
      temp += `<button class="suggesion-button">${topicArr[i]}</button>`;
    }
    document.getElementById("suggestion-flex-id").innerHTML = temp;
  }

  static renderSugestions(arr) {
    document
      .getElementById("search-button-id")
      .addEventListener("click", (event) => {
        if (document.getElementById("search-bar-id").value != "") {
          arr.shift();
          arr.push(document.getElementById("search-bar-id").value);
          giphyApiTrendingClass.initialiseSuggestions(arr);
        }
      });
  }

  static addEventListenerTrending(input, arr) {
    document
      .getElementById("tending-button-id")
      .addEventListener("click", (event) => {
        giphyApiTrendingClass.resetHTML();
        for (let i = 0; i < 10; i++) {
          arr[i] = input.data[i].images;
          giphyApiTrendingClass.renderImg(
            giphyApiTrendingClass.returnImg(arr[i].downsized.url)
          );
        }
      });
  }
}

export class giphyApiSearchClass {

  static returnImg(input) {
    return `<image class="img" src="${input}"></image>`;
  }

  static renderImg(input) {
    document.getElementById("img-flex-id").innerHTML += input;
  }

  static resetHTML() {
    document.getElementById("img-flex-id").innerHTML = null;
  }

  static addEventListenerSearch(input, arr) {
    document
      .getElementById("tending-button-id")
      .addEventListener("click", (event) => {
        giphyApiSearchClass.resetHTML();
        for (let i = 0; i < 10; i++) {
          arr[i] = input.data[i].images;
          giphyApiSearchClass.renderImg(
            giphyApiSearchClass.returnImg(arr[i].downsized.url)
          );
        }
      });
  }
}
