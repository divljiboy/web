(function (angular) {
       
    angular.module('webShop')
    	.controller('editDostavljacController', ['$window','$scope', '$state', '$rootScope', 'dostavljacService', '$stateParams', function ($window,$scope, $state, $rootScope, dostavljacService, $stateParams) {
		      
    		$scope.gridOptions={};
		      $scope.editFlag = false;
		      
		        if($stateParams.operacija === "edit"){
		            $scope.editFlag = true;
		            
		        }

		      
		      $scope.editSlog = function(){
		    	   dostavljacService.put($scope.dostavljac)
		    	   
		           $rootScope.dostavljac = null;
		    	   
		    	   $state.go('allDostavljac')
		      };
		      $scope.cancelSlog=function(){
		    	  $window.history.back();
		      };
   }]);


}
)(angular);

