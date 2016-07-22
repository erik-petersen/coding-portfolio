myApp.controller( "HeaderController", [ "$scope", function( $scope ) {

  $( ".fa-bars" ).click( function() {
    console.log( "Hello" );
    $( ".main-nav" ).toggle( "slide" );
  }); // end .fa-bars click event

}]); // end HeaderController
