'use strict';

angular.module('performanceApp')
    .component('performanceTileTwo', {
        templateUrl: 'performance-list-two-way/components/performance-tile-two/performance-tile.template.html',
        controllerAs: 'vm',
        controller: PerformanceTile2Controller,
        bindings: {
            index: '=',
            arr1: '='
        }
    });

    function PerformanceTile2Controller($scope, $timeout) {
        var vm = this;

    }