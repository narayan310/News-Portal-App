(function(){

    var app = angular.module("newsApp", ["ngRoute"]);

    app.config(function($routeProvider){

        $routeProvider
            .when("/", {

                templateUrl: "home.html",
                controller: "NewsCtrl"
            })
            .when('/bbcnews', {

                templateUrl: "bbcnews.html",
                controller: "BBCNewsCtrl"
            })
            .when('/aljazeera', {
                
                templateUrl: "aljazeera.html",
                controller: "AlJazeeraCtrl"
            });
            


    });

    //app.controller("NewsCtrl", NewsCtrl);


}());