const moviesEl = document.getElementById("movies");

(async () => {
  const data = await fetch("./rhuellen_quiz_movies.json");
  const { movies } = await data.json();

  movies.forEach(({ movieId, title, year, url }) => {
    const movie = document.createElement("div");

    movie.class = "col";
    movie.id = movieId;

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "btn btn-primary mb-2";

    btn.innerText = "Hide Card";

    movie.appendChild(btn);

    const inner = document.createElement("div");
    inner.className = "collapse show card shadow-sm";

    inner.innerHTML = `
      <img src="${url}" alt="${title}" class="card-img-top" />
      <div class="card-body">
        <p class="card-text">
          <strong>${title}</strong>, ${year}
        </p>
      </div>
    `;

    movie.appendChild(inner);

    btn.onclick = () => {
      inner.classList.toggle("show");
      btn.innerText = inner.classList.contains("show")
        ? "Hide Card"
        : "Show Card";
    };

    moviesEl.appendChild(movie);
  });
})();
