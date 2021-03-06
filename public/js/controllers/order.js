window.angular.module('ngff.controllers.order', [])
    .controller('OrderController', ['$scope','$routeParams','$location','Global','Order',
        function ($scope, $routeParams, $location, Global, Order) {
            $scope.global = Global;

            $scope.create = function () {
                var order = new Order({
                    menuItem: this.order.menuItem,
                    specialRequest: this.order.specialRequest,
                });

                order.$save(function (response) {
                    $location.path("order/" + response._id);
                });

                this.order.name = "";
            };

            $scope.find = function (query) {
                Order.query(query, function (order) {
                    $scope.order = order;
                });
            };

            $scope.findOne = function () {
                Order.get({ orderId: $routeParams.orderId }, function (order) {
                    $scope.order = order;
                });
            };
        }]);

