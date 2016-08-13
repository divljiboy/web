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
					'kategorijaService',
					function($window, $scope, $state, $rootScope,
							productsService, $stateParams, shopService,kategorijaService) {

						var podaci = function() {

							shopService.getAll().then(function(response) {
								$scope.shops = response.data;
								

							});
							
								kategorijaService.getAll().then(function(response) {
									$scope.kategorijee= response.data;
									

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
						$scope.changedValue2 = function(selectedValue2) {
							$scope.selectedValue2 = selectedValue2
							$scope.product.kategorija = selectedValue2
						};


						$scope.addSlog = function() {
							productsService.post($scope.product);
							$state.go('allProducts');
						};

					} ]);

})(angular);