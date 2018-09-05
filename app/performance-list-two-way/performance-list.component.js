'use strict';

angular.module('performanceApp')
    .component('performanceListTwoWay', {
        templateUrl: 'performance-list-two-way/performance-list.template.html',
        controllerAs: 'vm',
        controller: PerformanceList2Controller
    });

    function PerformanceList2Controller($scope) {
        var vm = this;

        vm.generateTiles = generateTiles;
        vm.updateTileByNumber = updateTileByNumber;
        vm.showArr = showArr;
        vm.tilesArr = [];

        function generateTiles(tilesNumber) {
            vm.tilesArr = _.range(tilesNumber)
                .map(function(item, index) { 
                    return {  
                        input1: item,
                        input2: (tilesNumber - index),
                        arr1: _.range(item, item + 100)
                    };
                });
        }

        function updateTileByNumber(tileIndexToUpdate) {
            vm.tilesArr[tileIndexToUpdate].arr1 = _.map(vm.tilesArr[tileIndexToUpdate].arr1, function(element) {
                return 777;
            });
        }

        function showArr() {
            console.log('vm.tilesArr');
            console.log(vm.tilesArr);
        }

    }
    