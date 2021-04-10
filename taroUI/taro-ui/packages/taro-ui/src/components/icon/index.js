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
var AtIcon = /** @class */ (function (_super) {
    __extends(AtIcon, _super);
    function AtIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AtIcon.prototype.handleClick = function () {
        this.props.onClick && this.props.onClick(arguments);
    };
    AtIcon.prototype.render = function () {
        var _a = this.props, customStyle = _a.customStyle, className = _a.className, prefixClass = _a.prefixClass, value = _a.value, size = _a.size, color = _a.color;
        var rootStyle = {
            fontSize: "" + utils_1.pxTransform(parseInt(String(size)) * 2),
            color: color
        };
        var iconName = value ? prefixClass + "-" + value : '';
        return (react_1["default"].createElement(components_1.Text, { className: classnames_1["default"](prefixClass, iconName, className), style: utils_1.mergeStyle(rootStyle, customStyle), onClick: this.handleClick.bind(this) }));
    };
    return AtIcon;
}(react_1["default"].Component));
exports["default"] = AtIcon;
AtIcon.defaultProps = {
    customStyle: '',
    className: '',
    prefixClass: 'at-icon',
    value: '',
    color: '',
    size: 24
};
AtIcon.propTypes = {
    customStyle: prop_types_1["default"].oneOfType([prop_types_1["default"].object, prop_types_1["default"].string]),
    className: prop_types_1["default"].oneOfType([prop_types_1["default"].array, prop_types_1["default"].string]),
    prefixClass: prop_types_1["default"].string,
    value: prop_types_1["default"].string,
    color: prop_types_1["default"].string,
    size: prop_types_1["default"].oneOfType([prop_types_1["default"].string, prop_types_1["default"].number]),
    onClick: prop_types_1["default"].func
};
//# sourceMappingURL=index.js.map