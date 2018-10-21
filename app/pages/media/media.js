'use strict';

angular.module('myApp.media', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/media', {
            templateUrl: 'pages/media/media.html',
            controller: 'MediaCtrl'
        });
    }])

    .controller('MediaCtrl', [function() {

    }]);