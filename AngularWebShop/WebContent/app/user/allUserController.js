(function (angular) {
       
    angular.module('webShop')
    	.controller('allUserController', ['$window','$scope','userService','shopService', '$state', '$rootScope', 'shopService', '$stateParams', function ($window,$scope, userService ,shopService,$state, $rootScope, shopService, $stateParams) {
    			var podaci = function(){
    				userService.getAll().then(function(response){
	    				console.log(response.data)
	    				$scope.allUsers = response.data
    				})
    				shopService.getAll().then(function(response){
    					$scope.allShops = response.data
    				})
    			}
    			podaci()
    			$scope.changedValue = function(userSelected){
    				console.log(userSelected)
					 $scope.user = userSelected
					
				}
    			$scope.changedValueShop = function(shopSelected){
    				console.log(shopSelected)
    				$scope.shop = shopSelected
    			}
    			
    			$scope.dodaj = function(){
    				userService.postUser($scope.user.username,$scope.shop.naziv).then(function(res){
    					podaci()
    				})
    			}
   }]);


}
)(angular);