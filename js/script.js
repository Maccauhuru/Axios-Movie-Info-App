/*jshint esversion: 6 */
$(document).ready(() => {
  $("#search-form").on("submit", e => {
    let searchText = $("#searchText").val();
    getMovies(searchText);
    e.preventDefault();
  });
});

const getMovies = searchText => {
  const key = "&apikey=thewdb";
  axios
    .get("http://www.omdbapi.com?s=" + searchText + key)
    .then(response => {
      //console.log(response);
      let movies = response.data.Search;
      console.log(movies);
    })
    .catch(err => {
      console.log(err);
    });
};
