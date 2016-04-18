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
