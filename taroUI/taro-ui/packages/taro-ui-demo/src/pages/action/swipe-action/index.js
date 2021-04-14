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
var OPTIONS = [
    {
        text: '删除',
        style: {
            color: '#333',
            backgroundColor: '#F7F7F7'
        }
    },
    {
        text: '确认',
        style: {
            backgroundColor: '#E93B3D'
        }
    }
];
var SwipeActionPage = /** @class */ (function (_super) {
    __extends(SwipeActionPage, _super);
    function SwipeActionPage(props) {
        var _this = _super.call(this, props) || this;
        _this.config = {
            navigationBarTitleText: 'Taro UI'
        };
        _this.handleClick = function (item, key) {
            _this.showToast("\u70B9\u51FB\u4E86" + item.text + "\u6309\u94AE\uFF0CKey: " + key);
        };
        _this.handleClicked = function (index) {
            var list = _this.state.list.filter(function (_item, key) { return key !== index; });
            // console.log(list)
            _this.setState({
                list: list
            });
        };
        _this.handleStatusClick = function () {
            _this.setState({
                isOpened2: !_this.state.isOpened2
            });
        };
        _this.handleStatusOpened = function () {
            _this.setState({
                isOpened2: true
            });
        };
        _this.handleStatusClosed = function () {
            _this.setState({
                isOpened2: false
            });
        };
        _this.handleSingle = function (index) {
            var list = _this.state.list.map(function (item, key) {
                item.isOpened = key === index;
                return item;
            });
            _this.setState({
                list: list
            });
        };
        _this.handleOpened = function () {
            _this.showToast('Handle Opened');
        };
        _this.handleClosed = function () {
            _this.showToast('Handle Closed');
        };
        _this.showToast = function (name) {
            taro_1["default"].showToast({
                icon: 'none',
                title: name
            });
        };
        _this.state = {
            isOpened2: false,
            list: [
                {
                    title: 'item1',
                    isOpened: false,
                    options: OPTIONS
                },
                {
                    title: 'item2',
                    isOpened: false,
                    options: OPTIONS
                },
                {
                    title: 'item3',
                    isOpened: false,
                    options: OPTIONS
                },
                {
                    title: 'item4',
                    isOpened: false,
                    options: OPTIONS
                },
                {
                    title: 'item5',
                    isOpened: false,
                    options: OPTIONS
                },
                {
                    title: 'item6',
                    isOpened: false,
                    options: OPTIONS
                }
            ]
        };
        return _this;
    }
    SwipeActionPage.prototype.render = function () {
        var _this = this;
        var _a = this.state, list = _a.list, isOpened2 = _a.isOpened2;
        return (react_1["default"].createElement(components_1.View, { className: 'page swipe-action-page' },
            react_1["default"].createElement(doc_header_1["default"], { title: 'SwipeAction \u6ED1\u52A8\u64CD\u4F5C' }),
            react_1["default"].createElement(components_1.View, { className: 'doc-body' },
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u4E00\u822C\u7528\u6CD5"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content no-padding' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item example-item--border' },
                            react_1["default"].createElement(taro_ui_1.AtSwipeAction, { onClick: this.handleClick, options: OPTIONS },
                                react_1["default"].createElement(components_1.View, { className: 'normal' }, "AtSwipeAction \u4E00\u822C\u4F7F\u7528\u573A\u666F"))))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u7981\u6B62\u6ED1\u52A8"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content no-padding' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item example-item--border' },
                            react_1["default"].createElement(taro_ui_1.AtSwipeAction, { disabled: true, options: OPTIONS },
                                react_1["default"].createElement(components_1.View, { className: 'normal' }, "\u7981\u6B62\u6ED1\u52A8\u5C55\u793A"))))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u4F7F\u7528\u53D8\u91CF\u63A7\u5236\u5F00\u5173"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__controller', style: 'margin-bottom: 10px' },
                        react_1["default"].createElement(taro_ui_1.AtButton, { size: 'small', onClick: this.handleStatusClick },
                            "\u5F53\u524D\u72B6\u6001: ",
                            isOpened2 ? '开' : '关',
                            ' ')),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content no-padding' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item example-item--border' },
                            react_1["default"].createElement(taro_ui_1.AtSwipeAction, { options: OPTIONS, isOpened: isOpened2, onClosed: this.handleStatusClosed, onOpened: this.handleStatusOpened },
                                react_1["default"].createElement(components_1.View, { className: 'normal' }, "\u4F7F\u7528\u53D8\u91CF\u63A7\u5236\u5F00\u5173"))))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u81EA\u52A8\u5173\u95ED"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content no-padding' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item example-item--border' },
                            react_1["default"].createElement(taro_ui_1.AtSwipeAction, { onClick: this.handleClick, autoClose: true, options: OPTIONS },
                                react_1["default"].createElement(components_1.View, { className: 'normal' }, "\u70B9\u51FB\u6309\u94AE\u81EA\u52A8\u5173\u95ED"))))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u4F20\u9012\u70B9\u51FB\u4E8B\u4EF6"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content no-padding' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item example-item--border' },
                            react_1["default"].createElement(taro_ui_1.AtSwipeAction, { onClick: this.handleClick, options: OPTIONS },
                                react_1["default"].createElement(components_1.View, { className: 'normal' }, "\u70B9\u51FB\u4E8B\u4EF6\u89E6\u53D1"))))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u5F00\u542F\u548C\u5173\u95ED\u4E8B\u4EF6"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content no-padding' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item example-item--border' },
                            react_1["default"].createElement(taro_ui_1.AtSwipeAction, { options: OPTIONS, onClick: this.handleClick, onOpened: this.handleOpened, onClosed: this.handleClosed },
                                react_1["default"].createElement(components_1.View, { className: 'normal' }, "\u5F00\u542F\u548C\u5173\u95ED\u65F6\u89E6\u53D1\u4E8B\u4EF6"))))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u4E0EList\u7EC4\u4EF6\u4F7F\u7528"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content no-padding' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(taro_ui_1.AtList, null,
                                react_1["default"].createElement(taro_ui_1.AtSwipeAction, { options: OPTIONS },
                                    react_1["default"].createElement(taro_ui_1.AtListItem, { title: 'Item1' })),
                                react_1["default"].createElement(taro_ui_1.AtSwipeAction, { options: OPTIONS },
                                    react_1["default"].createElement(taro_ui_1.AtListItem, { title: 'Item2' })),
                                react_1["default"].createElement(taro_ui_1.AtSwipeAction, { options: [
                                        {
                                            text: '警告',
                                            style: {
                                                backgroundColor: '#FFC82C'
                                            }
                                        }
                                    ] },
                                    react_1["default"].createElement(taro_ui_1.AtListItem, { title: 'Item3123123123123' })))))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u63A7\u5236\u53EA\u663E\u793A\u5355\u4E2A"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content no-padding' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(taro_ui_1.AtList, null, list.map(function (item, index) { return (react_1["default"].createElement(taro_ui_1.AtSwipeAction, { key: item.title, options: item.options, isOpened: item.isOpened, onClick: _this.handleClicked.bind(_this, index), onOpened: _this.handleSingle.bind(_this, index) },
                                react_1["default"].createElement(taro_ui_1.AtListItem, { title: item.title }))); }))))))));
    };
    return SwipeActionPage;
}(react_1["default"].Component));
exports["default"] = SwipeActionPage;
//# sourceMappingURL=index.js.map