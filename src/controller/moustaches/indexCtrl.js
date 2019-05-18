function indexCtrl($scope, $http) {
  $http({
    method: 'GET',
    url: '/api/moustaches'
  }).then(result => {
    $scope.allMoustaches = result.data;
    $scope.filteredMoustaches = $scope.allMoustaches;
  });
  $scope.handleFilterSubmit = function() {
    $scope.filteredMoustaches = $scope.allMoustaches.filter(moustache =>
      moustache.name.toLowerCase().startsWith($scope.searchTerm.toLowerCase())
    );
  };
}

export default indexCtrl;
