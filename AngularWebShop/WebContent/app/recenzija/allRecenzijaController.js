(function(angular) {

	angular
			.module('webShop')
			.controller(
					'allRecenzijaController',
					[
							'$scope',
							'$state',
							'$rootScope',
							'recenzijaService',
							'$stateParams',
							'uiGridConstants',
							'productsService',
							function($scope, $state, $rootScope,
									recenzijaService, $stateParams,
									uiGridConstants, productsService) {

								$scope.selektovaniSlog = {};

								var podaci = function() {
									recenzijaService
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

								$scope.service = recenzijaService;
								$scope.gridOptions = {
									enableRowSelection : true,
									enableRowHeaderSelection : false
								};

								$scope.gridOptions.columnDefs = [ {
									name : 'sifra',
									visible : false
								}, // ----
								{
									name : 'datum'
								}, {
									name : 'ocena'
								}, {
									name : 'komentar'
								}, {
									name : 'proizvod.naziv',
									displayName : "Ime proizvoda"
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
														$scope.selektovaniSlog.datum = row.entity.datum;
														$scope.selektovaniSlog.ocena = row.entity.ocena;
														$scope.selektovaniSlog.komentar = row.entity.komentar;
														$scope.selektovaniSlog.proizvod = row.entity.proizvod;

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

															podaci();

														},
														function(res) {
															alert("Neuspesno brisanje iz tabele ");

															podaci();
														});

									} else {
										alert("Niste selektovali nista !");
									}
								};

								$scope.dodajSlog = function() {

									$rootScope.product = null;
									$state.go('addRecenzija', {
										"operacija" : "add"
									});
									podaci();

								};
								$scope.izmeniSlog = function() {
									if (Object.keys($scope.selektovaniSlog).length) {
										$rootScope.recenzija = $scope.selektovaniSlog

										$state.go('editRecenzija', {
											"operacija" : "edit"
										})
										podaci();
									} else {
										alert('Niste selekovali nista')
									}

								};

								podaci();

							} ]);
})(angular);