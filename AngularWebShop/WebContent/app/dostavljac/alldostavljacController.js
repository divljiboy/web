(function(angular) {

	angular
			.module('webShop')
			.controller(
					'allDostavljacController',
					[
							'$scope',
							'$state',
							'$uibModal',
							'$rootScope',
							'dostavljacService',
							'$stateParams',
							'uiGridConstants',
							function($scope, $state, $uibModal, $rootScope,
									dostavljacService, $stateParams,
									uiGridConstants) {

								$scope.selektovaniSlog = {};

								var podaci = function() {
									dostavljacService
											.getAll()
											.then(
													function(response) {
														$scope.gridOptions.data = response.data;
													});
								};

								podaci();

								$scope.service = dostavljacService;
								$scope.gridOptions = {
									enableRowSelection : true,
									enableRowHeaderSelection : false
								};

								$scope.gridOptions.columnDefs = [ {
									name : 'sifra'
								}, // ----
								{
									name : 'naziv'
								}, {
									name : 'opis'
								}, {
									name : 'drzava'
								}, {
									name : 'tarifa'
								} ];

								$scope.gridOptions.multiSelect = false;
								$scope.gridOptions.noUnselect = true;
								$scope.gridOptions.onRegisterApi = function(
										gridApi) {
									$scope.gridApi = gridApi;
									gridApi.selection.on
											.rowSelectionChanged(
													$scope,
													function(row) {

														$scope.selektovaniSlog.sifra = row.entity.sifra;
														$scope.selektovaniSlog.naziv = row.entity.naziv;
														$scope.selektovaniSlog.opis = row.entity.opis;
														$scope.selektovaniSlog.drzava = row.entity.drzava;
														$scope.selektovaniSlog.tarifa = row.entity.tarifa;
														

													});
								};

								$scope.obrisiSlog = function() {
									if ($scope.gridApi.selection
											.getSelectedRows().length > 0) {

										

										$scope.animationsEnabled = true;
										var modalInstance = $uibModal
												.open({
													backdrop : false,
													templateUrl : 'partials/brisanje.html',
													controller : 'brisanjeSlogaController',
													scope : $scope
												});
									} else {
										alert("Niste selektovali nista !");
									}
								};

								$scope.dodajSlog = function() {
									$rootScope.product = null;
									$state.go('addDostavljac', {
										"operacija" : "add"
									});

								};
								$scope.izmeniSlog = function() {
									if (Object.keys($scope.selektovaniSlog).length) {
										$rootScope.dostavljac = $scope.selektovaniSlog

										$state.go('editDostavljac', {
											"operacija" : "edit"
										})
									} else {
										alert('Niste selekovali nista')
									}

								}

							} ]);
})(angular);