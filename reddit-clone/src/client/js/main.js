var app = angular.module('redditClone', []);

// get posts from database
app.factory('getPosts', function($http) {
  console.log('fuck Angular');
  var postClass = {};
  postClass.get = function() {
    return $http.get("/getData/posts");
  };
  return postClass;
});

// Show and hide new post form
app.controller('showForm', function($scope, getPosts) {
  $scope.formHideStatus = true;
  $scope.hideAndShowForm = function() {
    $scope.formHideStatus = !$scope.formHideStatus;
  };

  getPosts.get()
  .then(function(results) {
    $scope.get = results.data;
  });
});






// app.controller('showPosts', function($scope, getPosts) {
//   getPosts.get()
//   .then(function(results) {
//     $scope.get = results.data;
//   });
// });
