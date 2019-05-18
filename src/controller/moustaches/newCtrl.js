function newCtrl($scope, $http, $state, $auth) {
  $scope.handleSubmit = function() {
    $scope.moustache.createdBy = $auth.getPayload().sub;
    console.log('Form was submitted!');
    $http({
      method: 'POST',
      url: '/api/moustaches',
      data: $scope.moustache
    }).then(result => $state.go('moustacheIndex', {
      id: result.data._id
    }));
  };
}

export default newCtrl;
