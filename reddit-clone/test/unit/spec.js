describe('test showForm controller', function () {
  var controller = null;
  $scope = null;

  beforeEach(module('redditClone'));
  it('initially has a status of true for hidden items', inject(function ($controller) {
    var scope = {};
    var showForm = $controller('showForm', {
      $scope: scope
    });
    scope.should.have.property('formHideStatus');
    scope.formHideStatus.should.equal(true);
  }));

  it('changes value of hideStatus on button click', inject(function ($controller) {
    var scope = {};
    var showForm = $controller('showForm', {
      $scope: scope
    });
    scope.should.have.property('hideAndShowForm');
    scope.hideAndShowForm.should.be.a('function');
    scope.hideAndShowForm();
    scope.formHideStatus.should.equal(false);
  }));
});

describe('test addPost', function() {

});

describe('test showComment', function() {

});

describe('test addComment', function() {

});

describe('test change post score', function() {

});

describe('test displayPosts', function() {
  var controller = null;
  $scope = null;

  beforeEach(module('redditClone'));
  it('initially has a status of true for hidden items', inject(function ($controller) {
    var scope = {};
    var showForm = $controller('showPosts', {
      $scope: scope
    });
    scope.should.have.property('formHideStatus');
    scope.formHideStatus.should.equal(true);
  }));
});
