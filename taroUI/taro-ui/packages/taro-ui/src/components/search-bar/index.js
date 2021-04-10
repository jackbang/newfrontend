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
var AtSearchBar = /** @class */ (function (_super) {
    __extends(AtSearchBar, _super);
    function AtSearchBar(props) {
        var _this = _super.call(this, props) || this;
        _this.handleFocus = function (event) {
            _this.setState({
                isFocus: true
            });
            _this.props.onFocus && _this.props.onFocus(event);
        };
        _this.handleBlur = function (event) {
            _this.setState({
                isFocus: false
            });
            _this.props.onBlur && _this.props.onBlur(event);
        };
        _this.handleChange = function (e) {
            _this.props.onChange(e.target.value, e);
        };
        _this.handleClear = function (event) {
            if (_this.props.onClear) {
                _this.props.onClear(event);
            }
            else {
                _this.props.onChange('', event);
            }
        };
        _this.handleConfirm = function (event) {
            _this.props.onConfirm && _this.props.onConfirm(event);
        };
        _this.handleActionClick = function (event) {
            _this.props.onActionClick && _this.props.onActionClick(event);
        };
        _this.state = {
            isFocus: !!props.focus
        };
        return _this;
    }
    AtSearchBar.prototype.render = function () {
        var _a = this.props, value = _a.value, placeholder = _a.placeholder, maxLength = _a.maxLength, fixed = _a.fixed, disabled = _a.disabled, showActionButton = _a.showActionButton, _b = _a.actionName, actionName = _b === void 0 ? '搜索' : _b, inputType = _a.inputType, // 处理issue#464
        className = _a.className, customStyle = _a.customStyle;
        var isFocus = this.state.isFocus;
        var fontSize = 14;
        var rootCls = classnames_1["default"]('at-search-bar', {
            'at-search-bar--fixed': fixed
        }, className);
        var placeholderWrapStyle = {};
        var actionStyle = {};
        if (isFocus || (!isFocus && value)) {
            actionStyle.opacity = 1;
            actionStyle.marginRight = "0";
            placeholderWrapStyle.flexGrow = 0;
        }
        else if (!isFocus && !value) {
            placeholderWrapStyle.flexGrow = 1;
            actionStyle.opacity = 0;
            actionStyle.marginRight = "-" + ((actionName.length + 1) * fontSize + fontSize / 2 + 10) + "px";
        }
        if (showActionButton) {
            actionStyle.opacity = 1;
            actionStyle.marginRight = "0";
        }
        var clearIconStyle = { display: 'flex' };
        var placeholderStyle = { visibility: 'hidden' };
        if (!value.length) {
            clearIconStyle.display = 'none';
            placeholderStyle.visibility = 'visible';
        }
        return (react_1["default"].createElement(components_1.View, { className: rootCls, style: customStyle },
            react_1["default"].createElement(components_1.View, { className: 'at-search-bar__input-cnt' },
                react_1["default"].createElement(components_1.View, { className: 'at-search-bar__placeholder-wrap', style: placeholderWrapStyle },
                    react_1["default"].createElement(components_1.Text, { className: 'at-icon at-icon-search' }),
                    react_1["default"].createElement(components_1.Text, { className: 'at-search-bar__placeholder', style: placeholderStyle }, isFocus ? '' : placeholder)),
                react_1["default"].createElement(components_1.Input, { className: 'at-search-bar__input', type: inputType, confirmType: 'search', value: value, focus: isFocus, disabled: disabled, maxlength: maxLength, onInput: this.handleChange, onFocus: this.handleFocus, onBlur: this.handleBlur, onConfirm: this.handleConfirm }),
                react_1["default"].createElement(components_1.View, { className: 'at-search-bar__clear', style: clearIconStyle, onTouchStart: this.handleClear },
                    react_1["default"].createElement(components_1.Text, { className: 'at-icon at-icon-close-circle' }))),
            react_1["default"].createElement(components_1.View, { className: 'at-search-bar__action', style: actionStyle, onClick: this.handleActionClick }, actionName)));
    };
    return AtSearchBar;
}(react_1["default"].Component));
exports["default"] = AtSearchBar;
AtSearchBar.defaultProps = {
    value: '',
    placeholder: '搜索',
    maxLength: 140,
    fixed: false,
    focus: false,
    disabled: false,
    showActionButton: false,
    actionName: '搜索',
    inputType: 'text',
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onChange: function () { }
};
AtSearchBar.propTypes = {
    value: prop_types_1["default"].string,
    placeholder: prop_types_1["default"].string,
    maxLength: prop_types_1["default"].number,
    fixed: prop_types_1["default"].bool,
    focus: prop_types_1["default"].bool,
    disabled: prop_types_1["default"].bool,
    showActionButton: prop_types_1["default"].bool,
    actionName: prop_types_1["default"].string,
    inputType: prop_types_1["default"].oneOf(['text', 'number', 'idcard', 'digit']),
    onChange: prop_types_1["default"].func,
    onFocus: prop_types_1["default"].func,
    onBlur: prop_types_1["default"].func,
    onConfirm: prop_types_1["default"].func,
    onActionClick: prop_types_1["default"].func,
    onClear: prop_types_1["default"].func
};
//# sourceMappingURL=index.js.map