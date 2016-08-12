(function (angular) {
       
    angular.module('webShop')
    	.controller('editProductController', ['$window','$scope', '$state', '$rootScope', 'productsService', '$stateParams', function ($window,$scope, $state, $rootScope, productsService, $stateParams) {
		      
		      
		      $scope.editFlag = false;
		      
		        if($stateParams.operacija === "edit"){
		            $scope.editFlag = true;
		            
		        }

		      
		      $scope.editProduct = function(){
		    	   console.log('from edit put')
		    	   productsService.put($scope.product).then(
		    			   function(reposnse){
		    				   alert("Uspesno editovano polje");
		    			   },function (response)
		    			   {
		    				   alert("Neuspesno editovano polje");
		    			   });
		    	   $rootScope.product = null;
		    	   $state.go('allProducts');
		       }
   }]);


}
)(angular);