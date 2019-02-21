app.controller("todoListCtrl", function($scope, todoService){
    $scope.name = "Carol";
    $scope.itemTitle = "";

    $scope.init = function(){
        todoService.getList().then(function(res){
            $scope.todolist = res.data;
        });
    }

    $scope.deleteItem = function(i){
        todoService.deleteItem($scope.todolist[i].id).then(function(res){
            if(res.status == 200){
                $scope.todolist.splice(i,1);
            }
        });
    }

    $scope.addItem = function(){
        if($scope.itemTitle !== undefined){
            var arr = {title: $scope.itemTitle, description: "TestDesc", completed: false};
            todoService.addItem(arr).then(function(res){
                if(res.status == 201){
                    $scope.todolist.push(arr);
                }
            });
        }
    }

    $scope.completedItem = function(i, item){
        todoService.updateItem(item.id, item).then(function(res){
            if(res.status == 200){
                $scope.todolist[i] = item;
            }
        });
    }

});