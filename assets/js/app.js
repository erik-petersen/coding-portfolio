var portfolioApp = angular.module( "portfolioApp", [ "ngRoute" ] );

portfolioApp.config( function( $routeProvider ) {
  $routeProvider
  .when( "/home", {
    templateUrl: "pages/home.html"
  })
  .when( "about", {
    templateUrl: "pages/about.html"
  })
  .when( "contact", {
    templateUrl: "pages/contact.html"
  })
  .otherwise({
    redirectTo: "/home"
  });
}); // end portfolioApp.config
