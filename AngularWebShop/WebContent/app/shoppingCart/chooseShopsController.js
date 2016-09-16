(function (angular) {
       
    angular.module('webShop')
    	.controller('chooseShopsController', ['$window','$scope', '$state', '$rootScope', 'shopService','productsService','shoppingCartService', '$stateParams','$localStorage', function ($window,$scope, $state, $rootScope, shopService,productsService,shoppingCartService, $stateParams,$localStorage) {
    		$scope.trueSearch = false
    		var podaci=function(){ 
    			productsService.getAllAdmin().then(function(response) {	
    				console.log(response.data)
    			$scope.allProducts = response.data
    			
    	    	});
    			shopService.getAll().then(function(response) {	
        			
        			$scope.allShops = response.data
        			
        	    	});
    		};
    		$scope.trueSrch = function(){
    			 $scope.trueSearch =!$scope.trueSearch
    		}
    		$scope.addToShoppingCart = function(product,kolicina){
    			//console.log($localStorage.currentUser)
    			var name = $localStorage.currentUser
    		
    			shoppingCartService.post(product,kolicina,name).then(function(response) {	
        			
        		
    			});
    			
    		}
    		$scope.proizvod = function(proizvod){
    			$state.go('proizvodRecenzije', {
							"proizvod" : proizvod.sifra
				});
    		}
    		
    		podaci();
    		
    		$scope.applyOcena = function(product,ocena){
    			  
    		 productsService.postOcenu(product,ocena).then(function(response){
    				  podaci()
    			  })
    		}
    		  
    		  $scope.open2 = function() {
				    $scope.popup2.opened = true;
				  };

				 

				  $scope.popup2 = {
				    opened: false
				  };

    		  $scope.ocena = 3;
			  $scope.max = 5;
			  $scope.isReadonly = false;

			  $scope.hoveringOver = function(value) {
			    $scope.overStar = value;
			    $scope.percent = 100 * (value / $scope.max);
			  };
			  
			  $scope.dodajZelju = function(product){
				  
				  shoppingCartService.postZelju(product,$localStorage.currentUser.username)
			  }
			  
			  
			  $scope.ratingStates = [
			    {stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
			    {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
			    {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
			    {stateOn: 'glyphicon-heart'},
			    {stateOff: 'glyphicon-off'}
			  ];
    	 
   }]);


}
)(angular);