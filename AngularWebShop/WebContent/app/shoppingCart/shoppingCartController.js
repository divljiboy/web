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
					'$localStorage',
					function($window, $scope, $state, $rootScope, shopService,
							productsService,shoppingCartService,dostavljacService, $stateParams,$localStorage) {
						 $scope.currentState = 'Not ready';
						 
						var podaci = function() {
						
							shoppingCartService.getAll($localStorage.currentUser).then(function(response){
								
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
						var promise = shoppingCartService.deleteSlog(sifra)
						promise.then(function(response){
							podaci()
						})
						
					}
					 podaci()
					 
				    $scope.kupi = function(){
						 
						 _.forEach( $scope.sveKupljeno , function(value, key) {
			    			value.dostavljac = $scope.dostavljac
			    		
			    		});
					     var now = moment();
					     console.log($scope.sveKupljeno)
					
						 var promise = shoppingCartService.postAll($scope.sveKupljeno,$localStorage.currentUser)
						 promise.then(function(response){
							 shoppingCartService.deleteAll().then(function(response){
								 podaci()
							 })
						 })
						 
						 
						 
						 
					 }
					 
					 $scope.changedValue = function(dostavaSelected){
				
						 $scope.dostavljac = dostavaSelected
						
					 }

					} ]);

})(angular);