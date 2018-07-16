'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', [function() {
    // window.onload = rotate;

    // let adImages = new Array("../img/IMG_6050.png","../img/IMG_6054.png","../img/IMG_6144.png");
    // let adImages2 = new Array("../img/IMG_6144.png","../img/IMG_6050.png","../img/IMG_6054.png");
    // let adImages1 = new Array("../img/IMG_6054.png","../img/IMG_6144.png","../img/IMG_6050.png");
    // let thisAd = 0;
    //
    // function rotate() {
    //     thisAd++;
    //     if (thisAd === adImages.length) {
    //         thisAd = 0;
    //     }
    //     document.getElementById("marsden1").src = adImages[thisAd];
    //     document.getElementById("marsden2").src = adImages1[thisAd];
    //     document.getElementById("marsden3").src = adImages2[thisAd];
    //
    //     setTimeout("rotate()", 3 * 1000);
    // }
}]);