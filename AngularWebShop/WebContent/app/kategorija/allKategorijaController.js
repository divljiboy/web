(function(angular) {

	angular
			.module('webShop')
			.controller(
					'allKategorijeController',
					[
							'$scope',
							'$state',
							'$rootScope',
							'kategorijaService',
							'$stateParams',
							'uiGridConstants',
							function($scope, $state, $rootScope,
									kategorijaService, $stateParams,
									uiGridConstants) {

								$scope.selektovaniSlog = {};

								var podaci = function() {
									kategorijaService
											.getAll()
											.then(
													function(response) {
														
														$scope.gridOptions.data = response.data;
														$scope.podaci = response.data;

													},
													function(response) {

														
													});

								};

								

								$scope.service = kategorijaService;
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
									name : 'opis'
								}, {
									name : 'nadkategorija.naziv',displayName: "Nadkategorija"
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
														$scope.selektovaniSlog.nadkategorija = row.entity.nadkategorija;
														

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

									$rootScope.kategorija = null;
									$state.go('addKategorija', {
										"operacija" : "add"
									});

								};
								$scope.izmeniSlog = function() {
									if (Object.keys($scope.selektovaniSlog).length) {
										$rootScope.kategorija = $scope.selektovaniSlog

										$state.go('editKategorija', {
											"operacija" : "edit"
										})
									} else {
										alert('Niste selekovali nista')
									}

								};
								
								podaci();

							} ]);
})(angular);