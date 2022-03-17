app.controller('navController',function ($rootScope,$window,$localStorage,$scope){
    $rootScope.user=$localStorage.user;
    $scope.userSignIn = function (){
        let status=$localStorage.isLoggedIn;
        console.log(status);
        if(( typeof status === 'undefined'))
        {
            return 0;            
        }
        else{
           return true;
       }
    }
    $scope.logout = function (){
        $window.localStorage.clear();
        location.reload();
    } 
  
   
})