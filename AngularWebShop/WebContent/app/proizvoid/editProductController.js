(function(angular) {

	angular.module('webShop').controller(
			'editProductController',
			[
					'$window',
					'$scope',
					'$state',
					'$rootScope',
					'productsService',
					'$stateParams','shopService','kategorijaService',
					function($window, $scope, $state, $rootScope,
							productsService, $stateParams,shopService,kategorijaService) {
						$scope.gridOptions = {};
						$scope.selektovani=$rootScope.product.prodavnica;
						$scope.editFlag = false;

						var podaci = function() {

							shopService.getAll().then(function(response) {
								$scope.shops = response.data;

							});
							kategorijaService.getAll().then(function(response) {
								$scope.kategorijee= response.data;
								

							});
						};
						podaci();
						if ($stateParams.operacija === "edit") {
							$scope.editFlag = true;

						}

						$scope.changedValue = function(selectedValue) {
							$scope.selectedValue = selectedValue
							$scope.product.prodavnica = selectedValue
							
						};
						$scope.changedValue2 = function(selectedValue2) {
							$scope.selectedValue2 = selectedValue2
							$scope.product.kategorija = selectedValue2
						};
						$scope.editSlog = function() {
							productsService.put($scope.product)

							 $rootScope.product = null;

							$state.go('allProducts')
						};
						$scope.cancelSlog = function() {
							$window.history.back();
						};
					} ]);

})(angular);