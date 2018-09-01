'use strict';

angular.module('myApp.sketch', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/modeling', {
            templateUrl: 'pages/sketch/sketch.html',
            controller: 'SketchCtrl'
        });
    }])

    .controller('SketchCtrl', [function() {

    }]);