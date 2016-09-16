(function () {

    angular.module('webShop')
        .service('userService', ['$http', function ($http) {
            //metode servisa
            return {
                getAll: function () {
                    
                  return $http.get('/AngularWebShop/rest/user/getUsers')
                  
                },
                postUser: function (user,shop){
                	return $http.post('/AngularWebShop/rest/user/postUsers/'+user+'/'+shop)
                }
            }




        }]);

})();