(function(angular) {

	angular.module('webShop').controller(
			'selectedShopController',
			[
					'$window',
					'$scope',
					'$state',
					'$rootScope',
					'shopService',
					'productsService',
					'$stateParams',
					function($window, $scope, $state, $rootScope, shopService,
							productsService, $stateParams) {

						var podaci = function() {

							shopService.getAll().then(function(response) {

								
								$scope.allShops = response.data
								

							});
							
							productsService.getProductByShop($stateParams.shop).then(function(response) {

								
								$scope.allProducts = response.data
								

							});
						};
					 podaci()
						

					} ]);

})(angular);