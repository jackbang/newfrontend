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
            current1: 0,
            current2: 0,
            current3: 0,
            current4: 0,
            current5: 0
        };
        return _this;
    }
    Index.prototype.handleClick = function (stateName, value) {
        var _a;
        this.setState((_a = {},
            _a[stateName] = value,
            _a));
    };
    Index.prototype.render = function () {
        var _a = this.state, current1 = _a.current1, current2 = _a.current2, current3 = _a.current3, current4 = _a.current4, current5 = _a.current5;
        var tabList1 = [
            { title: '标签页1' },
            { title: '标签页2' },
            { title: '标签页3' }
        ];
        var tabList2 = [
            { title: '标签页1' },
            { title: '标签页2' },
            { title: '标签页3' },
            { title: '标签页4' },
            { title: '标签页5' },
            { title: '标签页6' }
        ];
        return (react_1["default"].createElement(components_1.View, { className: 'page' },
            react_1["default"].createElement(doc_header_1["default"], { title: 'Tabs \u6807\u7B7E\u9875' }),
            react_1["default"].createElement(components_1.View, { className: 'doc-body' },
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u7B49\u5BBD\u6807\u7B7E\u680F"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(taro_ui_1.AtTabs, { swipeable: false, current: current1, tabList: tabList1, onClick: this.handleClick.bind(this, 'current1') },
                            react_1["default"].createElement(taro_ui_1.AtTabsPane, { current: current1, index: 0 },
                                react_1["default"].createElement(components_1.View, { className: 'tab-content' }, "\u6807\u7B7E\u9875\u4E00\u7684\u5185\u5BB9")),
                            react_1["default"].createElement(taro_ui_1.AtTabsPane, { current: current1, index: 1 },
                                react_1["default"].createElement(components_1.View, { className: 'tab-content' }, "\u6807\u7B7E\u9875\u4E8C\u7684\u5185\u5BB9")),
                            react_1["default"].createElement(taro_ui_1.AtTabsPane, { current: current1, index: 2 },
                                react_1["default"].createElement(components_1.View, { className: 'tab-content' }, "\u6807\u7B7E\u9875\u4E09\u7684\u5185\u5BB9"))))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u6EDA\u52A8\u6807\u7B7E\u680F"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(taro_ui_1.AtTabs, { swipeable: false, scroll: true, current: current2, tabList: tabList2, onClick: this.handleClick.bind(this, 'current2') },
                            react_1["default"].createElement(taro_ui_1.AtTabsPane, { current: current2, index: 0 },
                                react_1["default"].createElement(components_1.View, { className: 'tab-content' }, "\u6807\u7B7E\u9875\u4E00\u7684\u5185\u5BB9")),
                            react_1["default"].createElement(taro_ui_1.AtTabsPane, { current: current2, index: 1 },
                                react_1["default"].createElement(components_1.View, { className: 'tab-content' }, "\u6807\u7B7E\u9875\u4E8C\u7684\u5185\u5BB9")),
                            react_1["default"].createElement(taro_ui_1.AtTabsPane, { current: current2, index: 2 },
                                react_1["default"].createElement(components_1.View, { className: 'tab-content' }, "\u6807\u7B7E\u9875\u4E09\u7684\u5185\u5BB9")),
                            react_1["default"].createElement(taro_ui_1.AtTabsPane, { current: current2, index: 3 },
                                react_1["default"].createElement(components_1.View, { className: 'tab-content' }, "\u6807\u7B7E\u9875\u56DB\u7684\u5185\u5BB9")),
                            react_1["default"].createElement(taro_ui_1.AtTabsPane, { current: current2, index: 4 },
                                react_1["default"].createElement(components_1.View, { className: 'tab-content' }, "\u6807\u7B7E\u9875\u4E94\u7684\u5185\u5BB9")),
                            react_1["default"].createElement(taro_ui_1.AtTabsPane, { current: current2, index: 5 },
                                react_1["default"].createElement(components_1.View, { className: 'tab-content' }, "\u6807\u7B7E\u9875\u516D\u7684\u5185\u5BB9"))))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u6ED1\u52A8\u5207\u6362\u5185\u5BB9"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(taro_ui_1.AtTabs, { current: current3, tabList: tabList1, onClick: this.handleClick.bind(this, 'current3') },
                            react_1["default"].createElement(taro_ui_1.AtTabsPane, { current: current3, index: 0 },
                                react_1["default"].createElement(components_1.View, { className: 'tab-content' }, "\u6807\u7B7E\u9875\u4E00\u7684\u5185\u5BB9")),
                            react_1["default"].createElement(taro_ui_1.AtTabsPane, { current: current3, index: 1 },
                                react_1["default"].createElement(components_1.View, { className: 'tab-content' }, "\u6807\u7B7E\u9875\u4E8C\u7684\u5185\u5BB9")),
                            react_1["default"].createElement(taro_ui_1.AtTabsPane, { current: current3, index: 2 },
                                react_1["default"].createElement(components_1.View, { className: 'tab-content' }, "\u6807\u7B7E\u9875\u4E09\u7684\u5185\u5BB9"))))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u5782\u76F4\u6A21\u5F0F"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(taro_ui_1.AtTabs, { height: '200px', scroll: true, tabDirection: 'vertical', current: current4, tabList: tabList2, onClick: this.handleClick.bind(this, 'current4') },
                            react_1["default"].createElement(taro_ui_1.AtTabsPane, { tabDirection: 'vertical', current: current4, index: 0 },
                                react_1["default"].createElement(components_1.View, { className: 'tab-content--vertical' }, "\u6807\u7B7E\u9875\u4E00\u7684\u5185\u5BB9")),
                            react_1["default"].createElement(taro_ui_1.AtTabsPane, { tabDirection: 'vertical', current: current4, index: 1 },
                                react_1["default"].createElement(components_1.View, { className: 'tab-content--vertical' }, "\u6807\u7B7E\u9875\u4E8C\u7684\u5185\u5BB9")),
                            react_1["default"].createElement(taro_ui_1.AtTabsPane, { tabDirection: 'vertical', current: current4, index: 2 },
                                react_1["default"].createElement(components_1.View, { className: 'tab-content--vertical' }, "\u6807\u7B7E\u9875\u4E09\u7684\u5185\u5BB9")),
                            react_1["default"].createElement(taro_ui_1.AtTabsPane, { tabDirection: 'vertical', current: current4, index: 3 },
                                react_1["default"].createElement(components_1.View, { className: 'tab-content--vertical' }, "\u6807\u7B7E\u9875\u56DB\u7684\u5185\u5BB9")),
                            react_1["default"].createElement(taro_ui_1.AtTabsPane, { tabDirection: 'vertical', current: current4, index: 4 },
                                react_1["default"].createElement(components_1.View, { className: 'tab-content--vertical' }, "\u6807\u7B7E\u9875\u4E94\u7684\u5185\u5BB9")),
                            react_1["default"].createElement(taro_ui_1.AtTabsPane, { tabDirection: 'vertical', current: current4, index: 5 },
                                react_1["default"].createElement(components_1.View, { className: 'tab-content--vertical' }, "\u6807\u7B7E\u9875\u516D\u7684\u5185\u5BB9"))))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u7981\u6B62\u5185\u5BB9\u5207\u6362\u52A8\u753B"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(taro_ui_1.AtTabs, { current: current5, animated: false, tabList: tabList1, onClick: this.handleClick.bind(this, 'current5') },
                            react_1["default"].createElement(taro_ui_1.AtTabsPane, { current: current5, index: 0 },
                                react_1["default"].createElement(components_1.View, { className: 'tab-content' }, "\u6807\u7B7E\u9875\u4E00\u7684\u5185\u5BB9")),
                            react_1["default"].createElement(taro_ui_1.AtTabsPane, { current: current5, index: 1 },
                                react_1["default"].createElement(components_1.View, { className: 'tab-content' }, "\u6807\u7B7E\u9875\u4E8C\u7684\u5185\u5BB9")),
                            react_1["default"].createElement(taro_ui_1.AtTabsPane, { current: current5, index: 2 },
                                react_1["default"].createElement(components_1.View, { className: 'tab-content' }, "\u6807\u7B7E\u9875\u4E09\u7684\u5185\u5BB9")),
                            react_1["default"].createElement(taro_ui_1.AtTabsPane, { current: current5, index: 3 },
                                react_1["default"].createElement(components_1.View, { className: 'tab-content' }, "\u6807\u7B7E\u9875\u56DB\u7684\u5185\u5BB9"))))))));
    };
    return Index;
}(react_1["default"].Component));
exports["default"] = Index;
//# sourceMappingURL=index.js.map