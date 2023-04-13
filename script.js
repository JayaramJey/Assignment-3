let api_key = "45f0db8e20f87e3e431aa1750076bb74";

function getMovie() {
  const id = document.getElementById("movies").value;
  axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=en-US&append_to_response=videos`
    )
    .then(function (movieInformation) {
      const movieInfo = movieInformation.data;
      document.getElementById("movie-name").innerText = movieInfo.title;
      document.getElementById("overview").innerText = `Overview: 
          ${movieInfo.overview}`;
      document.getElementById(
        "release-date"
      ).innerText = `Released: ${movieInfo.release_date}`;
      document.getElementById(
        "popularity"
      ).innerText = `Popularity: ${movieInfo.popularity}`;
      document.getElementById(
        "budget"
      ).innerText = `Budget for movie: $${movieInfo.budget}`;
      document.getElementById(
        "vote-average"
      ).innerText = `The vote average is: ${movieInfo.vote_average}`;
      document.getElementById(
        "vote-count"
      ).innerText = `vote count: ${movieInfo.vote_count}`;
      document.getElementById(
        "original-language"
      ).innerText = ` original language: ${movieInfo.original_language}`;
      document.getElementById(
        "revenue"
      ).innerText = `Revenue: $${movieInfo.revenue}`;
      document.getElementById(
        "run-time"
      ).innerText = `Runtime: ${movieInfo.runtime} min`;

      const u = [];
      for (let i = 0; i < movieInfo.genres.length; i++) {
        u[i] = [movieInfo.genres[i].name];
      }
      document.getElementById("genres").innerText = "Genres: " + u.join(", ");
      const trailer = movieInfo.videos.results.filter((trailer) => {
        return trailer.type === "Trailer";
      });
      document.getElementById("trailer").src = `https://www.youtube.com/embed/${
        trailer.at(0).key
      }`;
      document.getElementById(
        "poster"
      ).src = `https://image.tmdb.org/t/p/original/${movieInfo.poster_path}`;
      document.getElementById("poster").style.border = "solid white";
    });
}
