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
					'$localStorage',
					function($window, $scope, $state, $rootScope,
							productsService, $stateParams, shopService,kategorijaService,$localStorage) {
						$scope.product = {}
						var podaci = function() {
							console.log($localStorage.currentUser.prodavnica)
							shopService.getShopByName($localStorage.currentUser.prodavnica).then(function(response) {
								console.log(response.data)
								$scope.product.prodavnica = response.data
								

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
							productsService.post($scope.product)
						};

					} ]);

})(angular);