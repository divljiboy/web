(function (angular) {
       
    angular.module('webShop')
    	.controller('addDostavljacController', ['$window','$scope', '$state', '$rootScope', 'dostavljacService', '$stateParams', function ($window,$scope, $state, $rootScope, dostavljacService, $stateParams) {
		       console.log('from addDostavljac')
		       
		      
		       
		       $scope.addFlag = false;
			     
		       if($stateParams.operacija === "add"){
		            $scope.addFlag = true;
		            
		        }
		     
		       $scope.addSlog = function(){
		    	  
		    	   dostavljacService.post($scope.dostavljac);
		    	
		
		    	   $state.go('allDostavljac');
		       }
		       $scope.cancelSlog=function(){
			    	  $window.history.back();
			   };
   }]);


}
)(angular);