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
var AtModalAction = /** @class */ (function (_super) {
    __extends(AtModalAction, _super);
    function AtModalAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AtModalAction.prototype.render = function () {
        var rootClass = classnames_1["default"]('at-modal__footer', {
            'at-modal__footer--simple': this.props.isSimple
        }, this.props.className);
        return (react_1["default"].createElement(components_1.View, { className: rootClass },
            react_1["default"].createElement(components_1.View, { className: 'at-modal__action' }, this.props.children)));
    };
    return AtModalAction;
}(react_1["default"].Component));
exports["default"] = AtModalAction;
AtModalAction.defaultProps = {
    isSimple: false
};
AtModalAction.propTypes = {
    isSimple: prop_types_1["default"].bool
};
//# sourceMappingURL=index.js.map