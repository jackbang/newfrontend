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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var taro_ui_1 = require("taro-ui");
var components_1 = require("@tarojs/components");
var doc_header_1 = require("../../components/doc-header");
require("./index.scss");
var INIT_STATE = {
    image: '',
    icon: '',
    text: '',
    duration: 3000,
    hasMask: false,
    isOpened: false
};
var ToastPage = /** @class */ (function (_super) {
    __extends(ToastPage, _super);
    function ToastPage(props) {
        var _this = _super.call(this, props) || this;
        _this.config = {
            navigationBarTitleText: 'Taro UI'
        };
        _this.handleClick = function (params) {
            if (_this.state.isOpened) {
                return _this.setState(INIT_STATE);
            }
            var state = Object.assign(__assign(__assign({}, INIT_STATE), { isOpened: true }), params);
            _this.setState(state);
        };
        _this.handleClose = function () {
            _this.setState({
                isOpened: false
            });
        };
        _this.state = INIT_STATE;
        return _this;
    }
    ToastPage.prototype.render = function () {
        var _a = this.state, text = _a.text, icon = _a.icon, status = _a.status, isOpened = _a.isOpened, duration = _a.duration, image = _a.image, hasMask = _a.hasMask;
        return (react_1["default"].createElement(components_1.View, { className: 'page toast-page' },
            react_1["default"].createElement(doc_header_1["default"], { title: 'Toast \u8F7B\u63D0\u793A' }),
            react_1["default"].createElement(components_1.View, { className: 'doc-body' },
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u57FA\u672C\u6848\u4F8B"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(taro_ui_1.AtButton, { onClick: this.handleClick.bind(this, {
                                    text: '文本内容'
                                }) }, "\u6587\u672C Toast")),
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(taro_ui_1.AtButton, { onClick: this.handleClick.bind(this, {
                                    text: '文本内容',
                                    icon: 'analytics'
                                }) }, "\u6587\u672C + ICON")))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u81EA\u5B9A\u4E49\u56FE\u7247"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'example__item' },
                            react_1["default"].createElement(taro_ui_1.AtButton, { onClick: this.handleClick.bind(this, {
                                    text: '凹凸实验室',
                                    image: 'http://storage.360buyimg.com/mtd/home/group-21533885306540.png'
                                }) }, "\u81EA\u5B9A\u4E49\u56FE\u7247 Toast")))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u6DFB\u52A0\u906E\u7F69\u5C42"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'example__item' },
                            react_1["default"].createElement(taro_ui_1.AtButton, { onClick: this.handleClick.bind(this, {
                                    text: '透明遮罩层的作用在于不可点击下面的元素',
                                    hasMask: true
                                }) }, "\u6DFB\u52A0\u906E\u7F69\u5C42 Toast")))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "Error Toast"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'example__item' },
                            react_1["default"].createElement(taro_ui_1.AtButton, { onClick: this.handleClick.bind(this, {
                                    text: '错误提示',
                                    hasMask: true,
                                    status: 'error'
                                }) }, "\u9519\u8BEF\u63D0\u793A Toast")))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "Success Toast"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'example__item' },
                            react_1["default"].createElement(taro_ui_1.AtButton, { onClick: this.handleClick.bind(this, {
                                    text: '正确提示',
                                    hasMask: true,
                                    status: 'success'
                                }) }, "\u6B63\u786E\u63D0\u793A Toast")))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "Loading Toast"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'example__item' },
                            react_1["default"].createElement(taro_ui_1.AtButton, { onClick: this.handleClick.bind(this, {
                                    text: '正在加载…',
                                    hasMask: true,
                                    status: 'loading'
                                }) }, "\u52A0\u8F7D\u4E2D Toast"))))),
            react_1["default"].createElement(taro_ui_1.AtToast, { icon: icon, text: text, image: image, status: status, hasMask: hasMask, isOpened: isOpened, duration: duration, onClose: this.handleClose })));
    };
    return ToastPage;
}(react_1["default"].Component));
exports["default"] = ToastPage;
//# sourceMappingURL=index.js.map