var hello =  require('../modules/Hello');
var world =  require('../modules/World');

var app = {
    print : function(){
        console.log( hello.toString() + " " + world.toString());
    }
};

window.app = app;