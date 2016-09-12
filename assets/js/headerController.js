myApp.controller( "HeaderController", [ "$scope", function( $scope ) {

  // thank you, http://www.coalmarch.com/blog/how-to-execute-javascript-based-on-screen-size-using-jquery, for your help!!!
  if( $( window ).width() < 744 ) {

    console.log( "Greater than 744" );
    jQuery( ".fa-bars" ).click( function() {
      console.log( "Hello" );
      jQuery( ".main-nav" ).slideToggle( 250 );
    }); // end .fa-bars click event

    jQuery( ".nav-item" ).click( function() {
      jQuery( ".main-nav" ).slideToggle( 250 );
    }); // end .nav-item click event
  }

}]); // end HeaderController
