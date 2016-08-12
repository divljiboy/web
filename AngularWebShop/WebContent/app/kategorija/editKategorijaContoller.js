(function(angular) {

	angular.module('webShop').controller(
			'editKategorijaController',
			[
					'$window',
					'$scope',
					'$state',
					'$rootScope',
					'kategorijaService',
					'$stateParams',
					function($window, $scope, $state, $rootScope,
							kategorijaService, $stateParams) {
						$scope.gridOptions = {};
						$scope.editFlag = false;

						if ($stateParams.operacija === "edit") {
							$scope.editFlag = true;

						}
						
						$scope.changedValue = function(selectedValue) {
							$scope.selectedValue = selectedValue
							$scope.kategorija.nadkategorija = selectedValue
						};
						var podaci = function() {

							kategorijaService.getAll().then(function(response) {
								$scope.selkategorije = response.data;

							});
						};

						podaci();


						$scope.editSlog = function() {
							console.log($scope.kategorija)
							kategorijaService.put($scope.kategorija)

							 $rootScope.kategorija = null;

							$state.go('allKategorija')
						};
						$scope.cancelSlog = function() {
							$window.history.back();
						};
					} ]);

})(angular);