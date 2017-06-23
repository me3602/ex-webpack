var auth = require('./auth');

var AdminA = {
    print : function () {
        return auth.authAdmin() + ' AdminA';
    }
};

window.adminA = AdminA;

