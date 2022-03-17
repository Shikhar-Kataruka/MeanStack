app.controller('registerController',function ($rootScope,$scope,registerSvc, $localStorage,$location,getSvc){
  $scope.ph_numbr =  /^\(?([1-9]{1})\)?([0-9]{9})$/;
  $scope.eml_add = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  $scope.user = {  
                  password: "",  
                  confirmPassword: ""  
                };  
  $scope.addEntry = function (){
    var obj = new userDetailsObject($scope.username,$scope.password,$scope.phoneNo,$scope.userType,$scope.userId)  
    try{
    registerSvc.registerUser(obj).then(function (response) {
      alert(response.data.message);
      if (response.data.message == "Try Again")
        $location.path('/register');
      else {
        $location.path('/login');
      }
    }); 
  }catch(err){
    alert(err);
  } 
    document.getElementById("registerForm").reset();
  } 

})
app.directive("compareTo", function ()  
{  
    
  return {  
        require: "ngModel",  
        scope:  
        {  
            confirmPassword: "=compareTo"  
        },  
        link: function (scope, element, attributes, modelVal)  
        {  
            modelVal.$validators.compareTo = function (val)  
            {  
                return val == scope.confirmPassword;  
            };  
            scope.$watch("confirmPassword", function ()  
            {  
                modelVal.$validate();  
            }); 
            modelVal.$parsers.push(compareTo); 
        }  
        
    };  
});  