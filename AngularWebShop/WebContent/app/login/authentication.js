
(function () {
    angular
        .module('authentication',['ngStorage', 'ui.router', 'angular-jwt'])
        .factory('AuthenticationService', Service);

    function Service($http, $localStorage, $log, $state, jwtHelper) {
        var service = {};

        service.login = login;
        service.logout = logout;
        service.getCurrentUser = getCurrentUser;

        return service;

        function login(username, password) {
        	console.log(username,password)
            $http.post('/AngularWebShop/rest/user/authenticate', { username: username, password: password})
                .success(function (response) {
                    // ukoliko postoji token, prijava je uspecna
                	
                    if (response.status === "ok") {
                        // korisnicko ime, token i rola (ako postoji) cuvaju se u lokalnom skladištu
                        var currentUser = { username: username,role:response.role }                       
                       // if(tokenPayload.role){
                           // currentUser.role = tokenPayload.role;
                      //  }
                        // prijavljenog korisnika cuva u lokalnom skladistu
                        $localStorage.currentUser = currentUser;
                        // jwt token dodajemo u to auth header za sve $http zahteve
                       $http.defaults.headers.common.Authorization = response;
                        // callback za uspesan login
                      
                        $state.go('home');
                    } else {
                        // callback za neuspesan login
                    	$state.go('login')
                    }
                });
        }

        function logout() {
            // uklonimo korisnika iz lokalnog skladišta
            delete $localStorage.currentUser;
            $http.defaults.headers.common.Authorization = '';
            $state.go('login');
        }

        function getCurrentUser() {
            return $localStorage.currentUser;
        }
    }
})();