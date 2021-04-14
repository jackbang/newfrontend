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
var AtBadge = /** @class */ (function (_super) {
    __extends(AtBadge, _super);
    function AtBadge(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    AtBadge.prototype.formatValue = function (value, maxValue) {
        if (value === '' || value === null || typeof value === 'undefined')
            return '';
        var numValue = +value;
        if (Number.isNaN(numValue)) {
            return value;
        }
        return numValue > maxValue ? maxValue + "+" : numValue;
    };
    AtBadge.prototype.render = function () {
        var _a = this.props, dot = _a.dot, value = _a.value, _b = _a.maxValue, maxValue = _b === void 0 ? 99 : _b, customStyle = _a.customStyle;
        var rootClassName = ['at-badge'];
        var val = this.formatValue(value, maxValue);
        return (react_1["default"].createElement(components_1.View, { className: classnames_1["default"](rootClassName, this.props.className), style: customStyle },
            this.props.children,
            dot ? (react_1["default"].createElement(components_1.View, { className: 'at-badge__dot' })) : (val !== '' && react_1["default"].createElement(components_1.View, { className: 'at-badge__num' }, val))));
    };
    return AtBadge;
}(react_1["default"].Component));
exports["default"] = AtBadge;
AtBadge.defaultProps = {
    dot: false,
    value: '',
    maxValue: 99,
    customStyle: {},
    className: ''
};
AtBadge.propTypes = {
    dot: prop_types_1["default"].bool,
    value: prop_types_1["default"].oneOfType([prop_types_1["default"].string, prop_types_1["default"].number]),
    maxValue: prop_types_1["default"].number,
    customStyle: prop_types_1["default"].oneOfType([prop_types_1["default"].object, prop_types_1["default"].string]),
    className: prop_types_1["default"].oneOfType([prop_types_1["default"].array, prop_types_1["default"].string])
};
//# sourceMappingURL=index.js.map