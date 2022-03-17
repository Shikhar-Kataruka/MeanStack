
var app = angular.module('StudentRecord', ['ui.router','ngStorage','ngCookies','chart.js','angularUtils.directives.dirPagination','dx']);
function userDetailsObject(username,password,phoneNo,userType,userId) {
    this.username   = username;
    this.password   = password;
    this.phoneNo    = phoneNo;
    this.userType = userType;
    this.userId=userId;
}

function studentDetailsObject(fName,lName,phoneNo,region,state,city,std,school,subjectDetail,age,gender,boards) {
    this.fName   = fName;
    this.lName   = lName;
    this.phoneNo = phoneNo;
    this.address = { region: { name: region },state:{name:state},city:{name:city}}
    this.std     = std;
    this.school  = school;
    this.subject = subjectDetail; 
    this.age = age;
    this.gender = gender;
    this.boards = boards;
}

function teacherDetailsObject(fName,lName,phoneNo,age,gender) {
    this.fName   = fName;
    this.lName   = lName;
    this.phoneNo = phoneNo;
    this.age = age;
    this.gender = gender;
}

var isLoggedIn =false;
var record = new Array();//Global array 
app.config(function ($stateProvider, $urlRouterProvider) { //Angular Routing
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'view/home.html',
            controller: "homeCtrl"
        })
        .state('analytics', {
            url: '/analytics',
            templateUrl: 'view/analytics.html',
            controller: "analyticsController"
        })
        .state('insert', {
            url: '/insert',
            templateUrl: 'view/insert.html',
            controller: "insertController"
        })
        .state('insertTeacher', {
            url: '/insertTeacher',
            templateUrl: 'view/teacherInsert.html',
            controller: "teacherInsertController"
        })
        .state('search', {
            url: '/search',
            templateUrl: 'view/search.html',
            controller: "searchController"
        })
        .state('delete', {
            url: '/delete',
            templateUrl: 'view/delete.html',
            controller: "deleteController"
        })
        .state('student', {
            url: '/studentDetails',
            templateUrl: 'view/show.html',
            controller: "showController"
        })
        .state('studentHome', {
            url: '/studentHome',
            templateUrl: 'view/student/studentHome.html',   //Student home
            controller: "studentHomeCtrl"
        })
        .state('studentAnalytics', {
            url: '/studentAnalytics',                      //Student Analytics
            templateUrl: 'view/student/studentAnalytics.html',
            controller: "studentAnalyticsController"
        })
        .state('teacherHome', {
            url: '/teacherHome',                      //teacher Home
            templateUrl: 'view/teacher/teacherHome.html',
            controller: "teacherHomeController"
        })
        .state('teacherAnalytics', {
            url: '/teacherAnalytics',              //teacher Analytics
            templateUrl: 'view/teacher/teacherAnalytics.html',
            controller: "teacherAnalyticsController"
        })
        .state('register', {
            url: '/register',
            templateUrl: 'register.html',
            controller: "registerController"
        })
        .state('login', {
            url: '/login',
            templateUrl: 'login.html',
            controller: "loginController"
        })
        .state('logout', {
            url: '/logout',
            templateUrl: 'view/logout.html',
            controller: "logoutController"
        });
    $urlRouterProvider.otherwise('/login');
})

app.run(function run($rootScope, $location, $localStorage,$http) {
    $rootScope.$on('$locationChangeStart', function (event, next, current) {
        var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
        var restrictedPageSchool  = $.inArray($location.path(), ['/insertTeacher','/home','/insert','/delete','/search','/studentDetails','/analytics','/insertTeacher']) === -1;
        var restrictedPageTeacher = $.inArray($location.path(), ['/teacherHome','/teacherAnalytics']) === -1;
        var restrictedPageStudent = $.inArray($location.path(), ['/studentHome','/studentAnalytics']) === -1;
        var loggedIn = $localStorage.isLoggedIn;
        let school = 'school';
        let teacher = 'teacher';
        let student = 'student';
        if (restrictedPage && !loggedIn) {
            $location.path('/login');
        }
       /* else {
    
            if (!(school.localeCompare($localStorage.userType))) {
                
                if (restrictedPageSchool){
                    $location.path('/home');
                }
                else {
                    $location.path();
                }
            }
            else if (!(student.localeCompare($localStorage.userType))) {
                if (restrictedPageTeacher) {
                    $location.path('/studentHome');
                }
                else {
                    $location.path();
                }
            }
            else if (($localStorage.userType === "teacher")) {
                if (restrictedPageStudent) {
                    $location.path('/teacherHome');
                }
                else {
                    $location.path();
                }
            }
        } */
       
    });
})


   /*app.run(function run($rootScope, $location, $localStorage,$http) {
    $rootScope.$on('$locationChangeStart', function (event, next, current) {
        var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
        console.log(restrictedPage);
        var schoolPage = ['/home', '/insert', '/delete', '/search', '/studentDetails', '/analytics'];
        var studentPage = ['/studentHome', '/studentAnalytics'];
        var teacherPage = ['/teacherHome', '/teacherAnalytics'];
        var loggedIn = $localStorage.isLoggedIn;
        if (restrictedPage && !loggedIn) {
            $location.path('/login');
        }
       /* else if (loggedIn && ($localStorage.userType == "school")) {
            var allowPage = $.inArray($location.path(), schoolPage);
            if (allowPage) {
                $location.path();
            }
            else {
                $location.path('/home');
            }
        }
        else if (loggedIn && ($localStorage.userType == "student")) {
            var allowPage = $.inArray($location.path(), schoolPage) === 1;
            if (allowPage) {
                $location.path();
            }
            else {
                $location.path('/home');
            }
        }
        else if (loggedIn && ($localStorage.userType == "teacher")) {
            var allowPage = $.inArray($location.path(), schoolPage) === 1;
            if (allowPage) {
                $location.path();
            }
            else {
                $location.path('home');
            }
        }
      
    });
    });*/

app.controller('mainCtrl', function ($scope,getSvc,$localStorage) {
   
})

