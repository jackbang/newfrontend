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
var components_1 = require("@tarojs/components");
var taro_1 = require("@tarojs/taro");
var doc_header_1 = require("../../components/doc-header");
require("./index.scss");
var Index = /** @class */ (function (_super) {
    __extends(Index, _super);
    function Index(props) {
        var _this = _super.call(this, props) || this;
        _this.config = {
            navigationBarTitleText: 'Taro UI'
        };
        _this.handleChange = function (e) {
            var val = e.detail.value;
            _this.setState({
                year: _this.state.years[val[0]],
                month: _this.state.months[val[1]],
                day: _this.state.days[val[2]],
                value: val
            });
        };
        var date = new Date();
        var years = [];
        var months = [];
        var days = [];
        for (var i = 1990; i <= date.getFullYear(); i++) {
            years.push(i);
        }
        for (var i = 1; i <= 12; i++) {
            months.push(i);
        }
        for (var i = 1; i <= 31; i++) {
            days.push(i);
        }
        _this.state = {
            years: years,
            year: date.getFullYear(),
            months: months,
            month: 2,
            days: days,
            day: 2,
            value: [9999, 5, 17],
            isWeapp: false,
            isAlipay: false
        };
        return _this;
    }
    Index.prototype.componentDidMount = function () {
        var env = taro_1["default"].getEnv();
        this.setState({
            isWeapp: env === taro_1["default"].ENV_TYPE.WEAPP,
            isAlipay: env === taro_1["default"].ENV_TYPE.ALIPAY
        });
    };
    Index.prototype.render = function () {
        var _a = this.state, years = _a.years, months = _a.months, days = _a.days, value = _a.value, year = _a.year, month = _a.month, day = _a.day, isWeapp = _a.isWeapp, isAlipay = _a.isAlipay;
        return (react_1["default"].createElement(components_1.View, { className: 'page' },
            react_1["default"].createElement(doc_header_1["default"], { title: 'Picker View \u6EDA\u52A8\u9009\u62E9\u5668' }),
            react_1["default"].createElement(components_1.View, { className: 'doc-body' },
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u57FA\u7840\u7528\u6CD5"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(components_1.View, { className: 'example-item__desc' }, "\u5D4C\u5165\u9875\u9762\u7684\u6ED1\u52A8\u9009\u62E9\u5668"),
                            isWeapp || isAlipay ? (react_1["default"].createElement(components_1.View, null,
                                react_1["default"].createElement(components_1.View, { className: 'title-date' },
                                    year,
                                    "\u5E74",
                                    month,
                                    "\u6708",
                                    day,
                                    "\u65E5"),
                                react_1["default"].createElement(components_1.PickerView, { indicatorStyle: 'height: 50px;', className: 'picker', style: 'width: 100%; height: 300px; text-align: center;', value: value, onChange: this.handleChange },
                                    react_1["default"].createElement(components_1.PickerViewColumn, null, years.map(function (item, idx) { return (react_1["default"].createElement(components_1.View, { key: idx, style: 'line-height: 50px' },
                                        item,
                                        "\u5E74")); })),
                                    react_1["default"].createElement(components_1.PickerViewColumn, null, months.map(function (item, idx) { return (react_1["default"].createElement(components_1.View, { key: idx, style: 'line-height: 50px' },
                                        item,
                                        "\u6708")); })),
                                    react_1["default"].createElement(components_1.PickerViewColumn, null, days.map(function (item, idx) { return (react_1["default"].createElement(components_1.View, { key: idx, style: 'line-height: 50px' },
                                        item,
                                        "\u65E5")); }))))) : (react_1["default"].createElement(components_1.View, { className: 'title-date' }, "\u6682\u65F6\u4EC5\u652F\u6301\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F"))))))));
    };
    return Index;
}(react_1["default"].Component));
exports["default"] = Index;
//# sourceMappingURL=index.js.map