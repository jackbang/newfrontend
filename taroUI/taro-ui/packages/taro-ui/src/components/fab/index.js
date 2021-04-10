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
var AtFab = /** @class */ (function (_super) {
    __extends(AtFab, _super);
    function AtFab() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AtFab.prototype.onClick = function (e) {
        if (typeof this.props.onClick === 'function') {
            this.props.onClick(e);
        }
    };
    AtFab.prototype.render = function () {
        var _a;
        var _b = this.props, size = _b.size, className = _b.className, children = _b.children;
        var rootClass = classnames_1["default"]('at-fab', className, (_a = {},
            _a["at-fab--" + size] = size,
            _a));
        return (react_1["default"].createElement(components_1.View, { className: rootClass, onClick: this.onClick.bind(this) }, children));
    };
    return AtFab;
}(react_1["default"].Component));
exports["default"] = AtFab;
AtFab.propTypes = {
    size: prop_types_1["default"].oneOf(['normal', 'small']),
    onClick: prop_types_1["default"].func
};
AtFab.defaultProps = {
    size: 'normal'
};
//# sourceMappingURL=index.js.map