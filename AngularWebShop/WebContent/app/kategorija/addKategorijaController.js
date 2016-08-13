(function(angular) {

	angular.module('webShop').controller(
			'addKategorijaController',
			[
					'$window',
					'$scope',
					'$state',
					'$rootScope',
					'kategorijaService',
					'$stateParams',
					function($window, $scope, $state, $rootScope,
							kategorijaService, $stateParams) {

						var podaci = function() {

							kategorijaService.getAll().then(function(response) {
								$scope.selkategorije = response.data;

							});
						};

						podaci();

						
						$scope.addFlag = false;

						if ($stateParams.operacija === "add") {
							$scope.addFlag = true;
						}

						$scope.changedValue = function(selectedValue) {
							$scope.selectedValue = selectedValue
							$scope.kategorija.nadkategorija = selectedValue;
						};

						$scope.addSlog = function() {
						
							kategorijaService.post($scope.kategorija);
							$state.go('allKategorija');
						};

					} ]);

})(angular);