var auth = require('./auth');

var AdminB = {
    print : function () {
        return auth.authAdmin() + ' AdminB';
    }
};

module.exports = AdminB;

