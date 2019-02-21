app.filter('camelCaseSen', function(){
    return function(x){
        var txt="";
        for(var i=0;i<x.length;i++){
            txt+=x[i];
            if(x[i]==" "){
                var c = x[i+1].toUpperCase();
                txt+=c;
                i++;
            }
        }
        return txt;
    }
});