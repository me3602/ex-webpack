webpackJsonp([2],{

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(131);


/***/ }),

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

var auth = __webpack_require__(118);

var AdminA = {
    print: function print() {
        return auth.authAdmin() + ' AdminA';
    }
};

window.adminA = AdminA;

/***/ })

},[130]);