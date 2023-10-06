(async () => {
  const data = await fetch("./rhuellen_activity09_movies.json");
  const { movies } = await data.json();

  const moviesList = document.getElementById("movies");

  movies.forEach(({ movieId, title, year, url }) => {
    const movieItem = document.createElement("li");

    movieItem.id = movieId;

    movieItem.innerHTML = `
      <h2>${title}</h2>
      <p>Year: ${year}</p>
      <img src="${url}" alt="${title}" />
    `;

    moviesList.appendChild(movieItem);
  });
})();
