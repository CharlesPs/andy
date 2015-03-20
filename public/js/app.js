var app = angular.module("app", ['ngCookies', 'ngRoute']);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'tpl/home',
            controller  : 'home_controller'
        // })
        // .when('/', {
        //     templateUrl : 'tpl/home',
        //     controller  : 'home_controller'
        });

        // use the HTML5 History API
    $locationProvider.html5Mode(true);
});

app.controller("ui_controller", ['$scope', '$window', '$cookies', '$cookieStore', function($scope, $window, $cookies, $cookieStore){

    $scope.sidebar_class = "";

    $scope.sidebar_init = function(){
        $scope.sidebar_class = $cookieStore.get('sidebar_class');
    };

    $scope.sidebar_toggle = function(){

        if($window.innerWidth <= 767){

            if($scope.sidebar_class === "" || $scope.sidebar_class === "sidebar-collapse"){
                $scope.sidebar_class = "sidebar-open";
            }else{
                $scope.sidebar_class = "";
            }
        }else{

            if($scope.sidebar_class === "" || $scope.sidebar_class === "sidebar-open"){
                $scope.sidebar_class = "sidebar-collapse";
            }else{
                $scope.sidebar_class = "";
            }
        }

        $cookieStore.put('sidebar_class', $scope.sidebar_class);
    };
}]);

app.controller("home_controller", function($scope){
    $scope.message = "Hello World!";
});
