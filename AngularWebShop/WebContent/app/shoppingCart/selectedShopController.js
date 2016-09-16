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
						 $scope.applyOcena = function(product,ocena){
			    			  productsService.postOcenu(product,ocena).then(function(response){
					    				  podaci()
					    			  })
						  }
						
						  $scope.ocena = 3;
						  $scope.max = 5;
						  $scope.isReadonly = false;

						  $scope.hoveringOver = function(value) {
						    $scope.overStar = value;
						    $scope.percent = 100 * (value / $scope.max);
						  };
						  
						  $scope.open2 = function() {
							    $scope.popup2.opened = true;
							  };

							 

							  $scope.popup2 = {
							    opened: false
							  };
						  
						  $scope.ratingStates = [
						    {stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
						    {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
						    {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
						    {stateOn: 'glyphicon-heart'},
						    {stateOff: 'glyphicon-off'}
						  ];
						
					 podaci()
						
					 

					} ]);

})(angular);