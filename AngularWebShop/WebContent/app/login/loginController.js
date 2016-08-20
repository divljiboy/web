(function (angular) {
       
    angular.module('webShop')
    	.controller('loginController', ['$window','$scope', '$state', '$rootScope','$stateParams','AuthenticationService', function ($window,$scope, $state, $rootScope, $stateParams,AuthenticationService) {
    		
    	 $scope.login = function(){
    		 AuthenticationService.login($scope.username,$scope.password);
    	 }	
    	 
   }]);


}
)(angular);