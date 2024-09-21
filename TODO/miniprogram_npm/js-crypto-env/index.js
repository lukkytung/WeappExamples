module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1720447973012, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.getCrypto = exports.getRootWebCrypto = exports.getWebCrypto = exports.getNodeCrypto = void 0;
/**
 * index.js
 **/
/**
 * Obtain require(crypto) in Node.js environment.
 * @return {undefined|Object} - Node.js crypto object
 */
var getNodeCrypto = function () {
    if (typeof window !== 'undefined' && window.crypto) {
        return undefined;
    }
    else if (typeof window === 'undefined' && typeof crypto !== 'undefined') {
        return undefined;
    }
    else
        return require('crypto');
};
exports.getNodeCrypto = getNodeCrypto;
/**
 * Obtain window.crypto.subtle object in browser environments.
 * @return {undefined|Object} - WebCrypto API object
 */
var getWebCrypto = function () {
    if (typeof window !== 'undefined' && window.crypto) { // standard window.crypto
        return window.crypto.subtle;
    }
    else if (typeof window === 'undefined' && typeof crypto !== 'undefined') { // case of service worker
        // eslint-disable-next-line no-undef
        return crypto.subtle;
    }
    return undefined;
};
exports.getWebCrypto = getWebCrypto;
/**
 * Obtain window.crypto object in browser environments.
 * @return {undefined|Object} - WebCrypto API object
 */
var getRootWebCrypto = function () {
    if (typeof window !== 'undefined' && window.crypto) {
        return window.crypto;
    }
    else if (typeof window === 'undefined' && typeof crypto !== 'undefined') {
        // eslint-disable-next-line no-undef
        return crypto;
    }
    return undefined;
};
exports.getRootWebCrypto = getRootWebCrypto;
/**
 * Get native crypto lib name.
 * @return {name: 'webCrypto'|'nodeCrypto'|undefined, crypto?: any}
 */
var getCrypto = function () {
    var webCrypto = getWebCrypto();
    var nodeCrypto = getNodeCrypto();
    if (typeof nodeCrypto !== 'undefined')
        return { name: 'nodeCrypto', crypto: nodeCrypto };
    else if (typeof webCrypto !== 'undefined')
        return { name: 'webCrypto', crypto: webCrypto };
    else
        return { name: undefined };
};
exports.getCrypto = getCrypto;
exports.default = { getNodeCrypto: getNodeCrypto, getWebCrypto: getWebCrypto, getRootWebCrypto: getRootWebCrypto, getCrypto: getCrypto };
//# sourceMappingURL=index.js.map
}, function(modId) {var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1720447973012);
})()
//miniprogram-npm-outsideDeps=["crypto"]
//# sourceMappingURL=index.js.map