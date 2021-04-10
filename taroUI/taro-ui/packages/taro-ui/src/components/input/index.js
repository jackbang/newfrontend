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
function getInputProps(props) {
    var actualProps = {
        type: props.type,
        maxLength: props.maxlength,
        disabled: props.disabled,
        password: false
    };
    switch (actualProps.type) {
        case 'phone':
            actualProps.type = 'number';
            actualProps.maxLength = 11;
            break;
        case 'password':
            actualProps.type = 'text';
            actualProps.password = true;
            break;
        default:
            break;
    }
    if (!props.disabled && !props.editable) {
        actualProps.disabled = true;
    }
    return actualProps;
}
var AtInput = /** @class */ (function (_super) {
    __extends(AtInput, _super);
    function AtInput() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // TODO: 有待考证是否为合理方式处理 #840
        _this.inputClearing = false;
        _this.handleInput = function (event) {
            return _this.props.onChange(event.detail.value, event);
        };
        _this.handleFocus = function (event) {
            if (typeof _this.props.onFocus === 'function') {
                _this.props.onFocus(event.detail.value, event);
            }
        };
        _this.handleBlur = function (event) {
            if (typeof _this.props.onBlur === 'function') {
                _this.props.onBlur(event.detail.value, event);
            }
            if (event.type === 'blur' && !_this.inputClearing) {
                // fix # 583 AtInput 不触发 onChange 的问题
                _this.props.onChange(event.detail.value, event);
            }
            // 还原状态
            _this.inputClearing = false;
        };
        _this.handleConfirm = function (event) {
            if (typeof _this.props.onConfirm === 'function') {
                _this.props.onConfirm(event.detail.value, event);
            }
        };
        _this.handleClick = function (event) {
            if (!_this.props.editable && typeof _this.props.onClick === 'function') {
                _this.props.onClick(event);
            }
        };
        _this.handleClearValue = function (event) {
            _this.inputClearing = true;
            _this.props.onChange('', event);
        };
        _this.handleKeyboardHeightChange = function (event) {
            if (typeof _this.props.onKeyboardHeightChange === 'function') {
                _this.props.onKeyboardHeightChange(event);
            }
        };
        _this.handleErrorClick = function (event) {
            if (typeof _this.props.onErrorClick === 'function') {
                _this.props.onErrorClick(event);
            }
        };
        return _this;
    }
    AtInput.prototype.render = function () {
        var _a = this.props, className = _a.className, customStyle = _a.customStyle, name = _a.name, cursorSpacing = _a.cursorSpacing, confirmType = _a.confirmType, cursor = _a.cursor, selectionStart = _a.selectionStart, selectionEnd = _a.selectionEnd, adjustPosition = _a.adjustPosition, border = _a.border, title = _a.title, error = _a.error, clear = _a.clear, placeholder = _a.placeholder, placeholderStyle = _a.placeholderStyle, placeholderClass = _a.placeholderClass, autoFocus = _a.autoFocus, focus = _a.focus, value = _a.value, required = _a.required;
        var _b = getInputProps(this.props), type = _b.type, maxlength = _b.maxlength, disabled = _b.disabled, password = _b.password;
        var rootCls = classnames_1["default"]('at-input', {
            'at-input--without-border': !border
        }, className);
        var containerCls = classnames_1["default"]('at-input__container', {
            'at-input--error': error,
            'at-input--disabled': disabled
        });
        var overlayCls = classnames_1["default"]('at-input__overlay', {
            'at-input__overlay--hidden': !disabled
        });
        var placeholderCls = classnames_1["default"]('placeholder', placeholderClass);
        return (react_1["default"].createElement(components_1.View, { className: rootCls, style: customStyle },
            react_1["default"].createElement(components_1.View, { className: containerCls },
                react_1["default"].createElement(components_1.View, { className: overlayCls, onClick: this.handleClick }),
                title && (react_1["default"].createElement(components_1.Label, { className: "at-input__title " + (required && 'at-input__title--required'), "for": name }, title)),
                react_1["default"].createElement(components_1.Input, { className: 'at-input__input', id: name, name: name, type: type, password: password, placeholderStyle: placeholderStyle, placeholderClass: placeholderCls, placeholder: placeholder, cursorSpacing: cursorSpacing, maxlength: maxlength, autoFocus: autoFocus, focus: focus, value: value, confirmType: confirmType, cursor: cursor, selectionStart: selectionStart, selectionEnd: selectionEnd, adjustPosition: adjustPosition, onInput: this.handleInput, onFocus: this.handleFocus, onBlur: this.handleBlur, onConfirm: this.handleConfirm, 
                    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                    // @ts-ignore
                    onKeyboardHeightChange: this.handleKeyboardHeightChange }),
                clear && value && (react_1["default"].createElement(components_1.View, { className: 'at-input__icon', onTouchEnd: this.handleClearValue },
                    react_1["default"].createElement(components_1.Text, { className: 'at-icon at-icon-close-circle at-input__icon-close' }))),
                error && (react_1["default"].createElement(components_1.View, { className: 'at-input__icon', onTouchStart: this.handleErrorClick },
                    react_1["default"].createElement(components_1.Text, { className: 'at-icon at-icon-alert-circle at-input__icon-alert' }))),
                react_1["default"].createElement(components_1.View, { className: 'at-input__children' }, this.props.children))));
    };
    return AtInput;
}(react_1["default"].Component));
exports["default"] = AtInput;
AtInput.defaultProps = {
    className: '',
    customStyle: '',
    value: '',
    name: '',
    placeholder: '',
    placeholderStyle: '',
    placeholderClass: '',
    title: '',
    cursorSpacing: 50,
    confirmType: 'done',
    cursor: 0,
    selectionStart: -1,
    selectionEnd: -1,
    adjustPosition: true,
    maxlength: 140,
    type: 'text',
    disabled: false,
    border: true,
    editable: true,
    error: false,
    clear: false,
    autoFocus: false,
    focus: false,
    required: false,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onChange: function () { }
};
AtInput.propTypes = {
    className: prop_types_1["default"].oneOfType([prop_types_1["default"].string, prop_types_1["default"].array]),
    customStyle: prop_types_1["default"].oneOfType([prop_types_1["default"].string, prop_types_1["default"].object]),
    value: prop_types_1["default"].oneOfType([prop_types_1["default"].string, prop_types_1["default"].number]),
    name: prop_types_1["default"].string,
    placeholder: prop_types_1["default"].string,
    placeholderStyle: prop_types_1["default"].string,
    placeholderClass: prop_types_1["default"].string,
    title: prop_types_1["default"].string,
    confirmType: prop_types_1["default"].string,
    cursor: prop_types_1["default"].oneOfType([prop_types_1["default"].string, prop_types_1["default"].number]),
    selectionStart: prop_types_1["default"].oneOfType([prop_types_1["default"].string, prop_types_1["default"].number]),
    selectionEnd: prop_types_1["default"].oneOfType([prop_types_1["default"].string, prop_types_1["default"].number]),
    adjustPosition: prop_types_1["default"].bool,
    cursorSpacing: prop_types_1["default"].oneOfType([prop_types_1["default"].string, prop_types_1["default"].number]),
    maxlength: prop_types_1["default"].oneOfType([prop_types_1["default"].string, prop_types_1["default"].number]),
    type: prop_types_1["default"].string,
    disabled: prop_types_1["default"].bool,
    border: prop_types_1["default"].bool,
    editable: prop_types_1["default"].bool,
    error: prop_types_1["default"].bool,
    clear: prop_types_1["default"].bool,
    autoFocus: prop_types_1["default"].bool,
    focus: prop_types_1["default"].bool,
    onChange: prop_types_1["default"].func,
    onFocus: prop_types_1["default"].func,
    onBlur: prop_types_1["default"].func,
    onConfirm: prop_types_1["default"].func,
    onErrorClick: prop_types_1["default"].func,
    onClick: prop_types_1["default"].func,
    required: prop_types_1["default"].bool
};
//# sourceMappingURL=index.js.map