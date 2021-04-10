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
            rateValue1: 3,
            rateValue2: 3,
            rateValue3: 3,
            rateValue4: 3
        };
        return _this;
    }
    Index.prototype.handleRateChange = function (stateName, value) {
        var _a;
        this.setState((_a = {},
            _a[stateName] = value,
            _a));
    };
    Index.prototype.render = function () {
        var _a = this.state, rateValue1 = _a.rateValue1, rateValue2 = _a.rateValue2, rateValue3 = _a.rateValue3, rateValue4 = _a.rateValue4;
        return (react_1["default"].createElement(components_1.View, { className: 'page' },
            react_1["default"].createElement(doc_header_1["default"], { title: 'Rate \u8BC4\u5206' }),
            react_1["default"].createElement(components_1.View, { className: 'doc-body' },
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u57FA\u7840\u7528\u6CD5"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(taro_ui_1.AtRate, { value: rateValue1, onChange: this.handleRateChange.bind(this, 'rateValue1') })))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u81EA\u5B9A\u4E49\u5C3A\u5BF8"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(taro_ui_1.AtRate, { size: 16, value: rateValue2, onChange: this.handleRateChange.bind(this, 'rateValue2') })))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u81EA\u5B9A\u4E49\u8BC4\u5206\u6570"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(taro_ui_1.AtRate, { max: 10, value: rateValue3, onChange: this.handleRateChange.bind(this, 'rateValue3') })))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u81EA\u5B9A\u4E49\u661F\u661F\u95F4\u9694"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(taro_ui_1.AtRate, { margin: 15, value: rateValue4, onChange: this.handleRateChange.bind(this, 'rateValue4') })))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u53EA\u8BFB"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(components_1.View, null, "\u8BC4\u5206: 3.5"),
                            react_1["default"].createElement(components_1.View, null,
                                react_1["default"].createElement(taro_ui_1.AtRate, { value: 3.5 }))))))));
    };
    return Index;
}(react_1["default"].Component));
exports["default"] = Index;
//# sourceMappingURL=index.js.map