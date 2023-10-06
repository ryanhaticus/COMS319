let movies;

(async () => {
  const data = await fetch("./rhuellen_activity09_movies.json");
  const json = await data.json();

  movies = json.movies;

  const moviesList = document.getElementById("movies");

  movies.forEach(({ movieId, title }) => {
    const movieItem = document.createElement("option");

    movieItem.id = movieId;
    movieItem.innerText = title;

    moviesList.appendChild(movieItem);
  });
})();

function selectMovie() {
  const title = document.getElementById("movies").value;

  const movie = movies.find((m) => m.title === title);

  const selectedMovie = document.getElementById("selected-movie");

  selectedMovie.innerHTML = `
    <h2>${movie.title}</h2>
    <p>Year: ${movie.year}</p>
    <img src="${movie.url}" alt="${movie.title}" />
  `;
}
