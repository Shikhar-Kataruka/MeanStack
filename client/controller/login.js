app.controller('loginController',function ($scope,loginSvc,$window,$location,$localStorage,$rootScope,getSvc){
  $scope.eml_add = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;  
  $scope.addEntry = function (){
    var obj = {username:$scope.username,password:$scope.password};
    loginSvc.loginUser(obj)
      .then(function (response) {
      console.log(response.data);
      $localStorage.isLoggedIn=true;
      $localStorage.user=response.data.username;
      $localStorage.accessToken=response.data.accessToken;
      $localStorage.userId = response.data.userId;
      $localStorage.userType = response.data.userType;
      $rootScope.user = $localStorage.user;
      //put condition for redirection initially then we'll do the rest as per the page requirememnt
        let school = 'school';
        let teacher = 'teacher';
        let student = 'student';
      if(!(school.localeCompare($localStorage.userType)))
        $location.path('/home');

      else if (!(student.localeCompare($localStorage.userType))) {
        console.log("hi");
          $location.path('/studentHome');
      }
      else
      {
          $location.path('/teacherHome')
     }
     
      }).catch(err=>{
        console.log(err);
    })
  } 
})


