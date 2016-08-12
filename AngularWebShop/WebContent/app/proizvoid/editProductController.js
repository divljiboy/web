(function(angular) {

	angular.module('webShop').controller(
			'editProductController',
			[
					'$window',
					'$scope',
					'$state',
					'$rootScope',
					'productsService',
					'$stateParams','shopService',
					function($window, $scope, $state, $rootScope,
							productsService, $stateParams,shopService) {
						$scope.gridOptions = {};
						$scope.selektovani=$rootScope.product.prodavnica;
						$scope.editFlag = false;

						var podaci = function() {

							shopService.getAll().then(function(response) {
								$scope.shops = response.data;

							});
						};
						podaci();
						if ($stateParams.operacija === "edit") {
							$scope.editFlag = true;

						}

						$scope.changedValue = function(selectedValue) {
							$scope.selectedValue = selectedValue
							$scope.product.prodavnica = selectedValue
							console.log($scope.product);
						};
						$scope.editSlog = function() {
							console.log('from edit put')
							productsService.put($scope.product)

							 $rootScope.product = null;

							$state.go('allProducts')
						};
						$scope.cancelSlog = function() {
							$window.history.back();
						};
					} ]);

})(angular);