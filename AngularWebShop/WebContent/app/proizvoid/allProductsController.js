(function (angular) {
       
    angular.module('webShop')
    	.controller('allProductsController', ['$scope', '$state', '$rootScope', 'productsService', '$stateParams','uiGridConstants', function ($scope, $state, $rootScope, productsService,uiGridConstants, $stateParams) {
		      
    		productsService.getAll().then(function(response) {
				   $scope.proizvodi = response.data;
			       $scope.gridOptions.data = response.data;
				    	           
		    });
    		
    		$scope.gridOptions={};
		    $scope.gridOptions.multiSelect = false;
		    $scope.gridOptions.modifierKeysToMultiSelect = false;
		    $scope.gridOptions.noUnselect = true;
		    		    
		    $scope.gridOptions.onRegisterApi = function( gridApi ) {
		    			  $scope.gridApi = gridApi;
		    };
		    			   
		    $scope.toggleRowSelection = function() {
		    	$scope.gridApi.selection.clearSelectedRows();
		        $scope.gridOptions.enableRowSelection = !$scope.gridOptions.enableRowSelection;
		        $scope.gridApi.core.notifyDataChange( uiGridConstants.dataChange.OPTIONS);
		    	};
		    	        
		    	 
		    
		    	 
		       $scope.obrisiSlog = function () {
		    	
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