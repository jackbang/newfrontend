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
var ActivityIndicatorPage = /** @class */ (function (_super) {
    __extends(ActivityIndicatorPage, _super);
    function ActivityIndicatorPage(props) {
        var _this = _super.call(this, props) || this;
        _this.config = {
            navigationBarTitleText: 'Taro UI'
        };
        _this.state = {
            isOpened: true
        };
        return _this;
    }
    ActivityIndicatorPage.prototype.handleChange = function (value) {
        this.setState({
            isOpened: value
        });
    };
    ActivityIndicatorPage.prototype.render = function () {
        return (react_1["default"].createElement(components_1.View, { className: 'page activity-indicator-page' },
            react_1["default"].createElement(doc_header_1["default"], { title: 'Activity Indicator \u6D3B\u52A8\u6307\u793A\u5668' }),
            react_1["default"].createElement(components_1.View, { className: 'doc-body' },
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u81EA\u5B9A\u4E49\u5C3A\u5BF8"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(components_1.View, { className: 'subitem' },
                                react_1["default"].createElement(taro_ui_1.AtActivityIndicator, { size: 20 })),
                            react_1["default"].createElement(components_1.View, { className: 'subitem' },
                                react_1["default"].createElement(taro_ui_1.AtActivityIndicator, { size: 24 })),
                            react_1["default"].createElement(components_1.View, { className: 'subitem' },
                                react_1["default"].createElement(taro_ui_1.AtActivityIndicator, { size: 32 }))))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u81EA\u5B9A\u4E49\u989C\u8272"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(components_1.View, { className: 'subitem' },
                                react_1["default"].createElement(taro_ui_1.AtActivityIndicator, { color: '#13CE66' })),
                            react_1["default"].createElement(components_1.View, { className: 'subitem' },
                                react_1["default"].createElement(taro_ui_1.AtActivityIndicator, { color: '#FF4949' })),
                            react_1["default"].createElement(components_1.View, { className: 'subitem' },
                                react_1["default"].createElement(taro_ui_1.AtActivityIndicator, { color: '#C9C9C9' }))))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u81EA\u5B9A\u4E49\u6587\u5B57"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(taro_ui_1.AtActivityIndicator, { content: '\u52A0\u8F7D\u4E2D...' })))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u72B6\u6001\u5207\u6362"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content ' },
                        react_1["default"].createElement(taro_ui_1.AtSwitch, { border: false, title: this.state.isOpened ? '开启中' : '关闭中', checked: this.state.isOpened, onChange: this.handleChange.bind(this) }),
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(taro_ui_1.AtActivityIndicator, { content: '\u52A0\u8F7D\u4E2D...', isOpened: this.state.isOpened })))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u5782\u76F4\u6C34\u5E73\u5C45\u4E2D"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item example-item--center' },
                            react_1["default"].createElement(taro_ui_1.AtActivityIndicator, { mode: 'center' })),
                        react_1["default"].createElement(components_1.View, { className: 'example-item example-item--center' },
                            react_1["default"].createElement(taro_ui_1.AtActivityIndicator, { mode: 'center', content: 'Loading...' })))))));
    };
    return ActivityIndicatorPage;
}(react_1["default"].Component));
exports["default"] = ActivityIndicatorPage;
//# sourceMappingURL=index.js.map