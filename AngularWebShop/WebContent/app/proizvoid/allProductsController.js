(function (angular) {
       
    angular.module('webShop')
    	.controller('allProductsController', ['$scope', '$state', '$rootScope', 'productsService', '$stateParams','uiGridConstants', function ($scope, $state, $rootScope, productsService,uiGridConstants, $stateParams) {
    		$scope.gridOptions={};
    		productsService.getAll().then(function(response) {
				   $scope.proizvodi = response.data;
			       $scope.gridOptions.data = response.data;
				    	           
		    });
    		
    		
    		 $scope.selektovaniSlog = {};
    		 $scope.gridOptions.multiSelect = false;
             $scope.gridOptions.noUnselect = true;
             $scope.gridOptions.onRegisterApi = function (gridApi) {
                 $scope.gridApi = gridApi;
                 gridApi.selection.on.rowSelectionChanged($scope, function (row) {

                     $scope.selektovaniSlog.Naziv = row.entity.Naziv;   //----
                     $scope.selektovaniSlog.Id = row.entity.Id;          //----

                     


                 });

             };
		    	 
		    $scope.obrisiSlog = function () {
		    	   if ($scope.gridApi.selection.getSelectedRows().length > 0) {
	                    console.log("Ime drzave koja se brise : " + $scope.selektovaniSlog.Naziv);
	                    
	                    $scope.table = $scope.selektovaniSlog;
	                    $scope.animationsEnabled = true;

	                    
	                    var modalInstance = $uibModal.open({
	                        backdrop: false,
	                        templateUrl: 'AngularClient/brisanje/dialogPotvrdeBrisanja.html',
	                        controller: 'brisanjeSlogaController',
	                        scope: $scope
	                    });
	                }
	                else {
	                    alert("Niste selektovali drzavu !");
	                }
		    	
		       };
		       
		       $scope.dodajSlog = function () {
		    	 
		    	   $state.go('addProducts')
		   
		       };
		      
	
		       $scope.gridOptions = { enableRowSelection: true, enableRowHeaderSelection: false };
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
	            	
		      
    			}]);
			    
					    
		   
}		    
)(angular);