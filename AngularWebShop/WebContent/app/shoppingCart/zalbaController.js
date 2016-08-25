(function(angular) {

	angular.module('webShop').controller(
			'zalbaController',
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
							shoppingCartService.getAllZalbe().then(function(response){
								console.log(response.data)
								$scope.zalbe = response.data
							})
						}
						
						$scope.prihvati = function(zalbe){
							shoppingCartService.postZalbe(zalbe).then(function(response){
								podaci()
							})
						}
						
						$scope.odbaci = function(zalbe){
							shoppingCartService.postOdbaci(zalbe).then(function(response){
								podaci()
							})
						}
						
						podaci()
					} ]);

})(angular);