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
var AtCountdownItem = /** @class */ (function (_super) {
    __extends(AtCountdownItem, _super);
    function AtCountdownItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AtCountdownItem.prototype.formatNum = function (num) {
        return num <= 9 ? "0" + num : "" + num;
    };
    AtCountdownItem.prototype.render = function () {
        var _a = this.props, num = _a.num, separator = _a.separator;
        return (react_1["default"].createElement(components_1.View, { className: 'at-countdown__item' },
            react_1["default"].createElement(components_1.View, { className: 'at-countdown__time-box' },
                react_1["default"].createElement(components_1.Text, { className: 'at-countdown__time' }, this.formatNum(num))),
            react_1["default"].createElement(components_1.Text, { className: 'at-countdown__separator' }, separator)));
    };
    return AtCountdownItem;
}(react_1["default"].Component));
exports["default"] = AtCountdownItem;
AtCountdownItem.defaultProps = {
    num: 0,
    separator: ':'
};
AtCountdownItem.propTypes = {
    num: prop_types_1["default"].number.isRequired,
    separator: prop_types_1["default"].string
};
//# sourceMappingURL=index.js.map