app.controller('homeCtrl', function ($scope,$window,schoolSvc,$localStorage) {
  $scope.getData= function(){
    schoolSvc.getSchool($localStorage.userId).then(function (response) {
      $scope.userData = response.data;
      $localStorage.name = response.data.name;
      $localStorage.boards = response.data.boards;
      console.log(response.data);
})
}
  })

