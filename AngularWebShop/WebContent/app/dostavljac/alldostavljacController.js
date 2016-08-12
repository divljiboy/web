(function(angular) {

	angular
			.module('webShop')
			.controller(
					'allDostavljacController',
					[
							'$scope',
							'$state',
							'$rootScope',
							'dostavljacService',
							'$stateParams',
							'uiGridConstants',
							function($scope, $state, $rootScope,
									dostavljacService, $stateParams,
									uiGridConstants) {

								$scope.selektovaniSlog = {};

								var init = function() {
									console.log("Pozvao funckioju init()");
									dostavljacService
											.getAll()
											.then(
													function(response) {
														console
																.log("uspelo getovanje");
														console
																.log(response.data);
														$scope.gridOptions.data = response.data;
														$scope.podaci = response.data;

													},
													function(response) {

														console
																.log("nije uspelo logovanje");
													});

								};
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

								$scope.gridOptions.data=$scope.podaci;
								
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

										
										$scope.service
												.deleteSlog(
														$scope.selektovaniSlog.sifra)
												.then(
														function(res) {
															alert("Uspesno obrisan sloga iz tabele ");

															init();

														},
														function(res) {
															alert("Neuspesno brisanje iz tabele ");

															init();
														})
									} else {
										alert("Niste selektovali nista !");
									}
								};

								$scope.dodajSlog = function() {
									$rootScope.dostavljac = null;
									$state.go('addDostavljac', {
										"operacija" : "add"
									});
									init();

								};
								$scope.izmeniSlog = function() {
									if (Object.keys($scope.selektovaniSlog).length) {
										$rootScope.dostavljac = $scope.selektovaniSlog

										$state.go('editDostavljac', {
											"operacija" : "edit"
										})
										init();

									} else {
										alert('Niste selekovali nista')
									}

								}
								init();
							} ]);
})(angular);