var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/partials/movieList.html',
      controller: 'movieListControl'
    })
    .when('/movie', {
      templateUrl: 'partials/movie.html',
      controller: 'movieControl'
    });
});
