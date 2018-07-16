'use strict';

angular.module('myApp.acting', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/acting', {
            templateUrl: 'pages/acting/acting.html',
            controller: 'ActingCtrl'
        });
    }])

    .controller('ActingCtrl', [function() {

    }]);