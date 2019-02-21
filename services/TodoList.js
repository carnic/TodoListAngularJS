app.service("todoService", function($http){
    
    this.url = "https://jsonplaceholder.typicode.com/todos";

    this.getList = function(){
        return $http.get(this.url+"?_limit=10");
    }

    this.deleteItem = function(itemId){
        return $http.delete(this.url+"/"+itemId);
    }

    this.addItem = function(item){
        return $http.post(this.url, JSON.stringify(item));
    }

    this.updateItem = function(i, item){
        return $http.put(this.url+"/"+i, JSON.stringify(item));
    }
});