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
var SIZE_CLASS = {
    normal: 'normal',
    small: 'small'
};
var TYPE_CLASS = {
    primary: 'primary'
};
var AtTag = /** @class */ (function (_super) {
    __extends(AtTag, _super);
    function AtTag() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AtTag.prototype.onClick = function (event) {
        var _a = this.props, _b = _a.name, name = _b === void 0 ? '' : _b, _c = _a.active, active = _c === void 0 ? false : _c, disabled = _a.disabled, onClick = _a.onClick;
        if (!disabled) {
            typeof onClick === 'function' &&
                onClick({
                    name: name,
                    active: active
                }, event);
        }
    };
    AtTag.prototype.render = function () {
        var _a;
        var _b = this.props, _c = _b.size, size = _c === void 0 ? 'normal' : _c, _d = _b.type, type = _d === void 0 ? '' : _d, _e = _b.circle, circle = _e === void 0 ? false : _e, _f = _b.disabled, disabled = _f === void 0 ? false : _f, _g = _b.active, active = _g === void 0 ? false : _g, customStyle = _b.customStyle;
        var rootClassName = ['at-tag'];
        var classObject = (_a = {},
            _a["at-tag--" + SIZE_CLASS[size]] = SIZE_CLASS[size],
            _a["at-tag--" + type] = TYPE_CLASS[type],
            _a['at-tag--disabled'] = disabled,
            _a['at-tag--active'] = active,
            _a['at-tag--circle'] = circle,
            _a);
        return (react_1["default"].createElement(components_1.View, { className: classnames_1["default"](rootClassName, classObject, this.props.className), style: customStyle, onClick: this.onClick.bind(this) }, this.props.children));
    };
    return AtTag;
}(react_1["default"].Component));
exports["default"] = AtTag;
AtTag.defaultProps = {
    size: 'normal',
    type: '',
    name: '',
    circle: false,
    active: false,
    disabled: false,
    customStyle: {}
};
AtTag.propTypes = {
    size: prop_types_1["default"].oneOf(['normal', 'small']),
    type: prop_types_1["default"].oneOf(['', 'primary']),
    name: prop_types_1["default"].string,
    circle: prop_types_1["default"].bool,
    active: prop_types_1["default"].bool,
    disabled: prop_types_1["default"].bool,
    customStyle: prop_types_1["default"].oneOfType([prop_types_1["default"].object, prop_types_1["default"].string]),
    onClick: prop_types_1["default"].func
};
//# sourceMappingURL=index.js.map