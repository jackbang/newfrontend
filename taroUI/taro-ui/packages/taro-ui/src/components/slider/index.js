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
var AtSlider = /** @class */ (function (_super) {
    __extends(AtSlider, _super);
    function AtSlider(props) {
        var _this = _super.call(this, props) || this;
        var _a = props.value, value = _a === void 0 ? 0 : _a, _b = props.min, min = _b === void 0 ? 0 : _b, _c = props.max, max = _c === void 0 ? 100 : _c;
        _this.state = {
            _value: AtSlider.clampNumber(value, min, max)
        };
        return _this;
    }
    AtSlider.clampNumber = function (value, lower, upper) {
        return Math.max(lower, Math.min(upper, value));
    };
    AtSlider.prototype.handleChanging = function (e) {
        var _value = this.state._value;
        var value = e.detail.value;
        if (value !== _value) {
            this.setState({ _value: value });
        }
        this.props.onChanging && this.props.onChanging(value);
    };
    AtSlider.prototype.handleChange = function (e) {
        var value = e.detail.value;
        this.setState({ _value: value });
        this.props.onChange && this.props.onChange(value);
    };
    AtSlider.prototype.UNSAFE_componentWillReceiveProps = function (props) {
        var _a = props.value, value = _a === void 0 ? 0 : _a, _b = props.min, min = _b === void 0 ? 0 : _b, _c = props.max, max = _c === void 0 ? 100 : _c;
        this.setState({
            _value: AtSlider.clampNumber(value, min, max)
        });
    };
    AtSlider.prototype.render = function () {
        var _value = this.state._value;
        var _a = this.props, customStyle = _a.customStyle, className = _a.className, min = _a.min, max = _a.max, step = _a.step, disabled = _a.disabled, activeColor = _a.activeColor, backgroundColor = _a.backgroundColor, blockSize = _a.blockSize, blockColor = _a.blockColor, showValue = _a.showValue;
        return (react_1["default"].createElement(components_1.View, { className: classnames_1["default"]({
                'at-slider': true,
                'at-slider--disabled': disabled
            }, className), style: customStyle },
            react_1["default"].createElement(components_1.View, { className: 'at-slider__inner' },
                react_1["default"].createElement(components_1.Slider, { min: min, max: max, step: step, value: _value, disabled: disabled, activeColor: activeColor, backgroundColor: backgroundColor, blockSize: blockSize, blockColor: blockColor, onChanging: this.handleChanging.bind(this), onChange: this.handleChange.bind(this) })),
            showValue && react_1["default"].createElement(components_1.View, { className: 'at-slider__text' }, "" + _value)));
    };
    return AtSlider;
}(react_1["default"].Component));
exports["default"] = AtSlider;
AtSlider.defaultProps = {
    customStyle: '',
    className: '',
    min: 0,
    max: 100,
    step: 1,
    value: 0,
    disabled: false,
    activeColor: '#6190e8',
    backgroundColor: '#e9e9e9',
    blockSize: 28,
    blockColor: '#ffffff',
    showValue: false
};
AtSlider.propTypes = {
    customStyle: prop_types_1["default"].oneOfType([prop_types_1["default"].object, prop_types_1["default"].string]),
    className: prop_types_1["default"].oneOfType([prop_types_1["default"].array, prop_types_1["default"].string]),
    min: prop_types_1["default"].number,
    max: prop_types_1["default"].number,
    step: prop_types_1["default"].number,
    value: prop_types_1["default"].number,
    disabled: prop_types_1["default"].bool,
    activeColor: prop_types_1["default"].string,
    backgroundColor: prop_types_1["default"].string,
    blockSize: prop_types_1["default"].number,
    blockColor: prop_types_1["default"].string,
    showValue: prop_types_1["default"].bool,
    onChange: prop_types_1["default"].func,
    onChanging: prop_types_1["default"].func
};
//# sourceMappingURL=index.js.map