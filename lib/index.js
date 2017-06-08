(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './components/greater'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./components/greater'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.greater);
    global.index = mod.exports;
  }
})(this, function (exports, _greater) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'Greater', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_greater).default;
    }
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});