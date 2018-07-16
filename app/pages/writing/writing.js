'use strict';

angular.module('myApp.writing', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/writing', {
            templateUrl: 'pages/writing/writing.html',
            controller: 'WritingCtrl'
        });
    }])

    .controller('WritingCtrl', [function() {

    }]);