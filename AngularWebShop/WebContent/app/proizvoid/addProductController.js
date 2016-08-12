(function(angular) {

	angular.module('webShop').controller(
			'addProductController',
			[
					'$window',
					'$scope',
					'$state',
					'$rootScope',
					'productsService',
					'$stateParams',
					'shopService',
					function($window, $scope, $state, $rootScope,
							productsService, $stateParams, shopService) {

						var podaci = function() {

							shopService.getAll().then(function(response) {
								$scope.shops = response.data;

							});
						};

						podaci();

						if ($rootScope.drzava == null)
							$rootScope.drzava = {};

						$scope.addFlag = false;

						if ($stateParams.operacija === "add") {
							$scope.addFlag = true;
						}

						$scope.changedValue = function(selectedValue) {
							$scope.selectedValue = selectedValue
							$scope.product.prodavnica = selectedValue
						};

						$scope.addSlog = function() {
							console.log($scope.selectedValue)

							productsService.post($scope.product);
							$state.go('allProducts');
						};

					} ]);

})(angular);