var myApp = angular.module( "myApp", ["ngRoute"] );

myApp.config( function( $routeProvider ) {
  $routeProvider
  .when( "/home", {
    templateUrl: "pages/home.html"
  })
  .when( "/portfolio", {
    templateUrl: "pages/portfolio.html"
  })
  .when( "/about", {
    templateUrl: "pages/about.html"
  })
  .when( "/blog", {
    templateUrl: "pages/blog.html"
  })
  .otherwise({
    redirectTo: "/home"
  });
}); // end myApp.config
