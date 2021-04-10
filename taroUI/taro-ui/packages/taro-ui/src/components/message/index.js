"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var classnames_1 = require("classnames");
var prop_types_1 = require("prop-types");
var react_1 = require("react");
var components_1 = require("@tarojs/components");
var taro_1 = require("@tarojs/taro");
var AtMessage = /** @class */ (function (_super) {
    __extends(AtMessage, _super);
    function AtMessage(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            _isOpened: false,
            _message: '',
            _type: 'info',
            _duration: 3000
        };
        _this._timer = null;
        return _this;
    }
    AtMessage.prototype.bindMessageListener = function () {
        var _this = this;
        taro_1["default"].eventCenter.on('atMessage', function (options) {
            if (options === void 0) { options = {}; }
            var message = options.message, type = options.type, duration = options.duration;
            var newState = {
                _isOpened: true,
                _message: message,
                _type: type,
                _duration: duration || _this.state._duration
            };
            _this.setState(newState, function () {
                clearTimeout(_this._timer);
                _this._timer = setTimeout(function () {
                    _this.setState({
                        _isOpened: false
                    });
                }, _this.state._duration);
            });
        });
        // 绑定函数
        taro_1["default"].atMessage = taro_1["default"].eventCenter.trigger.bind(taro_1["default"].eventCenter, 'atMessage');
    };
    AtMessage.prototype.componentDidShow = function () {
        this.bindMessageListener();
    };
    AtMessage.prototype.componentDidMount = function () {
        this.bindMessageListener();
    };
    AtMessage.prototype.componentDidHide = function () {
        taro_1["default"].eventCenter.off('atMessage');
    };
    AtMessage.prototype.componentWillUnmount = function () {
        taro_1["default"].eventCenter.off('atMessage');
    };
    AtMessage.prototype.render = function () {
        var _a = this.props, className = _a.className, customStyle = _a.customStyle;
        var _b = this.state, _message = _b._message, _isOpened = _b._isOpened, _type = _b._type;
        var rootCls = classnames_1["default"]({
            'at-message': true,
            'at-message--show': _isOpened,
            'at-message--hidden': !_isOpened
        }, "at-message--" + _type, className);
        return (react_1["default"].createElement(components_1.View, { className: rootCls, style: customStyle }, _message));
    };
    return AtMessage;
}(react_1["default"].Component));
exports["default"] = AtMessage;
AtMessage.defaultProps = {
    customStyle: '',
    className: ''
};
AtMessage.propTypes = {
    customStyle: prop_types_1["default"].oneOfType([prop_types_1["default"].object, prop_types_1["default"].string]),
    className: prop_types_1["default"].oneOfType([prop_types_1["default"].array, prop_types_1["default"].string])
};
//# sourceMappingURL=index.js.map