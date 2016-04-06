var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/movieList.html',
      controller: 'movieListControl'
    })
    .when('/movie/:movie', {
      templateUrl: 'partials/movie.html',
      controller: 'movieControl'
    });
    $locationProvider.html5Mode(true);
});
