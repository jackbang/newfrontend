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
var AtSegmentedControl = /** @class */ (function (_super) {
    __extends(AtSegmentedControl, _super);
    function AtSegmentedControl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AtSegmentedControl.prototype.handleClick = function (index, event) {
        if (this.props.disabled)
            return;
        this.props.onClick(index, event);
    };
    AtSegmentedControl.prototype.render = function () {
        var _this = this;
        var _a = this.props, _b = _a.customStyle, customStyle = _b === void 0 ? '' : _b, className = _a.className, disabled = _a.disabled, values = _a.values, selectedColor = _a.selectedColor, current = _a.current, color = _a.color, _c = _a.fontSize, fontSize = _c === void 0 ? 28 : _c;
        var rootStyle = {
            borderColor: selectedColor
        };
        var itemStyle = {
            color: selectedColor,
            fontSize: utils_1.pxTransform(fontSize),
            borderColor: selectedColor,
            backgroundColor: color
        };
        var selectedItemStyle = {
            color: color,
            fontSize: utils_1.pxTransform(fontSize),
            borderColor: selectedColor,
            backgroundColor: selectedColor
        };
        var rootCls = classnames_1["default"]('at-segmented-control', {
            'at-segmented-control--disabled': disabled
        }, className);
        return (react_1["default"].createElement(components_1.View, { className: rootCls, style: utils_1.mergeStyle(rootStyle, customStyle) }, values.map(function (value, i) { return (react_1["default"].createElement(components_1.View, { className: classnames_1["default"]('at-segmented-control__item', {
                'at-segmented-control__item--active': current === i
            }), style: current === i ? selectedItemStyle : itemStyle, key: value, onClick: _this.handleClick.bind(_this, i) }, value)); })));
    };
    return AtSegmentedControl;
}(react_1["default"].Component));
exports["default"] = AtSegmentedControl;
AtSegmentedControl.defaultProps = {
    customStyle: '',
    className: '',
    current: 0,
    color: '',
    fontSize: 28,
    disabled: false,
    selectedColor: '',
    values: [],
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onClick: function () { }
};
AtSegmentedControl.propTypes = {
    customStyle: prop_types_1["default"].oneOfType([prop_types_1["default"].object, prop_types_1["default"].string]),
    className: prop_types_1["default"].oneOfType([prop_types_1["default"].array, prop_types_1["default"].string]),
    current: prop_types_1["default"].number,
    color: prop_types_1["default"].string,
    fontSize: prop_types_1["default"].oneOfType([prop_types_1["default"].string, prop_types_1["default"].number]),
    disabled: prop_types_1["default"].bool,
    values: prop_types_1["default"].array,
    onClick: prop_types_1["default"].func
};
//# sourceMappingURL=index.js.map