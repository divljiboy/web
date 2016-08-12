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

						$scope.addProduct = function() {
							console.log($scope.selectedValue)

							productsService.post($scope.product)
							then(function(response) {
								alert("Uspesno dodat");
							}, function(response) {
								alert("Neuspesno dodat");
							});
							$state.go('allProducts');
						};

					} ]);

})(angular);