module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1720447972761, function(require, module, exports) {
var o,e;Object.defineProperty(exports,"__esModule",{value:!0}),exports.LogLevel=void 0,(e=exports.LogLevel||(exports.LogLevel={}))[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT";var r=function(){function e(){var o=this;this.moduleName="",this.logLevel=exports.LogLevel.VERBOSE,this.userLogProvider=null,this.logProvider=function(r,t){for(var n=[],l=2;l<arguments.length;l++)n[l-2]=arguments[l];if(!(t<o.logLevel)){var g=e.consoleType[t];if(!g)throw new Error("invalid logType: ".concat(t));console[g]("[Module:".concat(r,"] [").concat((new Date).toISOString(),"] | "),n.toString())}}}return e.createLogger=function(o){for(var r=0,t=e.logInstanceArray;r<t.length;r++){var n=t[r];if(n.moduleName==o)return n}var l=new e;return l.moduleName=o,e.logInstanceArray.push(l),l},e.prototype.setLogProvider=function(o){if("function"!=typeof o)throw new Error("logProvider must be set as a function");this.logProvider=o},e.prototype.setUserLogProvider=function(o){this.userLogProvider=o},e.prototype.debug=function(){for(var o=[],e=0;e<arguments.length;e++)o[e]=arguments[e];this.doLog(exports.LogLevel.DEBUG,o)},e.prototype.log=function(){for(var o=[],e=0;e<arguments.length;e++)o[e]=arguments[e];this.doLog(exports.LogLevel.VERBOSE,o)},e.prototype.info=function(){for(var o=[],e=0;e<arguments.length;e++)o[e]=arguments[e];this.doLog(exports.LogLevel.INFO,o)},e.prototype.warn=function(){for(var o=[],e=0;e<arguments.length;e++)o[e]=arguments[e];this.doLog(exports.LogLevel.WARN,o)},e.prototype.error=function(){for(var o=[],e=0;e<arguments.length;e++)o[e]=arguments[e];this.doLog(exports.LogLevel.ERROR,o)},e.prototype.doLog=function(o){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];this.userLogProvider&&this.userLogProvider(this.moduleName,o,e),this.logProvider(this.moduleName,o,e)},e.consoleType=((o={})[exports.LogLevel.DEBUG]="log",o[exports.LogLevel.VERBOSE]="log",o[exports.LogLevel.SILENT]="log",o[exports.LogLevel.INFO]="info",o[exports.LogLevel.WARN]="warn",o[exports.LogLevel.ERROR]="error",o),e.logInstanceArray=[],e}();exports.Logger=r,exports.setGlobalLogLevel=function(o){for(var e=0,t=r.logInstanceArray;e<t.length;e++){t[e].logLevel=o}},exports.setGlobalUserLogHandler=function(o){for(var e=function(e){o?e.setUserLogProvider((function(r,t){for(var n=[],l=2;l<arguments.length;l++)n[l-2]=arguments[l];t<e.logLevel||o(r,t,n)})):e.setUserLogProvider(null)},t=0,n=r.logInstanceArray;t<n.length;t++){e(n[t])}};

}, function(modId) {var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1720447972761);
})()
//miniprogram-npm-outsideDeps=[]
//# sourceMappingURL=index.js.map