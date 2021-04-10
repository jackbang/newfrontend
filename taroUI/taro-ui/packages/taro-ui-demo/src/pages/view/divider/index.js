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
var LoadMorePage = /** @class */ (function (_super) {
    __extends(LoadMorePage, _super);
    function LoadMorePage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.config = {
            navigationBarTitleText: 'Taro UI'
        };
        return _this;
    }
    LoadMorePage.prototype.render = function () {
        return (react_1["default"].createElement(components_1.View, { className: 'page' },
            react_1["default"].createElement(doc_header_1["default"], { title: 'Divider \u5206\u9694\u7EBF' }),
            react_1["default"].createElement(components_1.View, { className: 'doc-body' },
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u4E00\u822C\u7528\u6CD5"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content no-padding' },
                        react_1["default"].createElement(taro_ui_1.AtDivider, { content: '\u5206\u5272\u7EBF' }))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u81EA\u5B9A\u4E49\u989C\u8272"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content no-padding' },
                        react_1["default"].createElement(taro_ui_1.AtDivider, { content: '\u6CA1\u6709\u66F4\u591A\u4E86', fontColor: '#ed3f14', lineColor: '#ed3f14' }),
                        react_1["default"].createElement(taro_ui_1.AtDivider, { content: '\u6CA1\u6709\u66F4\u591A\u4E86', fontColor: '#ff9900', lineColor: '#ff9900' }),
                        react_1["default"].createElement(taro_ui_1.AtDivider, { content: '\u6CA1\u6709\u66F4\u591A\u4E86', fontColor: '#2d8cf0', lineColor: '#2d8cf0' }))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u81EA\u5B9A\u4E49\u5185\u5BB9"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content no-padding' },
                        react_1["default"].createElement(taro_ui_1.AtDivider, null,
                            react_1["default"].createElement(taro_ui_1.AtIcon, { value: 'check-circle' })))))));
    };
    return LoadMorePage;
}(react_1["default"].Component));
exports["default"] = LoadMorePage;
//# sourceMappingURL=index.js.map