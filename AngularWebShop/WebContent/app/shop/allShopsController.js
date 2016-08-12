angular.module('webShop')
    	.controller('allShopsController', ['$scope', '$state','$uibModal' ,'$rootScope', 'shopService', '$stateParams','uiGridConstants', function ($scope, $state,$uibModal, $rootScope, shopService, uiGridConstants, $stateParams ) {
		       
    		 $scope.selektovaniSlog={};
		       
		    	 
		    		var podaci=function(){ shopService.getAll().then(function(response) {
		    			
		    			console.log('allShops')
		    	        $scope.gridOptions.data = response.data;
		    	    });
		    		};
		    	 
		    		podaci();
		    	 
		      
		      
	          
		       $scope.gridOptions = {enableRowSelection: true, enableRowHeaderSelection: false };
		       		$scope.gridOptions.columnDefs = [
	            	                                 { name: 'sifra',visible: false }, //----
	            	                                 { name: 'naziv' },
	            	                                 { name: 'adresa' },
	            	                                 { name: 'telefon' },
	            	                                 { name: 'drzava'},
	            	                                 { name: 'email' },
	            	                                 { name: 'prodavac'},
	            	                                 { name: 'ocena'},
	            	                            ];
	            	
	            $scope.gridOptions.multiSelect = false;
	            $scope.gridOptions.noUnselect = true;
	            $scope.gridOptions.onRegisterApi = function (gridApi) {
	                $scope.gridApi = gridApi;
	                gridApi.selection.on.rowSelectionChanged($scope, function (row) {
	                   
	                    $scope.selektovaniSlog.sifra = row.entity.sifra;
	                    $scope.selektovaniSlog.naziv = row.entity.naziv;
	                    $scope.selektovaniSlog.adresa = row.entity.adresa;
	                    $scope.selektovaniSlog.telefon = row.entity.telefon;
	                    $scope.selektovaniSlog.drzava = row.entity.drzava;
	                    $scope.selektovaniSlog.email = row.entity.email;
	                   

	                });
	            };
	           
	           
	            
			       
			    $scope.dodajSlog = function () {
			    	   $rootScope.shop = null;
			    	   $state.go('addShop',{"operacija" : "add"});
			    };
			    
			    $scope.izmeniSlog = function(){
	            	   
	            	 if(Object.keys($scope.selektovaniSlog).length ){
		            	   $rootScope.shop = $scope.selektovaniSlog
		            	   
		            	   $state.go('editShop',{"operacija" : "edit"})	
	            	 }else{
	            		 alert('Niste selekovali nista')
	            	 }   
		              
	               }
			        
		              
	               }])