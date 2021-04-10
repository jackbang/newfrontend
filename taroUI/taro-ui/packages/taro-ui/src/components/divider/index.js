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
var AtDivider = /** @class */ (function (_super) {
    __extends(AtDivider, _super);
    function AtDivider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AtDivider.prototype.render = function () {
        var _a = this.props, className = _a.className, customStyle = _a.customStyle, content = _a.content, height = _a.height, fontColor = _a.fontColor, fontSize = _a.fontSize, lineColor = _a.lineColor;
        var rootStyle = {
            height: height ? "" + utils_1.pxTransform(Number(height)) : ''
        };
        var fontStyle = {
            color: fontColor,
            'font-size': fontSize ? "" + utils_1.pxTransform(Number(fontSize)) : ''
        };
        var lineStyle = {
            backgroundColor: lineColor
        };
        return (react_1["default"].createElement(components_1.View, { className: classnames_1["default"]('at-divider', className), style: utils_1.mergeStyle(rootStyle, customStyle) },
            react_1["default"].createElement(components_1.View, { className: 'at-divider__content', style: fontStyle }, content === '' ? this.props.children : content),
            react_1["default"].createElement(components_1.View, { className: 'at-divider__line', style: lineStyle })));
    };
    return AtDivider;
}(react_1["default"].Component));
exports["default"] = AtDivider;
AtDivider.defaultProps = {
    content: '',
    height: 0,
    fontColor: '',
    fontSize: 0,
    lineColor: ''
};
AtDivider.propTypes = {
    customStyle: prop_types_1["default"].oneOfType([prop_types_1["default"].object, prop_types_1["default"].string]),
    className: prop_types_1["default"].oneOfType([prop_types_1["default"].array, prop_types_1["default"].string]),
    content: prop_types_1["default"].string,
    height: prop_types_1["default"].oneOfType([prop_types_1["default"].number, prop_types_1["default"].string]),
    fontColor: prop_types_1["default"].string,
    fontSize: prop_types_1["default"].oneOfType([prop_types_1["default"].number, prop_types_1["default"].string]),
    lineColor: prop_types_1["default"].string
};
//# sourceMappingURL=index.js.map