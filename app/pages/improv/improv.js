'use strict';

angular.module('myApp.improv', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/improv', {
            templateUrl: 'pages/improv/improv.html',
            controller: 'ImprovCtrl'
        });
    }])

    .controller('ImprovCtrl', [function() {

    }]);