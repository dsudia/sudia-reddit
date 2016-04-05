// Show and hide new post form
app.controller('formControl', function($scope, dbCalls) {
  $scope.formHideStatus = true;
  $scope.hideAndShowForm = function() {
    $scope.formHideStatus = !$scope.formHideStatus;
  };

  $scope.sort = 'upvote';
  $scope.reverse = true;
  $scope.posthideStatus = false;

  $scope.sortTitle = function() {
    $scope.sort = 'title';
    $scope.reverse = false;
  };

  $scope.sortUpvote = function() {
    $scope.sort = 'upvote';
    $scope.reverse = true;
  };

  $scope.sortDate = function() {
    $scope.sort = 'date';
    $scope.reverse = true;
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
      return postClass.get()
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

  $scope.commData = {};
  $scope.addComm = function(post) {
    $scope.commData.post_id = post.id;
    return dbCalls.addComment($scope.commData)
    .then(function() {
      return dbCalls.get()
      .then(function(results) {
        $scope.posts = results.data;
        $scope.commData = {};
        $scope.hideComms = false;
        $scope.hideCommForm = true;
      });
    });
  };

  $scope.search = '';

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
