(function(angular) {

	angular
			.module('webShop')
			.controller(
					'addRecenzijaController',
					[
							'$window',
							'$scope',
							'$state',
							'$rootScope',
							'recenzijaService',
							'$stateParams',
							'shopService',
							'productsService',
							function($window, $scope, $state, $rootScope,
									recenzijaService, $stateParams, shopService,
									productsService) {
								
								var podaci = function() {

									productsService.getAll().then(
											function(response) {
												$scope.proizvodii = response.data;

											});
									$scope.recenzija={};

									
								};

								podaci();

								
								

								$scope.addFlag = false;

								if ($stateParams.operacija === "add") {
									$scope.addFlag = true;
								}

								$scope.changedValue = function(selectedValue) {
									$scope.selectedValue = selectedValue
									$scope.recenzija.proizvod = selectedValue
								};
								

								$scope.addSlog = function() {
									recenzijaService.post($scope.recenzija);
									$state.go('allRecenzija');
								};
								
								
								
								
								  $scope.today = function() {
								    $scope.recenzija.datum = new Date();
								  };
								  $scope.today();

								  $scope.clear = function() {
								    $scope.recenzija.datum = null;
								  };

								  $scope.inlineOptions = {
								    customClass: getDayClass,
								    minDate: new Date(),
								    showWeeks: true
								  };

								  $scope.dateOptions = {
								    dateDisabled: disabled,
								    formatYear: 'yy',
								    maxDate: new Date(2020, 5, 22),
								    minDate: new Date(),
								    startingDay: 1
								  };

								  // Disable weekend selection
								  function disabled(data) {
								    var date = data.date,
								      mode = data.mode;
								    return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
								  }

								  $scope.toggleMin = function() {
								    $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
								    $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
								  };

								  $scope.toggleMin();

								  

								  $scope.open2 = function() {
								    $scope.popup2.opened = true;
								  };

								  $scope.setDate = function(year, month, day) {
								    $scope.recenzija.datum = new Date(year, month, day);
								  };

								  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
								  $scope.format = $scope.formats[0];
								  $scope.altInputFormats = ['M!/d!/yyyy'];

								 

								  $scope.popup2 = {
								    opened: false
								  };

								  var tomorrow = new Date();
								  tomorrow.setDate(tomorrow.getDate() + 1);
								  var afterTomorrow = new Date();
								  afterTomorrow.setDate(tomorrow.getDate() + 1);
								  $scope.events = [
								    {
								      date: tomorrow,
								      status: 'full'
								    },
								    {
								      date: afterTomorrow,
								      status: 'partially'
								    }
								  ];

								  function getDayClass(data) {
								    var date = data.date,
								      mode = data.mode;
								    if (mode === 'day') {
								      var dayToCheck = new Date(date).setHours(0,0,0,0);

								      for (var i = 0; i < $scope.events.length; i++) {
								        var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

								        if (dayToCheck === currentDay) {
								          return $scope.events[i].status;
								        }
								      }
								    }

								    return '';
								  }
								
								  
								  
								  $scope.recenzija.ocena = 7;
								  $scope.max = 10;
								  $scope.isReadonly = false;

								  $scope.hoveringOver = function(value) {
								    $scope.overStar = value;
								    $scope.percent = 100 * (value / $scope.max);
								  };

								  $scope.ratingStates = [
								    {stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
								    {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
								    {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
								    {stateOn: 'glyphicon-heart'},
								    {stateOff: 'glyphicon-off'}
								  ];
								

							} ]);

})(angular);
