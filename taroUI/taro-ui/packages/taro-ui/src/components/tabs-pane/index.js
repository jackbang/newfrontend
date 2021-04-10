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
var AtTabsPane = /** @class */ (function (_super) {
    __extends(AtTabsPane, _super);
    function AtTabsPane() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AtTabsPane.prototype.render = function () {
        var _a = this.props, customStyle = _a.customStyle, className = _a.className, tabDirection = _a.tabDirection, index = _a.index, current = _a.current;
        return (react_1["default"].createElement(components_1.View, { className: classnames_1["default"]({
                'at-tabs-pane': true,
                'at-tabs-pane--vertical': tabDirection === 'vertical',
                'at-tabs-pane--active': index === current,
                'at-tabs-pane--inactive': index !== current
            }, className), style: customStyle }, this.props.children));
    };
    return AtTabsPane;
}(react_1["default"].Component));
exports["default"] = AtTabsPane;
AtTabsPane.defaultProps = {
    customStyle: '',
    className: '',
    tabDirection: 'horizontal',
    index: 0,
    current: 0
};
AtTabsPane.propTypes = {
    customStyle: prop_types_1["default"].oneOfType([prop_types_1["default"].object, prop_types_1["default"].string]),
    className: prop_types_1["default"].oneOfType([prop_types_1["default"].array, prop_types_1["default"].string]),
    tabDirection: prop_types_1["default"].oneOf(['horizontal', 'vertical']),
    index: prop_types_1["default"].number,
    current: prop_types_1["default"].number
};
//# sourceMappingURL=index.js.map