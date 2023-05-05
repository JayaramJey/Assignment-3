import { apiKey } from "./key.js";
document.getElementById("button").addEventListener("click", getMovie);
function getMovie() {
  const id = document.getElementById("movies").value;
  axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US&append_to_response=videos`
    )
    .then(function (movieInformation) {
      const movieData = movieInformation.data;
      document.getElementById("movie-name").innerText = movieData.title;
      document.getElementById("movie-name").style.textDecoration = "underline";
      document.getElementById("overview").innerText = movieData.overview;
      document.getElementById(
        "release-date"
      ).innerText = `Released: ${movieData.release_date}`;
      document.getElementById(
        "popularity"
      ).innerText = `Popularity: ${movieData.popularity}`;
      document.getElementById(
        "budget"
      ).innerText = `Budget for movie: $${movieData.budget}`;
      document.getElementById(
        "vote-average"
      ).innerText = `The vote average is: ${movieData.vote_average}`;
      document.getElementById(
        "vote-count"
      ).innerText = `The vote count is: ${movieData.vote_count}`;
      document.getElementById(
        "original-language"
      ).innerText = `Original language: ${movieData.original_language}`;
      document.getElementById(
        "revenue"
      ).innerText = `Revenue: $${movieData.revenue}`;
      document.getElementById(
        "run-time"
      ).innerText = `Runtime: ${movieData.runtime} min`;
      const genre = [];
      for (let i = 0; i < movieData.genres.length; i++) {
        genre[i] = [movieData.genres[i].name];
      }
      document.getElementById("genres").innerText =
        "Genres: " + genre.join(", ");
      const trailer = movieData.videos.results.filter((trailer) => {
        return trailer.type === "Trailer";
      });
      document.getElementById("trailer").src = `https://www.youtube.com/embed/${
        trailer.at(0).key
      }`;
      document.getElementById(
        "poster"
      ).src = `https://image.tmdb.org/t/p/original/${movieData.poster_path}`;
      document.getElementById("poster").style.border = "solid white";
    });
}
