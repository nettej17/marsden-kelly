'use strict';

angular.module('myApp.modeling', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/modeling', {
            templateUrl: 'pages/modeling/modeling.html',
            controller: 'ModelingCtrl'
        });
    }])

    .controller('ModelingCtrl', [function() {

    }]);