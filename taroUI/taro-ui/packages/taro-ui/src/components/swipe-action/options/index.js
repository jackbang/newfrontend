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
var react_1 = require("react");
var components_1 = require("@tarojs/components");
var AtSwipeActionOptions = /** @class */ (function (_super) {
    __extends(AtSwipeActionOptions, _super);
    function AtSwipeActionOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AtSwipeActionOptions.prototype.render = function () {
        var rootClass = classnames_1["default"]('at-swipe-action__options', this.props.className);
        return (react_1["default"].createElement(components_1.View, { id: "swipeActionOptions-" + this.props.componentId, className: rootClass, style: this.props.customStyle }, this.props.children));
    };
    return AtSwipeActionOptions;
}(react_1["default"].Component));
exports["default"] = AtSwipeActionOptions;
//# sourceMappingURL=index.js.map