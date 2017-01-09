var myApp=angular.module( 'myApp', [] );

myApp.controller( 'whereMyPeeps', [ '$scope', '$http', function( $scope, $http ){

  $scope.allTheRecords = [];

  $scope.addRecord = function(){
    //event.preventDefault();
    var objectToSend = {
      name: $scope.nameIn,
      location: $scope.locationIn
    }; // end objectToSend
    //post record to the database
    $http({
      method: 'POST',
      url: '/testPost',
      data: objectToSend
    }).then( function(response) {
      $scope.nameIn ='';
      $scope.locationIn='';
      $scope.getRecords();
    }); // end $http
  }; // end addRecord

  $scope.deleteRecord = function(id) {
    //send delete request to server
    $http({
      method: 'DELETE',
      url: '/delete/' + id
    }).then(function(response) {
      $scope.getRecords();
    }); // end $http
  }; // end deleteRecord

  $scope.getRecords = function(){
    $http({
      method: 'GET',
      url: '/getRecords',
    }).then( function( response ){
      $scope.allTheRecords = response.data;
      console.log( $scope.allTheRecords );
    }, function myError( response ){
      console.log( response.statusText );
    }); // end $http
  }; // end getRecords

}]); // end whereMyPeeps
