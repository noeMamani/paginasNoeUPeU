(function () {
  'use strict';
  var route = angular.module('app.routes');

  route.config(['$routeProvider',function($routeProvider) {

    var r = $routeProvider;

    r.when('/principal', { 
      templateUrl: '/src/views/principal/index.html'});

    r.when('/juliaca', {
      templateUrl: '/src/views/juliaca/index.html'});

    r.otherwise({
      redirectTo: '/principal'});
  }]);


})();

