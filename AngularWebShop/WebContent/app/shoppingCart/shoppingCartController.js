(function(angular) {

	angular.module('webShop').controller(
			'shoppingCartController',
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
					function($window, $scope, $state, $rootScope, shopService,
							productsService,shoppingCartService,dostavljacService, $stateParams) {

						var podaci = function() {
							$scope.isWaiting = false
							shoppingCartService.getAll().then(function(response){
								console.log(response.data)
								$scope.sveKupljeno = response.data
								var zaPlacanje = 0;
								for(s in $scope.sveKupljeno){
								zaPlacanje = zaPlacanje +	$scope.sveKupljeno[s].cena * $scope.sveKupljeno[s].kolicina
									
								}
							
								$scope.zaPlacanje = zaPlacanje
							})
							dostavljacService.getAll().then(function(response){
								$scope.dostavljaci = response.data
							})
						};
						
					$scope.ponistiKupovinu = function(sifra) {
						shoppingCartService.deleteSlog(sifra)
						podaci()
					}
					 podaci()
					 
				    $scope.kupi = function(){
						 console.log($scope.sveKupljeno)
						 shoppingCartService.postAll($scope.sveKupljeno)
						 shoppingCartService.deleteAll()
						 podaci();
					 }
					 
					 

					} ]);

})(angular);