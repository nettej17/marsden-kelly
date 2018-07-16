'use strict';

angular.module('myApp.standup', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/standup', {
            templateUrl: 'pages/standup/standup.html',
            controller: 'StandupCtrl'
        });
    }])

    .controller('StandupCtrl', [function() {

    }]);