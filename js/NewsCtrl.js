(function(){
    
    var app = angular.module("newsApp");
    
    
        var NewsCtrl = function($scope, $http) {
    
            var onSuccess = function(response) {
    
                $scope.allNews = response.data;
                

                
    
            };
    
            var onError = function(reason){
    
                $scope.error = "Could not fetch the data";
            };
    
           
                $http.get("https://newsapi.org/v1/articles?source=bbc-news&apiKey=4f7afbe1a0524139b7172fb4dee81467")
                    .then(onSuccess, onError);
        
                
        
              
                $scope.title = "NEWS PORTAL";

           

            };

        app.controller("NewsCtrl", NewsCtrl);
        
    
    }());