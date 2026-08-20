import { searchMovie, getMovieById } from "./api.js";
const searchForm = document.querySelector("#search-form") as HTMLFormElement;
const searchInput = document.querySelector("#search-input") as HTMLInputElement;
const movieTitle = document.querySelector(".movie-title") as HTMLHeadElement;
const movieYear = document.querySelector(".movie-year") as HTMLParagraphElement;
const poster = document.querySelector(".poster") as HTMLDivElement;
const movieRating = document.querySelector(
  ".movie-rating",
) as HTMLParagraphElement;
searchForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const currentValue = searchInput.value.trim();
  await loadMovie(currentValue);
  if (currentValue === "") {
    return alert("Please the enter the name");
  }
});

async function loadMovie(name: string) {
  try {
    const data = await searchMovie(name);
    console.log(data);
    if (movieTitle) {
      movieTitle.textContent = data.Search[0]?.Title ?? "Movie not found";
    }
    if (movieYear) {
      movieYear.textContent = data.Search[0]?.Year ?? "Movie not found";
    }

    if (poster) {
      poster.style.backgroundImage = `url(${data.Search[0]?.Poster ?? "Movie not found"})`;
    }

    const id = data.Search[0]?.imdbID;
    console.log(id);
    if (id) {
      const detail = await getMovieById(id);
      console.log(detail);
      movieRating.textContent = detail?.imdbRating ?? "Not found";
    }
  } catch (error) {
    console.error(error);
    alert("Something went wrong. Please try again.");
  }
}

loadMovie("Idiot");
