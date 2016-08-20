(function () {

    angular.module('webShop')
        .service('signUpService', ['$http', function ($http) {
            //metode servisa
            return {
              
                post: function (product) {
                    return	$http.post('/AngularWebShop/rest/user/addUser', product)
                    	
                },
                
            }




        }]);

})();