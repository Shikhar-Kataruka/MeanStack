app.controller('showController',function ($scope,getSvc,$localStorage){
    //$scope.stdet=$localStorage.record;
    $scope.display = function (){
            return 0;            
    }
    $scope.showStudent=function(detail){
        let details=$scope.stdet.find(object => object._id == detail);
        details.subject.sort((firstItem, secondItem) => secondItem.marks - firstItem.marks);
        $scope.subDetails = details.subject.slice(0, 3);
        
    }
    $scope.getData= function(){
        getSvc.showStudent($localStorage.name).then(function (response) {
            console.log(response.data);
            $scope.stdet = response.data;
        })
    
}
})

