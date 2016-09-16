(function(angular) {

	angular.module('webShop').controller(
			'akcijaProductController',
			[
					'$window',
					'$scope',
					'$state',
					'$rootScope',
					'productsService',
					'$stateParams','shopService','kategorijaService','$localStorage',
					function($window, $scope, $state, $rootScope,
							productsService, $stateParams,shopService,kategorijaService,$localStorage) {
						$scope.greska = function(){ return false}
						
						 $scope.currentState = 'Not ready';
						
						var podaci = function(){
							productsService.getAll($localStorage.currentUser.prodavnica).then(function(response){
								$scope.proizvod = response.data
							})
						}
						podaci()
						
						$scope.open1 = function() {
							    $scope.popup1.opened = true;
							  };
							  
						$scope.popup1 = {
								opened: false
							  };
						$scope.open2 = function() {
						    $scope.popup2.opened = true 
						  };
						 
						 
						  
						$scope.popup2 = {
						   
							opened: false
						 
						  };
						$scope.changedValue = function(productSelected){
							 
							 $scope.product = productSelected
							
						 }
						$scope.ok = function(){
							var dtKraj = $scope.dtKraj
							var dtPocetak = $scope.dtPocetak
							console.log(dtKraj)
							console.log($scope.akcijskaCena)
							if( dtKraj < dtPocetak ){
								console.log('jeste greska')
								$scope.greska =function(){return  true }
							}else{
								$scope.greska= function(){return false}
								$scope.product.akcija = true;
								$scope.product.datumPocetka = dtPocetak
								$scope.product.datumKraja = dtKraj
								$scope.product.akcijskaCena = $scope.akcijskaCena
								$scope.product.cenaBezAkcije = $scope.product.cena
								console.log($scope.product)
							    productsService.postAkciju($scope.product).then(function(res){
							    	$state.go('chooseShop')
							    })
							    
							}
							
						}    
						
						
						
					} ]);
	

})(angular);