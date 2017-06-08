(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'react', './greater.css'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('react'), require('./greater.css'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.greater);
        global.greater = mod.exports;
    }
})(this, function (exports, _react) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var _jsxFileName = 'src/node_modules/components/greater/greater.js';

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var Greater = function (_React$Component) {
        _inherits(Greater, _React$Component);

        function Greater() {
            _classCallCheck(this, Greater);

            return _possibleConstructorReturn(this, (Greater.__proto__ || Object.getPrototypeOf(Greater)).apply(this, arguments));
        }

        _createClass(Greater, [{
            key: 'render',
            value: function render() {
                return _react2.default.createElement(
                    'div',
                    { className: 'root', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 7
                        },
                        __self: this
                    },
                    'Hello World'
                );
            }
        }]);

        return Greater;
    }(_react2.default.Component);

    exports.default = Greater;
});