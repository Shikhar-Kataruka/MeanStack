app.controller('analyticsController',function ($window,$scope,init1Svc,init2Svc,regionSvc,stateSvcAnal,ananlytic1Svc,ananlytic2Svc,citySvcAnal,genAnalSvc,ageAnalSvc,getSvc,$localStorage) {
    $scope.subject = ["English", "Maths", "Science", "SocialScience", "Hindi"];
  

    regionSvc.getRegion().then(response => {
        $scope.Region=response.data;
    })
    stateSvcAnal.getState().then(response => {
        $scope.State = response.data;
        console.log(response.data);
    })
    citySvcAnal.getCity().then(response => {
        $scope.City=response.data;
    })
    $scope.getnextparam1 = function (obj) {
        if (obj =="Region")
            $scope.arr1 = $scope.Region;
        else if (obj == "State") {
            $scope.arr1 = $scope.State;

        }
        else {
            $scope.arr1 = $scope.City;
        }
    
    }
    $scope.getnextparam2 = function (obj) {
        if (obj =="Region")
            $scope.arr2 = $scope.Region;
        else if (obj == "State") {
            $scope.arr2 = $scope.State;

        }
        else {
            $scope.arr2 = $scope.City;
        }
    
    }

        init1Svc.getData($localStorage.name).then(response => {
            $scope.param1 = response.data;
            console.log($scope.param1)
        })
    
        init2Svc.getData($localStorage.name).then(response => {
            $scope.param2 = response.data;
            console.log($scope.param2)

        })

    $scope.getData= function(){
}
    $scope.analytics1 = function (type, value) {
        ananlytic1Svc.getData(type,value,$scope.param1,$localStorage.boards).then(function(response)
        {
            $scope.labelss = ['Below', 'Equal', 'Above'];
             $scope.series = ['Series A'];
             $scope.datas = [[response.data[0].quantity, response.data[1].quantity, response.data[2].quantity]];
    }).catch(err => {
        $window.localStorage.clear();
        alert("Session Over ,sign In again");
        location.reload();
    })
    }
    $scope.analytics2 = function (type, value, subject) {
        var x=$scope.param2.filter(item => {
            if (item._id.subject == subject) {
                console.log(subject);
                console.log(item.average);
                return item.average;
            }
                
        })
        console.log(x);
        ananlytic2Svc.getData(type, value, subject,x[0].average,$localStorage.boards).then(function(response)
        {
            $scope.labels = ['Below', 'Equal', 'Above'];
            $scope.seriess = ['Series A'];
            $scope.data = [[response.data[0].quantity, response.data[1].quantity, response.data[2].quantity]];
    }).catch(err => {
        $window.localStorage.clear();
        alert("Session Over ,sign In again");
        location.reload();
    })
    }
    $scope.analytics3 = function(){
        ageAnalSvc.ageAnalytics($localStorage.name).then(function (response) {
            $scope.labelAge = ["7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18"];
            $scope.seriesss = ['Series A'];
            $scope.dataAge = [[response.data[0].seven,response.data[0].eight,response.data[0].nine,response.data[0].ten,response.data[0].eleven,response.data[0].twelve,response.data[0].thirteen,response.data[0].fourteen,response.data[0].fifteen,response.data[0].sixteen,response.data[0].seventeen,response.data[0].eighteen]];
        }).catch(err => {
            $window.localStorage.clear();
            alert("Session Over ,sign In again");
            location.reload();
        })
            
    }

    $scope.analytics4 = function(){
        genAnalSvc.genderAnalytics($localStorage.name).then(function(response)
        {
            
            $scope.labelGender = ["Male", "Female", "Others"];
            $scope.seriessss = ['Series A'];
            $scope.dataGender = [[response.data[0].male,response.data[0].female,response.data[0].others]];
    }).catch(err => {
        $window.localStorage.clear();
        alert("Session Over ,sign In again");
        location.reload();
    })
    
    }
 


/*var dataSource = [{
    day: "Monday",
    oranges: 3
}, {
    day: "Tuesday",
    oranges: 2
}, {
    day: "Wednesday",
    oranges: 3
}, {
    day: "Thursday",
    oranges: 4
}, {
    day: "Friday",
    oranges: 6
}, {
    day: "Saturday",
    oranges: 11
}, {
    day: "Sunday",
    oranges: 4
}];
$scope.chartOptions = {
    dataSource: dataSource,
    series: {
        argumentField: "day",
        valueField: "oranges",
        name: "My oranges",
        type: "bar",
        color: '#ffaa66'
    }
};
 */  
})

