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
var AtSwitch = /** @class */ (function (_super) {
    __extends(AtSwitch, _super);
    function AtSwitch() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleChange = function (event) {
            var _a = event.detail, value = _a.value, checked = _a.checked;
            var state = typeof value === 'undefined' ? checked : value;
            _this.props.onChange && _this.props.onChange(state);
        };
        return _this;
    }
    AtSwitch.prototype.render = function () {
        var _a = this.props, customStyle = _a.customStyle, className = _a.className, disabled = _a.disabled, border = _a.border, title = _a.title, checked = _a.checked, color = _a.color;
        var rootCls = classnames_1["default"]('at-switch', {
            'at-switch--without-border': !border
        }, className);
        var containerCls = classnames_1["default"]('at-switch__container', {
            'at-switch--disabled': disabled
        });
        return (react_1["default"].createElement(components_1.View, { className: rootCls, style: customStyle },
            react_1["default"].createElement(components_1.View, { className: 'at-switch__title' }, title),
            react_1["default"].createElement(components_1.View, { className: containerCls },
                react_1["default"].createElement(components_1.View, { className: 'at-switch__mask' }),
                react_1["default"].createElement(components_1.Switch, { className: 'at-switch__switch', checked: checked, color: color, onChange: this.handleChange }))));
    };
    return AtSwitch;
}(react_1["default"].Component));
exports["default"] = AtSwitch;
AtSwitch.defaultProps = {
    customStyle: '',
    className: '',
    title: '',
    color: '#6190e8',
    border: true,
    disabled: false,
    checked: false
};
AtSwitch.propTypes = {
    customStyle: prop_types_1["default"].oneOfType([prop_types_1["default"].object, prop_types_1["default"].string]),
    className: prop_types_1["default"].oneOfType([prop_types_1["default"].array, prop_types_1["default"].string]),
    title: prop_types_1["default"].string,
    color: prop_types_1["default"].string,
    checked: prop_types_1["default"].bool,
    border: prop_types_1["default"].bool,
    disabled: prop_types_1["default"].bool,
    onChange: prop_types_1["default"].func
};
//# sourceMappingURL=index.js.map