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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
exports.__esModule = true;
var classnames_1 = require("classnames");
var prop_types_1 = require("prop-types");
var react_1 = require("react");
var components_1 = require("@tarojs/components");
var AtCheckbox = /** @class */ (function (_super) {
    __extends(AtCheckbox, _super);
    function AtCheckbox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AtCheckbox.prototype.handleClick = function (idx) {
        var _a = this.props, selectedList = _a.selectedList, options = _a.options;
        var option = options[idx];
        var disabled = option.disabled, value = option.value;
        if (disabled)
            return;
        var selectedSet = new Set(selectedList);
        if (!selectedSet.has(value)) {
            selectedSet.add(value);
        }
        else {
            selectedSet["delete"](value);
        }
        this.props.onChange(__spreadArray([], selectedSet));
    };
    AtCheckbox.prototype.render = function () {
        var _this = this;
        var _a = this.props, customStyle = _a.customStyle, className = _a.className, options = _a.options, selectedList = _a.selectedList;
        var rootCls = classnames_1["default"]('at-checkbox', className);
        return (react_1["default"].createElement(components_1.View, { className: rootCls, style: customStyle }, options.map(function (option, idx) {
            var value = option.value, disabled = option.disabled, label = option.label, desc = option.desc;
            var optionCls = classnames_1["default"]('at-checkbox__option', {
                'at-checkbox__option--disabled': disabled,
                'at-checkbox__option--selected': selectedList.includes(value)
            });
            return (react_1["default"].createElement(components_1.View, { className: optionCls, key: value, onClick: _this.handleClick.bind(_this, idx) },
                react_1["default"].createElement(components_1.View, { className: 'at-checkbox__option-wrap' },
                    react_1["default"].createElement(components_1.View, { className: 'at-checkbox__option-cnt' },
                        react_1["default"].createElement(components_1.View, { className: 'at-checkbox__icon-cnt' },
                            react_1["default"].createElement(components_1.Text, { className: 'at-icon at-icon-check' })),
                        react_1["default"].createElement(components_1.View, { className: 'at-checkbox__title' }, label)),
                    desc && react_1["default"].createElement(components_1.View, { className: 'at-checkbox__desc' }, desc))));
        })));
    };
    return AtCheckbox;
}(react_1["default"].Component));
exports["default"] = AtCheckbox;
AtCheckbox.defaultProps = {
    customStyle: '',
    className: '',
    options: [],
    selectedList: [],
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onChange: function () { }
};
AtCheckbox.propTypes = {
    customStyle: prop_types_1["default"].oneOfType([prop_types_1["default"].object, prop_types_1["default"].string]),
    className: prop_types_1["default"].oneOfType([prop_types_1["default"].array, prop_types_1["default"].string]),
    options: prop_types_1["default"].array,
    selectedList: prop_types_1["default"].array,
    onChange: prop_types_1["default"].func
};
//# sourceMappingURL=index.js.map