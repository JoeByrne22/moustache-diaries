import moustacheIndexCtrl from '../controller/moustaches/indexCtrl';
import moustacheShowCtrl from '../controller/moustaches/showCtrl';
import moustacheNewCtrl from '../controller/moustaches/newCtrl';
import moustacheEditCtrl from '../controller/moustaches/editCtrl';
import moustacheloginCtrl from '../controller/loginCtrl';
import userCtrl from '../controller/moustaches/userCtrl';

function Router($stateProvider) {
  $stateProvider
    .state('home', {
      templateUrl: './views/home.html',
      url: '/'
    })
    .state('login', {
      templateUrl: './views/login.html',
      url: '/login',
      controller: moustacheloginCtrl
    })
    .state('moustacheIndex', {
      templateUrl: './views/moustaches/index.html',
      url: '/moustaches',
      controller: moustacheIndexCtrl
    })
    .state('moustachesShow', {
      templateUrl: './views/moustaches/show.html',
      url: '/moustaches/:id',
      controller: moustacheShowCtrl
    })
    .state('moustachesNew', {
      url: '/moustaches/new',
      templateUrl: './views/moustaches/new.html',
      controller: moustacheNewCtrl
    })
    .state('moustachesEdit', {
      templateUrl: './views/moustaches/edit.html',
      url: '/moustaches/:id/edit',
      controller: moustacheEditCtrl
    })
    .state('showUser', {
      templateUrl: './views/moustaches/user.html',
      url: '/users/:id',
      controller: userCtrl
    });
}


export default Router;
