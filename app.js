var app = angular.module("todoList", ["ngRoute"]);

app.config(function($routeProvider){
    $routeProvider
    .when("/", {
        templateUrl: "view/todolist.htm",
        controller: "todoListCtrl"
    })
    .when("/about",{
        templateUrl: "view/about.htm"
    });
});