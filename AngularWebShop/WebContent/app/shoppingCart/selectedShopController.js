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
					'shoppingCartService',
					'$stateParams',
					function($window, $scope, $state, $rootScope, shopService,
							productsService,shoppingCartService, $stateParams) {

						var podaci = function() {

							shopService.getAll().then(function(response) {

								
								$scope.allShops = response.data
								

							});
							
							productsService.getProductByShop($stateParams.shop).then(function(response) {

								
								$scope.allProducts = response.data
								console.log($scope.allProducts)
								
							});
						};
						
						$scope.addToShoppingCart = function(product,kolicina){
			    			
			    			console.log(product.naziv)
			    			console.log(kolicina)
			    			shoppingCartService.post(product,kolicina).then(function(response) {	
			        			
			    			});
			    		}
					 podaci()
						

					} ]);

})(angular);