(function (angular) {
       
    angular.module('webShop')
    	.controller('allProductsController', ['$scope', '$state', '$rootScope', 'productsService', '$stateParams', function ($scope, $state, $rootScope, productsService, $stateParams) {
		       console.log('from allProducts');
		     
		    	 var init = function(){
		    		 productsService.getAll().then(function(response) {
		    	        $scope.proizvodi = response.data;
		    	    });
		    	   console.log($scope.proizvodi)
		    	 }
		       $scope.obrisiSlog = function () {
		    	
		       };
		       
		       $scope.dodajSlog = function () {
		    	 
		    	   $state.go('addProducts')
		   
		       };
		       init();
	
		       
		      
   }]);


}
)(angular);