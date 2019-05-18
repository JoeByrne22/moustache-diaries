function editCtrl($scope, $state, $http) {
  $http({
    method: 'GET',
    url: `/api/moustaches/${$state.params.id}`
  }).then(result => $scope.moustache = result.data);
  $scope.handleSubmit = function() {
    // Here we request the UPDATE route:
    $http({
      method: 'PUT',
      url: `/api/moustaches/${$state.params.id}`,
      data: $scope.moustache
    }).then(() => $state.go('moustacheIndex'));
  };
}

export default editCtrl;
