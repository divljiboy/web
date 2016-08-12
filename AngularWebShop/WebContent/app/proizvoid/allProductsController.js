(function (angular) {
       
    angular.module('webShop')
    	.controller('allProductsController', ['$scope', '$state','$uibModal' ,'$rootScope', 'productsService', '$stateParams','uiGridConstants','shopService', function ($scope, $state,$uibModal, $rootScope, productsService, $stateParams, uiGridConstants,shopService ) {
		       
    		 $scope.selektovaniSlog={};
		       
		    	 
		    		var podaci=function(){ productsService.getAll().then(function(response) {
		    	        $scope.proizvodi = response.data;
		    	        $scope.gridOptions.data = response.data;
		    	    });
		    		};
		    	 
podaci();
		    	 
		      
		      
	          $scope.service=productsService;
		       $scope.gridOptions = {enableRowSelection: true, enableRowHeaderSelection: false };
		    		   
	           $scope.gridOptions.columnDefs = [
	            	                                 { name: 'sifra', visible: false }, //----
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
	                    var modalInstance = $uibModal.open({
	                        backdrop: false,
	                        templateUrl: 'partials/brisanje.html',
	                        controller: 'brisanjeSlogaController',
	                        scope: $scope
	                    });
	                }
	                else {
	                    alert("Niste selektovali nista !");
	                }
			       };
			       
			       $scope.dodajSlog = function () {
			    	  
			    	 
			    	   $rootScope.product = null;
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