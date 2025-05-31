const input = document.getElementById("userTxt");
const button = document.getElementById('submitBtn')
const imageDiv = document.getElementById('imageDiv');

const API_KEY = "sPSYzQl7EVU9j6UL1oQ3TWnPGHSiSROA";  

async function fetchRandomGif(tag = "") {
  const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}&rating=pg`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    const imageUrl = data.data.images.downsized_large.url;
    displayGif(imageUrl);
  } catch (error) {
    console.error("Error fetching GIF:", error);
  }
}

function displayGif(url) {
  imageDiv.innerHTML = ""; 
  const img = document.createElement("img");
  img.src = url;
  img.alt = "Random GIF";
  imageDiv.appendChild(img);
}


button.addEventListener("click", () => {
  const tag = input.value.trim();  
  fetchRandomGif(tag);   
  imageDiv.style.display="block";
});


