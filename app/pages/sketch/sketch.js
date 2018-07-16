'use strict';

angular.module('myApp.sketch', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/sketch', {
            templateUrl: 'pages/sketch/sketch.html',
            controller: 'SketchCtrl'
        });
    }])

    .controller('SketchCtrl', [function() {

    }]);