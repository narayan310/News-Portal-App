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
            })
            .when('/dailymail', {
                
                templateUrl: "dailymail.html",
                controller: "DailyMailCtrl"
            })
            .when('/cnn', {
                
                templateUrl: "cnn.html",
                controller: "CNNCtrl"
            })
            .when('/wsj', {
                
                templateUrl: "wsj.html",
                controller: "WSJCtrl"
            })
            .when('/reuters', {
                
                templateUrl: "reuters.html",
                controller: "ReutersCtrl"
            });
            


    });

    //app.controller("NewsCtrl", NewsCtrl);


}());