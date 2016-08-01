myApp.controller( "HeaderController", [ "$scope", function( $scope ) {

  $( ".fa-bars" ).click( function() {
    console.log( "Hello" );
    $( ".main-nav" ).slideToggle();
  }); // end .fa-bars click event

}]); // end HeaderController
