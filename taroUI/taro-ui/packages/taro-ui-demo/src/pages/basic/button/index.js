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
var react_1 = require("react");
var taro_ui_1 = require("taro-ui");
var components_1 = require("@tarojs/components");
var taro_1 = require("@tarojs/taro");
var doc_header_1 = require("../../components/doc-header");
require("./index.scss");
var ButtonPage = /** @class */ (function (_super) {
    __extends(ButtonPage, _super);
    function ButtonPage(props) {
        var _this = _super.call(this, props) || this;
        _this.config = {
            navigationBarTitleText: 'Taro UI'
        };
        _this.state = {
            isWEAPP: taro_1["default"].getEnv() === taro_1["default"].ENV_TYPE.WEAPP,
            isALIPAY: taro_1["default"].getEnv() === taro_1["default"].ENV_TYPE.ALIPAY
        };
        return _this;
    }
    ButtonPage.prototype.onButtonClick = function () {
        var content = __spreadArray([], arguments).find(function (item) { return typeof item === 'string'; });
        var ENV = taro_1["default"].getEnv();
        if (ENV === 'WEAPP') {
            taro_1["default"].showModal({
                content: content || '您点击了按钮！',
                showCancel: false
            });
        }
        if (ENV === 'WEB') {
            alert(content || '您点击了按钮！');
        }
    };
    ButtonPage.prototype.onShareAppMessage = function () {
        return {
            title: 'Taro UI',
            path: '/pages/index/index',
            imageUrl: 'http://storage.360buyimg.com/mtd/home/share1535013100318.jpg'
        };
    };
    ButtonPage.prototype.onContact = function (event) {
        taro_1["default"].showToast({
            title: "\u547C\u8D77\u5BA2\u670D\u56DE\u8C03: " + event.detail
        });
    };
    ButtonPage.prototype.onSubmit = function (event) {
        taro_1["default"].showModal({
            content: "submit event detail: " + JSON.stringify(event.detail),
            showCancel: false
        });
    };
    ButtonPage.prototype.onReset = function (event) {
        taro_1["default"].showModal({
            content: "reset event detail: " + JSON.stringify(event.detail || '无数据'),
            showCancel: false
        });
    };
    ButtonPage.prototype.onGetUserInfo = function (event) {
        taro_1["default"].showModal({
            content: "getUserInfo event detail: " + JSON.stringify(event.detail)
        });
    };
    ButtonPage.prototype.onOpenSetting = function (event) {
        taro_1["default"].showToast({
            title: "onOpenSetting: " + event.detail
        });
    };
    ButtonPage.prototype.render = function () {
        var _a = this.state, isWEAPP = _a.isWEAPP, isALIPAY = _a.isALIPAY;
        return (react_1["default"].createElement(components_1.View, { className: 'page' },
            react_1["default"].createElement(doc_header_1["default"], { title: 'Button \u6309\u94AE' }),
            react_1["default"].createElement(components_1.View, { className: 'doc-body' },
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u4E3B\u64CD\u4F5C"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'btn-item' },
                            react_1["default"].createElement(taro_ui_1.AtButton, { type: 'primary', onClick: this.onButtonClick.bind(this) }, "\u4E3B\u64CD\u4F5C\u6309\u94AE")),
                        react_1["default"].createElement(components_1.View, { className: 'btn-item' },
                            react_1["default"].createElement(taro_ui_1.AtButton, { type: 'primary', loading: true, onClick: this.onButtonClick.bind(this) }, "Loading")),
                        react_1["default"].createElement(components_1.View, { className: 'btn-item' },
                            react_1["default"].createElement(taro_ui_1.AtButton, { type: 'primary', disabled: true }, "\u4E0D\u53EF\u64CD\u4F5C")))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u6B21\u8981\u64CD\u4F5C"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'btn-item' },
                            react_1["default"].createElement(taro_ui_1.AtButton, { type: 'secondary' }, "\u6B21\u64CD\u4F5C\u6309\u94AE")),
                        react_1["default"].createElement(components_1.View, { className: 'btn-item' },
                            react_1["default"].createElement(taro_ui_1.AtButton, { type: 'secondary', loading: true }, "Loading")),
                        react_1["default"].createElement(components_1.View, { className: 'btn-item' },
                            react_1["default"].createElement(taro_ui_1.AtButton, { type: 'secondary', disabled: true }, "\u4E0D\u53EF\u64CD\u4F5C")))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u6B21\u6B21\u8981\u64CD\u4F5C"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'btn-item' },
                            react_1["default"].createElement(taro_ui_1.AtButton, null, "\u6B21\u6B21\u8981\u64CD\u4F5C\u6309\u94AE")),
                        react_1["default"].createElement(components_1.View, { className: 'btn-item' },
                            react_1["default"].createElement(taro_ui_1.AtButton, { loading: true }, "Loading")),
                        react_1["default"].createElement(components_1.View, { className: 'btn-item' },
                            react_1["default"].createElement(taro_ui_1.AtButton, { disabled: true }, "\u4E0D\u53EF\u64CD\u4F5C")))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u901A\u680F\u6309\u94AE"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content', style: 'padding:0' },
                        react_1["default"].createElement(components_1.View, { className: 'btn-item' },
                            react_1["default"].createElement(taro_ui_1.AtButton, { type: 'primary', full: true }, "\u4E3B\u64CD\u4F5C\u6309\u94AE")),
                        react_1["default"].createElement(components_1.View, { className: 'btn-item' },
                            react_1["default"].createElement(taro_ui_1.AtButton, { type: 'secondary', full: true }, "\u6B21\u64CD\u4F5C\u6309\u94AE")),
                        react_1["default"].createElement(components_1.View, { className: 'btn-item' },
                            react_1["default"].createElement(taro_ui_1.AtButton, { full: true }, "\u6B21\u6B21\u8981\u64CD\u4F5C\u6309\u94AE")),
                        react_1["default"].createElement(components_1.View, { className: 'btn-item' },
                            react_1["default"].createElement(taro_ui_1.AtButton, { disabled: true, full: true }, "\u4E0D\u53EF\u64CD\u4F5C")))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u5C0F\u6309\u94AE"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'btn-item' },
                            react_1["default"].createElement(components_1.View, { className: 'subitem' },
                                react_1["default"].createElement(taro_ui_1.AtButton, { type: 'primary', size: 'small' }, "\u6309\u94AE")),
                            react_1["default"].createElement(components_1.View, { className: 'subitem' },
                                react_1["default"].createElement(taro_ui_1.AtButton, { type: 'secondary', size: 'small' }, "\u6309\u94AE")),
                            react_1["default"].createElement(components_1.View, { className: 'subitem' },
                                react_1["default"].createElement(taro_ui_1.AtButton, { size: 'small' }, "\u6309\u94AE"))),
                        react_1["default"].createElement(components_1.View, { className: 'btn-item' },
                            react_1["default"].createElement(components_1.View, { className: 'subitem' },
                                react_1["default"].createElement(taro_ui_1.AtButton, { type: 'primary', size: 'small', loading: true })),
                            react_1["default"].createElement(components_1.View, { className: 'subitem' },
                                react_1["default"].createElement(taro_ui_1.AtButton, { type: 'secondary', size: 'small', loading: true })),
                            react_1["default"].createElement(components_1.View, { className: 'subitem' },
                                react_1["default"].createElement(taro_ui_1.AtButton, { size: 'small', loading: true }))),
                        react_1["default"].createElement(components_1.View, { className: 'btn-item' },
                            react_1["default"].createElement(components_1.View, { className: 'subitem' },
                                react_1["default"].createElement(taro_ui_1.AtButton, { type: 'primary', size: 'small', disabled: true }, "\u6309\u94AE")),
                            react_1["default"].createElement(components_1.View, { className: 'subitem' },
                                react_1["default"].createElement(taro_ui_1.AtButton, { type: 'secondary', size: 'small', disabled: true }, "\u6309\u94AE")),
                            react_1["default"].createElement(components_1.View, { className: 'subitem' },
                                react_1["default"].createElement(taro_ui_1.AtButton, { size: 'small', disabled: true }, "\u6309\u94AE"))))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u5706\u89D2\u6309\u94AE"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'btn-item' },
                            react_1["default"].createElement(components_1.View, { className: 'subitem' },
                                react_1["default"].createElement(taro_ui_1.AtButton, { type: 'primary', size: 'small', circle: true }, "\u6309\u94AE")),
                            react_1["default"].createElement(components_1.View, { className: 'subitem' },
                                react_1["default"].createElement(taro_ui_1.AtButton, { type: 'secondary', size: 'small', circle: true }, "\u6309\u94AE")),
                            react_1["default"].createElement(components_1.View, { className: 'subitem' },
                                react_1["default"].createElement(taro_ui_1.AtButton, { size: 'small', circle: true }, "\u6309\u94AE"))),
                        react_1["default"].createElement(components_1.View, { className: 'btn-item' },
                            react_1["default"].createElement(components_1.View, { className: 'subitem' },
                                react_1["default"].createElement(taro_ui_1.AtButton, { type: 'primary', size: 'small', loading: true, circle: true })),
                            react_1["default"].createElement(components_1.View, { className: 'subitem' },
                                react_1["default"].createElement(taro_ui_1.AtButton, { type: 'secondary', size: 'small', loading: true, circle: true })),
                            react_1["default"].createElement(components_1.View, { className: 'subitem' },
                                react_1["default"].createElement(taro_ui_1.AtButton, { size: 'small', loading: true, circle: true }))),
                        react_1["default"].createElement(components_1.View, { className: 'btn-item' },
                            react_1["default"].createElement(components_1.View, { className: 'subitem' },
                                react_1["default"].createElement(taro_ui_1.AtButton, { type: 'primary', size: 'small', disabled: true, circle: true }, "\u6309\u94AE")),
                            react_1["default"].createElement(components_1.View, { className: 'subitem' },
                                react_1["default"].createElement(taro_ui_1.AtButton, { type: 'secondary', size: 'small', disabled: true, circle: true }, "\u6309\u94AE")),
                            react_1["default"].createElement(components_1.View, { className: 'subitem' },
                                react_1["default"].createElement(taro_ui_1.AtButton, { size: 'small', disabled: true, circle: true }, "\u6309\u94AE"))))),
                !isALIPAY && (react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u6D6E\u52A8\u6309\u94AE"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'at-article__p' }, "\u53F3\u4FA7\u662F\u6D6E\u52A8\u64CD\u4F5C\u6309\u94AE\uD83D\uDC49"),
                        react_1["default"].createElement(components_1.View, { className: 'btn-demo-fab' },
                            react_1["default"].createElement(taro_ui_1.AtFab, { onClick: this.onButtonClick.bind(this) },
                                react_1["default"].createElement(components_1.Text, { className: 'at-fab__icon at-icon at-icon-menu' })))))),
                isWEAPP && (react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F button \u5C5E\u6027"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'btn-item' },
                            react_1["default"].createElement(taro_ui_1.AtButton, { openType: 'share', type: 'primary' }, "\u5206\u4EAB")),
                        react_1["default"].createElement(components_1.View, { className: 'btn-item' },
                            react_1["default"].createElement(taro_ui_1.AtButton, { openType: 'getUserInfo', onGetUserInfo: this.onGetUserInfo.bind(this), type: 'primary' }, "\u767B\u5F55\u6388\u6743")),
                        react_1["default"].createElement(components_1.View, { className: 'btn-item' },
                            react_1["default"].createElement(taro_ui_1.AtButton, { openType: 'contact', onContact: this.onContact.bind(this), type: 'secondary' }, "\u8054\u7CFB Taro UI \u5BA2\u670D")),
                        react_1["default"].createElement(components_1.View, { className: 'btn-item' },
                            react_1["default"].createElement(taro_ui_1.AtButton, { openType: 'openSetting', onOpenSetting: this.onOpenSetting.bind(this), type: 'secondary' }, "\u6253\u5F00\u8BBE\u7F6E")),
                        react_1["default"].createElement(components_1.View, { className: 'btn-item' },
                            react_1["default"].createElement(components_1.Form, { reportSubmit: true, onSubmit: this.onSubmit.bind(this), onReset: this.onReset.bind(this) },
                                react_1["default"].createElement(components_1.View, { className: 'btn-item' },
                                    react_1["default"].createElement(taro_ui_1.AtButton, { type: 'primary', formType: 'submit' }, "form submit")),
                                react_1["default"].createElement(components_1.View, { className: 'btn-item' },
                                    react_1["default"].createElement(taro_ui_1.AtButton, { type: 'secondary', formType: 'reset' }, "form reset"))))))),
                isALIPAY && (react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u652F\u4ED8\u5B9D\u5C0F\u7A0B\u5E8F button \u5C5E\u6027"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content demo-button' },
                        react_1["default"].createElement(components_1.View, { className: 'btn-item' },
                            react_1["default"].createElement(taro_ui_1.AtButton, { openType: 'share', type: 'primary' }, "\u5206\u4EAB")),
                        react_1["default"].createElement(components_1.View, { className: 'btn-item' },
                            react_1["default"].createElement(taro_ui_1.AtButton, { openType: 'getAuthorize', type: 'primary' }, "\u767B\u5F55\u6388\u6743")),
                        react_1["default"].createElement(taro_ui_1.AtForm, { onSubmit: this.onSubmit.bind(this), onReset: this.onReset.bind(this) },
                            react_1["default"].createElement(components_1.View, { className: 'btn-item' },
                                react_1["default"].createElement(taro_ui_1.AtButton, { formType: 'submit', type: 'primary' }, "form submit")),
                            react_1["default"].createElement(components_1.View, { className: 'btn-item' },
                                react_1["default"].createElement(taro_ui_1.AtButton, { formType: 'reset', type: 'primary' }, "form reset")))))))));
    };
    return ButtonPage;
}(react_1["default"].Component));
exports["default"] = ButtonPage;
//# sourceMappingURL=index.js.map