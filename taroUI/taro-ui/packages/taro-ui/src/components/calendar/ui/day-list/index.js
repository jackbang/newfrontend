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
var components_1 = require("@tarojs/components");
var AtCalendarHeader = /** @class */ (function (_super) {
    __extends(AtCalendarHeader, _super);
    function AtCalendarHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AtCalendarHeader.prototype.render = function () {
        return (react_1["default"].createElement(components_1.View, { className: 'at-calendar__header header' },
            react_1["default"].createElement(components_1.View, { className: 'header__flex' },
                react_1["default"].createElement(components_1.View, { className: 'header__flex-item' }, "\u65E5"),
                react_1["default"].createElement(components_1.View, { className: 'header__flex-item' }, "\u4E00"),
                react_1["default"].createElement(components_1.View, { className: 'header__flex-item' }, "\u4E8C"),
                react_1["default"].createElement(components_1.View, { className: 'header__flex-item' }, "\u4E09"),
                react_1["default"].createElement(components_1.View, { className: 'header__flex-item' }, "\u56DB"),
                react_1["default"].createElement(components_1.View, { className: 'header__flex-item' }, "\u4E94"),
                react_1["default"].createElement(components_1.View, { className: 'header__flex-item' }, "\u516D"))));
    };
    return AtCalendarHeader;
}(react_1["default"].Component));
exports["default"] = AtCalendarHeader;
//# sourceMappingURL=index.js.map