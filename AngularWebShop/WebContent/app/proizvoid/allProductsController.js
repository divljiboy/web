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
							'shopService',
							function($scope, $state, $rootScope,
									productsService, $stateParams,
									uiGridConstants, shopService) {

								$scope.selektovaniSlog = {};

								var podaci = function() {
									console.log("Pozvao funckioju init()");
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
									name : 'sifra',
									visible : false
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
								}, {
									name : 'prodavnica.naziv'
								}, {
									name : 'kategorija.naziv'
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
														$scope.selektovaniSlog.boja = row.entity.boja;
														$scope.selektovaniSlog.dimenzija = row.entity.dimenzija;
														$scope.selektovaniSlog.tezina = row.entity.tezina;
														$scope.selektovaniSlog.zemlja = row.entity.zemlja;
														$scope.selektovaniSlog.cena = row.entity.cena;
														$scope.selektovaniSlog.kolicina = row.entity.kolicina;
														$scope.selektovaniSlog.ocena = row.entity.ocena;
														$scope.selektovaniSlog.prodavnica = row.entity.prodavnica;
														$scope.selektovaniSlog.kategorija = row.entity.kategorija;

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
									$state.go('addProducts', {
										"operacija" : "add"
									});
									podaci();

								};
								$scope.izmeniSlog = function() {
									if (Object.keys($scope.selektovaniSlog).length) {
										$rootScope.product = $scope.selektovaniSlog

										$state.go('editProducts', {
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