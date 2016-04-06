app.controller('searchControl', ['$scope', 'apiCalls', function($scope, apiCalls) {
  $scope.searchText='';
  var movieList;
  $scope.movies = movieList;
  $scope.searchOMDb = function() {
    apiCalls.getMovies($scope.searchText)
    .then(function(data) {
      var movies = data.data.Search;
      movieList = movies;
      $scope.movies = movies;
    });
  };
}]);

app.controller('movieListControl', ['$scope', function($scope) {

}]);

app.controller('movieControl', ['$scope', '$routeParams', function($scope, $routeParams) {
  var movie = $scope.movies.filter(function(el, ind, arr) {
    return el.Title === $routeParams.movie;
  });
  $scope.movie = movie[0];
}]);
