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
var react_1 = require("react");
var taro_ui_1 = require("taro-ui");
var components_1 = require("@tarojs/components");
var taro_1 = require("@tarojs/taro");
var verification_code_png_1 = require("../../../assets/images/verification_code.png");
var doc_header_1 = require("../../components/doc-header");
require("./index.scss");
var Index = /** @class */ (function (_super) {
    __extends(Index, _super);
    function Index(props) {
        var _this = _super.call(this, props) || this;
        _this.config = {
            navigationBarTitleText: 'Taro UI'
        };
        _this.state = {
            value1: '',
            value2: '',
            value3: '',
            value4: '',
            value5: '',
            value6: '',
            value7: '',
            value8: '',
            value9: '',
            value10: '',
            value11: '',
            value13: '',
            value14: '',
            value15: '',
            value16: '',
            value17: '',
            disabled: false,
            second: 60
        };
        return _this;
    }
    Index.prototype.showTipText = function () {
        return this.state.disabled ? this.state.second + "s\u540E\u91CD\u8BD5" : '发送验证码';
    };
    Index.prototype.sendCode = function () {
        var _this = this;
        if (this.state.disabled)
            return;
        this.setState({
            disabled: true
        });
        // 倒计时
        var timer = setInterval(function () {
            if (_this.state.second > 0) {
                _this.setState({
                    second: _this.state.second - 1
                });
            }
            else {
                _this.setState({
                    second: 60,
                    disabled: false
                });
                clearInterval(timer);
            }
        }, 1000);
    };
    Index.prototype.handleInput = function (stateName, value) {
        var _a;
        this.setState((_a = {},
            _a[stateName] = value,
            _a));
    };
    // private handleClick(): void {
    //   Taro.showToast({
    //     title: '已发送验证码',
    //     icon: 'success',
    //     duration: 2000
    //   })
    // }
    Index.prototype.onClickErrorIcon = function () {
        taro_1["default"].showToast({
            title: '请输入数字',
            icon: 'success',
            duration: 2000
        });
    };
    Index.prototype.handleKeyboardHeightChange = function (
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    event) {
        taro_1["default"].showToast({
            title: "\u9AD8\u5EA6 " + event.detail.height,
            icon: 'success',
            duration: 2000
        });
    };
    Index.prototype.render = function () {
        return (react_1["default"].createElement(components_1.View, { className: 'page' },
            react_1["default"].createElement(doc_header_1["default"], { title: 'Input \u8F93\u5165\u6846' }),
            react_1["default"].createElement(components_1.View, { className: 'doc-body' },
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u57FA\u7840\u7528\u6CD5"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content no-padding' },
                        react_1["default"].createElement(components_1.View, { className: 'component-item' },
                            react_1["default"].createElement(taro_ui_1.AtForm, null,
                                react_1["default"].createElement(taro_ui_1.AtInput, { name: 'value1', title: '\u6807\u51C6\u4E94\u4E2A\u5B57', type: 'text', placeholder: '\u6807\u51C6\u4E94\u4E2A\u5B57', value: this.state.value1, onChange: this.handleInput.bind(this, 'value1') }),
                                react_1["default"].createElement(taro_ui_1.AtInput, { name: 'value2', title: '\u6807\u9898\u5B9E\u5728\u7279\u522B\u957F\u5C31\u6362\u884C', placeholder: '\u5176\u4ED6\u5217\u4FDD\u6301\u6B63\u5E38\u95F4\u8DDD', value: this.state.value2, onChange: this.handleInput.bind(this, 'value2') }),
                                react_1["default"].createElement(taro_ui_1.AtInput, { name: 'value3', border: false, placeholder: '\u65E0\u6807\u9898', value: this.state.value3, onChange: this.handleInput.bind(this, 'value3') }))))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u8F93\u5165\u6846\u7C7B\u578B"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content no-padding' },
                        react_1["default"].createElement(components_1.View, { className: 'component-item' },
                            react_1["default"].createElement(taro_ui_1.AtForm, null,
                                react_1["default"].createElement(taro_ui_1.AtInput, { name: 'value4', title: '\u6587\u672C', type: 'text', placeholder: '\u5355\u884C\u6587\u672C', value: this.state.value4, onChange: this.handleInput.bind(this, 'value4') }),
                                react_1["default"].createElement(taro_ui_1.AtInput, { name: 'value5', title: '\u6570\u5B57', type: 'number', placeholder: '\u8BF7\u8F93\u5165\u6570\u5B57', value: this.state.value5, onChange: this.handleInput.bind(this, 'value5') }),
                                react_1["default"].createElement(taro_ui_1.AtInput, { name: 'value6', title: '\u5BC6\u7801', type: 'password', placeholder: '\u5BC6\u7801\u4E0D\u80FD\u5C11\u4E8E10\u4F4D\u6570', value: this.state.value6, onChange: this.handleInput.bind(this, 'value6') }),
                                react_1["default"].createElement(taro_ui_1.AtInput, { name: 'value7', title: '\u8EAB\u4EFD\u8BC1', type: 'idcard', placeholder: '\u8EAB\u4EFD\u8BC1\u53F7\u7801', value: this.state.value7, onChange: this.handleInput.bind(this, 'value7') }),
                                react_1["default"].createElement(taro_ui_1.AtInput, { name: 'value8', title: '\u5C0F\u6570', type: 'digit', placeholder: '\u8BF7\u8F93\u5165\u5C0F\u6570', value: this.state.value8, onChange: this.handleInput.bind(this, 'value8') }),
                                react_1["default"].createElement(taro_ui_1.AtInput, { name: 'value9', border: false, title: '\u624B\u673A\u53F7\u7801', type: 'phone', placeholder: '\u624B\u673A\u53F7\u7801', value: this.state.value9, onChange: this.handleInput.bind(this, 'value9') }))))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u72B6\u6001"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content no-padding' },
                        react_1["default"].createElement(components_1.View, { className: 'component-item' },
                            react_1["default"].createElement(taro_ui_1.AtForm, null,
                                react_1["default"].createElement(taro_ui_1.AtInput, { name: 'value10', disabled: true, title: '\u7981\u7528', type: 'text', placeholder: '\u7981\u6B62\u8F93\u5165', value: this.state.value10, onChange: this.handleInput.bind(this, 'value10') }),
                                react_1["default"].createElement(taro_ui_1.AtInput, { name: 'value11', error: true, title: '\u51FA\u73B0\u9519\u8BEF', type: 'text', placeholder: '\u70B9\u51FB\u6309\u94AE\u89E6\u53D1\u56DE\u8C03', value: this.state.value11, onChange: this.handleInput.bind(this, 'value11'), onErrorClick: this.onClickErrorIcon.bind(this) }),
                                react_1["default"].createElement(taro_ui_1.AtInput, { name: 'value12', editable: false, title: '\u4E0D\u53EF\u7F16\u8F91', type: 'text', placeholder: '\u4E0D\u53EF\u7F16\u8F91', value: '\u4E0D\u53EF\u7F16\u8F91\u7684\u5185\u5BB9' }),
                                react_1["default"].createElement(taro_ui_1.AtInput, { name: 'value13', border: false, clear: true, title: '\u6E05\u9664\u6309\u94AE', type: 'text', placeholder: '\u70B9\u51FB\u6E05\u9664\u6309\u94AE\u6E05\u7A7A\u5185\u5BB9', value: this.state.value13, onChange: this.handleInput.bind(this, 'value13') }),
                                react_1["default"].createElement(taro_ui_1.AtInput, { name: 'value16', border: false, required: true, title: '\u5FC5\u586B\u9879', type: 'text', placeholder: '\u5FC5\u586B\u9879', value: this.state.value16, onChange: this.handleInput.bind(this, 'value16') }),
                                react_1["default"].createElement(taro_ui_1.AtInput, { name: 'value17', border: false, title: '\u76D1\u542C\u4E8B\u4EF6', type: 'text', placeholder: '\u76D1\u542C\u952E\u76D8\u9AD8\u5EA6\u4E8B\u4EF6', value: this.state.value17, onChange: this.handleInput.bind(this, 'value17'), 
                                    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                                    // @ts-ignore
                                    onKeyboardHeightChange: this.handleKeyboardHeightChange.bind(this) }))))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u81EA\u5B9A\u4E49\u53F3\u8FB9\u680F"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content no-padding' },
                        react_1["default"].createElement(components_1.View, { className: 'component-item' },
                            react_1["default"].createElement(taro_ui_1.AtForm, null,
                                react_1["default"].createElement(taro_ui_1.AtInput, { name: 'value14', title: '\u9A8C\u8BC1\u7801', type: 'text', maxLength: 4, clear: true, placeholder: '\u9A8C\u8BC1\u7801', value: this.state.value14, onChange: this.handleInput.bind(this, 'value14') },
                                    react_1["default"].createElement(components_1.Image, { src: verification_code_png_1["default"] })),
                                react_1["default"].createElement(taro_ui_1.AtInput, { name: 'value15', border: false, type: 'phone', clear: true, placeholder: '\u8BF7\u8F93\u5165\u624B\u673A\u53F7\u7801', value: this.state.value15, onChange: this.handleInput.bind(this, 'value15') },
                                    react_1["default"].createElement(components_1.View, { style: {
                                            color: this.state.disabled ? '#FF4949' : '',
                                            fontSize: '12px',
                                            width: '90px'
                                        }, onClick: this.sendCode.bind(this) }, this.showTipText())))))))));
    };
    return Index;
}(react_1["default"].Component));
exports["default"] = Index;
//# sourceMappingURL=index.js.map