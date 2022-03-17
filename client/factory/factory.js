
  app.factory('Auth', function($localStorage) {

    return{
            authToken:function () {
                return $localStorage.accessToken;
            }
        };
    });
