'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.acting',
  'myApp.bio',
  'myApp.booking',
  'myApp.improv',
  'myApp.sketch',
  'myApp.standup',
  'myApp.writing',
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/home'});
}]);
