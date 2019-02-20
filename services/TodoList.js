app.service("todoService", function($http){
    
    this.url = "https://jsonplaceholder.typicode.com/todos";

    this.getList = function(){
        console.log("SERVICE");
        return $http.get(this.url+"/?_limit=10");
    }
});