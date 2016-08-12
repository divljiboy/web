(function(angular) {

	angular.module('webShop').controller(
			'editProductController',
			[
					'$window',
					'$scope',
					'$state',
					'$rootScope',
					'productsService',
					'$stateParams',
					function($window, $scope, $state, $rootScope,
							productsService, $stateParams) {
						$scope.gridOptions = {};
						$scope.editFlag = false;

						if ($stateParams.operacija === "edit") {
							$scope.editFlag = true;

						}

						$scope.editSlog = function() {
							console.log('from edit put')
							productService.put($scope.product)

							 $rootScope.product = null;

							$state.go('allProducts')
						};
						$scope.cancelSlog = function() {
							$window.history.back();
						};
					} ]);

})(angular);