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
var AtForm = /** @class */ (function (_super) {
    __extends(AtForm, _super);
    function AtForm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AtForm.prototype.onSubmit = function () {
        this.props.onSubmit && this.props.onSubmit(arguments);
    };
    AtForm.prototype.onReset = function () {
        this.props.onReset && this.props.onReset(arguments);
    };
    AtForm.prototype.render = function () {
        var _a = this.props, customStyle = _a.customStyle, className = _a.className, reportSubmit = _a.reportSubmit;
        var rootCls = classnames_1["default"]('at-form', className);
        return (react_1["default"].createElement(components_1.Form, { className: rootCls, style: customStyle, onSubmit: this.onSubmit.bind(this), reportSubmit: reportSubmit, onReset: this.onReset.bind(this) }, this.props.children));
    };
    return AtForm;
}(react_1["default"].Component));
exports["default"] = AtForm;
AtForm.defaultProps = {
    customStyle: '',
    className: '',
    reportSubmit: false
};
AtForm.propTypes = {
    customStyle: prop_types_1["default"].oneOfType([prop_types_1["default"].object, prop_types_1["default"].string]),
    className: prop_types_1["default"].oneOfType([prop_types_1["default"].array, prop_types_1["default"].string]),
    reportSubmit: prop_types_1["default"].bool,
    onSubmit: prop_types_1["default"].func,
    onReset: prop_types_1["default"].func
};
//# sourceMappingURL=index.js.map