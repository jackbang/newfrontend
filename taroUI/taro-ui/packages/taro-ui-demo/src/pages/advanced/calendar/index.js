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
var Index = /** @class */ (function (_super) {
    __extends(Index, _super);
    function Index(props) {
        var _this = _super.call(this, props) || this;
        _this.config = {
            navigationBarTitleText: 'Taro日历组件展示'
        };
        _this.handleClick = function (key, value) {
            var _a;
            _this.setState((_a = {},
                _a[key] = value,
                _a));
        };
        // private handleDayClick = (...arg): void => {
        //   console.log('handleDayClick', arg)
        // }
        // private handleDayLongClick = (...arg): void => {
        //   console.log('handleDayLongClick', arg)
        // }
        _this.handleDateChange = function (arg) {
            taro_1["default"].showToast({
                title: "handleDateChange: " + JSON.stringify(arg),
                icon: 'none'
            });
        };
        _this.handleMonthChange = function (arg) {
            taro_1["default"].showToast({
                title: "handleMonthChange: " + JSON.stringify(arg),
                icon: 'none'
            });
        };
        _this.state = {
            now: Date.now(),
            minDate: '2018/06/11',
            maxDate: '2020/12/12',
            multiCurentDate: {
                start: Date.now()
            },
            mark: [
                {
                    value: '2018/11/11'
                }
            ],
            validDates: [
                {
                    value: '2019/04/17'
                },
                {
                    value: '2019/04/21'
                },
                {
                    value: '2019/05/04'
                },
                {
                    value: '2019/05/28'
                }
            ]
        };
        return _this;
    }
    Index.prototype.render = function () {
        var _a = this.state, now = _a.now, minDate = _a.minDate, maxDate = _a.maxDate, mark = _a.mark, multiCurentDate = _a.multiCurentDate, validDates = _a.validDates;
        return (react_1["default"].createElement(components_1.View, { className: 'page calendar-page' },
            react_1["default"].createElement(doc_header_1["default"], { title: 'Calendar \u65E5\u5386' }),
            react_1["default"].createElement(components_1.View, { className: 'doc-body' },
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u4E00\u822C\u6848\u4F8B"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(taro_ui_1.AtCalendar, { onMonthChange: this.handleMonthChange }))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u8DF3\u8F6C\u5230\u6307\u5B9A\u65E5\u671F"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(taro_ui_1.AtCalendar, { currentDate: now }),
                        react_1["default"].createElement(components_1.View, { className: 'body_controllers' },
                            react_1["default"].createElement(taro_ui_1.AtButton, { size: 'small', onClick: this.handleClick.bind(this, 'now', '2018/01/01') }, "\u8DF3\u8F6C\u5230 2018/01/01"),
                            react_1["default"].createElement(taro_ui_1.AtButton, { size: 'small', onClick: this.handleClick.bind(this, 'now', '2018/06/18') }, "\u8DF3\u8F6C\u5230 2018/6/18")))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u6307\u5B9A\u6700\u5C0F\u65E5\u671F\u548C\u6700\u5927\u65E5\u671F"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(taro_ui_1.AtCalendar, { minDate: minDate, maxDate: maxDate }),
                        react_1["default"].createElement(components_1.View, { className: 'body_controllers' },
                            react_1["default"].createElement(taro_ui_1.AtButton, { size: 'small', onClick: this.handleClick.bind(this, 'minDate', '2018/01/01') }, "\u8BBE\u7F6E\u6700\u5C0F\u503C 2018/1/1"),
                            react_1["default"].createElement(taro_ui_1.AtButton, { size: 'small', onClick: this.handleClick.bind(this, 'maxDate', '2019/12/31') }, "\u8BBE\u7F6E\u6700\u5927\u503C 2019/12/31")))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u6807\u8BB0\u65F6\u95F4"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(taro_ui_1.AtCalendar, { marks: mark }),
                        react_1["default"].createElement(components_1.View, { className: 'body_controllers' },
                            react_1["default"].createElement(taro_ui_1.AtButton, { size: 'small', className: 'button', onClick: this.handleClick.bind(this, 'mark', [
                                    {
                                        value: Date.now()
                                    }
                                ]) }, "\u6807\u8BB0\u5F53\u524D\u65F6\u95F4")))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u7981\u6B62\u6ED1\u52A8"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(taro_ui_1.AtCalendar, { isSwiper: false }))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u5782\u76F4\u6ED1\u52A8"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(taro_ui_1.AtCalendar, { isVertical: true, onSelectDate: this.handleDateChange }))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u8303\u56F4\u9009\u62E9"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(taro_ui_1.AtCalendar, { onSelectDate: this.handleDateChange, isMultiSelect: true, currentDate: multiCurentDate }),
                        react_1["default"].createElement(components_1.View, { className: 'body_controllers' },
                            react_1["default"].createElement(taro_ui_1.AtButton, { size: 'small', className: 'button', onClick: this.handleClick.bind(this, 'multiCurentDate', {
                                    start: '2018/10/28',
                                    end: '2018/11/11'
                                }) }, "\u8BBE\u7F6E\u9009\u62E9\u533A\u95F4\u4E3A 2018/10/28 - 2018/11/11")))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u6709\u6548\u65F6\u95F4\u7EC4"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(taro_ui_1.AtCalendar, { validDates: validDates }))))));
    };
    return Index;
}(react_1["default"].Component));
exports["default"] = Index;
//# sourceMappingURL=index.js.map