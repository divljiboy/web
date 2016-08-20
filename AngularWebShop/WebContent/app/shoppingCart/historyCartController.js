(function(angular) {

	angular.module('webShop').controller(
			'historyCartController',
			[
					'$window',
					'$scope',
					'$state',
					'$rootScope',
					'shopService',
					'productsService',
					'shoppingCartService',
					'dostavljacService',
					'$stateParams',
					'AuthenticationService',
					function($window, $scope, $state, $rootScope, shopService,
							productsService,shoppingCartService,dostavljacService, $stateParams,AuthenticationService) {
						
						var podaci = function(){
							$scope.myValue = false
							console.log(AuthenticationService.getCurrentUser())
						    shoppingCartService.getAllHistory().then(function(response){
						    console.log(response.data)
						    $scope.istorija = []
						    	_.forEach( response.data , function(value, key) {
						    		_.forEach( value.istorijaKup , function(value3, key) {
						    			 var object = {}
						    			 object.istorijaKup=[]
						    			 object.sifra = value.sifra
						    			 object.istorijaKup = value3;
						    			 object.dateTime  = moment(value.dateTime).format("HH:mm:ss")
						    			 
						    			 $scope.istorija.push(object)
						    		
						    		});
						    	});
							})
						}
						var podatak
						$scope.zalbaKupovinu = function(x){
							$scope.text = ""
							podatak = x
							$scope.myValue = true
						}
						
						$scope.zalba = function(x){
							
							$scope.myValue = false
							var object = {}
							object.sifra =""
							object.sifraKupovine = podatak.sifra
							object.sifraProizvoda = podatak.istorijaKup.sifra
							object.naziv = podatak.istorijaKup.proizvod.naziv
							object.text =  $scope.text
							console.log(object)
							shoppingCartService.postZalba(object)
						}
						
						podaci()
					} ]);

})(angular);