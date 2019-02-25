app.controller("todoListCtrl", function($rootScope, $scope, todoService){
    $scope.name = "Carol";
    $scope.itemTitle = "";
    $scope.error=false;
    $scope.status=false;

    $scope.init = function(){
        if($rootScope.todolist == undefined){
            todoService.getList().then(function(res){
                $rootScope.todolist = res.data;
            });
        }
    }

    $scope.deleteItem = function(i){
        todoService.deleteItem($rootScope.todolist[i].id).then(function(res){
            if(res.status == 200){
                $rootScope.todolist.splice(i,1);
            }
        });
    }

    $scope.addItem = function(){
        if($scope.itemTitle != undefined && $scope.itemTitle != ""){
            var arr = {title: $scope.itemTitle, completed: false};
            todoService.addItem(arr).then(function(res){
                if(res.status == 201){
                    $rootScope.todolist.push(arr);
                    $scope.errorMessage="Item is added.";
                    $scope.error=false;
                }
            });
        }
        else{
            $scope.errorMessage="Item Title should be entered.";
            $scope.error=true;
        }
        $scope.status=true;
    }    

    $scope.selectAll = function(){
        $rootScope.todolist.forEach(function(item, index){
            console.log(item.id);
            item.completed = true;
            todoService.updateItem(item.id, item).then(function(res){
                if(res.status == 200){
                    $rootScope.todolist[index] = item;
                }
            });
        });
    }

    $scope.completedItem = function(i, item){
        todoService.updateItem(item.id, item).then(function(res){
            if(res.status == 200){
                $rootScope.todolist[i] = item;
            }
        });
    }

});