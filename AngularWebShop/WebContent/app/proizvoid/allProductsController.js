(function (angular) {
       
    angular.module('webShop')
    	.controller('allProductsController', ['$scope', '$state', '$rootScope', 'productsService', '$stateParams','uiGridConstants', function ($scope, $state, $rootScope, productsService,uiGridConstants, $stateParams) {
		       
    				$scope.selektovaniSlog={};
		       
		    	 
		    		var podaci=function(){ productsService.getAll().then(function(response) {
			    	        $scope.proizvodi = response.data;
			    	        $scope.gridOptions.data = response.data;
			    	    });
		    		};
		    	 
		    		podaci();
		    	 
		      
		      
	
		    		$scope.gridOptions = {enableRowSelection: true, enableRowHeaderSelection: false };
		    		   
		    		$scope.gridOptions.columnDefs = [
	            	                                 { name: 'sifra' }, //----
	            	                                 { name: 'naziv' },
	            	                                 { name: 'boja' },
	            	                                 { name: 'dimenzija' },
	            	                                 { name: 'tezina' },
	            	                                 { name: 'zemlja' },
	            	                                 { name: 'cena' },
	            	                                 { name: 'kolicina' },
	            	                                 { name: 'ocena' }
	            	                            ];
	            	
		    		$scope.gridOptions.multiSelect = false;
		    		$scope.gridOptions.noUnselect = true;
		    		$scope.gridOptions.onRegisterApi = function (gridApi) {
	                $scope.gridApi = gridApi;
	                gridApi.selection.on.rowSelectionChanged($scope, function (row) {
	                   
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
	           
	           
	            $scope.obrisiSlog = function () {
			    	
	            	if ($scope.gridApi.selection.getSelectedRows().length > 0) {

	                    console.log($scope.selektovaniSlog.sifra);
	                   
	                    $scope.animationsEnabled = true;

	                    //ovo je moje nesto
	                   /*
	                        $state.go('UkidanjeRacuna', { 'idRacun': $scope.selektovaniSlog.Id });
	                    else
	                        alert("Racun " + $scope.selektovaniSlog.BrojRacuna + " je vec ukinut");
	                   */
	                }
	                else {
	                    alert("Niste selektovali nista !");
	                }
			       };
			       
			       $scope.dodajSlog = function () {
			    	   $rootScope.product = null
			    	   $state.go('addProducts',{"operacija" : "add"});
			   
			       };
	           
	               $scope.izmeniSlog = function(){
	            	   console.log($scope.selektovaniSlog)
	            	 if(Object.keys($scope.selektovaniSlog).length ){
		            	   $rootScope.product = $scope.selektovaniSlog
		            	   
		            	   $state.go('editProducts',{"operacija" : "edit"})	
	            	 }else{
	            		 alert('Niste selekovali nista')
	            	 }   
		              
	               }
}]);		   
})(angular);