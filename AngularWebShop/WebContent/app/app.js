// napravimo modul
var webShop = angular.module('webShop', ['ui.router']);

webShop.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');
	
	$stateProvider
		.state('products',
			{
				//controller: 'productsController',// inace je podeseno ng-controller atributom
				url: '/',
				templateUrl: 'partials/products.html'
			})
		.state('shoppingCart',
		{
			//controller: 'shoppingCartController', // inace je podeseno ng-controller atributom
			url:'/sc',
			templateUrl: 'partials/shoppingCart.html'
		})
		
});

webShop.config(function($logProvider){
    $logProvider.debugEnabled(true);
});