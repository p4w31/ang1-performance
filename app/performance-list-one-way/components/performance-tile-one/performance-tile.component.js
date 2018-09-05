'use strict';

angular.module('performanceApp')
    .component('performanceTileOne', {
        templateUrl: 'performance-list-one-way/components/performance-tile-one/performance-tile.template.html',
        controllerAs: 'vm',
        controller: PerformanceTile1Controller,
        bindings: {
            index: '=',
            arr1: '<'
        }
    });

    function PerformanceTile1Controller($scope, $timeout) {
        var vm = this;
        vm.tileArray = angular.copy( vm.arr1 );
    }