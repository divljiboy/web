(function(angular) {

	angular
			.module('webShop')
			.controller(
					'addRecenzijaController',
					[
							'$window',
							'$scope',
							'$state',
							'$rootScope',
							'recenzijaService',
							'$stateParams',
							'shopService',
							'productsService',
							'$localStorage',
							function($window, $scope, $state, $rootScope,
									recenzijaService, $stateParams, shopService,
									productsService,$localStorage) {
								
								var podaci = function() {

									productsService.getAll().then(
											function(response) {
												$scope.proizvodii = response.data;

											});
									$scope.recenzija={};

									
								};

								podaci();

								
								

								$scope.addFlag = false;

								if ($stateParams.operacija === "add") {
									$scope.addFlag = true;
								}

								$scope.changedValue = function(selectedValue) {
									$scope.selectedValue = selectedValue
									$scope.recenzija.proizvod = selectedValue
								};
								

								$scope.addSlog = function() {
									console.log($localStorage.currentUser)
									$scope.recenzija.korisnik = $localStorage.currentUser.username 
									recenzijaService.post($scope.recenzija);
									$state.go('allRecenzija');
								};
								
								
								
								
								  $scope.today = function() {
								    $scope.recenzija.datum = new Date();
								  };
								  $scope.today();

								  $scope.open2 = function() {
								    $scope.popup2.opened = true;
								  };

								 

								  $scope.popup2 = {
								    opened: false
								  };

								
								  
								  
								  $scope.recenzija.ocena = 7;
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
								

							} ]);

})(angular);
