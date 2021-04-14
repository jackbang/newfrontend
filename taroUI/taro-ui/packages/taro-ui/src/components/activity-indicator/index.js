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
var index_1 = require("../loading/index");
var AtActivityIndicator = /** @class */ (function (_super) {
    __extends(AtActivityIndicator, _super);
    function AtActivityIndicator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AtActivityIndicator.prototype.render = function () {
        var _a = this.props, color = _a.color, size = _a.size, mode = _a.mode, content = _a.content, isOpened = _a.isOpened;
        var rootClass = classnames_1["default"]('at-activity-indicator', {
            'at-activity-indicator--center': mode === 'center',
            'at-activity-indicator--isopened': isOpened
        }, this.props.className);
        return (react_1["default"].createElement(components_1.View, { className: rootClass },
            react_1["default"].createElement(components_1.View, { className: 'at-activity-indicator__body' },
                react_1["default"].createElement(index_1["default"], { size: size, color: color })),
            content && (react_1["default"].createElement(components_1.Text, { className: 'at-activity-indicator__content' }, content))));
    };
    return AtActivityIndicator;
}(react_1["default"].Component));
exports["default"] = AtActivityIndicator;
AtActivityIndicator.defaultProps = {
    size: 0,
    mode: 'normal',
    color: '',
    content: '',
    className: '',
    isOpened: true
};
AtActivityIndicator.propTypes = {
    size: prop_types_1["default"].number,
    mode: prop_types_1["default"].string,
    color: prop_types_1["default"].string,
    content: prop_types_1["default"].string,
    className: prop_types_1["default"].oneOfType([prop_types_1["default"].array, prop_types_1["default"].string]),
    isOpened: prop_types_1["default"].bool
};
//# sourceMappingURL=index.js.map