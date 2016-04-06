app.service('apiCalls', function($http) {
  var movieClass = {};

  movieClass.getMovies = function(title) {
    return $http.get('http://www.omdbapi.com/?s=' + title);
  };

  return movieClass;
});
