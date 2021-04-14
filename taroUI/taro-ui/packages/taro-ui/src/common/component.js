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
var react_1 = require("react");
var objectToString = function (style) {
    if (style && typeof style === 'object') {
        var styleStr_1 = '';
        Object.keys(style).forEach(function (key) {
            var lowerCaseKey = key.replace(/([A-Z])/g, '-$1').toLowerCase();
            styleStr_1 += lowerCaseKey + ":" + style[key] + ";";
        });
        return styleStr_1;
    }
    else if (style && typeof style === 'string') {
        return style;
    }
    return '';
};
var AtComponent = /** @class */ (function (_super) {
    __extends(AtComponent, _super);
    function AtComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 合并 style
     * @param {Object|String} style1
     * @param {Object|String} style2
     * @returns {String}
     */
    AtComponent.prototype.mergeStyle = function (style1, style2) {
        if (style1 &&
            typeof style1 === 'object' &&
            style2 &&
            typeof style2 === 'object') {
            return Object.assign({}, style1, style2);
        }
        return objectToString(style1) + objectToString(style2);
    };
    return AtComponent;
}(react_1.Component));
exports["default"] = AtComponent;
//# sourceMappingURL=component.js.map