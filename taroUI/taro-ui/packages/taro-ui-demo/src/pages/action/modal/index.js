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
var mock_data_1 = require("../../navigation/indexes/mock-data");
require("./index.scss");
var ModalPage = /** @class */ (function (_super) {
    __extends(ModalPage, _super);
    function ModalPage(props) {
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
        _this.closeModal = function (type, msg) {
            var _a;
            _this.setState((_a = {},
                _a["isOpened" + type] = false,
                _a));
            taro_1["default"].showToast({
                icon: 'none',
                title: msg
            });
        };
        _this.closeModalConfirm = function (type, msg) {
            var _a;
            _this.setState((_a = {},
                _a["isOpened" + type] = false,
                _a));
            taro_1["default"].showToast({
                icon: 'none',
                title: msg
            });
        };
        _this.state = {
            isOpened1: false,
            isOpened2: false,
            isOpened3: false,
            isOpened4: false,
            isOpened5: false
        };
        return _this;
    }
    ModalPage.prototype.render = function () {
        var _a = this.state, isOpened1 = _a.isOpened1, isOpened2 = _a.isOpened2, isOpened3 = _a.isOpened3, isOpened4 = _a.isOpened4, isOpened5 = _a.isOpened5;
        return (react_1["default"].createElement(components_1.View, { className: 'page' },
            react_1["default"].createElement(doc_header_1["default"], { title: 'Modal \u6A21\u6001\u6846' }),
            react_1["default"].createElement(components_1.View, { className: 'doc-body' },
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u57FA\u7840\u6A21\u6001\u6846"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(taro_ui_1.AtButton, { onClick: this.handleClick.bind(this, 1) }, "\u6253\u5F00\u57FA\u7840\u6A21\u6001\u6846")))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u5355\u4E2A\u6309\u94AE"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(taro_ui_1.AtButton, { onClick: this.handleClick.bind(this, 2) }, "\u6253\u5F00\u5355\u4E2A\u6309\u94AE\u6A21\u6001\u6846")))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u65E0\u6807\u9898"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(taro_ui_1.AtButton, { onClick: this.handleClick.bind(this, 3) }, "\u6253\u5F00\u65E0\u6807\u9898\u6A21\u6001\u6846")))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u7B80\u5316\u4F7F\u7528"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(taro_ui_1.AtButton, { onClick: this.handleClick.bind(this, 4) }, "\u6253\u5F00\u7B80\u5316\u4F7F\u7528\u6A21\u6001\u6846")))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u57CE\u5E02\u7D22\u5F15"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(taro_ui_1.AtButton, { onClick: this.handleClick.bind(this, 5) }, "\u6253\u5F00\u57CE\u5E02\u7D22\u5F15"))))),
            react_1["default"].createElement(taro_ui_1.AtModal, { isOpened: isOpened1, onClose: this.closeModal.bind(this, 1, 'Modal被关闭了') },
                react_1["default"].createElement(taro_ui_1.AtModalHeader, null, "\u6807\u9898"),
                react_1["default"].createElement(taro_ui_1.AtModalContent, null,
                    react_1["default"].createElement(components_1.View, { className: 'modal-content' }, "\u8FD9\u91CC\u662F\u6B63\u6587\u5185\u5BB9\uFF0C\u6B22\u8FCE\u52A0\u5165\u4EAC\u4E1C\u51F9\u51F8\u5B9E\u9A8C\u5BA4 \u8FD9\u91CC\u662F\u6B63\u6587\u5185\u5BB9\uFF0C\u6B22\u8FCE\u52A0\u5165\u4EAC\u4E1C\u51F9\u51F8\u5B9E\u9A8C\u5BA4 \u8FD9\u91CC\u662F\u6B63\u6587\u5185\u5BB9\uFF0C\u6B22\u8FCE\u52A0\u5165\u4EAC\u4E1C\u51F9\u51F8\u5B9E\u9A8C\u5BA4")),
                react_1["default"].createElement(taro_ui_1.AtModalAction, null,
                    react_1["default"].createElement(components_1.Button, { onClick: this.closeModal.bind(this, 1, '点击了取消') }, "\u53D6\u6D88"),
                    react_1["default"].createElement(components_1.Button, { onClick: this.closeModal.bind(this, 1, '点击了确定') }, "\u786E\u5B9A"))),
            react_1["default"].createElement(taro_ui_1.AtModal, { isOpened: isOpened2, onClose: this.closeModal.bind(this, 2, 'Modal被关闭了') },
                react_1["default"].createElement(taro_ui_1.AtModalHeader, null, "\u6807\u9898"),
                react_1["default"].createElement(taro_ui_1.AtModalContent, null,
                    react_1["default"].createElement(components_1.View, { className: 'modal-content' }, "\u8FD9\u91CC\u662F\u6B63\u6587\u5185\u5BB9\uFF0C\u6B22\u8FCE\u52A0\u5165\u4EAC\u4E1C\u51F9\u51F8\u5B9E\u9A8C\u5BA4")),
                react_1["default"].createElement(taro_ui_1.AtModalAction, null,
                    react_1["default"].createElement(components_1.Button, { onClick: this.closeModal.bind(this, 2, '点击了确定') }, "\u786E\u5B9A"))),
            react_1["default"].createElement(taro_ui_1.AtModal, { isOpened: isOpened3, content: "\u8FD9\u91CC\u662F\u6B63\u6587\u5185\u5BB9\uFF0C\u6B22\u8FCE\u52A0\u5165\u4EAC\u4E1C\u51F9\u51F8\u5B9E\u9A8C\u5BA4\n          \u8FD9\u91CC\u662F\u6B63\u6587\u5185\u5BB9\uFF0C\u6B22\u8FCE\u52A0\u5165\u4EAC\u4E1C\u51F9\u51F8\u5B9E\u9A8C\u5BA4\n          \u8FD9\u91CC\u662F\u6B63\u6587\u5185\u5BB9\uFF0C\u6B22\u8FCE\u52A0\u5165\u4EAC\u4E1C\u51F9\u51F8\u5B9E\u9A8C\u5BA4", onClose: this.closeModal.bind(this, 3, 'Modal被关闭了'), onCancel: this.closeModal.bind(this, 3, '点击了取消'), onConfirm: this.closeModalConfirm.bind(this, 3, '点击了确认'), cancelText: '\u53D6\u6D88', confirmText: '\u786E\u8BA4' }),
            react_1["default"].createElement(taro_ui_1.AtModal, { isOpened: isOpened4, title: '\u6807\u9898', cancelText: '\u53D6\u6D88', confirmText: '\u786E\u8BA4', content: "\u6B22\u8FCE\u52A0\u5165\u4EAC\u4E1C\u51F9\u51F8\u5B9E\u9A8C\u5BA4\n\u6B22\u8FCE\u52A0\u5165\u4EAC\u4E1C\u51F9\u51F8\u5B9E\u9A8C\u5BA4", onClose: this.closeModal.bind(this, 4, 'Modal被关闭了'), onCancel: this.closeModal.bind(this, 4, '点击了取消'), onConfirm: this.closeModalConfirm.bind(this, 4, '点击了确认') }),
            react_1["default"].createElement(taro_ui_1.AtModal, { isOpened: isOpened5 },
                react_1["default"].createElement(taro_ui_1.AtModalContent, null,
                    react_1["default"].createElement(taro_ui_1.AtIndexes, { list: mock_data_1["default"], topKey: 'Top', customStyle: { height: '400px' } },
                        react_1["default"].createElement(components_1.View, { className: 'custom-area' }, "\u7528\u6237\u81EA\u5B9A\u4E49\u5185\u5BB9"))))));
    };
    return ModalPage;
}(react_1["default"].Component));
exports["default"] = ModalPage;
//# sourceMappingURL=index.js.map