(function(angular) {

	angular.module('webShop').controller(
			'editRecenzijaController',
			[
					'$window',
					'$scope',
					'$state',
					'$rootScope',
					'productsService',
					'$stateParams','recenzijaService',
					function($window, $scope, $state, $rootScope, productsService,
							$stateParams,recenzijaService) {

						$scope.gridOptions = {};
						$scope.editFlag = false;

						if ($stateParams.operacija === "edit") {
							$scope.editFlag = true;

						}
						var podaci = function() {

							productsService.getAll().then(function(response) {
								$scope.proizvodii = response.data;

							});
							
						};
						podaci();
						
						$scope.mojInit=$scope.recenzija.datum;
						
						
						
						$scope.changedValue = function(selectedValue) {
							$scope.selectedValue = selectedValue
							$scope.recenzija.proizvod = selectedValue
							
						};
						
						$scope.editSlog = function() {
							recenzijaService.put($scope.recenzija)

							$rootScope.recenzija = null;

							$state.go('allRecenzija')
						};
						$scope.cancelSlog = function() {
							$window.history.back();
						};
						
						
						

						
						
						$scope.today = function() {
						    $scope.recenzija.datum = new Date();
						  };
						  $scope.today();

						  $scope.clear = function() {
						    $scope.recenzija.datum = null;
						  };

						  

						 
						

						  

						  $scope.open2 = function() {
						    $scope.popup2.opened = true;
						  };

						 

						  
						 

						  $scope.popup2 = {
						    opened: false
						  };

						  

						  
						
						  
						  
						  $scope.max = 10;
						  $scope.isReadonly = false;

						  $scope.hoveringOver = function(value) {
						    $scope.overStar = value;
						    $scope.percent = 100 * (value / $scope.max);
						  };

						  $scope.ratingStates = [
						    {stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
						    {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
						    {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
						    {stateOn: 'glyphicon-heart'},
						    {stateOff: 'glyphicon-off'}
						  ];
						
						  $scope.mojprod=$scope.recenzija.proizvod;
						  console.log($scope.mojprod)
							
					} ]);

})(angular);