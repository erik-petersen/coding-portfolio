myApp.controller( "HeaderController", [ "$scope", function( $scope ) {

  jQuery( ".fa-bars" ).click( function() {
    console.log( "Hello" );
    jQuery( ".main-nav" ).slideToggle( 150 );
  }); // end .fa-bars click event

}]); // end HeaderController
