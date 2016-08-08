(function () {

    angular.module('webShop')
        .service('productsService', ['$http', function ($http) {
            //metode servisa
            return {
                getAll: function (onSuccess, onError) {
                    
                  return $http.get('/AngularWebShop/rest/product/getJustProducts');
                },
                put: function (product, onSucces, onError)
                    {
                
                },
                post: function (product, onSuccess, onError) {
                    	$http.post('/AngularWebShop/rest/product/add', product);
                    	
                    	
                }
            }




        }]);

})();