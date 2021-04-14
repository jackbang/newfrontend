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
var classnames_1 = require("classnames");
var dayjs_1 = require("dayjs");
var react_1 = require("react");
var components_1 = require("@tarojs/components");
var index_1 = require("./body/index");
var index_2 = require("./controller/index");
var defaultProps = {
    validDates: [],
    marks: [],
    isSwiper: true,
    hideArrow: false,
    isVertical: false,
    selectedDates: [],
    isMultiSelect: false,
    format: 'YYYY-MM-DD',
    currentDate: Date.now(),
    monthFormat: 'YYYY年MM月'
};
var AtCalendar = /** @class */ (function (_super) {
    __extends(AtCalendar, _super);
    function AtCalendar(props) {
        var _this = _super.call(this, props) || this;
        _this.getSingleSelectdState = function (value) {
            var generateDate = _this.state.generateDate;
            var stateValue = {
                selectedDate: _this.getSelectedDate(value.valueOf())
            };
            var dayjsGenerateDate = value.startOf('month');
            var generateDateValue = dayjsGenerateDate.valueOf();
            if (generateDateValue !== generateDate) {
                _this.triggerChangeDate(dayjsGenerateDate);
                stateValue.generateDate = generateDateValue;
            }
            return stateValue;
        };
        _this.getMultiSelectedState = function (value) {
            var selectedDate = _this.state.selectedDate;
            var end = selectedDate.end, start = selectedDate.start;
            var valueUnix = value.valueOf();
            var state = {
                selectedDate: selectedDate
            };
            if (end) {
                state.selectedDate = _this.getSelectedDate(valueUnix, 0);
            }
            else {
                state.selectedDate.end = Math.max(valueUnix, +start);
                state.selectedDate.start = Math.min(valueUnix, +start);
            }
            return state;
        };
        _this.getSelectedDate = function (start, end) {
            var stateValue = {
                start: start,
                end: start
            };
            if (typeof end !== 'undefined') {
                stateValue.end = end;
            }
            return stateValue;
        };
        _this.triggerChangeDate = function (value) {
            var format = _this.props.format;
            if (typeof _this.props.onMonthChange !== 'function')
                return;
            _this.props.onMonthChange(value.format(format));
        };
        _this.setMonth = function (vectorCount) {
            var format = _this.props.format;
            var generateDate = _this.state.generateDate;
            var _generateDate = dayjs_1["default"](generateDate).add(vectorCount, 'month');
            _this.setState({
                generateDate: _generateDate.valueOf()
            });
            if (vectorCount && typeof _this.props.onMonthChange === 'function') {
                _this.props.onMonthChange(_generateDate.format(format));
            }
        };
        _this.handleClickPreMonth = function (isMinMonth) {
            if (isMinMonth === true) {
                return;
            }
            _this.setMonth(-1);
            if (typeof _this.props.onClickPreMonth === 'function') {
                _this.props.onClickPreMonth();
            }
        };
        _this.handleClickNextMonth = function (isMaxMonth) {
            if (isMaxMonth === true) {
                return;
            }
            _this.setMonth(1);
            if (typeof _this.props.onClickNextMonth === 'function') {
                _this.props.onClickNextMonth();
            }
        };
        // picker 选择时间改变时触发
        _this.handleSelectDate = function (e) {
            var value = e.detail.value;
            var _generateDate = dayjs_1["default"](value);
            var _generateDateValue = _generateDate.valueOf();
            if (_this.state.generateDate === _generateDateValue)
                return;
            _this.triggerChangeDate(_generateDate);
            _this.setState({
                generateDate: _generateDateValue
            });
        };
        _this.handleDayClick = function (item) {
            var isMultiSelect = _this.props.isMultiSelect;
            var isDisabled = item.isDisabled, value = item.value;
            if (isDisabled)
                return;
            var dayjsDate = dayjs_1["default"](value);
            var stateValue = {};
            if (isMultiSelect) {
                stateValue = _this.getMultiSelectedState(dayjsDate);
            }
            else {
                stateValue = _this.getSingleSelectdState(dayjsDate);
            }
            _this.setState(stateValue, function () {
                _this.handleSelectedDate();
            });
            if (typeof _this.props.onDayClick === 'function') {
                _this.props.onDayClick({ value: item.value });
            }
        };
        _this.handleSelectedDate = function () {
            var selectDate = _this.state.selectedDate;
            if (typeof _this.props.onSelectDate === 'function') {
                var info = {
                    start: dayjs_1["default"](selectDate.start).format(_this.props.format)
                };
                if (selectDate.end) {
                    info.end = dayjs_1["default"](selectDate.end).format(_this.props.format);
                }
                _this.props.onSelectDate({
                    value: info
                });
            }
        };
        _this.handleDayLongClick = function (item) {
            if (typeof _this.props.onDayLongClick === 'function') {
                _this.props.onDayLongClick({ value: item.value });
            }
        };
        var _a = props, currentDate = _a.currentDate, isMultiSelect = _a.isMultiSelect;
        _this.state = _this.getInitializeState(currentDate, isMultiSelect);
        return _this;
    }
    AtCalendar.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
        var currentDate = nextProps.currentDate, isMultiSelect = nextProps.isMultiSelect;
        if (!currentDate || currentDate === this.props.currentDate)
            return;
        if (isMultiSelect && this.props.isMultiSelect) {
            var _a = currentDate, start = _a.start, end = _a.end;
            var _b = this.props
                .currentDate, preStart = _b.start, preEnd = _b.end;
            if (start === preStart && preEnd === end) {
                return;
            }
        }
        var stateValue = this.getInitializeState(currentDate, isMultiSelect);
        this.setState(stateValue);
    };
    AtCalendar.prototype.getInitializeState = function (currentDate, isMultiSelect) {
        var end;
        var start;
        var generateDateValue;
        if (!currentDate) {
            var dayjsStart = dayjs_1["default"]();
            start = dayjsStart.startOf('day').valueOf();
            generateDateValue = dayjsStart.startOf('month').valueOf();
            return {
                generateDate: generateDateValue,
                selectedDate: {
                    start: ''
                }
            };
        }
        if (isMultiSelect) {
            var _a = currentDate, cStart = _a.start, cEnd = _a.end;
            var dayjsStart = dayjs_1["default"](cStart);
            start = dayjsStart.startOf('day').valueOf();
            generateDateValue = dayjsStart.startOf('month').valueOf();
            end = cEnd ? dayjs_1["default"](cEnd).startOf('day').valueOf() : start;
        }
        else {
            var dayjsStart = dayjs_1["default"](currentDate);
            start = dayjsStart.startOf('day').valueOf();
            generateDateValue = dayjsStart.startOf('month').valueOf();
            end = start;
        }
        return {
            generateDate: generateDateValue,
            selectedDate: this.getSelectedDate(start, end)
        };
    };
    AtCalendar.prototype.render = function () {
        var _a = this.state, generateDate = _a.generateDate, selectedDate = _a.selectedDate;
        var _b = this.props, validDates = _b.validDates, marks = _b.marks, format = _b.format, minDate = _b.minDate, maxDate = _b.maxDate, isSwiper = _b.isSwiper, className = _b.className, hideArrow = _b.hideArrow, isVertical = _b.isVertical, monthFormat = _b.monthFormat, selectedDates = _b.selectedDates;
        return (react_1["default"].createElement(components_1.View, { className: classnames_1["default"]('at-calendar', className) },
            react_1["default"].createElement(index_2["default"], { minDate: minDate, maxDate: maxDate, hideArrow: hideArrow, monthFormat: monthFormat, generateDate: generateDate, onPreMonth: this.handleClickPreMonth, onNextMonth: this.handleClickNextMonth, onSelectDate: this.handleSelectDate }),
            react_1["default"].createElement(index_1["default"], { validDates: validDates, marks: marks, format: format, minDate: minDate, maxDate: maxDate, isSwiper: isSwiper, isVertical: isVertical, selectedDate: selectedDate, selectedDates: selectedDates, generateDate: generateDate, onDayClick: this.handleDayClick, onSwipeMonth: this.setMonth, onLongClick: this.handleDayLongClick })));
    };
    AtCalendar.defaultProps = defaultProps;
    return AtCalendar;
}(react_1["default"].Component));
exports["default"] = AtCalendar;
//# sourceMappingURL=index.js.map