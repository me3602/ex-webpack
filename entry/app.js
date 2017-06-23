var hello =  require('../modules/Hello');
var world =  require('../modules/World');

/* HRM 상태면 연결 */
if (module.hot) {
    module.hot.accept();
}

var app = {
    print : function(){
        console.log( hello.toString() + " " + world.toString());
    },

    getYear : function(){
        import('moment')
            .then(moment => moment().format('YYYY'))
            .then(date => console.log(date))
            .catch(err => console.log(err));
    }
};

window.app = app;