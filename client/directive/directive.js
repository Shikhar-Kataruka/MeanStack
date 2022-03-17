app.directive('searchBoxValidation', function() {
  return {
    require: 'ngModel',
    link: function(scope, element, attr, mCtrl) {
      function searchBoxValidation(input){
        input = input.split(",");
        for (let i = 0; i < input.length; i++) {//validate if the rollNo is present 
            var arr=record.map(iterator => iterator.rollNo);
            var index = arr.indexOf(input[i]);
            if(index==-1){
                alert("Student is not present");
                return 0;
            }
        }
        return 1;
    }
      mCtrl.$parsers.push(searchBoxValidation);
    }
  };
});


app.directive('lengthValidation', function() {
  return {
    require: 'ngModel',
    link: function(scope, element, attr, mCtrl) {
      function lengthValidation(input){
        input=input.split(",");             //validation on length of input
        if(record.length < input.length){
            alert("Renter the value");
            return 0;
        }
        else if (record.length == input.length) {
            var result = confirm("Are you sure?");
            if (!result) {
                return 0;
            }
            return 1;
        }
        return 1;
    }
      mCtrl.$parsers.push(lengthValidation);
    }
  };
});

app.directive('isNumber', function() {
  return {
    require: 'ngModel',
    link: function(scope, element, attr, mCtrl) {
      function isNumber(input){
        var rollNo = input.replace(/,/g, '');
        if(isNaN(rollNo)){
            alert("please check your input, remove space or any other special character");
            return 0;
        }
        return 1;
    }
      mCtrl.$parsers.push(isNumber);
    }
  };
});

