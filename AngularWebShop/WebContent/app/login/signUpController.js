(function (angular) {
       
    angular.module('webShop')
    	.controller('signUpController', ['$window','$scope', '$state', '$rootScope','signUpService','$stateParams', function ($window,$scope, $state, $rootScope,signUpService, $stateParams) {
    		$scope.podaci = function(){
    			var object = {}
    			object.username = $scope.username;
    			object.email = $scope.email;
    			object.password = $scope.password
    			signUpService.post(object).then(function(response){
    				
    				if(response.data.status === 'ok')$state.go('login')
    				else{
    					$scope.text = 'isto ime'
    					$scope.myValue = true
    					
    				}
    			})
    			
    			}
    		
    		
   }]);


}
)(angular);