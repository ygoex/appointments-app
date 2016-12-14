var app = angular.module("myApp", ['ui.bootstrap']);

app.factory('myFactory', function() {

  var appointments = [{
    title: 'Flight home',
    date: '2016-12-17T16:36:10.212Z'
  }, {
    title: 'Dentist',
    date: '2016-12-14T17:36:10.212Z'
  }, {
    title: 'Hairdresser',
    date: '2016-12-15T17:36:10.212Z'
  }, {
    title: 'Parcel collection',
    date: '2016-12-16T16:36:10.212Z'
  }];

  return {
    getAll: function() {
      return appointments;
    }
  };
})

app.controller('myController', function($scope, myFactory) {
  //store previous apps in variable
  $scope.apps = myFactory.getAll();
  //get total number of appointments
  $scope.getTotal = function() {
    return $scope.apps.length;
  };
  //initial status of form: can't be edited because is hidden
  $scope.editStatus = false;
  //function to show & hide the form
  $scope.toggle = function() {
    $scope.editStatus = !$scope.editStatus;
  };
  //toggle function + clear newTitle input
  $scope.closeForm = function() {
    $scope.toggle();
    $scope.newTitle = '';
  };
  //toggle function + todays date
  $scope.openForm = function() {
    $scope.today();
    $scope.toggle();
  };
  //Function to generate today's date
  $scope.today = function() {
    $scope.newDate = new Date();
  };
  //calendar options
  $scope.options = {
    showWeeks: false
  };
  //initial state of calendar: close
  $scope.popup = {
    opened: false
  };
  //function to open calendar
  $scope.openCal = function() {
    $scope.popup.opened = true;
  };
  //format to display the date in the calendar input field
  $scope.format = 'EEEE, dd MMMM yyyy';
  //timer hours steps on click
  $scope.hstep = 1;
  //timer minutes steps on click
  $scope.mstep = 10;
  //function to add the new date to the initial array: if the input field with the title is not blank
  $scope.add = function() {
    if ($scope.newTitle) {
      $scope.apps.push({
        title: $scope.newTitle,
        date: $scope.newDate.toISOString()
      });
      //close the form after adding
      $scope.closeForm();
    }
  };
});

app.directive('myDirective', function() {
  return {
    //Replace true is used when we want to replace the directive tag with the content in the template
    replace: true,
    //this is used to create an element (custom tag) in the DOM with the name of our directive
    restrict: 'E',
    //= means two way binding scope to update the view after updating the model
    scope: {
      app: "="
    },
    controller: 'myController',
    templateUrl: 'component.html',
  };
});