(function () {
    'use strict';
    angular
        .module('app')
        .controller('AppController', AppController);

    AppController.$inject = ['$scope', '$timeout'];
    function AppController($scope, $timeout) {
        var vm = this;

        vm.options = {
            unselectOthers:false
        };

        vm.carouselOptions1 = {
            carouselId:'carousel-1',
            align:'left',
            selectFirst:false,
            centerOnSelect:false,
            template:'templates/sliders.html'
        };

        vm.carouselOptions2 = {
            carouselId:'carousel-2',
            align:'left',
            selectFirst:false,
            centerOnSelect:false,
            template:'templates/sliders.html'
        };

        vm.onSelectCarousel = onSelectCarousel;
        activate();

        function activate() {

            // Mock data for carousel
            vm.carouselData1  = createArray(15);
            vm.carouselData2 = createArray(15);

            function createArray(total) {
                var i, model, arr = [];
                for (i = 0; i < total; i++) {
                    model = {
                        id      : i,
                        display : 'item ' + i,
                        src     : 'http://lorempixel.com/120/80/?' + i,
                        name    : 'Juile',
                        age     : 25,
                        hobby   : 'Tennis, Running',
                        country: 'America'
                    };
                    arr.push(model);
                }
                return arr;
            }
        }

        function onSelectCarousel(item) {
            // console.log('Carousel item selected:', item);
            vm.itemSelected = item;

            // unselect all carousel with id that contains string except one
            if (vm.options.unselectOthers) {
                $scope.$broadcast('a-carousel.desactivateItem', {idContains:'carousel-', except:item.carouselId})
            }
        }
    }
}());