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


  $scope.formData.date = new Date();
  $scope.addPost = function() {
    $scope.hideAndShowForm();
    dbCalls.add($scope.formData)
    .then(function(data) {
      return dbCalls.get()
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

  var hideAndShowCommForm = function() {
    $scope.hideCommForm = !$scope.hideCommForm;
    $scope.hideComms = true;
  };

  var hideAndShowComms = function() {
    $scope.hideComms = !$scope.hideComms;
    $scope.hideCommForm = true;
  };

  $scope.commData = {};
  var addComm = function(post) {
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

app.controller('registerController', ['$scope', '$location', 'authService',
 function($scope, $location, authService) {
  $scope.user = {};
  $scope.register = function() {
    authService.register($scope.user)
      .then(function(user) {
        authService.setUserInfo(user);
        $location.path('/');
      })
      .catch(function(err) {
        // check status code, send appropriate message
        console.log(err);
      });
  };
}]);


app.controller('loginController', ['$rootScope', '$scope', '$location', 'authService',
  function($rootScope, $scope, $location, authService) {
  $scope.user = {};
  $scope.login = function() {
    authService.login($scope.user)
      .then(function(user) {
        authService.setUserInfo(user);
        $location.path('/');
        $rootScope.currentUser = authService.getUserInfo();
      })
      .catch(function(err) {
        // check status code, send appropriate message
        console.log(err);
      });
  };
}]);
