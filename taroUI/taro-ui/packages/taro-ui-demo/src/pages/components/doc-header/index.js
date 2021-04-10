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
require("./index.scss");
var DocsHeader = /** @class */ (function (_super) {
    __extends(DocsHeader, _super);
    function DocsHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DocsHeader.prototype.render = function () {
        var title = this.props.title;
        return (react_1["default"].createElement(components_1.View, { className: 'doc-header' },
            react_1["default"].createElement(components_1.View, { className: 'doc-header__title' }, title)));
    };
    return DocsHeader;
}(react_1["default"].Component));
exports["default"] = DocsHeader;
DocsHeader.defaultProps = {
    title: '标题'
};
DocsHeader.propTypes = {
    title: prop_types_1["default"].string
};
//# sourceMappingURL=index.js.map