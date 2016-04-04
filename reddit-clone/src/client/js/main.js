// Angular app
var app = angular.module('redditClone', []);

// get posts from database
app.factory('dbCalls', function($http) {
  var postClass = {};
  postClass.get = function() {
    return $http.get("/getData/posts");
  };
  postClass.add = function(formData) {
    console.log(formData);
    return $http({
      url: '/addData/posts',
      method: 'POST',
      data: formData
    });
  };
  return postClass;
});




// Show and hide new post form
app.controller('formControl', function($scope, dbCalls) {
  $scope.formHideStatus = true;
  $scope.hideAndShowForm = function() {
    $scope.formHideStatus = !$scope.formHideStatus;
  };

  $scope.formData = {};
  // set today's date as new post date
  Date.prototype.toDateInputValue = (function() {
      var local = new Date(this);
      local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
      return local.toJSON().slice(0,10);
  });
  var dateField = document.getElementById('date-picker');

  $scope.formData.date = new Date();
  $scope.addPost = function() {
    $scope.hideAndShowForm();
    dbCalls.add($scope.formData)
    .then(function(data) {
      console.log(data);
      console.log('into get function');
      postClass.get()
      .then(function(results) {
        console.log(results);
        $scope.posts = results.data;
        $scope.formData = {};
      });
    });
  };
});


//show posts on page
app.controller('postControl', function($scope, dbCalls) {
  dbCalls.get()
  .then(function(results) {
    $scope.posts = results.data;
  });
});
