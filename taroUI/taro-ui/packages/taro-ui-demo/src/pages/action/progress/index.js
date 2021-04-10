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
var OFFSET = 15;
var ProgressPage = /** @class */ (function (_super) {
    __extends(ProgressPage, _super);
    function ProgressPage(props) {
        var _this = _super.call(this, props) || this;
        _this.config = {
            navigationBarTitleText: 'Taro UI'
        };
        _this.reduce = function () {
            var percent = _this.state.percent;
            if (percent === 0) {
                return;
            }
            percent = percent - OFFSET < 0 ? 0 : percent - OFFSET;
            _this.setState({
                percent: percent
            });
        };
        _this.increase = function () {
            var percent = _this.state.percent;
            if (percent === 100) {
                return;
            }
            percent = percent + OFFSET > 100 ? 100 : percent + OFFSET;
            _this.setState({
                percent: percent
            });
        };
        _this.state = {
            percent: 0
        };
        return _this;
    }
    ProgressPage.prototype.render = function () {
        var percent = this.state.percent;
        return (react_1["default"].createElement(components_1.View, { className: 'page progress-page' },
            react_1["default"].createElement(doc_header_1["default"], { title: 'Progress \u8FDB\u5EA6\u6761' }),
            react_1["default"].createElement(components_1.View, { className: 'doc-body' },
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u57FA\u7840\u8FDB\u5EA6\u6761"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(taro_ui_1.AtProgress, { percent: 25 })),
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(taro_ui_1.AtProgress, { percent: 50 })),
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(taro_ui_1.AtProgress, { percent: 75 })))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u9690\u85CF\u8FDB\u5EA6\u6587\u6848"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(taro_ui_1.AtProgress, { percent: 25, isHidePercent: true })),
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(taro_ui_1.AtProgress, { percent: 75, isHidePercent: true })))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u81EA\u5B9A\u4E49\u8FDB\u5EA6\u6761\u7EBF\u5BBD"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(taro_ui_1.AtProgress, { percent: 25, strokeWidth: 6 })),
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(taro_ui_1.AtProgress, { percent: 50, strokeWidth: 8 })),
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(taro_ui_1.AtProgress, { percent: 75, strokeWidth: 10 })))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u81EA\u5B9A\u4E49\u989C\u8272"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(taro_ui_1.AtProgress, { percent: 25, color: '#FF4949' })),
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(taro_ui_1.AtProgress, { percent: 50, color: '#13CE66' })),
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(taro_ui_1.AtProgress, { percent: 75, color: '#FFC82C' })))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u4E0D\u540C\u7684\u72B6\u6001"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(components_1.View, { className: 'example-item__desc' }, "\u6682\u505C"),
                            react_1["default"].createElement(taro_ui_1.AtProgress, { percent: 25 })),
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(components_1.View, { className: 'example-item__desc' }, "\u8FDB\u884C\u4E2D"),
                            react_1["default"].createElement(taro_ui_1.AtProgress, { percent: 50, status: 'progress' })),
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(components_1.View, { className: 'example-item__desc' }, "\u9519\u8BEF"),
                            react_1["default"].createElement(taro_ui_1.AtProgress, { percent: 75, status: 'error' })),
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(components_1.View, { className: 'example-item__desc' }, "\u5DF2\u5B8C\u6210"),
                            react_1["default"].createElement(taro_ui_1.AtProgress, { percent: 100, status: 'success' })))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u5B9E\u9645\u6848\u4F8B"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(taro_ui_1.AtProgress, { percent: percent }),
                            react_1["default"].createElement(components_1.View, { className: 'example-item__buttons' },
                                react_1["default"].createElement(components_1.View, { className: 'btn' },
                                    react_1["default"].createElement(taro_ui_1.AtButton, { size: 'small', onClick: this.reduce },
                                        react_1["default"].createElement(taro_ui_1.AtIcon, { value: 'subtract', size: 12 }))),
                                react_1["default"].createElement(components_1.View, { className: 'btn' },
                                    react_1["default"].createElement(taro_ui_1.AtButton, { size: 'small', onClick: this.increase },
                                        react_1["default"].createElement(taro_ui_1.AtIcon, { value: 'add', size: 12 }))))))))));
    };
    return ProgressPage;
}(react_1["default"].Component));
exports["default"] = ProgressPage;
//# sourceMappingURL=index.js.map