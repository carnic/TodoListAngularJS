app.controller("todoListCtrl", function($scope, todoService){
    $scope.name = "Carol";

    $scope.init = function(){
        console.log("INIT");
        todoService.getList().then(function(res){
            $scope.todolist = res.data;
        });
       
    }

    $scope.deleteItem = function(i){
        console.log("Delete"+i);
        $scope.todolist.splice(i,1);
    }
});