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
            current2: 0
        };
        return _this;
    }
    Index.prototype.handleClick = function (num, value) {
        var _a;
        this.setState((_a = {},
            _a["current" + num] = value,
            _a));
    };
    Index.prototype.render = function () {
        var _a = this.state, current1 = _a.current1, current2 = _a.current2;
        var tabList1 = ['标签页1', '标签页2'];
        var tabList2 = ['标签页1', '标签页2', '标签页3'];
        return (react_1["default"].createElement(components_1.View, { className: 'page' },
            react_1["default"].createElement(doc_header_1["default"], { title: 'Segmented Control \u5206\u6BB5\u5668' }),
            react_1["default"].createElement(components_1.View, { className: 'doc-body' },
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u57FA\u7840\u7528\u6CD5"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, null,
                            react_1["default"].createElement(taro_ui_1.AtSegmentedControl, { onClick: this.handleClick.bind(this, 1), current: current1, values: tabList2 }),
                            react_1["default"].createElement(components_1.View, { className: 'tab-content' },
                                "\u6807\u7B7E ",
                                current1 + 1,
                                " \u7684\u5185\u5BB9")))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u81EA\u5B9A\u4E49\u989C\u8272\u3001\u5B57\u4F53\u5927\u5C0F"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, null,
                            react_1["default"].createElement(taro_ui_1.AtSegmentedControl, { onClick: this.handleClick.bind(this, 2), selectedColor: '#FF4949', fontSize: 30, current: current2, values: tabList2 }),
                            react_1["default"].createElement(components_1.View, { className: 'tab-content' },
                                "\u6807\u7B7E ",
                                current2 + 1,
                                " \u7684\u5185\u5BB9")))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u7981\u7528"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(taro_ui_1.AtSegmentedControl, { disabled: true, values: tabList1 }))))));
    };
    return Index;
}(react_1["default"].Component));
exports["default"] = Index;
//# sourceMappingURL=index.js.map