//API call for registration 
app.service('registerSvc',function($http)
{
    this.registerUser=function(obj)
    {
        return $http.post("http://localhost:8000/register",obj); 
    }
})
//API call for Login
app.service('loginSvc',function($http){
    this.loginUser=function(obj)
    {
        
        return $http.post("http://localhost:8000/login",obj); 
    }
})
//API call for searching a student
app.service('searchSvc',function($http,Auth)
{
    this.searchStudent=function(searchData)
    {    
        let token=Auth.authToken();
        const headers = { 'content-type': 'application/json', 'Authorization':token}    
        return $http.get("http://localhost:8000/searchstudent/?searchdata="+searchData,{'headers':headers}); 
    }
})

//API call for inserting a student entry
app.service('insertSvc',function($http,Auth)
{
    this.insertStudent=function(obj)
    {
        let token=Auth.authToken();
        const headers = { 'content-type': 'application/json', 'Authorization':token}   
        return $http.post("http://localhost:8000/studentDetails",obj, {'headers':headers}); 
    }
})

//API call for deleting a student
app.service('deleteSvc',function($http,$q,Auth)
{ 
    this.deleteStudent=function(deleteParam)
    {
        let token=Auth.authToken();
        const headers = { 'content-type': 'application/json', 'Authorization':token}   
        return $http.delete("http://localhost:8000/deletestudent/?deletedata="+deleteParam, {'headers':headers}); 
    }
})


//API call for analytics for school ranking
app.service('ananlytic1Svc',function($http,Auth)
{
    this.getData=function(type,value,average,boards)
    {
        let token=Auth.authToken();
        const headers = { 'content-type': 'application/json', 'Authorization':token}   
        return $http.get("http://localhost:8000/rankSchool"+type+"/?value="+value+"&average="+average+"&boards="+boards, {'headers':headers});
    }
})

//analysis for school analytics on the basis of subject
app.service('ananlytic2Svc',function($http,Auth)
{
    this.getData=function(type,value,subject,average,boards)
    {
        let token=Auth.authToken();
       const headers = { 'content-type': 'application/json', 'Authorization':token}   
        return $http.get("http://localhost:8000/rankSchoolSubject"+type+"/?value="+value+"&subject="+subject+"&average="+average+"&boards="+boards, {'headers':headers});
    }
})

//API call for gender based categorisation
app.service('genAnalSvc',function($http,Auth)
{
    this.genderAnalytics=function(school)
    {
        let token=Auth.authToken();
        const headers = { 'content-type': 'application/json', 'Authorization':token}   
        return $http.get("http://localhost:8000/analyticsSchoolGender/?searchdata="+school, {'headers':headers});
    }
})

//API call for age analytics
app.service('ageAnalSvc',function($http,Auth)
{
    this.ageAnalytics=function(school)
    {
        let token=Auth.authToken();
        const headers = { 'content-type': 'application/json', 'Authorization':token}   
        return $http.get("http://localhost:8000/analyticsSchoolAge/?searchdata=" + school, { 'headers': headers });
        
    }
})

//API call for fetching school average marks
app.service('init1Svc',function($http,Auth)
{
    this.getData=function(school)
    {
        console.log(school);
        let token=Auth.authToken();
        const headers = { 'content-type': 'application/json', 'Authorization':token}   
        return $http.get("http://localhost:8000/schoolAverage/?searchdata="+school, {'headers':headers});
    }
})

//API call for fetching school subject average marks
app.service('init2Svc',function($http,Auth)
{
    this.getData=function(school)
    {
        console.log(school);
        let token=Auth.authToken();
        const headers = { 'content-type': 'application/json', 'Authorization':token}   
        return $http.get("http://localhost:8000/schoolSubjectAverage/?searchdata="+school, {'headers':headers});
    }
})

//API call for fetching students in a particular school
app.service('getSvc',function($http,Auth)
{
    this.showStudent=function(school)
    {
        let token = Auth.authToken();
        console.log(school+ "18");
        const headers = { 'content-type': 'application/json', 'Authorization':token}   
        return $http.get("http://localhost:8000/studentDetail/?searchData="+school,{'headers':headers});
    }
})
//Api call for fetching regions for cascading
app.service('regionSvc',function($http,Auth)
{
    this.getRegion=function()
    {
        let token=Auth.authToken();
        const headers = { 'content-type': 'application/json', 'Authorization':token}   
        return $http.get("http://localhost:8000/getRegion", {'headers':headers});
       // console.log(x.$$state);
       // return x.data;
    }
})
//Api call for fetching states for cascading

app.service('stateSvc',function($http,Auth)
{
    this.getState=function(obj)
    {
        let token=Auth.authToken();
        const headers = { 'content-type': 'application/json', 'Authorization':token}   
        return $http.get("http://localhost:8000/getStates/?regionId="+obj, {'headers':headers});
    }
})

//Api call for fetching city for cascading
app.service('citySvc',function($http,Auth)
{
    this.getCity=function(obj)
    {
        let token=Auth.authToken();
        const headers = { 'content-type': 'application/json', 'Authorization':token}   
        return $http.get("http://localhost:8000/getCities/?stateId="+obj, {'headers':headers});
    }
})

//Api call for fetching school details for home controller
app.service('schoolSvc',function($http,Auth)
{
    this.getSchool=function(obj)
    {
        let token=Auth.authToken();
        const headers = { 'content-type': 'application/json', 'Authorization':token}   
        return $http.get("http://localhost:8000/getSchool/?schoolId="+obj,{'headers':headers});
    }
})

//API call for fetching states for school analytics 
app.service('stateSvcAnal',function($http,Auth)
{
    this.getState=function(obj)
    {
        let token=Auth.authToken();
        const headers = { 'content-type': 'application/json', 'Authorization':token}   
        return $http.get("http://localhost:8000/getStateAnal",{'headers':headers});
    }
})
//API call for fetching cities for school analytics 
app.service('citySvcAnal',function($http,Auth)
{
    this.getCity=function(obj)
    {
        let token=Auth.authToken();
        const headers = { 'content-type': 'application/json', 'Authorization':token}   
        return $http.get("http://localhost:8000/getCityAnal",{'headers':headers});
    }
})
app.service('schoolSvc',function($http,Auth)
{
    this.getSchool=function(obj)
    {
        let token=Auth.authToken();
        const headers = { 'content-type': 'application/json', 'Authorization':token}   
        return $http.get("http://localhost:8000/getSchool/?schoolId="+obj,{'headers':headers});
    }
})

































   