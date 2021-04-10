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
var ActionSheetPage = /** @class */ (function (_super) {
    __extends(ActionSheetPage, _super);
    function ActionSheetPage(props) {
        var _this = _super.call(this, props) || this;
        _this.config = {
            navigationBarTitleText: 'Taro UI'
        };
        _this.handleClick = function (type) {
            var _a;
            _this.setState((_a = {},
                _a["isOpened" + type] = true,
                _a));
        };
        _this.handleClose = function (name) {
            var _a;
            _this.setState((_a = {},
                _a["isOpened" + name] = false,
                _a));
            taro_1["default"].showToast({
                title: "\u7B2C " + name + " \u4E2AAction Sheet\u5DF2\u7ECF\u5173\u95ED",
                icon: 'none'
            });
        };
        _this.handleCancel = function () {
            _this.showToast('点击了取消按钮');
        };
        _this.showToast = function (name) {
            taro_1["default"].showToast({
                icon: 'none',
                title: name
            });
        };
        _this.state = {
            isOpened1: false,
            isOpened2: false,
            isOpened3: false
        };
        return _this;
    }
    ActionSheetPage.prototype.render = function () {
        var _a = this.state, isOpened1 = _a.isOpened1, isOpened2 = _a.isOpened2, isOpened3 = _a.isOpened3;
        return (react_1["default"].createElement(components_1.View, { className: 'page' },
            react_1["default"].createElement(doc_header_1["default"], { title: 'ActionSheet \u52A8\u4F5C\u9762\u677F' }),
            react_1["default"].createElement(components_1.View, { className: 'doc-body' },
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u65E0\u6807\u9898"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(taro_ui_1.AtButton, { onClick: this.handleClick.bind(this, 1) }, "\u6253\u5F00 ActionSheet")))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u542B\u6807\u9898"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(taro_ui_1.AtButton, { onClick: this.handleClick.bind(this, 2) }, "\u6253\u5F00 ActionSheet")))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u81EA\u5B9A\u4E49\u9009\u9879"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(taro_ui_1.AtButton, { onClick: this.handleClick.bind(this, 3) }, "\u6253\u5F00 ActionSheet"))))),
            react_1["default"].createElement(taro_ui_1.AtActionSheet, { cancelText: '\u53D6\u6D88', isOpened: isOpened1, onClose: this.handleClose.bind(this, 1) },
                react_1["default"].createElement(taro_ui_1.AtActionSheetItem, { onClick: this.showToast.bind(this, '点击了按钮一') }, "\u6309\u94AE\u4E00"),
                react_1["default"].createElement(taro_ui_1.AtActionSheetItem, { onClick: this.showToast.bind(this, '点击了按钮二') }, "\u6309\u94AE\u4E8C")),
            react_1["default"].createElement(taro_ui_1.AtActionSheet, { cancelText: '\u53D6\u6D88', isOpened: isOpened2, onClose: this.handleClose.bind(this, 2), title: '\u6E05\u9664\u4F4D\u7F6E\u4FE1\u606F\u540E\uFF0C \u522B\u4EBA\u5C06\u4E0D\u80FD\u67E5\u770B\u5230\u4F60' },
                react_1["default"].createElement(taro_ui_1.AtActionSheetItem, { onClick: this.showToast.bind(this, '点击了按钮一') }, "\u6309\u94AE\u4E00"),
                react_1["default"].createElement(taro_ui_1.AtActionSheetItem, { onClick: this.showToast.bind(this, '点击了按钮二') }, "\u6309\u94AE\u4E8C")),
            react_1["default"].createElement(taro_ui_1.AtActionSheet, { cancelText: '\u53D6\u6D88', isOpened: isOpened3, onCancel: this.handleCancel, onClose: this.handleClose.bind(this, 3), title: '\u6E05\u9664\u4F4D\u7F6E\u4FE1\u606F\u540E\uFF0C \u522B\u4EBA\u5C06\u4E0D\u80FD\u67E5\u770B\u5230\u4F60' },
                react_1["default"].createElement(taro_ui_1.AtActionSheetItem, { onClick: this.showToast.bind(this, '点击了按钮一') }, "\u6309\u94AE\u4E00"),
                react_1["default"].createElement(taro_ui_1.AtActionSheetItem, { onClick: this.showToast.bind(this, '点击了按钮二') }, "\u6309\u94AE\u4E8C"),
                react_1["default"].createElement(taro_ui_1.AtActionSheetItem, { onClick: this.showToast.bind(this, '成功清除位置') },
                    react_1["default"].createElement(components_1.Text, { className: 'danger' }, "\u6E05\u9664\u4F4D\u7F6E\u4FE1\u606F\u5E76\u9000\u51FA")))));
    };
    return ActionSheetPage;
}(react_1["default"].Component));
exports["default"] = ActionSheetPage;
//# sourceMappingURL=index.js.map