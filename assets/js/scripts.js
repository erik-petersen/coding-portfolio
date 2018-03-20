$( function() {

  "use strict";

  var clicks = 0;

  // $( ".fa-bars" ).click( function() {

    clicks++;

    // $( ".navbar-collapse.collapse" ).toggle();

    if( clicks == 1 ) {
      $( ".nav-element" ).css( "display", "block" );
      console.log( clicks );
    }

    else {
      console.log( clicks );
      // $( ".navbar-collapse.collapse" ).hide();

      clicks = 0;
    }


  // });

}); // end outmost function
