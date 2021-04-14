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
var curtain_png_1 = require("../../../assets/images/curtain.png");
var doc_header_1 = require("../../components/doc-header");
require("./index.scss");
var TagPage = /** @class */ (function (_super) {
    __extends(TagPage, _super);
    function TagPage(props) {
        var _this = _super.call(this, props) || this;
        _this.config = {
            navigationBarTitleText: 'Taro UI'
        };
        _this.state = {
            isOpened: false,
            closeBtnPosition: 'bottom'
        };
        return _this;
    }
    TagPage.prototype.handleChange = function (stateName, value) {
        var _a;
        this.setState((_a = {
                isOpened: true
            },
            _a[stateName] = value,
            _a));
    };
    TagPage.prototype.onClose = function () {
        this.setState({
            isOpened: false
        });
    };
    TagPage.prototype.render = function () {
        var _a = this.state, isOpened = _a.isOpened, closeBtnPosition = _a.closeBtnPosition;
        return (react_1["default"].createElement(components_1.View, { className: 'page' },
            react_1["default"].createElement(doc_header_1["default"], { title: 'Curtain \u5E55\u5E18' }),
            react_1["default"].createElement(components_1.View, { className: 'doc-body' },
                react_1["default"].createElement(taro_ui_1.AtCurtain, { isOpened: isOpened, closeBtnPosition: closeBtnPosition, onClose: this.onClose.bind(this) },
                    react_1["default"].createElement(components_1.Image, { style: 'width:100%', mode: 'widthFix', src: curtain_png_1["default"] })),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u9876\u90E8\u5173\u95ED"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(taro_ui_1.AtButton, { onClick: this.handleChange.bind(this, 'closeBtnPosition', 'top') }, "\u9876\u90E8\u5173\u95ED\u5E55\u5E18")))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u5E95\u90E8\u5173\u95ED"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(taro_ui_1.AtButton, { onClick: this.handleChange.bind(this, 'closeBtnPosition', 'bottom') }, "\u5E95\u90E8\u5173\u95ED\u5E55\u5E18")))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u5DE6\u4E0A\u5173\u95ED"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(taro_ui_1.AtButton, { onClick: this.handleChange.bind(this, 'closeBtnPosition', 'top-left') }, "\u5DE6\u4E0A\u5173\u95ED\u5E55\u5E18")))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u53F3\u4E0A\u5173\u95ED"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(taro_ui_1.AtButton, { onClick: this.handleChange.bind(this, 'closeBtnPosition', 'top-right') }, "\u53F3\u4E0A\u5173\u95ED\u5E55\u5E18")))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u5DE6\u4E0B\u5173\u95ED"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(taro_ui_1.AtButton, { onClick: this.handleChange.bind(this, 'closeBtnPosition', 'bottom-left') }, "\u5DE6\u4E0B\u5173\u95ED\u5E55\u5E18")))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u53F3\u4E0B\u5173\u95ED"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(taro_ui_1.AtButton, { onClick: this.handleChange.bind(this, 'closeBtnPosition', 'bottom-right') }, "\u53F3\u4E0B\u5173\u95ED\u5E55\u5E18")))))));
    };
    return TagPage;
}(react_1["default"].Component));
exports["default"] = TagPage;
//# sourceMappingURL=index.js.map