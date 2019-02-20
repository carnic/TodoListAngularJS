app.controller("todoListCtrl", function($scope){
    $scope.name = "Carol";
    $scope.todolist = [
        {name: "Item1", description: "one", completed: true},
        {name: "Item2", description: "two", completed: false},
        {name: "Item3", description: "three", completed: true}
    ]

    $scope.deleteItem = function(i){
        console.log("Delete"+i);
        $scope.todolist.splice(i,1);
    }
});