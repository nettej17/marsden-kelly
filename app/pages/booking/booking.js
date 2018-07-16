'use strict';

angular.module('myApp.booking', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/booking', {
            templateUrl: 'pages/booking/booking.html',
            controller: 'BookingCtrl'
        });
    }])

    .controller('BookingCtrl', [function() {

    }]);