function loginCtrl($scope, $state, $auth) {
  $scope.handleLogin = function() {
    console.log('You have logged in, well done!');
    $auth.login($scope.user)
      .then(() => $state.go('moustacheIndex'))
      .catch(err => console.log('There was an error', err));
  };
}

export default loginCtrl;
