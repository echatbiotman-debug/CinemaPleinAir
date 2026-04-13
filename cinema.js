const API_KEY = "YOUR_API_KEY";

async function getMovies() {
  const res = await fetch(`https://www.omdbapi.com/?s=batman&apikey=${API_KEY}`);
  const data = await res.json();

  const container = document.getElementById("movies-container");

  data.Search.forEach(movie => {
    const div = document.createElement("div");
    div.innerHTML = `
      <h3>${movie.Title}</h3>
      <img src="${movie.Poster}" />
    `;
    container.appendChild(div);
  });
}

getMovies();