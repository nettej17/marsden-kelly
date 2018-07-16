'use strict';

angular.module('myApp.bio', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/bio', {
            templateUrl: 'pages/bio/bio.html',
            controller: 'BioCtrl'
        });
    }])

    .controller('BioCtrl', [function() {

    }]);