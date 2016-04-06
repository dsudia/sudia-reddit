app.controller('searchControl', ['$scope', 'apiCalls', function($scope, apiCalls) {
  $scope.searchText='';
  $scope.searchOMDb = function() {
    apiCalls.getMovies($scope.searchText)
    .then(function(data) {
      var movies = data.data.Search;
      console.log(movies);
      $scope.movies = movies;
    });
  };
}]);

app.controller('movieListControl', ['$scope', function($scope) {

}]);

app.controller('movieControl', ['$scope', function($scope) {

}]);
