var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'src/partials/movieList.html',
      controller: 'movieListControl'
    })
    .when('/*', {
      templateUrl: 'partials/movie.html',
      controller: 'movieControl'
    });
});
