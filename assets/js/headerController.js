myApp.controller( "HeaderController", [ "$scope", function( $scope ) {

  jQuery( ".fa-bars" ).click( function() {
    console.log( "Hello" );
    jQuery( ".main-nav" ).slideToggle( 250 );
  }); // end .fa-bars click event

  jQuery( ".nav-item" ).click( function() {
    jQuery( ".main-nav" ).slideToggle( 250 );
  }); // end .nav-item click event

}]); // end HeaderController
