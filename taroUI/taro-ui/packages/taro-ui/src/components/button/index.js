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
var taro_1 = require("@tarojs/taro");
var index_1 = require("../loading/index");
var SIZE_CLASS = {
    normal: 'normal',
    small: 'small'
};
var TYPE_CLASS = {
    primary: 'primary',
    secondary: 'secondary'
};
var AtButton = /** @class */ (function (_super) {
    __extends(AtButton, _super);
    function AtButton(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            isWEB: taro_1["default"].getEnv() === taro_1["default"].ENV_TYPE.WEB,
            isWEAPP: taro_1["default"].getEnv() === taro_1["default"].ENV_TYPE.WEAPP,
            isALIPAY: taro_1["default"].getEnv() === taro_1["default"].ENV_TYPE.ALIPAY
        };
        return _this;
    }
    AtButton.prototype.onClick = function (event) {
        if (!this.props.disabled) {
            this.props.onClick && this.props.onClick(event);
        }
    };
    AtButton.prototype.onGetUserInfo = function (event) {
        this.props.onGetUserInfo && this.props.onGetUserInfo(event);
    };
    AtButton.prototype.onContact = function (event) {
        this.props.onContact && this.props.onContact(event);
    };
    AtButton.prototype.onGetPhoneNumber = function (event) {
        this.props.onGetPhoneNumber && this.props.onGetPhoneNumber(event);
    };
    AtButton.prototype.onError = function (event) {
        this.props.onError && this.props.onError(event);
    };
    AtButton.prototype.onOpenSetting = function (event) {
        this.props.onOpenSetting && this.props.onOpenSetting(event);
    };
    AtButton.prototype.onSumit = function (event) {
        if (this.state.isWEAPP || this.state.isWEB) {
            // TODO: 3.0 this.$scope
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore
            this.$scope.triggerEvent('submit', event.detail, {
                bubbles: true,
                composed: true
            });
        }
    };
    AtButton.prototype.onReset = function (event) {
        if (this.state.isWEAPP || this.state.isWEB) {
            // TODO: 3.0 this.$scope
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore
            this.$scope.triggerEvent('reset', event.detail, {
                bubbles: true,
                composed: true
            });
        }
    };
    AtButton.prototype.render = function () {
        var _a;
        var _b = this.props, _c = _b.size, size = _c === void 0 ? 'normal' : _c, _d = _b.type, type = _d === void 0 ? '' : _d, circle = _b.circle, full = _b.full, loading = _b.loading, disabled = _b.disabled, customStyle = _b.customStyle, formType = _b.formType, openType = _b.openType, lang = _b.lang, sessionFrom = _b.sessionFrom, sendMessageTitle = _b.sendMessageTitle, sendMessagePath = _b.sendMessagePath, sendMessageImg = _b.sendMessageImg, showMessageCard = _b.showMessageCard, appParameter = _b.appParameter;
        var _e = this.state, isWEAPP = _e.isWEAPP, isALIPAY = _e.isALIPAY, isWEB = _e.isWEB;
        var rootClassName = ['at-button'];
        var classObject = (_a = {},
            _a["at-button--" + SIZE_CLASS[size]] = SIZE_CLASS[size],
            _a['at-button--disabled'] = disabled,
            _a["at-button--" + type] = TYPE_CLASS[type],
            _a['at-button--circle'] = circle,
            _a['at-button--full'] = full,
            _a);
        var loadingColor = type === 'primary' ? '#fff' : '';
        var loadingSize = size === 'small' ? '30' : 0;
        var loadingComponent = null;
        if (loading) {
            loadingComponent = (react_1["default"].createElement(components_1.View, { className: 'at-button__icon' },
                react_1["default"].createElement(index_1["default"], { color: loadingColor, size: loadingSize })));
            rootClassName.push('at-button--icon');
        }
        var webButton = (react_1["default"].createElement(components_1.Button, { className: 'at-button__wxbutton', lang: lang, formType: formType }));
        var button = (react_1["default"].createElement(components_1.Button, { className: 'at-button__wxbutton', formType: formType, openType: openType, lang: lang, sessionFrom: sessionFrom, sendMessageTitle: sendMessageTitle, sendMessagePath: sendMessagePath, sendMessageImg: sendMessageImg, showMessageCard: showMessageCard, appParameter: appParameter, onGetUserInfo: this.onGetUserInfo.bind(this), onGetPhoneNumber: this.onGetPhoneNumber.bind(this), onOpenSetting: this.onOpenSetting.bind(this), onError: this.onError.bind(this), onContact: this.onContact.bind(this) }));
        return (react_1["default"].createElement(components_1.View, { className: classnames_1["default"](rootClassName, classObject, this.props.className), style: customStyle, onClick: this.onClick.bind(this) },
            isWEB && !disabled && webButton,
            isWEAPP && !disabled && (react_1["default"].createElement(components_1.Form, { onSubmit: this.onSumit.bind(this), onReset: this.onReset.bind(this) }, button)),
            isALIPAY && !disabled && button,
            loadingComponent,
            react_1["default"].createElement(components_1.View, { className: 'at-button__text' }, this.props.children)));
    };
    return AtButton;
}(react_1["default"].Component));
exports["default"] = AtButton;
AtButton.defaultProps = {
    size: 'normal',
    circle: false,
    full: false,
    loading: false,
    disabled: false,
    customStyle: {},
    // Button props
    lang: 'en',
    sessionFrom: '',
    sendMessageTitle: '',
    sendMessagePath: '',
    sendMessageImg: '',
    showMessageCard: false,
    appParameter: ''
};
AtButton.propTypes = {
    size: prop_types_1["default"].oneOf(['normal', 'small']),
    type: prop_types_1["default"].oneOf(['primary', 'secondary', '']),
    circle: prop_types_1["default"].bool,
    full: prop_types_1["default"].bool,
    loading: prop_types_1["default"].bool,
    disabled: prop_types_1["default"].bool,
    onClick: prop_types_1["default"].func,
    customStyle: prop_types_1["default"].oneOfType([prop_types_1["default"].object, prop_types_1["default"].string]),
    formType: prop_types_1["default"].oneOf(['submit', 'reset', '']),
    openType: prop_types_1["default"].oneOf([
        'contact',
        'share',
        'getUserInfo',
        'getPhoneNumber',
        'launchApp',
        'openSetting',
        'feedback',
        'getRealnameAuthInfo',
        'getAuthorize',
        'contactShare',
        ''
    ]),
    lang: prop_types_1["default"].string,
    sessionFrom: prop_types_1["default"].string,
    sendMessageTitle: prop_types_1["default"].string,
    sendMessagePath: prop_types_1["default"].string,
    sendMessageImg: prop_types_1["default"].string,
    showMessageCard: prop_types_1["default"].bool,
    appParameter: prop_types_1["default"].string,
    onGetUserInfo: prop_types_1["default"].func,
    onContact: prop_types_1["default"].func,
    onGetPhoneNumber: prop_types_1["default"].func,
    onError: prop_types_1["default"].func,
    onOpenSetting: prop_types_1["default"].func
};
//# sourceMappingURL=index.js.map