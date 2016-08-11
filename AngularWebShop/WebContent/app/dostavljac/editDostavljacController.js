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
		    	   $state.go('allDostavljac')
		      };
		      $scope.cancelSlog=function(){
		    	  $window.history.back();
		      };
   }]);


}
)(angular);

