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
var utils_1 = require("../../common/utils");
function getMaxLength(maxLength, textOverflowForbidden) {
    if (!textOverflowForbidden) {
        return maxLength + 500;
    }
    return maxLength;
}
var ENV = taro_1["default"].getEnv();
var AtTextarea = /** @class */ (function (_super) {
    __extends(AtTextarea, _super);
    function AtTextarea() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleInput = function (event) {
            _this.props.onChange(event.target.value, event);
        };
        _this.handleFocus = function (event) {
            _this.props.onFocus && _this.props.onFocus(event);
        };
        _this.handleBlur = function (event) {
            _this.props.onBlur && _this.props.onBlur(event);
        };
        _this.handleConfirm = function (event) {
            _this.props.onConfirm && _this.props.onConfirm(event);
        };
        _this.handleLinechange = function (event) {
            _this.props.onLinechange && _this.props.onLinechange(event);
        };
        return _this;
    }
    AtTextarea.prototype.render = function () {
        var _a = this.props, customStyle = _a.customStyle, className = _a.className, value = _a.value, cursorSpacing = _a.cursorSpacing, placeholder = _a.placeholder, placeholderStyle = _a.placeholderStyle, placeholderClass = _a.placeholderClass, _b = _a.maxLength, maxLength = _b === void 0 ? 200 : _b, count = _a.count, disabled = _a.disabled, autoFocus = _a.autoFocus, focus = _a.focus, showConfirmBar = _a.showConfirmBar, selectionStart = _a.selectionStart, selectionEnd = _a.selectionEnd, fixed = _a.fixed, _c = _a.textOverflowForbidden, textOverflowForbidden = _c === void 0 ? true : _c, height = _a.height;
        var _maxLength = parseInt(maxLength.toString());
        var actualMaxLength = getMaxLength(_maxLength, textOverflowForbidden);
        var textareaStyle = height ? "height:" + utils_1.pxTransform(Number(height)) : '';
        var rootCls = classnames_1["default"]('at-textarea', "at-textarea--" + ENV, {
            'at-textarea--error': _maxLength < value.length
        }, className);
        var placeholderCls = classnames_1["default"]('placeholder', placeholderClass);
        return (react_1["default"].createElement(components_1.View, { className: rootCls, style: customStyle },
            react_1["default"].createElement(components_1.Textarea, { className: 'at-textarea__textarea', style: textareaStyle, placeholderStyle: placeholderStyle, placeholderClass: placeholderCls, cursorSpacing: cursorSpacing, value: value, maxlength: actualMaxLength, placeholder: placeholder, disabled: disabled, autoFocus: autoFocus, focus: focus, showConfirmBar: showConfirmBar, selectionStart: selectionStart, selectionEnd: selectionEnd, fixed: fixed, onInput: this.handleInput, onFocus: this.handleFocus, onBlur: this.handleBlur, onConfirm: this.handleConfirm, onLineChange: this.handleLinechange }),
            count && (react_1["default"].createElement(components_1.View, { className: 'at-textarea__counter' },
                value.length,
                "/",
                _maxLength))));
    };
    return AtTextarea;
}(react_1["default"].Component));
exports["default"] = AtTextarea;
AtTextarea.defaultProps = {
    customStyle: '',
    className: '',
    value: '',
    cursorSpacing: 100,
    maxLength: 200,
    placeholder: '',
    disabled: false,
    autoFocus: false,
    focus: false,
    showConfirmBar: false,
    selectionStart: -1,
    selectionEnd: -1,
    count: true,
    fixed: false,
    height: '',
    textOverflowForbidden: true,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onChange: function () { }
};
AtTextarea.propTypes = {
    customStyle: prop_types_1["default"].oneOfType([prop_types_1["default"].object, prop_types_1["default"].string]),
    className: prop_types_1["default"].oneOfType([prop_types_1["default"].array, prop_types_1["default"].string]),
    value: prop_types_1["default"].string.isRequired,
    cursorSpacing: prop_types_1["default"].number,
    maxLength: prop_types_1["default"].oneOfType([prop_types_1["default"].string, prop_types_1["default"].number]),
    placeholderClass: prop_types_1["default"].string,
    placeholderStyle: prop_types_1["default"].string,
    placeholder: prop_types_1["default"].string,
    disabled: prop_types_1["default"].bool,
    autoFocus: prop_types_1["default"].bool,
    focus: prop_types_1["default"].bool,
    showConfirmBar: prop_types_1["default"].bool,
    selectionStart: prop_types_1["default"].number,
    selectionEnd: prop_types_1["default"].number,
    count: prop_types_1["default"].bool,
    textOverflowForbidden: prop_types_1["default"].bool,
    fixed: prop_types_1["default"].bool,
    height: prop_types_1["default"].oneOfType([prop_types_1["default"].string, prop_types_1["default"].number]),
    onLinechange: prop_types_1["default"].func,
    onChange: prop_types_1["default"].func.isRequired,
    onFocus: prop_types_1["default"].func,
    onBlur: prop_types_1["default"].func,
    onConfirm: prop_types_1["default"].func
};
//# sourceMappingURL=index.js.map