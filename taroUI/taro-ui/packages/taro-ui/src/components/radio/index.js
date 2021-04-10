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
var AtRadio = /** @class */ (function (_super) {
    __extends(AtRadio, _super);
    function AtRadio() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AtRadio.prototype.handleClick = function (option, event) {
        if (option.disabled)
            return;
        this.props.onClick(option.value, event);
    };
    AtRadio.prototype.render = function () {
        var _this = this;
        var _a = this.props, customStyle = _a.customStyle, className = _a.className, options = _a.options, value = _a.value;
        return (react_1["default"].createElement(components_1.View, { className: classnames_1["default"]('at-radio', className), style: customStyle }, options.map(function (option) { return (react_1["default"].createElement(components_1.View, { key: option.value, onClick: _this.handleClick.bind(_this, option), className: classnames_1["default"]({
                'at-radio__option': true,
                'at-radio__option--disabled': option.disabled
            }) },
            react_1["default"].createElement(components_1.View, { className: 'at-radio__option-wrap' },
                react_1["default"].createElement(components_1.View, { className: 'at-radio__option-container' },
                    react_1["default"].createElement(components_1.View, { className: 'at-radio__title' }, option.label),
                    react_1["default"].createElement(components_1.View, { className: classnames_1["default"]({
                            'at-radio__icon': true,
                            'at-radio__icon--checked': value === option.value
                        }) },
                        react_1["default"].createElement(components_1.Text, { className: 'at-icon at-icon-check' }))),
                option.desc && (react_1["default"].createElement(components_1.View, { className: 'at-radio__desc' }, option.desc))))); })));
    };
    return AtRadio;
}(react_1["default"].Component));
exports["default"] = AtRadio;
AtRadio.defaultProps = {
    customStyle: '',
    className: '',
    value: '',
    options: [],
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onClick: function () { }
};
AtRadio.propTypes = {
    customStyle: prop_types_1["default"].oneOfType([prop_types_1["default"].object, prop_types_1["default"].string]),
    className: prop_types_1["default"].oneOfType([prop_types_1["default"].array, prop_types_1["default"].string]),
    value: prop_types_1["default"].string,
    options: prop_types_1["default"].array,
    onClick: prop_types_1["default"].func
};
//# sourceMappingURL=index.js.map