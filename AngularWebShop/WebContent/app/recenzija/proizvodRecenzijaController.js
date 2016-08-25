(function(angular) {

	angular
			.module('webShop')
			.controller(
					'proizvodRecenzijaController',
					[
							'$window',
							'$scope',
							'$state',
							'$rootScope',
							'recenzijaService',
							'$stateParams',
							'shopService',
							'productsService',
							'recenzijaService',
							'$localStorage',
							function($window, $scope, $state, $rootScope,
									recenzijaService, $stateParams, shopService,
									productsService, recenzijaService,$localStorage) {
									$scope.currentUser = $localStorage.currentUser.username
								var podaci = function() {
									var proizvod = $stateParams.proizvod
									$scope.pokazi = false
									$scope.oceni = false
									recenzijaService.getRecenzija(proizvod).then(function(response){
										console.log(response.data)
										$scope.recenzijaProizvoda = response.data
									})
									$scope.recenzija={};

									
								};

								podaci();

								
								
								$scope.oceniKomentar = function(recen){
									$scope.recenzijaZaOcenjivanje = recen
									$scope.oceni =! $scope.oceni
								}
								

								
								

								$scope.addSlog = function() {
									productsService.getPro($stateParams.proizvod).then(function(response){
										$scope.recenzija.proizvod = response.data
										$scope.recenzija.korisnik = $localStorage.currentUser.username
										postProduct()
									
										
									})
								};
								$scope.show = function(){
									$scope.pokazi=!$scope.pokazi
									$scope.addFlag=true
									$scope.editFlag=false
								
									$scope.recenzija ={}
								}
								$scope.editSlog = function(){
									$scope.selectovanEdit = true
									productsService.getPro($stateParams.proizvod).then(function(response){
										$scope.recenzija.proizvod = response.data
										$scope.recenzija.korisnik = $localStorage.currentUser.username
										editSlogKonacno()
									
										
									})
								}
								var editSlogKonacno = function(){
									recenzijaService.put($scope.recenzija).then(function(response){
										podaci()
									})
								}
								
								$scope.edit = function(recen){
									$scope.pokazi =! $scope.pokazi
									$scope.recenzija = recen
									$scope.editFlag = true
									$scope.addFlag=false
								}
								
								$scope.obrisiSlog = function(sifra){
									recenzijaService.deleteSlog(sifra).then(function(response){
										podaci();
									})
								}
								
								$scope.applyOcena = function(){
									$scope.recenzijaZaOcenjivanje
									console.log($scope.komentar)
									recenzijaService.ocenivanjeKomentara($scope.recenzijaZaOcenjivanje,$scope.komentar.ocena).then(function(response){
										console.log(response.data)
										podaci();
									})
								}
								var postProduct = function(){
									recenzijaService.post($scope.recenzija).then(function(response){
										podaci()
									})
								}								
								
								  $scope.today = function() {
								    $scope.recenzija.datum = new Date();
								  };
								  $scope.today();

								  $scope.open2 = function() {
								    $scope.popup2.opened = true;
								  };

								 

								  $scope.popup2 = {
								    opened: false
								  };

								
								  
								  
								  $scope.recenzija.ocena = 7;
								  $scope.max = 10;
								  $scope.isReadonly = false;

								  $scope.hoveringOver = function(value) {
								    $scope.overStar = value;
								    $scope.percent = 100 * (value / $scope.max);
								  };
								  
								  $scope.cancelSlog = function(){
									  $scope.pokazi = false
								  }
								  
								  $scope.ratingStates = [
								    {stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
								    {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
								    {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
								    {stateOn: 'glyphicon-heart'},
								    {stateOff: 'glyphicon-off'}
								  ];
								
								

							} ]);

})(angular);
