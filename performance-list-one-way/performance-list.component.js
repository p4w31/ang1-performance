'use strict';

angular.module('performanceApp')
    .component('performanceListOneWay', {
        templateUrl: 'performance-list-one-way/performance-list.template.html',
        controllerAs: 'vm',
        controller: PerformanceList1Controller
    });

    function PerformanceList1Controller($scope) {
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

        function updateTiles() {
            
        }

        function updateTileByNumber(tileIndexToUpdate) {
            var updatedSubArray = [];
            for(var i=0; i<vm.tilesArr[tileIndexToUpdate].arr1.length; i++) {
                updatedSubArray.push(777);
            }

            var newTilesArr = angular.copy( vm.tilesArr );
            newTilesArr[tileIndexToUpdate].arr1 = updatedSubArray;
            vm.tilesArr = newTilesArr;
        }

        function showArr() {
            console.log('vm.tilesArr');
            console.log(vm.tilesArr); 
        }


    }
    
