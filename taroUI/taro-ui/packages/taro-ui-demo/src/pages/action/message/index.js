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
var doc_header_1 = require("../../components/doc-header");
require("./index.scss");
var ToastPage = /** @class */ (function (_super) {
    __extends(ToastPage, _super);
    function ToastPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.config = {
            navigationBarTitleText: 'Taro UI'
        };
        return _this;
    }
    ToastPage.prototype.handleClick = function (type) {
        taro_1["default"].atMessage({
            message: '消息通知',
            type: type
        });
    };
    ToastPage.prototype.render = function () {
        return (react_1["default"].createElement(components_1.View, { className: 'page toast-page' },
            react_1["default"].createElement(doc_header_1["default"], { title: 'Message \u6D88\u606F\u901A\u77E5' }),
            react_1["default"].createElement(components_1.View, { className: 'doc-body' },
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u57FA\u672C\u6848\u4F8B"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(taro_ui_1.AtButton, { onClick: this.handleClick.bind(this, '') }, "\u666E\u901A\u6D88\u606F")),
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(taro_ui_1.AtButton, { onClick: this.handleClick.bind(this, 'success') }, "\u6210\u529F\u6D88\u606F")),
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(taro_ui_1.AtButton, { onClick: this.handleClick.bind(this, 'error') }, "\u9519\u8BEF\u6D88\u606F")),
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(taro_ui_1.AtButton, { onClick: this.handleClick.bind(this, 'warning') }, "\u8B66\u544A\u6D88\u606F")),
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(taro_ui_1.AtButton, { onClick: this.handleClick.bind(this, 'info') }, "\u63D0\u793A\u6D88\u606F"))))),
            react_1["default"].createElement(taro_ui_1.AtMessage, null)));
    };
    return ToastPage;
}(react_1["default"].Component));
exports["default"] = ToastPage;
//# sourceMappingURL=index.js.map