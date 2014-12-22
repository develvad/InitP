/**
 * Created by vladimiro.agudo on 22/12/2014.
 */

angular.module("misPelisSeriesApp", ["ngRoute", "route-segment", "view-segment"]);

angular.module("misPelisSeriesApp").config(["$routeSegmentProvider", function($routerSegmentProvider){

    $routerSegmentProvider.when("/peliculas","peliculas");
    $routerSegmentProvider.when("/series", "series");


    $routerSegmentProvider.segment()

}]);