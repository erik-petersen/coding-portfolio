myApp.controller( "HeaderController", [ "$scope", function( $scope ) {

  $( ".fa-bars" ).click( function() {
    console.log( "Hello" );
    $( ".main-nav" ).slideToggle();
  }); // end .fa-bars click event

  $( ".nav-item" ).click( function() {
    $( ".main-nav" ).slideToggle();
  }); // end .nav-item click event

}]); // end HeaderController
