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
					'$localStorage',
					function($window, $scope, $state, $rootScope, shopService,
							productsService,shoppingCartService, $stateParams,$localStorage) {

						var podaci = function() {

							shopService.getAll().then(function(response) {

								
								$scope.allShops = response.data
								

							});
							
							productsService.getProductByShop($stateParams.shop).then(function(response) {

								
								$scope.allProducts = response.data
								
								
							});
						};
						
						$scope.addToShoppingCart = function(product,kolicina){
			    			
			    			var name = $localStorage.currentUser
			    			shoppingCartService.post(product,kolicina,name).then(function(response) {	
			        			
			    			});
			    		}
						
						$scope.proizvod = function(proizvod){
							$state.go('proizvodRecenzije', {
								"proizvod" : proizvod.sifra
					});
						}
						
					 podaci()
						

					} ]);

})(angular);