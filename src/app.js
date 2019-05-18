import angular from 'angular';
import '@uirouter/angularjs';
import Router from './config/router';
import 'bulma';
import '../scss/style.scss';
import 'satellizer';
import mainCtrl from './controller/mainCtrl';


angular.module('MoustacheTime', ['ui.router', 'satellizer'])
  .controller('mainCtrl', mainCtrl)
  .config(Router)
  .config(function($authProvider) {
    $authProvider.signupUrl = '/api/register';
    $authProvider.loginUrl = '/api/login';
  });
