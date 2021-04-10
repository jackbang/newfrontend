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
var AtActionSheetItem = /** @class */ (function (_super) {
    __extends(AtActionSheetItem, _super);
    function AtActionSheetItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleClick = function (args) {
            if (typeof _this.props.onClick === 'function') {
                _this.props.onClick(args);
            }
        };
        return _this;
    }
    AtActionSheetItem.prototype.render = function () {
        var rootClass = classnames_1["default"]('at-action-sheet__item', this.props.className);
        return (react_1["default"].createElement(components_1.View, { className: rootClass, onClick: this.handleClick }, this.props.children));
    };
    return AtActionSheetItem;
}(react_1["default"].Component));
exports["default"] = AtActionSheetItem;
AtActionSheetItem.propTypes = {
    onClick: prop_types_1["default"].func
};
//# sourceMappingURL=index.js.map