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
var prop_types_1 = require("prop-types");
var react_1 = require("react");
var components_1 = require("@tarojs/components");
var utils_1 = require("../../common/utils");
var AtLoading = /** @class */ (function (_super) {
    __extends(AtLoading, _super);
    function AtLoading() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AtLoading.prototype.render = function () {
        var _a = this.props, color = _a.color, size = _a.size;
        var loadingSize = typeof size === 'string' ? size : String(size);
        var sizeStyle = {
            width: size ? "" + utils_1.pxTransform(parseInt(loadingSize)) : '',
            height: size ? "" + utils_1.pxTransform(parseInt(loadingSize)) : ''
        };
        var colorStyle = {
            border: color ? "1px solid " + color : '',
            borderColor: color ? color + " transparent transparent transparent" : ''
        };
        var ringStyle = Object.assign({}, colorStyle, sizeStyle);
        return (react_1["default"].createElement(components_1.View, { className: 'at-loading', style: sizeStyle },
            react_1["default"].createElement(components_1.View, { className: 'at-loading__ring', style: ringStyle }),
            react_1["default"].createElement(components_1.View, { className: 'at-loading__ring', style: ringStyle }),
            react_1["default"].createElement(components_1.View, { className: 'at-loading__ring', style: ringStyle })));
    };
    return AtLoading;
}(react_1["default"].Component));
exports["default"] = AtLoading;
AtLoading.defaultProps = {
    size: 0,
    color: ''
};
AtLoading.propTypes = {
    size: prop_types_1["default"].oneOfType([prop_types_1["default"].string, prop_types_1["default"].number]),
    color: prop_types_1["default"].oneOfType([prop_types_1["default"].string, prop_types_1["default"].number])
};
//# sourceMappingURL=index.js.map