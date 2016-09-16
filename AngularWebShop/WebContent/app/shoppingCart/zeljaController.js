(function(angular) {

	angular.module('webShop').controller(
			'zeljeController',
			[
					'$window',
					'$scope',
					'$state',
					'$rootScope',
					'shopService',
					'productsService',
					'shoppingCartService',
					'dostavljacService',
					'$stateParams',
					'$localStorage',
					function($window, $scope, $state, $rootScope, shopService,
							productsService,shoppingCartService,dostavljacService, $stateParams,$localStorage) {
						
					var podaci = function(){
						shoppingCartService.getZelje($localStorage.currentUser.username).then(function(response){
							$scope.allProducts = response.data
						})
					}
					podaci()
					} ]);

})(angular);