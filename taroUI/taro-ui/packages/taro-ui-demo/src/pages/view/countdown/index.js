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
var CountDownPage = /** @class */ (function (_super) {
    __extends(CountDownPage, _super);
    function CountDownPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.config = {
            navigationBarTitleText: 'Taro UI'
        };
        return _this;
    }
    CountDownPage.prototype.onTimeUp = function () {
        taro_1["default"].showToast({
            title: '时间到',
            icon: 'success',
            duration: 2000
        });
    };
    CountDownPage.prototype.render = function () {
        return (react_1["default"].createElement(components_1.View, { className: 'page' },
            react_1["default"].createElement(doc_header_1["default"], { title: 'CountDown \u5012\u8BA1\u65F6' }),
            react_1["default"].createElement(components_1.View, { className: 'doc-body' },
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u4E00\u822C\u7528\u6CD5"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(taro_ui_1.AtCountdown, { minutes: 1, seconds: 10 })),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(taro_ui_1.AtCountdown, { hours: 48, minutes: 0, seconds: 3 })),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(taro_ui_1.AtCountdown, { isShowDay: true, hours: 1, minutes: 1, seconds: 10 })),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(taro_ui_1.AtCountdown, { isShowHour: false, minutes: 1, seconds: 10 }))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u81EA\u5B9A\u4E49\u683C\u5F0F\u5316"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(taro_ui_1.AtCountdown, { format: { hours: ':', minutes: ':', seconds: '' }, minutes: 1, seconds: 10 }))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u5361\u7247\u5F0F"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(taro_ui_1.AtCountdown, { isCard: true, minutes: 1, seconds: 10 })),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(taro_ui_1.AtCountdown, { isCard: true, isShowDay: true, day: 1, minutes: 1, seconds: 10, format: { day: '天', hours: ':', minutes: ':', seconds: '' } }))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u81EA\u5B9A\u4E49\u5012\u8BA1\u65F6\u56DE\u8C03\u4E8B\u4EF6"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(taro_ui_1.AtCountdown, { format: { hours: ':', minutes: ':', seconds: '' }, seconds: 10, onTimeUp: this.onTimeUp.bind(this) }))))));
    };
    return CountDownPage;
}(react_1["default"].Component));
exports["default"] = CountDownPage;
//# sourceMappingURL=index.js.map