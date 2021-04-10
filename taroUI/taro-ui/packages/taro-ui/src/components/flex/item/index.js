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
var forEach_1 = require("lodash/forEach");
var prop_types_1 = require("prop-types");
var react_1 = require("react");
var components_1 = require("@tarojs/components");
var AtFlexItem = /** @class */ (function (_super) {
    __extends(AtFlexItem, _super);
    function AtFlexItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AtFlexItem.prototype.render = function () {
        var rootClass = ['at-col'];
        forEach_1["default"](this.props, function (value, key) {
            if (key === 'isAuto' && value) {
                return rootClass.push('at-col--auto');
            }
            if (key === 'isWrap' && value) {
                return rootClass.push('at-col--wrap');
            }
            if (key === 'size' && value) {
                rootClass.push("at-col-" + value);
            }
            rootClass.push("at-col__" + key + "--" + value);
        });
        return react_1["default"].createElement(components_1.View, { className: classnames_1["default"](rootClass) }, this.props.children);
    };
    return AtFlexItem;
}(react_1["default"].Component));
exports["default"] = AtFlexItem;
AtFlexItem.propTypes = {
    isAuto: prop_types_1["default"].bool,
    isWrap: prop_types_1["default"].bool,
    align: prop_types_1["default"].oneOf(['top', 'bottom', 'center']),
    size: prop_types_1["default"].oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    offset: prop_types_1["default"].oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
};
//# sourceMappingURL=index.js.map