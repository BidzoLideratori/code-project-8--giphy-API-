export class giphyApiTrendingClass {
   returnImg(input) {
    return `<image class="img" src="${input}"></image>`;
  }

   renderImg(input) {
    document.getElementById("img-grid-id").innerHTML += input;
  }

   resetHTML() {
    document.getElementById("img-grid-id").innerHTML = null;
  }

   initialiseSuggestions(topicArr) {
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
          initialiseSuggestions(arr);
        }
      });
  }

  static addEventListenerTrending(input,arr) {
    document
      .getElementById("tending-button-id")
      .addEventListener("click", (event) => {
        resetHTML();
        for (let i = 0; i < 10; i++) {
          arr[i] = input.data[i].images;
          console.log(arr[i].downsized.url);

          renderImg(returnImg(arr[i].downsized.url));
        }
      });
  }
}

class giphyApiSearchClass {}

