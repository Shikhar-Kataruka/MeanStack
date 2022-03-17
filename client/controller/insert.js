app.controller('insertController',function ($scope,insertSvc,schoolSvc,regionSvc,stateSvc,citySvc,$localStorage){


    $scope.subject        = ["English","Maths","Science","SocialScience","Hindi"];
    $scope.schoolArr      = ["Kv","Pv","Dav","Hes","Gd"];
    $scope.classArr       = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    $scope.teacher        =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

    $scope.subjectDetails = [];
    $scope.stdet = $localStorage.record;
    
    $scope.getData = function () {
        schoolSvc.getSchool($localStorage.userId).then(function (response) {
            $scope.userData = response.data;
            console.log(response.data);
        })
    }
    regionSvc.getRegion().then(response => {
        $scope.region=response.data;
    })

    $scope.getStates = function () {
        stateSvc.getState($scope.regions._id).then(response => {
            $scope.state = response.data;
            $scope.city = [];
            
        })
    }

    $scope.getCities = function () {
        citySvc.getCity($scope.states._id).then(response => {
            $scope.city = response.data;
            
        })
    }

    $scope.addEntry = function (){
       var obj = new studentDetailsObject($scope.fName, $scope.lName,$scope.phoneNo,$scope.regions.name,$scope.states.name,$scope.cities.name,$scope.class,$scope.school,$scope.subjectDetails,$scope.age,$scope.gender,$scope.boards);
       insertSvc.insertStudent(obj).then(function (response) {
          document.getElementById("insertForm").reset();
      });  
    }
})



