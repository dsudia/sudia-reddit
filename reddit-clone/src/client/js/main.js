// Angular app
var app = angular.module('redditClone', []);

// get posts from database
app.factory('dbCalls', function($http) {
  var postClass = {};
  postClass.get = function() {
    return $http.get("/getData/posts");
  };

  postClass.add = function(formData) {
    return $http({
      url: '/addData/posts',
      method: 'POST',
      data: formData
    });
  };

  postClass.changeVote = function(id, vote) {
    var body = {
      vote: vote
    };
    return $http({
      url: '/upvote/' + id,
      method: 'POST',
      data: body
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
      postClass.get()
      .then(function(results) {
        $scope.posts = results.data;
        $scope.formData = {};
      });
    });
  };
});

app.controller('commControl', function($scope, dbCalls) {
  $scope.hideCommForm = true;
  $scope.hideComms = true;

  $scope.hideAndShowCommForm = function() {
    $scope.hideCommForm = !$scope.hideCommForm;
    $scope.hideComms = true;
  };

  $scope.hideAndShowComms = function() {
    $scope.hideComms = !$scope.hideComms;
    $scope.hideCommForm = true;
  };



});


//show posts on page
app.controller('postControl', function($scope, dbCalls) {
  dbCalls.get()
  .then(function(results) {
    $scope.posts = results.data;
  });

  $scope.upVote = function(post) {
    post.upvote ++;
    dbCalls.changeVote(post.id, post.upvote);
  };

  $scope.downVote = function(post) {
    post.upvote --;
    dbCalls.changeVote(post.id, post.upvote);
  };
});
