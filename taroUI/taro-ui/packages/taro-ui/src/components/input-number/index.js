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
var toString_1 = require("lodash/toString");
var prop_types_1 = require("prop-types");
var react_1 = require("react");
var components_1 = require("@tarojs/components");
var utils_1 = require("../../common/utils");
// TODO: Check all types
// 实现两数相加并保留小数点后最短尾数
function addNum(num1, num2) {
    var sq1, sq2;
    try {
        sq1 = toString_1["default"](num1).split('.')[1].length;
    }
    catch (e) {
        sq1 = 0;
    }
    try {
        sq2 = toString_1["default"](num2).split('.')[1].length;
    }
    catch (e) {
        sq2 = 0;
    }
    var m = Math.pow(10, Math.max(sq1, sq2));
    return (Math.round(num1 * m) + Math.round(num2 * m)) / m;
}
// 格式化数字，处理01变成1,并且不处理1. 这种情况
function parseValue(num) {
    if (num === '')
        return '0';
    var numStr = toString_1["default"](num);
    if (numStr.indexOf('0') === 0 && numStr.indexOf('.') === -1) {
        // 处理01变成1,并且不处理1.
        return toString_1["default"](parseFloat(num));
    }
    return toString_1["default"](num);
}
var AtInputNumber = /** @class */ (function (_super) {
    __extends(AtInputNumber, _super);
    function AtInputNumber() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleValue = function (value) {
            var _a = _this.props, _b = _a.max, max = _b === void 0 ? 100 : _b, _c = _a.min, min = _c === void 0 ? 0 : _c;
            var resultValue = value === '' ? min : value;
            // 此处不能使用 Math.max，会是字符串变数字，并丢失 .
            if (resultValue > max) {
                resultValue = max;
                _this.handleError({
                    type: 'OVER',
                    errorValue: resultValue
                });
            }
            if (resultValue < min) {
                resultValue = min;
                _this.handleError({
                    type: 'LOW',
                    errorValue: resultValue
                });
            }
            if (resultValue && !Number(resultValue)) {
                resultValue = parseFloat(String(resultValue)) || min;
                _this.handleError({
                    type: 'OVER',
                    errorValue: resultValue
                });
            }
            resultValue = parseValue(String(resultValue));
            return resultValue;
        };
        _this.handleInput = function (e) {
            var value = e.target.value;
            var disabled = _this.props.disabled;
            if (disabled)
                return '';
            var newValue = _this.handleValue(value);
            _this.props.onChange(Number(newValue), e);
            return newValue;
        };
        _this.handleBlur = function (event) {
            return _this.props.onBlur && _this.props.onBlur(event);
        };
        _this.handleError = function (errorValue) {
            if (!_this.props.onErrorInput) {
                return;
            }
            _this.props.onErrorInput(errorValue);
        };
        return _this;
    }
    AtInputNumber.prototype.handleClick = function (clickType, e) {
        var _a = this.props, disabled = _a.disabled, value = _a.value, _b = _a.min, min = _b === void 0 ? 0 : _b, _c = _a.max, max = _c === void 0 ? 100 : _c, _d = _a.step, step = _d === void 0 ? 1 : _d;
        var lowThanMin = clickType === 'minus' && value <= min;
        var overThanMax = clickType === 'plus' && value >= max;
        if (lowThanMin || overThanMax || disabled) {
            var deltaValue_1 = clickType === 'minus' ? -step : step;
            var errorValue = addNum(Number(value), deltaValue_1);
            if (disabled) {
                this.handleError({
                    type: 'DISABLED',
                    errorValue: errorValue
                });
            }
            else {
                this.handleError({
                    type: lowThanMin ? 'LOW' : 'OVER',
                    errorValue: errorValue
                });
            }
            return;
        }
        var deltaValue = clickType === 'minus' ? -step : step;
        var newValue = addNum(Number(value), deltaValue);
        newValue = Number(this.handleValue(newValue));
        this.props.onChange(newValue, e);
    };
    AtInputNumber.prototype.render = function () {
        var _a = this.props, customStyle = _a.customStyle, className = _a.className, width = _a.width, disabled = _a.disabled, value = _a.value, type = _a.type, _b = _a.min, min = _b === void 0 ? 0 : _b, _c = _a.max, max = _c === void 0 ? 100 : _c, size = _a.size, disabledInput = _a.disabledInput;
        var inputStyle = {
            width: width ? "" + utils_1.pxTransform(width) : ''
        };
        var inputValue = Number(this.handleValue(value));
        var rootCls = classnames_1["default"]('at-input-number', {
            'at-input-number--lg': size === 'large'
        }, className);
        var minusBtnCls = classnames_1["default"]('at-input-number__btn', {
            'at-input-number--disabled': inputValue <= min || disabled
        });
        var plusBtnCls = classnames_1["default"]('at-input-number__btn', {
            'at-input-number--disabled': inputValue >= max || disabled
        });
        return (react_1["default"].createElement(components_1.View, { className: rootCls, style: customStyle },
            react_1["default"].createElement(components_1.View, { className: minusBtnCls, onClick: this.handleClick.bind(this, 'minus') },
                react_1["default"].createElement(components_1.Text, { className: 'at-icon at-icon-subtract at-input-number__btn-subtract' })),
            react_1["default"].createElement(components_1.Input, { className: 'at-input-number__input', style: inputStyle, type: type, value: String(inputValue), disabled: disabledInput || disabled, onInput: this.handleInput, onBlur: this.handleBlur }),
            react_1["default"].createElement(components_1.View, { className: plusBtnCls, onClick: this.handleClick.bind(this, 'plus') },
                react_1["default"].createElement(components_1.Text, { className: 'at-icon at-icon-add at-input-number__btn-add' }))));
    };
    return AtInputNumber;
}(react_1["default"].Component));
exports["default"] = AtInputNumber;
AtInputNumber.defaultProps = {
    customStyle: '',
    className: '',
    disabled: false,
    disabledInput: false,
    value: 1,
    type: 'number',
    width: 0,
    min: 0,
    max: 100,
    step: 1,
    size: 'normal',
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onChange: function () { }
};
AtInputNumber.propTypes = {
    customStyle: prop_types_1["default"].oneOfType([prop_types_1["default"].object, prop_types_1["default"].string]),
    className: prop_types_1["default"].oneOfType([prop_types_1["default"].array, prop_types_1["default"].string]),
    value: prop_types_1["default"].oneOfType([prop_types_1["default"].number, prop_types_1["default"].string]),
    type: prop_types_1["default"].oneOf(['number', 'digit']),
    disabled: prop_types_1["default"].bool,
    width: prop_types_1["default"].number,
    min: prop_types_1["default"].number,
    max: prop_types_1["default"].number,
    step: prop_types_1["default"].number,
    size: prop_types_1["default"].oneOf(['normal', 'large']),
    disabledInput: prop_types_1["default"].bool,
    onChange: prop_types_1["default"].func,
    onBlur: prop_types_1["default"].func,
    onErrorInput: prop_types_1["default"].func
};
//# sourceMappingURL=index.js.map