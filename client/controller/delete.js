app.controller('deleteController',function ($location,$scope,deleteSvc,getSvc,$localStorage){
    $scope.deleteRoll     = ""; 
    let isNumber= function(input){ //validate if the present input is in numbers
        var rollNo = input.replace(/,/g, '');
        if(isNaN(rollNo)){
            alert("please check your input, remove space or any other special character");
            return 0;
        }
        return 1;
    }
    let searchBoxValidation=function(input){
        input = input.split(",");
        for (let i = 0; i < input.length; i++) {//validate if the rollNo is present 
            var arr=$scope.stdet.map(iterator => iterator.rollNo);
            var index = arr.indexOf(input[i]);
            if(index==-1){
                alert("Student is not present");
                return 0;
            }
        }
        return 1;
    }
    let lengthValidation=function(input){
        input=input.split(",");             //validation on length of input
        if($scope.stdet.length < input.length){
            alert("Renter the value");
            return 0;
        }
        else if ($scope.stdet.length == input.length) {
            var result = confirm("Are you sure?");
            if (!result) {
                return 0;
            }
            return 1;
        }
        return 1;
    }
    $scope.delete = function ()
     {
        if(isNumber($scope.deleteRoll) && searchBoxValidation($scope.deleteRoll) && lengthValidation($scope.deleteRoll)){
            deleteSvc.deleteStudent($scope.deleteRoll).then(function (response) {
                $scope.deleteRoll=$scope.deleteRoll.split(",");
                for (let i = 0; i < $scope.deleteRoll.length; i++) {
                    var arr=$scope.stdet.map(e => e.rollNo);
                    var index = arr.indexOf($scope.deleteRoll[i]);
                    if(index>-1){
                        $scope.stdet.splice(index, 1);  

                    }
                    document.getElementById("deleteForm").reset();
                }
            });
          }
        }
        $scope.getData= function(){
            getSvc.showStudent($localStorage.name).then(function (response) {
                if (response.data.message == "Not found") {
                    alert("No Data Found ,Insert one!");
                    $location.path('/insert');
                }
                else {
                    $scope.stdet = response.data;
                }
       })
    }
      
            
    })


/*
app.component('delete', {
    templateUrl : 'delete/delete.html',
    controller : deleteController,
    controllerAs :'vm'
})
*/