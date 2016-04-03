var app = angular.module('redditClone', []);

// get posts from database
app.factory('dbCalls', function($http) {
  var postClass = {};
  postClass.get = function() {
    return $http.get("/getData/posts");
  };
  postClass.add = function() {
    return $http.post('/addData/posts');
  };
  return postClass;
});


// Show and hide new post form
app.controller('formControl', function($scope) {
  $scope.formHideStatus = true;
  $scope.hideAndShowForm = function() {
    $scope.formHideStatus = !$scope.formHideStatus;
  };
});


//show posts on page
app.controller('postControl', function($scope, dbCalls) {
  dbCalls.get()
  .then(function(results) {
    $scope.posts = results.data;
  });
});
