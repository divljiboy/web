(function(angular) {

	angular
			.module('webShop')
			.controller(
					'allProductsController',
					[
							'$scope',
							'$state',
							'$rootScope',
							'productsService',
							'$stateParams',
							'uiGridConstants',
							function($scope, $state, $rootScope,
									productsService, $stateParams,
									uiGridConstants) {

								$scope.selektovaniSlog = {};

								var podaci = function() {
									productsService
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

								$scope.service = productsService;
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
									name : 'boja'
								}, {
									name : 'dimenzija'
								}, {
									name : 'tezina'
								}, {
									name : 'zemlja'
								}, {
									name : 'cena'
								}, {
									name : 'kolicina'
								}, {
									name : 'ocena'
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
														$scope.selektovaniSlog.boja = row.entity.boja;
														$scope.selektovaniSlog.dimenzija = row.entity.dimenzija;
														$scope.selektovaniSlog.tezina = row.entity.tezina;
														$scope.selektovaniSlog.zemlja = row.entity.zemlja;
														$scope.selektovaniSlog.cena = row.entity.cena;
														$scope.selektovaniSlog.kolicina = row.entity.kolicina;
														$scope.selektovaniSlog.ocena = row.entity.ocena;

													});
								};

								$scope.obrisiSlog = function() {
									if ($scope.gridApi.selection
											.getSelectedRows().length > 0) {

										$scope.service
												.deleteSlog(
														$scope.selektovaniSlog.sifra,
														function(res) {
															alert("Uspesno obrisan sloga iz tabele ");

															$state
																	.go('allProducts');
															podaci();

														},
														function(res) {
															alert("Neuspesno brisanje iz tabele ");

															$state
																	.go('allProducts');
															podaci();
														});

									} else {
										alert("Niste selektovali nista !");
									}
								};

								$scope.dodajSlog = function() {
									$rootScope.product = null;
									$state.go('addProducts', {
										"operacija" : "add"
									});
									podaci();

								};
								$scope.izmeniSlog = function() {
									console.log($scope.selektovaniSlog)
									if (Object.keys($scope.selektovaniSlog).length) {
										$rootScope.product = $scope.selektovaniSlog

										$state.go('editProducts', {
											"operacija" : "edit"
										})
										podaci();
									} else {
										alert('Niste selekovali nista')
									}

								}
								podaci();
								
							} ]);
})(angular);