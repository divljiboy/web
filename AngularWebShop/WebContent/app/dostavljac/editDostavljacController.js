(function (angular) {
       
    angular.module('webShop')
    	.controller('editDostavljacController', ['$window','$scope', '$state', '$rootScope', 'dostavljacService', '$stateParams', function ($window,$scope, $state, $rootScope, dostavljacService, $stateParams) {
		      
		      
		      $scope.editFlag = false;
		      
		        if($stateParams.operacija === "edit"){
		            $scope.editFlag = true;
		            
		        }

		      
		      $scope.editSlog = function(){
		    	   console.log('from edit put')
		    	   dostavljacService.put($scope.dostavljac)
		    	   $rootScope.product = null;
		    	   dostavljacService
					.getAll()
					.then(
							function(response) {
							console.log("uspelo getovanje");
							console.log(response.data);
							$scope.gridOptions.data=response.data;
							$scope.podaci=response.data;
							
							},
							function(response){
								
								console.log("nije uspelo getovanje");
							});
		
		    	   $state.go('allDostavljac')
		      };
		      $scope.cancelSlog=function(){
		    	  $window.history.back();
		      };
   }]);


}
)(angular);

