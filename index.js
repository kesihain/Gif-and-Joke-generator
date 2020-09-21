let joke = document.getElementById("joke")
function generateJoke(){
    $.ajax({
        url: chuckNorrisUrl,
        method: "GET",
        success: function(result) {
          joke.innerText =  result.value;
        },
        error: function(error) {
          console.log(`Error: ${error}`);
        }
      });
}


let gif = document.getElementById("gif");

function generateGif(){
    $.ajax({
        url:giphyUrl,
        method: "GET",
        success: function(result) {
          gif.src =  result.data[0].images.downsized_large.url;
        },
        error: function(error) {
          console.log(`Error: ${error}`);
        }
      });
}

let categories = [
  "animal",
  "career",
  "celebrity",
  "dev",
  "explicit",
  "fashion",
  "food",
  "history",
  "money",
  "movie",
  "music",
  "political",
  "religion",
  "science",
  "sport",
  "travel"
  ]

let options = document.getElementById("options")
i = 0
for (let category of categories){
  option = document.createElement("option");
  option.value = category;
  option.innerText = category;
options.appendChild(option)
  i++
}


let chuckNorrisUrl = "https://api.chucknorris.io/jokes/random";
let giphyUrl = "https://api.giphy.com/v1/gifs/random?&api_key=nYNwqKCEI5OBBNtoc2XGLUHkNa7ptifV";
let button = document.getElementById("search");

button.addEventListener("click",()=>{
  chuckNorrisUrl = `https://api.chucknorris.io/jokes/random?category=${options.value}`
  giphyUrl = `https://api.giphy.com/v1/gifs/search?q=${options.value}&api_key=nYNwqKCEI5OBBNtoc2XGLUHkNa7ptifV&limit=1`
  gif.src = ""
  generateJoke();
  generateGif();
})


