app.controller('testController',function ($scope,getRegion,getState,getCity,$localStorage){
    $scope.getRegion = function () {
        console.log("Hi");
    getRegion.showRegion().then(function(response){
      $scope.region = response;
})
  }
  $scope.getState= function(){
    getState.showState().then(function(response){
      $scope.state = response;
})
  }
  $scope.getCity = function () {
    getCity.showCity().then(function (response) {
      $scope.region = response;
    })
}
})



