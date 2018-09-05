'use strict';

angular.
  module('performanceApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider

        .when('/performance-two-way', { 
          template: '<performance-list-two-way></performance-list-two-way>'
        })

        .when('/performance-one-way', {
          template: '<performance-list-one-way></performance-list-one-way>'
        })

        .otherwise('/performance-two-way');
    }
  ]); 
