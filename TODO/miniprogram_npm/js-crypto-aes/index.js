module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1720447973007, function(require, module, exports) {

/**
 * index.js
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.unwrapKey = exports.wrapKey = exports.decrypt = exports.encrypt = void 0;
var aes = __importStar(require("./aes"));
exports.encrypt = aes.encrypt;
exports.decrypt = aes.decrypt;
exports.wrapKey = aes.wrapKey;
exports.unwrapKey = aes.unwrapKey;
exports.default = { encrypt: exports.encrypt, decrypt: exports.decrypt, wrapKey: exports.wrapKey, unwrapKey: exports.unwrapKey };
//# sourceMappingURL=index.js.map
}, function(modId) {var map = {"./aes":1720447973008}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1720447973008, function(require, module, exports) {

/**
 * aes.js
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.unwrapKey = exports.wrapKey = exports.decrypt = exports.encrypt = void 0;
var util = __importStar(require("js-crypto-env"));
var nodeapi = __importStar(require("./nodeapi"));
var webapi = __importStar(require("./webapi"));
var params_1 = __importDefault(require("./params"));
/**
 * Check if the given algorithm spec is valid.
 * @param {String} name - Name of the specified algorithm like 'AES-GCM'.
 * @param {Uint8Array} iv - IV byte array if required
 * @param {Number} tagLength - Authentication tag length if required
 * @throws {Error} - Throws if UnsupportedAlgorithm, InvalidArguments, InvalidIVLength, or InvalidTagLength.
 */
var assertAlgorithms = function (_a) {
    var name = _a.name, iv = _a.iv, tagLength = _a.tagLength;
    if (params_1.default.ciphers[name].ivLength) {
        if (!(iv instanceof Uint8Array))
            throw new Error('InvalidArguments');
        if (iv.byteLength < 2 || iv.byteLength > 16)
            throw new Error('InvalidIVLength');
        if (params_1.default.ciphers[name].staticIvLength && (params_1.default.ciphers[name].ivLength !== iv.byteLength))
            throw new Error('InvalidIVLength');
    }
    if (params_1.default.ciphers[name].tagLength && tagLength) {
        if (!Number.isInteger(tagLength))
            throw new Error('InvalidArguments');
        if (tagLength < 4 || tagLength > 16)
            throw new Error('InvalidTagLength');
    }
};
/**
 * Encrypt data with AES
 * @param {Uint8Array} msg - Message to be encrypted.
 * @param {Uint8Array} key - The symmetric key used to encrypt the message.
 * @param {String} [name = 'AES-GCM'] - Name of the specified algorithm like 'AES-GCM'.
 * @param {Uint8Array} [iv] - Byte array of the initial vector if required.
 * @param {Uint8Array} [additionalData = new Uint8Array([])] - Byte array of additional data if required.
 * @param {Number} [tagLength = params.ciphers[name].tagLength] - Authentication tag length if required.
 * @return {Promise<Uint8Array>} - Encrypted message.
 * @throws {Error} - Throws if InvalidArguments, FaildToEncryptWeb/Node, or UnsupportedEnvironment (no webcrypto/nodecrypto).
 */
var encrypt = function (msg, key, _a) {
    var _b = _a.name, name = _b === void 0 ? 'AES-GCM' : _b, iv = _a.iv, _c = _a.additionalData, additionalData = _c === void 0 ? new Uint8Array([]) : _c, tagLength = _a.tagLength;
    return __awaiter(void 0, void 0, void 0, function () {
        var env;
        return __generator(this, function (_d) {
            // assertion and sanitizing
            assertAlgorithms({ name: name, iv: iv, tagLength: tagLength });
            if (params_1.default.ciphers[name].tagLength && !tagLength)
                tagLength = params_1.default.ciphers[name].tagLength;
            env = util.getCrypto();
            if (env.name === 'webCrypto') { // for web API
                if (typeof env.crypto.importKey !== 'function' || typeof env.crypto.encrypt !== 'function')
                    throw new Error('UnsupportedWebCrypto');
                return [2 /*return*/, webapi.encrypt(msg, key, { name: name, iv: iv, additionalData: additionalData, tagLength: tagLength }, env.crypto)];
            }
            else if (env.name === 'nodeCrypto') { // for node
                return [2 /*return*/, nodeapi.encrypt(msg, key, { name: name, iv: iv, additionalData: additionalData, tagLength: tagLength }, env.crypto)];
            }
            else
                throw new Error('UnsupportedEnvironment'); // TODO:fallback to native implementation
            return [2 /*return*/];
        });
    });
};
exports.encrypt = encrypt;
/**
 * Decrypt data with AES
 * @param {Uint8Array} data - Byte array of encrypted data.
 * @param {Uint8Array} key - Byte array of symmetric key to be used for decryption.
 * @param {String} [name = 'AES-GCM'] - Name of the specified algorithm like 'AES-GCM'.
 * @param {Uint8Array} [iv] - Byte array of the initial vector if required.
 * @param {Uint8Array} [additionalData = new Uint8Array([])] - Byte array of additional data if required.
 * @param {Number} [tagLength = params.ciphers[name].tagLength] - Authentication tag length if required.
 * @return {Promise<Uint8Array>} - Decrypted plaintext message.
 * @throws {Error} - Throws if InvalidArguments, FailedToDecryptWeb/Node, or UnsupportedEnvironment (no webcrypto/nodecrypto).
 */
var decrypt = function (data, key, _a) {
    var _b = _a.name, name = _b === void 0 ? 'AES-GCM' : _b, iv = _a.iv, _c = _a.additionalData, additionalData = _c === void 0 ? new Uint8Array([]) : _c, tagLength = _a.tagLength;
    return __awaiter(void 0, void 0, void 0, function () {
        var env;
        return __generator(this, function (_d) {
            // assertion and sanitizing
            assertAlgorithms({ name: name, iv: iv, tagLength: tagLength });
            if (params_1.default.ciphers[name].tagLength && !tagLength)
                tagLength = params_1.default.ciphers[name].tagLength;
            env = util.getCrypto();
            if (env.name === 'webCrypto') { // for web API
                if (typeof env.crypto.importKey !== 'function' || typeof env.crypto.decrypt !== 'function')
                    throw new Error('UnsupportedWebCrypto');
                return [2 /*return*/, webapi.decrypt(data, key, { name: name, iv: iv, additionalData: additionalData, tagLength: tagLength }, env.crypto)];
            }
            else if (env.name === 'nodeCrypto') { // for node
                return [2 /*return*/, nodeapi.decrypt(data, key, { name: name, iv: iv, additionalData: additionalData, tagLength: tagLength }, env.crypto)];
            }
            else
                throw new Error('UnsupportedEnvironment');
            return [2 /*return*/];
        });
    });
};
exports.decrypt = decrypt;
/**
 * AES-KW wrapping
 * @param keyToBeWrapped {Uint8Array} - key bytes to be wrapped
 * @param wrappingKey {Uint8Array} - wrapping key encryption key
 * @param name {'AES-KW'} - this is simply for future extension
 * @return {Promise<Uint8Array>} - output wrapped key
 */
var wrapKey = function (keyToBeWrapped, wrappingKey, _a) {
    var name = _a.name;
    return __awaiter(void 0, void 0, void 0, function () {
        var env, iv;
        return __generator(this, function (_b) {
            // assertion
            if (keyToBeWrapped.length % 8 > 0)
                throw new Error('WrappedKeyMustBeMultipleOf8');
            env = util.getCrypto();
            iv = (params_1.default.wrapKeys['AES-KW'].defaultIv);
            if (env.name === 'webCrypto') { // for web API
                if (typeof env.crypto.importKey !== 'function' || typeof env.crypto.wrapKey !== 'function')
                    throw new Error('UnsupportedWebCrypto');
                return [2 /*return*/, webapi.wrapKey(keyToBeWrapped, wrappingKey, { name: name, iv: iv }, env.crypto)];
            }
            else if (env.name === 'nodeCrypto') { // for node
                return [2 /*return*/, nodeapi.wrapKey(keyToBeWrapped, wrappingKey, { name: name, iv: iv }, env.crypto)];
            }
            else {
                throw new Error('UnsupportedEnvironment'); // TODO:fallback to native implementation
            }
            return [2 /*return*/];
        });
    });
};
exports.wrapKey = wrapKey;
/**
 * AES-KW unwrapping
 * @param wrappedKey {Uint8Array} - wrapped key bytes
 * @param wrappingKey {Uint8Array} - wrapping key encryption key
 * @param name {'AES-KW'} - this is simply for future extension
 * @return {Promise<Uint8Array>} - output unwrapped key
 */
var unwrapKey = function (wrappedKey, wrappingKey, _a) {
    var name = _a.name;
    return __awaiter(void 0, void 0, void 0, function () {
        var env, iv;
        return __generator(this, function (_b) {
            env = util.getCrypto();
            iv = (params_1.default.wrapKeys['AES-KW'].defaultIv);
            if (env.name === 'webCrypto') { // for web API
                if (typeof env.crypto.importKey !== 'function' || typeof env.crypto.unwrapKey !== 'function')
                    throw new Error('UnsupportedWebCrypto');
                return [2 /*return*/, webapi.unwrapKey(wrappedKey, wrappingKey, { name: name, iv: iv }, env.crypto)];
            }
            else if (env.name === 'nodeCrypto') { // for node
                return [2 /*return*/, nodeapi.unwrapKey(wrappedKey, wrappingKey, { name: name, iv: iv }, env.crypto)];
            }
            else {
                throw new Error('UnsupportedEnvironment'); // TODO:fallback to native implementation
            }
            return [2 /*return*/];
        });
    });
};
exports.unwrapKey = unwrapKey;
//# sourceMappingURL=aes.js.map
}, function(modId) { var map = {"./nodeapi":1720447973009,"./webapi":1720447973011,"./params":1720447973010}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1720447973009, function(require, module, exports) {

/**
 * nodeapi.js
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decrypt = exports.encrypt = exports.unwrapKey = exports.wrapKey = void 0;
var params_1 = __importDefault(require("./params"));
/**
 * Node.js KeyWrapping function simply uses encrypt function.
 * @param keyToBeWrapped {Uint8Array} - plaintext key
 * @param wrappingKey {Uint8Array} - wrapping key
 * @param name {string} - 'AES-KW'
 * @param iv {Uint8Array} - default is '0xA6A6A6A6A6A6A6A6'
 * @param nodeCrypto {Object} - NodeCrypto object
 * @return {Uint8Array} - Unwrapped Key
 */
var wrapKey = function (keyToBeWrapped, wrappingKey, _a, nodeCrypto) {
    var name = _a.name, iv = _a.iv;
    return (0, exports.encrypt)(keyToBeWrapped, wrappingKey, { name: name, iv: iv }, nodeCrypto, true);
};
exports.wrapKey = wrapKey;
/**
 * Node.js KeyUnwrapping function as well as keyWrapping
 * @param wrappedKey {Uint8Array} - Wrapped key
 * @param unwrappingKey {Uint8Array} - Key used for wrapping
 * @param name {string} - 'AES-KW'
 * @param iv {Uint8Array} - default is '0xA6A6A6A6A6A6A6A6'
 * @param nodeCrypto {Object} - NodeCrypto object
 * @return {Uint8Array} - Unwrapped Key
 */
var unwrapKey = function (wrappedKey, unwrappingKey, _a, nodeCrypto) {
    var name = _a.name, iv = _a.iv;
    return (0, exports.decrypt)(wrappedKey, unwrappingKey, { name: name, iv: iv }, nodeCrypto, true);
};
exports.unwrapKey = unwrapKey;
/**
 * Encrypt plaintext message via AES Node.js crypto API
 * @param {Uint8Array} msg - Plaintext message to be encrypted.
 * @param {Uint8Array} key - Byte array of symmetric key.
 * @param {String} name - Name of AES algorithm like 'AES-GCM'.
 * @param {Uint8Array} [iv] - Byte array of initial vector if required.
 * @param {Uint8Array} [additionalData] - Byte array of additional data if required.
 * @param {Number} [tagLength] - Authentication tag length if required.
 * @param {Object} nodeCrypto - NodeCrypto object, i.e., require(crypto) in Node.js.
 * @param wrapKey {Boolean} [false] - true if called as AES-KW
 * @return {Uint8Array} - Encrypted message byte array.
 * @throws {Error} - Throws error if UnsupportedCipher.
 */
var encrypt = function (msg, key, _a, nodeCrypto, wrapKey) {
    var name = _a.name, iv = _a.iv, additionalData = _a.additionalData, tagLength = _a.tagLength;
    if (wrapKey === void 0) { wrapKey = false; }
    var alg = getNodeName(name, key.byteLength, (wrapKey) ? params_1.default.wrapKeys : params_1.default.ciphers);
    var cipher;
    switch (name) {
        case 'AES-GCM': {
            cipher = nodeCrypto.createCipheriv(alg, key, iv, { authTagLength: tagLength });
            cipher.setAAD(additionalData);
            break;
        }
        case 'AES-CTR': {
            if (iv.length === 0 || iv.length > 16)
                throw new Error('InvalidIVLength');
            var counter = new Uint8Array(16);
            counter.set(iv);
            counter[15] += 1;
            cipher = nodeCrypto.createCipheriv(alg, key, counter);
            break;
        }
        default: { // AES-CBC or AES-KW
            cipher = nodeCrypto.createCipheriv(alg, key, iv);
            break;
        }
    }
    var body;
    var final;
    var tag;
    try {
        body = new Uint8Array(cipher.update(msg));
        final = new Uint8Array(cipher.final());
        tag = new Uint8Array([]);
        if (name === 'AES-GCM')
            tag = new Uint8Array(cipher.getAuthTag());
    }
    catch (e) {
        throw new Error('NodeCrypto_EncryptionFailure');
    }
    var data = new Uint8Array(body.length + final.length + tag.length);
    data.set(body);
    data.set(final, body.length);
    data.set(tag, body.length + final.length);
    return data;
};
exports.encrypt = encrypt;
/**
 * Decrypt data through AES Node.js crypto API.
 * @param {Uint8Array} data - Encrypted message to be decrypted.
 * @param {Uint8Array} key - Byte array of symmetric key.
 * @param {String} name - Name of AES algorithm like 'AES-GCM'.
 * @param {Uint8Array} [iv] - Byte array of initial vector if required.
 * @param {Uint8Array} [additionalData] - Byte array of additional data if required.
 * @param {Number} [tagLength] - Authentication tag length if required.
 * @param {Object} nodeCrypto - NodeCrypto object, i.e., require(crypto) in Node.js.
 * @return {Uint8Array} - Decrypted message byte array.
 * @param unwrapKey {Boolean} [false] - true if called as AES-KW
 * @throws {Error} - Throws error if UnsupportedCipher or DecryptionFailure.
 */
var decrypt = function (data, key, _a, nodeCrypto, unwrapKey) {
    var name = _a.name, iv = _a.iv, additionalData = _a.additionalData, tagLength = _a.tagLength;
    if (unwrapKey === void 0) { unwrapKey = false; }
    var alg = getNodeName(name, key.byteLength, (unwrapKey) ? params_1.default.wrapKeys : params_1.default.ciphers);
    var decipher;
    var body;
    switch (name) {
        case 'AES-GCM': {
            decipher = nodeCrypto.createDecipheriv(alg, key, iv, { authTagLength: tagLength });
            decipher.setAAD(additionalData);
            body = data.slice(0, data.length - tagLength);
            var tag = data.slice(data.length - tagLength);
            decipher.setAuthTag(tag);
            break;
        }
        case 'AES-CTR': {
            if (iv.length === 0 || iv.length > 16)
                throw new Error('InvalidIVLength');
            var counter = new Uint8Array(16);
            counter.set(iv);
            counter[15] += 1;
            decipher = nodeCrypto.createDecipheriv(alg, key, counter);
            body = data;
            break;
        }
        default: { // AES-CBC or AES-KW
            decipher = nodeCrypto.createDecipheriv(alg, key, iv);
            body = data;
            break;
        }
    }
    var decryptedBody;
    var final;
    try {
        decryptedBody = decipher.update(body);
        final = decipher.final();
    }
    catch (e) {
        throw new Error('NodeCrypto_DecryptionFailure');
    }
    var msg = new Uint8Array(final.length + decryptedBody.length);
    msg.set(decryptedBody);
    msg.set(final, decryptedBody.length);
    return msg;
};
exports.decrypt = decrypt;
/**
 * get node algorithm name
 * @param name {string} - name of webcrypto alg like AES-GCM
 * @param keyLength {number} - aes encryption key
 * @param dict {object} - params.ciphers or params.wrapKeys
 * @return {string} - node algorithm name
 */
var getNodeName = function (name, keyLength, dict) {
    var alg = dict[name].nodePrefix;
    alg = "".concat(alg).concat((keyLength * 8).toString());
    return alg + dict[name].nodeSuffix;
};
//# sourceMappingURL=nodeapi.js.map
}, function(modId) { var map = {"./params":1720447973010}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1720447973010, function(require, module, exports) {

/**
 * params.js
 */
Object.defineProperty(exports, "__esModule", { value: true });
var ciphers = {
    'AES-GCM': {
        nodePrefix: 'aes-',
        nodeSuffix: '-gcm',
        ivLength: 12,
        tagLength: 16,
        staticIvLength: true, // if true, IV length must be always ivLength.
    },
    'AES-CBC': {
        nodePrefix: 'aes-',
        nodeSuffix: '-cbc',
        ivLength: 16,
        staticIvLength: true,
    },
    'AES-CTR': {
        nodePrefix: 'aes-',
        nodeSuffix: '-ctr',
        ivLength: 12,
        staticIvLength: false,
    }
};
var wrapKeys = {
    'AES-KW': {
        nodePrefix: 'id-aes',
        nodeSuffix: '-wrap',
        ivLength: 8,
        staticIvLength: true,
        defaultIv: new Uint8Array([0xA6, 0xA6, 0xA6, 0xA6, 0xA6, 0xA6, 0xA6, 0xA6])
    }
};
exports.default = { ciphers: ciphers, wrapKeys: wrapKeys };
//# sourceMappingURL=params.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1720447973011, function(require, module, exports) {

/**
 * webapi.js
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decrypt = exports.encrypt = exports.unwrapKey = exports.wrapKey = void 0;
/**
 * WebCrypto KeyWrapping function simply uses encrypt function.
 * @param keyToBeWrapped {Uint8Array} - plaintext key
 * @param wrappingKey {Uint8Array} - wrapping key
 * @param name {string} - 'AES-KW'
 * @param iv {Uint8Array} - default is '0xA6A6A6A6A6A6A6A6'
 * @param webCrypto {Object} - crypto.subtle object
 * @return {Uint8Array} - Unwrapped Key
 */
var wrapKey = function (keyToBeWrapped, wrappingKey, _a, webCrypto) {
    var name = _a.name, iv = _a.iv;
    return __awaiter(void 0, void 0, void 0, function () {
        var kek, cek, data, e_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 4, , 5]);
                    return [4 /*yield*/, webCrypto.importKey('raw', wrappingKey, { name: name }, false, ['wrapKey', 'unwrapKey'])];
                case 1:
                    kek = _b.sent();
                    return [4 /*yield*/, webCrypto.importKey('raw', keyToBeWrapped, { name: name }, true, ['wrapKey', 'unwrapKey'])];
                case 2:
                    cek = _b.sent();
                    return [4 /*yield*/, webCrypto.wrapKey('raw', cek, kek, { name: name, iv: iv })];
                case 3:
                    data = _b.sent();
                    return [2 /*return*/, new Uint8Array(data)];
                case 4:
                    e_1 = _b.sent();
                    if (e_1 instanceof Error) {
                        throw new Error("WebCrypto_FailedToWrapKey - ".concat(e_1.message));
                    }
                    else {
                        throw new Error('WebCrypto_FailedToWrapKey');
                    }
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
};
exports.wrapKey = wrapKey;
/**
 * WebCrypto KeyUnwrapping function as well as keyWrapping
 * @param wrappedKey {Uint8Array} - Wrapped key
 * @param unwrappingKey {Uint8Array} - Key used for wrapping
 * @param name {string} - 'AES-KW'
 * @param iv {Uint8Array} - default is '0xA6A6A6A6A6A6A6A6'
 * @param webCrypto {Object} - crypto.subtle object
 * @return {Uint8Array} - Unwrapped Key
 */
var unwrapKey = function (wrappedKey, unwrappingKey, _a, webCrypto) {
    var name = _a.name, iv = _a.iv;
    return __awaiter(void 0, void 0, void 0, function () {
        var kek, cek, _b, e_2;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 4, , 5]);
                    return [4 /*yield*/, webCrypto.importKey('raw', unwrappingKey, { name: name }, false, ['wrapKey', 'unwrapKey'])];
                case 1:
                    kek = _c.sent();
                    return [4 /*yield*/, webCrypto.unwrapKey('raw', wrappedKey, kek, { name: name, iv: iv }, { name: 'AES-GCM' }, true, ['encrypt', 'decrypt'])];
                case 2:
                    cek = _c.sent();
                    _b = Uint8Array.bind;
                    return [4 /*yield*/, webCrypto.exportKey('raw', cek)];
                case 3: return [2 /*return*/, new (_b.apply(Uint8Array, [void 0, _c.sent()]))()];
                case 4:
                    e_2 = _c.sent();
                    if (e_2 instanceof Error) {
                        throw new Error("WebCrypto_FailedToUnwrapKey - ".concat(e_2.message));
                    }
                    else {
                        throw new Error('WebCrypto_FailedToUnwrapKey');
                    }
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
};
exports.unwrapKey = unwrapKey;
/**
 * Encrypt data through AES of WebCrypto API.
 * @param {Uint8Array} msg - Plaintext message to be encrypted.
 * @param {Uint8Array} key - Byte array of symmetric key.
 * @param {String} name - Name of AES algorithm like 'AES-GCM'.
 * @param {Uint8Array} [iv] - Byte array of initial vector if required.
 * @param {Uint8Array} [additionalData] - Byte array of additional data if required.
 * @param {Number} [tagLength] - Authentication tag length if required.
 * @param {Object} webCrypto - WebCrypto object, i.e., window.crypto.subtle
 * @return {Promise<Uint8Array>} - Encrypted data byte array.
 * @throws {Error} - Throws if UnsupportedCipher.
 */
var encrypt = function (msg, key, _a, webCrypto) {
    var _b = _a.name, name = _b === void 0 ? 'AES-GCM' : _b, iv = _a.iv, additionalData = _a.additionalData, tagLength = _a.tagLength;
    return __awaiter(void 0, void 0, void 0, function () {
        var encryptionConfig, sessionKeyObj, data, e_3;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    encryptionConfig = setCipherParams({ name: name, iv: iv, additionalData: additionalData, tagLength: tagLength });
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, webCrypto.importKey('raw', key, encryptionConfig, false, ['encrypt', 'decrypt'])];
                case 2:
                    sessionKeyObj = _c.sent();
                    return [4 /*yield*/, webCrypto.encrypt(encryptionConfig, sessionKeyObj, msg)];
                case 3:
                    data = _c.sent();
                    return [2 /*return*/, new Uint8Array(data)];
                case 4:
                    e_3 = _c.sent();
                    if (e_3 instanceof Error) {
                        throw new Error("WebCrypto_EncryptionFailure: ".concat(e_3.message));
                    }
                    else {
                        throw new Error('WebCrypto_EncryptionFailure');
                    }
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
};
exports.encrypt = encrypt;
/**
 * Decrypt data through AES of WebCrypto API.
 * @param {Uint8Array} data - Encrypted message to be decrypted.
 * @param {Uint8Array} key - Byte array of symmetric key.
 * @param {String} name - Name of AES algorithm like 'AES-GCM'.
 * @param {Uint8Array} [iv] - Byte array of initial vector if required.
 * @param {Uint8Array} [additionalData] - Byte array of additional data if required.
 * @param {Number} [tagLength] - Authentication tag length if required.
 * @param {Object} webCrypto - WebCrypto object, i.e., window.crypto.subtle
 * @return {Promise<Uint8Array>} - Decrypted plaintext message.
 * @throws {Error} - Throws if UnsupportedCipher or DecryptionFailure.
 */
var decrypt = function (data, key, _a, webCrypto) {
    var name = _a.name, iv = _a.iv, additionalData = _a.additionalData, tagLength = _a.tagLength;
    return __awaiter(void 0, void 0, void 0, function () {
        var decryptionConfig, sessionKeyObj, msg, e_4;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    decryptionConfig = setCipherParams({ name: name, iv: iv, additionalData: additionalData, tagLength: tagLength });
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, webCrypto.importKey('raw', key, decryptionConfig, false, ['encrypt', 'decrypt'])];
                case 2:
                    sessionKeyObj = _b.sent();
                    return [4 /*yield*/, webCrypto.decrypt(decryptionConfig, sessionKeyObj, data)];
                case 3:
                    msg = _b.sent();
                    return [2 /*return*/, new Uint8Array(msg)];
                case 4:
                    e_4 = _b.sent();
                    if (e_4 instanceof Error) {
                        throw new Error("WebCrypto_DecryptionFailure: ".concat(e_4.message));
                    }
                    else {
                        throw new Error('WebCrypto_DecryptionFailure');
                    }
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
};
exports.decrypt = decrypt;
/**
 * Set params for encryption algorithms.
 * @param {String} name - Name of AES algorithm like 'AES-GCM'.
 * @param {Uint8Array} [iv] - Byte array of initial vector if required.
 * @param {Uint8Array} [additionalData] - Byte array of additional data if required.
 * @param {Number} [tagLength] - Authentication tag length if required.
 */
var setCipherParams = function (_a) {
    var name = _a.name, iv = _a.iv, additionalData = _a.additionalData, tagLength = _a.tagLength;
    var alg = { name: name, iv: iv, additionalData: additionalData, tagLength: tagLength };
    switch (name) {
        case 'AES-GCM': {
            alg.tagLength = tagLength * 8;
            break;
        }
        case 'AES-CBC': {
            break;
        }
        case 'AES-CTR': {
            if (iv.length === 0 || iv.length > 16)
                throw new Error('InvalidIVLength');
            alg.counter = new Uint8Array(16);
            alg.counter.set(iv);
            alg.counter[15] += 1;
            alg.length = 128; // todo: this might be  (16 - iv.length) * 8.
            break;
        }
    }
    return alg;
};
//# sourceMappingURL=webapi.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1720447973007);
})()
//miniprogram-npm-outsideDeps=["js-crypto-env"]
//# sourceMappingURL=index.js.map