app.controller('searchController',function ($location,$scope,searchSvc,getSvc,$localStorage){
    $scope.searchRoll     = "";
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

    $scope.searchdata = function(){
        if(isNumber($scope.searchRoll) && searchBoxValidation($scope.searchRoll) && lengthValidation($scope.searchRoll)){
        searchSvc.searchStudent($scope.searchRoll).then(function(response)
        {
            console.log(response.data);
            $scope.searched = response.data;
        })
        document.getElementById("searchForm").reset();
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

