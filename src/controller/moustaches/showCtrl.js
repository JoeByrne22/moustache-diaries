function showCtrl($state, $scope, $http){
  $http({
    method: 'GET',
    url: `/api/moustaches/${$state.params.id}`
  }).then(result => {
    $scope.moustache = result.data;
  });
  $scope.createComment = function() {
    $http({
      method: 'POST',
      url: `/api/moustaches/${$state.params.id}/comments`,
      data: $scope.comment
    }).then(result => $scope.moustache = result.data);
  };
  $scope.deleteComment = function(comment) {
    $http({
      method: 'DELETE',
      url: `/api/moustaches/${$state.params.id}/comments/${comment._id}`
    }).then(result => $scope.moustache = result.data);
  };
  $scope.handleDelete = function() {
    $http({
      method: 'DELETE',
      url: `/api/moustaches/${$scope.moustache._id}`
    }).then(() => $state.go('moustacheIndex'));
  };
}


export default showCtrl;
