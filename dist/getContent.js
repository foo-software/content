"use strict";function _typeof(obj){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.contentByLanguage=exports.DEFAULT_LANGUAGE=void 0;var _lodash=_interopRequireDefault(require("lodash.get")),en=_interopRequireWildcard(require("./en"));function _getRequireWildcardCache(){if("function"!=typeof WeakMap)return null;var cache=new WeakMap;return _getRequireWildcardCache=function(){return cache},cache}function _interopRequireWildcard(obj){if(obj&&obj.__esModule)return obj;if(null===obj||"object"!==_typeof(obj)&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache();if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}return newObj.default=obj,cache&&cache.set(obj,newObj),newObj}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var DEFAULT_LANGUAGE="en";exports.DEFAULT_LANGUAGE=DEFAULT_LANGUAGE;var contentByLanguage={en:en};exports.contentByLanguage=contentByLanguage;var _default=function(_ref){var contentCode=_ref.contentCode,contentKey=_ref.contentKey,data=_ref.data,language=_ref.language,content=(0,_lodash.default)(contentByLanguage,"[".concat(language||DEFAULT_LANGUAGE,"][").concat(contentKey,"]"),null);return data&&content&&content.get?content.get(data):contentCode?"".concat(content," [").concat(contentCode,"]"):content};exports.default=_default;