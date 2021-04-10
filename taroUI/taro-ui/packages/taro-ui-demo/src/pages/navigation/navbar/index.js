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
var Index = /** @class */ (function (_super) {
    __extends(Index, _super);
    function Index() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.config = {
            navigationBarTitleText: 'Taro UI'
        };
        return _this;
    }
    Index.prototype.handleClick = function (title) {
        taro_1["default"].showToast({
            title: title,
            duration: 2000,
            icon: 'success'
        });
    };
    Index.prototype.clickReturn = function () {
        taro_1["default"].showToast({
            title: '返回',
            duration: 2000,
            icon: 'success'
        });
    };
    Index.prototype.clickMy = function () {
        taro_1["default"].showToast({
            title: '我的',
            duration: 2000,
            icon: 'success'
        });
    };
    Index.prototype.clickList = function () {
        taro_1["default"].showToast({
            title: '功能列表',
            duration: 2000,
            icon: 'success'
        });
    };
    Index.prototype.render = function () {
        return (react_1["default"].createElement(components_1.View, { className: 'page' },
            react_1["default"].createElement(doc_header_1["default"], { title: 'NavBar \u5BFC\u822A\u680F' }),
            react_1["default"].createElement(components_1.View, { className: 'doc-body' },
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u57FA\u7840\u7528\u6CD5"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content no-padding' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(taro_ui_1.AtNavBar, { onClickLeftIcon: this.handleClick.bind(this, '返回'), title: 'NavBar \u5BFC\u822A\u680F\u793A\u4F8B', leftIconType: 'chevron-left' })),
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(taro_ui_1.AtNavBar, { onClickLeftIcon: this.handleClick.bind(this, '返回'), title: 'NavBar \u5BFC\u822A\u680F\u793A\u4F8B', leftIconType: 'chevron-left', rightFirstIconType: 'bullet-list', rightSecondIconType: 'user' })),
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(taro_ui_1.AtNavBar, { onClickLeftIcon: this.handleClick.bind(this, '返回'), title: 'NavBar \u5BFC\u822A\u680F\u793A\u4F8B', leftIconType: 'chevron-left', rightFirstIconType: 'user' })))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u81EA\u5B9A\u4E49\u5DE6\u4E0A\u89D2\u6587\u6848"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content no-padding' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(taro_ui_1.AtNavBar, { onClickLeftIcon: this.handleClick.bind(this, '返回'), title: 'NavBar \u5BFC\u822A\u680F\u793A\u4F8B', leftText: '\u8FD4\u56DE', leftIconType: 'chevron-left', rightFirstIconType: 'bullet-list', rightSecondIconType: 'user' })),
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(taro_ui_1.AtNavBar, { onClickLeftIcon: this.handleClick.bind(this, '返回'), title: 'NavBar \u5BFC\u822A\u680F\u793A\u4F8B', leftText: '\u8FD4\u56DE', rightFirstIconType: 'bullet-list', rightSecondIconType: 'user' })))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u81EA\u5B9A\u4E49\u989C\u8272"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content no-padding' },
                        react_1["default"].createElement(taro_ui_1.AtNavBar, { onClickRgIconSt: this.clickList.bind(this), onClickRgIconNd: this.clickMy.bind(this), onClickLeftIcon: this.clickReturn.bind(this), color: '#333', title: 'NavBar \u5BFC\u822A\u680F\u793A\u4F8B', leftText: '\u8FD4\u56DE', rightFirstIconType: 'bullet-list', rightSecondIconType: 'user' }))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u81EA\u5B9A\u4E49\u56FE\u6807\u6837\u5F0F"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content no-padding' },
                        react_1["default"].createElement(taro_ui_1.AtNavBar, { onClickRgIconSt: this.clickList.bind(this), onClickRgIconNd: this.clickMy.bind(this), onClickLeftIcon: this.clickReturn.bind(this), color: '#333', title: 'NavBar \u5BFC\u822A\u680F\u793A\u4F8B', leftText: '\u8FD4\u56DE', rightFirstIconType: 'bullet-list', rightSecondIconType: { value: 'user', size: 36, color: 'red' } }))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u65E0\u4E0B\u5212\u7EBF"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content no-padding' },
                        react_1["default"].createElement(taro_ui_1.AtNavBar, { border: false, onClickRgIconSt: this.clickList.bind(this), onClickRgIconNd: this.clickMy.bind(this), onClickLeftIcon: this.clickReturn.bind(this), color: '#333', title: 'NavBar \u5BFC\u822A\u680F\u793A\u4F8B', leftText: '\u8FD4\u56DE', rightFirstIconType: 'bullet-list', rightSecondIconType: 'user' }))))));
    };
    return Index;
}(react_1["default"].Component));
exports["default"] = Index;
//# sourceMappingURL=index.js.map