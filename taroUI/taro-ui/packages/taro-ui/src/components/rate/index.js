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
var utils_1 = require("../../common/utils");
var AtRate = /** @class */ (function (_super) {
    __extends(AtRate, _super);
    function AtRate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AtRate.prototype.handleClick = function (event) {
        this.props.onChange && this.props.onChange(event);
    };
    AtRate.prototype.render = function () {
        var _this = this;
        var _a = this.props, customStyle = _a.customStyle, className = _a.className, _b = _a.value, value = _b === void 0 ? 0 : _b, _c = _a.max, max = _c === void 0 ? 5 : _c, size = _a.size, _d = _a.margin, margin = _d === void 0 ? 5 : _d;
        var iconStyle = {
            marginRight: utils_1.pxTransform(margin)
        };
        var starIconStyle = {
            fontSize: size ? size + "px" : ''
        };
        // 生成星星颜色 className 数组，方便在jsx中直接map
        var classNameArr = [];
        var floorValue = Math.floor(value);
        var ceilValue = Math.ceil(value);
        for (var i = 0; i < max; i++) {
            if (floorValue > i) {
                classNameArr.push('at-rate__icon at-rate__icon--on');
            }
            else if (ceilValue - 1 === i) {
                classNameArr.push('at-rate__icon at-rate__icon--half');
            }
            else {
                classNameArr.push('at-rate__icon at-rate__icon--off');
            }
        }
        return (react_1["default"].createElement(components_1.View, { className: classnames_1["default"]('at-rate', className), style: customStyle }, classNameArr.map(function (cls, i) { return (react_1["default"].createElement(components_1.View, { className: cls, key: "at-rate-star-" + i, style: iconStyle, onClick: _this.handleClick.bind(_this, i + 1) },
            react_1["default"].createElement(components_1.Text, { className: 'at-icon at-icon-star-2', style: starIconStyle }),
            react_1["default"].createElement(components_1.View, { className: 'at-rate__left' },
                react_1["default"].createElement(components_1.Text, { className: 'at-icon at-icon-star-2', style: starIconStyle })))); })));
    };
    return AtRate;
}(react_1["default"].Component));
exports["default"] = AtRate;
AtRate.defaultProps = {
    customStyle: '',
    className: '',
    size: 0,
    value: 0,
    max: 5,
    margin: 5
};
AtRate.propTypes = {
    customStyle: prop_types_1["default"].oneOfType([prop_types_1["default"].object, prop_types_1["default"].string]),
    className: prop_types_1["default"].oneOfType([prop_types_1["default"].array, prop_types_1["default"].string]),
    size: prop_types_1["default"].oneOfType([prop_types_1["default"].string, prop_types_1["default"].number]),
    value: prop_types_1["default"].number,
    max: prop_types_1["default"].number,
    margin: prop_types_1["default"].number,
    onChange: prop_types_1["default"].func
};
//# sourceMappingURL=index.js.map