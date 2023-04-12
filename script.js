let api_key = "45f0db8e20f87e3e431aa1750076bb74";

function getSelectedOption() {
  const id = document.getElementById("movies").value;
  //console.log(id);
  axios
    .get(
      `
    https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=en-US`
    )
    .then(function (movieData) {
      const movieInfo = movieData.data;
      document.getElementById(
        "poster"
      ).src = `https://image.tmdb.org/t/p/original/${movieInfo.poster_path}`;

      document.getElementById(
        "title"
      ).innerText = `Title of Movie: ${movieInfo.title}`;
      document.getElementById("overview").innerText = `Overview: 
          ${movieInfo.overview}`;
      document.getElementById(
        "release-date"
      ).innerText = `Released: ${movieInfo.release_date}`;
      document.getElementById(
        "popularity"
      ).innerText = `the popularity:${movieInfo.popularity}`;
      document.getElementById(
        "budget"
      ).innerText = `The budget for this movie: $${movieInfo.budget}`;
      document.getElementById(
        "vote-average"
      ).innerText = `The vote average is: $${movieInfo.vote_average}`;
      document.getElementById(
        "vote-count"
      ).innerText = `vote count: $${movieInfo.vote_count}`;
      document.getElementById(
        "original-language"
      ).innerText = ` original language: ${movieInfo.original_language}`;
      //document.getElementById(
      //"genre"
      //).innerHTML = ` original language: ${[...movieInfo.genres_ids]}`;
      console.log(movieInfo);
      const names = movieInfo.genres_names;
      console.log(names);

      // document.getElementById(
      // "video"
      //).src = `The budget for this movie: $${stuff.budget}`;

      //document.getElementById("video").src=`Title of Movie: ${stuff.origin_country}`;
    });
}
