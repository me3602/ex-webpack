let config = {
    entry: {
        'app' : ['./entry/app.js'],
        'lodash' : ['lodash'],
        'jquery' : ['jquery']
    },
    output: {
        filename: './bundle/[name].bundle.js'
    }
};

module.exports = config;