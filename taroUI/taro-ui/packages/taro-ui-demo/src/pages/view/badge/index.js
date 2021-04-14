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
var BadgePage = /** @class */ (function (_super) {
    __extends(BadgePage, _super);
    function BadgePage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.config = {
            navigationBarTitleText: 'Taro UI'
        };
        return _this;
    }
    BadgePage.prototype.render = function () {
        var dot = '···';
        return (react_1["default"].createElement(components_1.View, { className: 'page' },
            react_1["default"].createElement(doc_header_1["default"], { title: 'Badge \u5FBD\u6807' }),
            react_1["default"].createElement(components_1.View, { className: 'doc-body' },
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u6570\u5B57"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'badge-item' },
                            react_1["default"].createElement(components_1.View, { className: 'subitem' },
                                react_1["default"].createElement(taro_ui_1.AtBadge, { value: '10', maxValue: 99 },
                                    react_1["default"].createElement(taro_ui_1.AtButton, { size: 'small', circle: true }, "\u6309\u94AE"))),
                            react_1["default"].createElement(components_1.View, { className: 'subitem' },
                                react_1["default"].createElement(taro_ui_1.AtBadge, { value: '100', maxValue: 99 },
                                    react_1["default"].createElement(taro_ui_1.AtButton, { size: 'small' }, "\u6309\u94AE")))))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u5C0F\u7EA2\u70B9"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'badge-item' },
                            react_1["default"].createElement(components_1.View, { className: 'subitem' },
                                react_1["default"].createElement(taro_ui_1.AtBadge, { dot: true },
                                    react_1["default"].createElement(taro_ui_1.AtButton, { size: 'small', circle: true }, "\u6309\u94AE"))),
                            react_1["default"].createElement(components_1.View, { className: 'subitem' },
                                react_1["default"].createElement(taro_ui_1.AtBadge, { dot: true },
                                    react_1["default"].createElement(taro_ui_1.AtButton, { size: 'small' }, "\u6309\u94AE")))))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u6587\u672C"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'badge-item' },
                            react_1["default"].createElement(components_1.View, { className: 'subitem' },
                                react_1["default"].createElement(taro_ui_1.AtBadge, { value: 'NEW' },
                                    react_1["default"].createElement(taro_ui_1.AtButton, { size: 'small', circle: true }, "\u6309\u94AE"))),
                            react_1["default"].createElement(components_1.View, { className: 'subitem' },
                                react_1["default"].createElement(taro_ui_1.AtBadge, { value: 'NEW' },
                                    react_1["default"].createElement(taro_ui_1.AtButton, { size: 'small' }, "\u6309\u94AE")))))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u7701\u7565\u53F7"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'badge-item' },
                            react_1["default"].createElement(components_1.View, { className: 'subitem' },
                                react_1["default"].createElement(taro_ui_1.AtBadge, { value: dot },
                                    react_1["default"].createElement(taro_ui_1.AtButton, { size: 'small', circle: true }, "\u6309\u94AE"))),
                            react_1["default"].createElement(components_1.View, { className: 'subitem' },
                                react_1["default"].createElement(taro_ui_1.AtBadge, { value: dot },
                                    react_1["default"].createElement(taro_ui_1.AtButton, { size: 'small' }, "\u6309\u94AE")))))))));
    };
    return BadgePage;
}(react_1["default"].Component));
exports["default"] = BadgePage;
//# sourceMappingURL=index.js.map