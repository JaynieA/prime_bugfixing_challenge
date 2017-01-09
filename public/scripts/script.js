var myApp=angular.module( 'myApp', [] );

myApp.controller( 'whereMyPeeps', [ '$scope', '$http', function( $scope, $http ){

  $scope.addRecord = function(){
    //event.preventDefault();
    var objectToSend = {
      name: $scope.nameIn,
      location: $scope.locationIn
    }; // end objectToSend
    console.log(objectToSend);
    //post record to the database
    $http({
      method: 'POST',
      url: '/testPost',
      data: objectToSend
    }).then( function(response) {
      $scope.nameIn ='';
      $scope.locationIn='';
    }); // end $http
  }; // end addRecord

  $scope.getRecords = function(){
    $http({
      method: 'GET',
      url: '/getRecords',
    }).then( function( response ){
      $scope.allTheRecords = response;
      console.log( $scope.allTheRecords );
    }, function myError( response ){
      console.log( response.statusText );
    }); // end $http
  }; // end getRecords

}]); // end whereMyPeeps
