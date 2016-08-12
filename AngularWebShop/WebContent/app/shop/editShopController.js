(function(angular) {

	angular.module('webShop').controller(
			'editShopController',
			[
					'$window',
					'$scope',
					'$state',
					'$rootScope',
					'shopService',
					'$stateParams',
					function($window, $scope, $state, $rootScope, shopService,
							$stateParams) {

						$scope.gridOptions = {};
						$scope.editFlag = false;

						if ($stateParams.operacija === "edit") {
							$scope.editFlag = true;

						}

						$scope.editSlog = function() {
							console.log('from edit put')
							shopService.put($scope.shop)

							$rootScope.shop = null;

							$state.go('allShops')
						};
						$scope.cancelSlog = function() {
							$window.history.back();
						};
					} ]);

})(angular);