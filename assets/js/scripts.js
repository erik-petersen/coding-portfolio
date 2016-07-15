$( function() {

  "use strict";

  $( ".nav-item" ).focusin( function() {
    $( this ).css( "color", "#598CAE" );
  });

  $( ".nav-item" ).focusout( function() {
    $( this ).css( "color", "#394144" );
  });
}); // end outmost function
