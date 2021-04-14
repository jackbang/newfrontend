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
    function Index() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.config = {
            navigationBarTitleText: 'Taro UI'
        };
        _this.state = {
            selector: ['中国', '美国', '巴西', '日本'],
            multiSelector: [
                ['饭', '粥', '粉'],
                ['猪肉', '牛肉']
            ],
            selectorValue: 0,
            mulitSelectorValues: [0, 1],
            timeSel: '06:18',
            dateSel: '2018-06-18',
            isAlipay: false
        };
        _this.handleChange = function (e) {
            _this.setState({
                selectorValue: e.detail.value
            });
        };
        _this.handleMulitChange = function (e) {
            _this.setState({
                mulitSelectorValues: e.detail.value
            });
        };
        _this.handleTimeChange = function (e) {
            _this.setState({
                timeSel: e.detail.value
            });
        };
        _this.handleDateChange = function (e) {
            _this.setState({
                dateSel: e.detail.value
            });
        };
        return _this;
    }
    Index.prototype.componentDidMount = function () {
        var env = taro_1["default"].getEnv();
        this.setState({
            isAlipay: env === taro_1["default"].ENV_TYPE.ALIPAY
        });
    };
    Index.prototype.render = function () {
        var _a = this.state, selector = _a.selector, selectorValue = _a.selectorValue, multiSelector = _a.multiSelector, mulitSelectorValues = _a.mulitSelectorValues, timeSel = _a.timeSel, dateSel = _a.dateSel, isAlipay = _a.isAlipay;
        return (react_1["default"].createElement(components_1.View, { className: 'page picker__page' },
            react_1["default"].createElement(doc_header_1["default"], { title: 'Picker \u9009\u62E9\u5668' }),
            react_1["default"].createElement(components_1.View, { className: 'doc-body' },
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u666E\u901A\u9009\u62E9\u5668"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(components_1.Picker, { mode: 'selector', range: selector, value: selectorValue, onChange: this.handleChange },
                                react_1["default"].createElement(components_1.View, { className: 'demo-list-item' },
                                    react_1["default"].createElement(components_1.View, { className: 'demo-list-item__label' }, "\u56FD\u5BB6\u5730\u533A"),
                                    react_1["default"].createElement(components_1.View, { className: 'demo-list-item__value' }, selector[selectorValue])))))),
                !isAlipay && (react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u591A\u5217\u9009\u62E9\u5668"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(components_1.Picker, { mode: 'multiSelector', range: multiSelector, value: mulitSelectorValues, onChange: this.handleMulitChange },
                                react_1["default"].createElement(components_1.View, { className: 'demo-list-item' },
                                    react_1["default"].createElement(components_1.View, { className: 'demo-list-item__label' }, "\u8BF7\u9009\u62E9\u65E9\u9910"),
                                    react_1["default"].createElement(components_1.View, { className: 'demo-list-item__value' }, multiSelector[0][mulitSelectorValues[0]] + " & " + multiSelector[1][mulitSelectorValues[1]]))))))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u65F6\u95F4\u9009\u62E9\u5668"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(components_1.Picker, { mode: 'time', value: timeSel, onChange: this.handleTimeChange },
                                react_1["default"].createElement(components_1.View, { className: 'demo-list-item' },
                                    react_1["default"].createElement(components_1.View, { className: 'demo-list-item__label' }, "\u8BF7\u9009\u62E9\u65F6\u95F4"),
                                    react_1["default"].createElement(components_1.View, { className: 'demo-list-item__value' }, timeSel)))))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u65E5\u671F\u9009\u62E9\u5668"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(components_1.Picker, { mode: 'date', value: dateSel, onChange: this.handleDateChange },
                                react_1["default"].createElement(components_1.View, { className: 'demo-list-item' },
                                    react_1["default"].createElement(components_1.View, { className: 'demo-list-item__label' }, "\u8BF7\u9009\u62E9\u65E5\u671F"),
                                    react_1["default"].createElement(components_1.View, { className: 'demo-list-item__value' }, dateSel)))))))));
    };
    return Index;
}(react_1["default"].Component));
exports["default"] = Index;
//# sourceMappingURL=index.js.map