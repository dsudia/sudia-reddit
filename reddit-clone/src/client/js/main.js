// Show and hide new post form
var app = angular.module('redditClone', []);
app.controller('showForm', function($scope) {
  $scope.formHideStatus = true;
  $scope.hideAndShowForm = function() {
    $scope.formHideStatus = !$scope.formHideStatus;
  };
});


// show posts from database on the main page
app.factory('getPosts', function() {
  $.ajax(function() {
    url: ''
  });
});
