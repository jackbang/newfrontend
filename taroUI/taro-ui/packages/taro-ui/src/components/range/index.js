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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var classnames_1 = require("classnames");
var prop_types_1 = require("prop-types");
var react_1 = require("react");
var components_1 = require("@tarojs/components");
var utils_1 = require("../../common/utils");
var AtRange = /** @class */ (function (_super) {
    __extends(AtRange, _super);
    function AtRange(props) {
        var _this = _super.call(this, props) || this;
        _this.handleClick = function (event) {
            if (_this.currentSlider && !_this.props.disabled) {
                var sliderValue = 0;
                var detail = utils_1.getEventDetail(event);
                sliderValue = detail.x - _this.left;
                _this.setSliderValue(_this.currentSlider, sliderValue, 'onChange');
            }
        };
        var _a = props.min, min = _a === void 0 ? 0 : _a, _b = props.max, max = _b === void 0 ? 100 : _b;
        // range 宽度
        _this.width = 0;
        // range 到屏幕左边的距离
        _this.left = 0;
        _this.deltaValue = max - min;
        _this.currentSlider = '';
        _this.state = {
            aX: 0,
            bX: 0
        };
        return _this;
    }
    AtRange.prototype.handleTouchMove = function (sliderName, event) {
        if (this.props.disabled)
            return;
        event.stopPropagation();
        var clientX = event.touches[0].clientX;
        this.setSliderValue(sliderName, clientX - this.left, 'onChange');
    };
    AtRange.prototype.handleTouchEnd = function (sliderName) {
        if (this.props.disabled)
            return;
        this.currentSlider = sliderName;
        this.triggerEvent('onAfterChange');
    };
    AtRange.prototype.setSliderValue = function (sliderName, targetValue, funcName) {
        var _a, _b;
        var _this = this;
        var distance = Math.min(Math.max(targetValue, 0), this.width);
        var sliderValue = Math.floor((distance / this.width) * 100);
        if (funcName) {
            this.setState((_a = {},
                _a[sliderName] = sliderValue,
                _a), function () { return _this.triggerEvent(funcName); });
        }
        else {
            this.setState((_b = {},
                _b[sliderName] = sliderValue,
                _b));
        }
    };
    AtRange.prototype.setValue = function (value) {
        var _a = this.props.min, min = _a === void 0 ? 0 : _a;
        var aX = Math.round(((value[0] - min) / this.deltaValue) * 100); // fix issue #670
        var bX = Math.round(((value[1] - min) / this.deltaValue) * 100); // fix issue #670
        this.setState({ aX: aX, bX: bX });
    };
    AtRange.prototype.triggerEvent = function (funcName) {
        var _a = this.props.min, min = _a === void 0 ? 0 : _a;
        var _b = this.state, aX = _b.aX, bX = _b.bX;
        var a = Math.round((aX / 100) * this.deltaValue) + min; // fix issue #670
        var b = Math.round((bX / 100) * this.deltaValue) + min; // fix issue #670
        var result = [a, b].sort(function (x, y) { return x - y; });
        if (funcName === 'onChange') {
            this.props.onChange && this.props.onChange(result);
        }
        else if (funcName === 'onAfterChange') {
            this.props.onAfterChange && this.props.onAfterChange(result);
        }
    };
    AtRange.prototype.updatePos = function () {
        var _this = this;
        utils_1.delayQuerySelector('.at-range__container', 0).then(function (rect) {
            _this.width = Math.round(rect[0].width);
            _this.left = Math.round(rect[0].left);
        });
    };
    AtRange.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
        var value = nextProps.value;
        this.updatePos();
        if (this.props.value[0] !== value[0] ||
            this.props.value[1] !== value[1]) {
            this.setValue(value);
        }
    };
    AtRange.prototype.componentDidMount = function () {
        var value = this.props.value;
        this.updatePos();
        this.setValue(value);
    };
    AtRange.prototype.render = function () {
        var _a = this.props, className = _a.className, customStyle = _a.customStyle, sliderStyle = _a.sliderStyle, railStyle = _a.railStyle, trackStyle = _a.trackStyle, blockSize = _a.blockSize, disabled = _a.disabled;
        var rootCls = classnames_1["default"]('at-range', {
            'at-range--disabled': disabled
        }, className);
        var _b = this.state, aX = _b.aX, bX = _b.bX;
        var sliderCommonStyle = {
            width: blockSize ? blockSize + "PX" : '',
            height: blockSize ? blockSize + "PX" : '',
            marginLeft: blockSize ? -blockSize / 2 + "PX" : ''
        };
        var sliderAStyle = __assign(__assign({}, sliderCommonStyle), { left: aX + "%" });
        var sliderBStyle = __assign(__assign({}, sliderCommonStyle), { left: bX + "%" });
        var containerStyle = {
            height: blockSize ? blockSize + "PX" : ''
        };
        var smallerX = Math.min(aX, bX);
        var deltaX = Math.abs(aX - bX);
        var atTrackStyle = {
            left: smallerX + "%",
            width: deltaX + "%"
        };
        return (react_1["default"].createElement(components_1.View, { className: rootCls, style: customStyle, onClick: this.handleClick },
            react_1["default"].createElement(components_1.View, { className: 'at-range__container', style: containerStyle },
                react_1["default"].createElement(components_1.View, { className: 'at-range__rail', style: railStyle }),
                react_1["default"].createElement(components_1.View, { className: 'at-range__track', style: utils_1.mergeStyle(atTrackStyle, trackStyle) }),
                react_1["default"].createElement(components_1.View, { className: 'at-range__slider', style: utils_1.mergeStyle(sliderAStyle, sliderStyle), onTouchMove: this.handleTouchMove.bind(this, 'aX'), onTouchEnd: this.handleTouchEnd.bind(this, 'aX') }),
                react_1["default"].createElement(components_1.View, { className: 'at-range__slider', style: utils_1.mergeStyle(sliderBStyle, sliderStyle), onTouchMove: this.handleTouchMove.bind(this, 'bX'), onTouchEnd: this.handleTouchEnd.bind(this, 'bX') }))));
    };
    return AtRange;
}(react_1["default"].Component));
exports["default"] = AtRange;
AtRange.defaultProps = {
    customStyle: '',
    className: '',
    sliderStyle: '',
    railStyle: '',
    trackStyle: '',
    value: [0, 0],
    min: 0,
    max: 100,
    disabled: false,
    blockSize: 0
};
AtRange.propTypes = {
    customStyle: prop_types_1["default"].oneOfType([prop_types_1["default"].object, prop_types_1["default"].string]),
    className: prop_types_1["default"].oneOfType([prop_types_1["default"].array, prop_types_1["default"].string]),
    sliderStyle: prop_types_1["default"].oneOfType([prop_types_1["default"].object, prop_types_1["default"].string]),
    railStyle: prop_types_1["default"].oneOfType([prop_types_1["default"].object, prop_types_1["default"].string]),
    trackStyle: prop_types_1["default"].oneOfType([prop_types_1["default"].object, prop_types_1["default"].string]),
    value: prop_types_1["default"].array,
    min: prop_types_1["default"].number,
    max: prop_types_1["default"].number,
    disabled: prop_types_1["default"].bool,
    blockSize: prop_types_1["default"].number,
    onChange: prop_types_1["default"].func,
    onAfterChange: prop_types_1["default"].func
};
//# sourceMappingURL=index.js.map