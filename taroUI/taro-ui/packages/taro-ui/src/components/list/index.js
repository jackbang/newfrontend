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
var AtList = /** @class */ (function (_super) {
    __extends(AtList, _super);
    function AtList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AtList.prototype.render = function () {
        var rootClass = classnames_1["default"]('at-list', {
            'at-list--no-border': !this.props.hasBorder
        }, this.props.className);
        return react_1["default"].createElement(components_1.View, { className: rootClass }, this.props.children);
    };
    return AtList;
}(react_1["default"].Component));
exports["default"] = AtList;
AtList.defaultProps = {
    hasBorder: true
};
AtList.propTypes = {
    hasBorder: prop_types_1["default"].bool
};
//# sourceMappingURL=index.js.map