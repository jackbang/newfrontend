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
var TimelinePage = /** @class */ (function (_super) {
    __extends(TimelinePage, _super);
    function TimelinePage(props) {
        var _this = _super.call(this, props) || this;
        _this.config = {
            navigationBarTitleText: 'Taro UI'
        };
        _this.state = {
            current1: 0,
            current2: 0,
            current3: 0,
            current4: 0,
            current5: 1
        };
        return _this;
    }
    TimelinePage.prototype.onChange = function (stateName, current) {
        var _a;
        this.setState((_a = {},
            _a[stateName] = current,
            _a));
    };
    TimelinePage.prototype.render = function () {
        var items1 = [{ title: '步骤一' }, { title: '步骤二' }];
        var items2 = [
            { title: '步骤一' },
            { title: '步骤二' },
            { title: '步骤三' }
        ];
        var items3 = [
            { title: '步骤一', desc: '这里是额外的信息，最多两行' },
            { title: '步骤二', desc: '这里是额外的信息，最多两行' },
            { title: '步骤三', desc: '这里是额外的信息，最多两行' }
        ];
        var items4 = [
            {
                title: '步骤一',
                desc: '这里是额外的信息，最多两行',
                icon: {
                    value: 'sound',
                    activeColor: '#fff',
                    inactiveColor: '#78A4FA',
                    size: '14'
                }
            },
            {
                title: '步骤二',
                desc: '这里是额外的信息，最多两行',
                icon: {
                    value: 'shopping-cart',
                    activeColor: '#fff',
                    inactiveColor: '#78A4FA',
                    size: '14'
                }
            },
            {
                title: '步骤三',
                desc: '这里是额外的信息，最多两行',
                icon: {
                    value: 'camera',
                    activeColor: '#fff',
                    inactiveColor: '#78A4FA',
                    size: '14'
                }
            }
        ];
        var items5 = [
            {
                title: '步骤一',
                desc: '这里是额外的信息，最多两行',
                status: 'success'
            },
            {
                title: '步骤二',
                desc: '这里是额外的信息，最多两行'
            },
            {
                title: '步骤三',
                desc: '这里是额外的信息，最多两行',
                status: 'error'
            }
        ];
        return (react_1["default"].createElement(components_1.View, { className: 'page' },
            react_1["default"].createElement(doc_header_1["default"], { title: 'Steps \u6B65\u9AA4\u6761' }),
            react_1["default"].createElement(components_1.View, { className: 'doc-body' },
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u57FA\u7840\u7528\u6CD5"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(taro_ui_1.AtSteps, { items: items1, current: this.state.current1, onChange: this.onChange.bind(this, 'current1') }),
                            react_1["default"].createElement(taro_ui_1.AtSteps, { items: items2, current: this.state.current2, onChange: this.onChange.bind(this, 'current2') })))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u5E26\u9644\u52A0\u4FE1\u606F"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(taro_ui_1.AtSteps, { items: items3, current: this.state.current3, onChange: this.onChange.bind(this, 'current3') })))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u81EA\u5B9A\u4E49\u56FE\u6807"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(taro_ui_1.AtSteps, { items: items4, current: this.state.current4, onChange: this.onChange.bind(this, 'current4') })))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u72B6\u6001\u6B65\u9AA4\u6761"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(taro_ui_1.AtSteps, { items: items5, current: this.state.current5, onChange: this.onChange.bind(this, 'current5') })))))));
    };
    return TimelinePage;
}(react_1["default"].Component));
exports["default"] = TimelinePage;
//# sourceMappingURL=index.js.map