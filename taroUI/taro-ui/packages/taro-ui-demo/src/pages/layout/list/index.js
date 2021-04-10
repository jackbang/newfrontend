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
var ListPage = /** @class */ (function (_super) {
    __extends(ListPage, _super);
    function ListPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.config = {
            navigationBarTitleText: 'Taro UI'
        };
        _this.handleChange = function (e) {
            taro_1["default"].showToast({
                title: "Change Switch: " + e,
                icon: 'none'
            });
        };
        _this.handleClick = function (e) {
            taro_1["default"].showToast({
                title: "Click Item: " + e,
                icon: 'none'
            });
        };
        return _this;
    }
    ListPage.prototype.render = function () {
        return (react_1["default"].createElement(components_1.View, { className: 'page' },
            react_1["default"].createElement(doc_header_1["default"], { title: 'List \u5217\u8868' }),
            react_1["default"].createElement(components_1.View, { className: 'doc-body' },
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u57FA\u672C\u7528\u6CD5"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content no-padding' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(taro_ui_1.AtList, null,
                                react_1["default"].createElement(taro_ui_1.AtListItem, { title: '\u6807\u9898\u6587\u5B57', onClick: this.handleClick }),
                                react_1["default"].createElement(taro_ui_1.AtListItem, { title: '\u6807\u9898\u6587\u5B57', arrow: 'right' }),
                                react_1["default"].createElement(taro_ui_1.AtListItem, { title: '\u6807\u9898\u6587\u5B57', extraText: '\u8BE6\u7EC6\u4FE1\u606F' }),
                                react_1["default"].createElement(taro_ui_1.AtListItem, { title: '\u7981\u7528\u72B6\u6001', disabled: true, extraText: '\u8BE6\u7EC6\u4FE1\u606F' }))))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u5305\u542B\u63CF\u8FF0\u4FE1\u606F"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content no-padding' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(taro_ui_1.AtList, null,
                                react_1["default"].createElement(taro_ui_1.AtListItem, { title: '\u6807\u9898\u6587\u5B57', note: '\u63CF\u8FF0\u4FE1\u606F' }),
                                react_1["default"].createElement(taro_ui_1.AtListItem, { title: '\u6807\u9898\u6587\u5B57', note: '\u63CF\u8FF0\u4FE1\u606F', arrow: 'right' }),
                                react_1["default"].createElement(taro_ui_1.AtListItem, { arrow: 'right', note: '\u63CF\u8FF0\u4FE1\u606F', title: '\u6211\u662F\u4E00\u4E2A\u5F88\u957F\u5F88\u957F\u5F88\u957F\u7684\u6807\u9898\u6587\u5B57', extraText: '\u8BE6\u7EC6\u4FE1\u606F\u8BE6\u7EC6\u4FE1\u606F\u8BE6\u7EC6\u4FE1\u606F\u8BE6\u7EC6\u4FE1\u606F' }))))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u5305\u542B\u56FE\u7247"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content no-padding' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(taro_ui_1.AtList, null,
                                react_1["default"].createElement(taro_ui_1.AtListItem, { title: '\u6807\u9898\u6587\u5B57', arrow: 'right', thumb: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png' }),
                                react_1["default"].createElement(taro_ui_1.AtListItem, { title: '\u6807\u9898\u6587\u5B57', note: '\u63CF\u8FF0\u4FE1\u606F', arrow: 'right', thumb: 'http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png' }),
                                react_1["default"].createElement(taro_ui_1.AtListItem, { title: '\u6807\u9898\u6587\u5B57', note: '\u63CF\u8FF0\u4FE1\u606F', extraText: '\u8BE6\u7EC6\u4FE1\u606F', arrow: 'right', thumb: 'http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png' }))))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u652F\u6301\u56FE\u6807(\u4E0D\u80FD\u4E0Ethumb\u540C\u65F6\u5B58\u5728)"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content no-padding' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(taro_ui_1.AtList, null,
                                react_1["default"].createElement(taro_ui_1.AtListItem, { title: '\u6807\u9898\u6587\u5B57', note: '\u63CF\u8FF0\u4FE1\u606F', arrow: 'right', iconInfo: {
                                        size: 25,
                                        color: '#78A4FA',
                                        value: 'calendar'
                                    } }),
                                react_1["default"].createElement(taro_ui_1.AtListItem, { title: '\u6807\u9898\u6587\u5B57', note: '\u63CF\u8FF0\u4FE1\u606F', extraText: '\u8BE6\u7EC6\u4FE1\u606F', arrow: 'right', iconInfo: {
                                        size: 25,
                                        color: '#FF4949',
                                        value: 'bookmark'
                                    } }))))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u65E0\u8FB9\u6846"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content no-padding' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(taro_ui_1.AtList, { hasBorder: false },
                                react_1["default"].createElement(taro_ui_1.AtListItem, { isSwitch: true, title: '\u6807\u9898\u6587\u5B57', hasBorder: false, onSwitchChange: this.handleChange }),
                                react_1["default"].createElement(taro_ui_1.AtListItem, { isSwitch: true, title: '\u6807\u9898\u6587\u5B57', hasBorder: false, onSwitchChange: this.handleChange }))))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "Switch \u6309\u94AE\u5217\u8868"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content no-padding' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(taro_ui_1.AtList, null,
                                react_1["default"].createElement(taro_ui_1.AtListItem, { title: '\u6807\u9898\u6587\u5B57', isSwitch: true, onClick: this.handleClick, onSwitchChange: this.handleChange }),
                                react_1["default"].createElement(taro_ui_1.AtListItem, { isSwitch: true, disabled: true, switchIsCheck: true, title: '\u7981\u7528\u72B6\u6001', onSwitchChange: this.handleChange }),
                                react_1["default"].createElement(taro_ui_1.AtListItem, { isSwitch: true, switchIsCheck: true, title: '\u6807\u9898\u6587\u5B57', onSwitchChange: this.handleChange }))))))));
    };
    return ListPage;
}(react_1["default"].Component));
exports["default"] = ListPage;
//# sourceMappingURL=index.js.map