// get posts from database
app.service('dbCalls', function($http) {
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

  postClass.addComment = function(data){
    return $http({
      url: '/addData/comments',
      data: data,
      method: 'POST'
    });
  };

  return postClass;
});

app.service('authService', ['$http', '$window', function($http, $window) {
  var user = {};
  return {
    login: function(user) {
      return $http.post('/auth/login', user);
    },
    logout: function(user) {
      user = null;
      $window.localStorage.clear();
    },
    register: function(user) {
      return $http.post('/auth/register', user);
    },
    setUserInfo: function(userData) {
      $window.localStorage.setItem('user', JSON.stringify(userData.data.data.user));
      $window.localStorage.setItem('token', JSON.stringify(userData.data.data.token));
    },
    getUserInfo: function(userData) {
      return $window.localStorage.getItem('user');
    },
  };
}]);

app.service('authInterceptor', ['$window', function($window) {
  return {
    request: function(config) {
      // check for token in headers
      // config.headers['X-requested-with'] = XMLHttpRequest;
      var token = $window.localStorage.getItem('token');
      if(token) {
        config.headers.Authorization = "Bearer " + token;
        // return $q.resolve(config);
      }
      return config;
    }
  };
}]);
