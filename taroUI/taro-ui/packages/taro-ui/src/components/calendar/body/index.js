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
var utils_1 = require("../../../common/utils");
var helper_1 = require("../common/helper");
var index_1 = require("../ui/date-list/index");
var index_2 = require("../ui/day-list/index");
var ANIMTE_DURATION = 300;
var defaultProps = {
    marks: [],
    selectedDate: {
        end: Date.now(),
        start: Date.now()
    },
    format: 'YYYY-MM-DD',
    generateDate: Date.now()
};
var AtCalendarBody = /** @class */ (function (_super) {
    __extends(AtCalendarBody, _super);
    function AtCalendarBody(props) {
        var _this = _super.call(this, props) || this;
        _this.changeCount = 0;
        _this.currentSwiperIndex = 1;
        _this.startX = 0;
        _this.swipeStartPoint = 0;
        _this.isPreMonth = false;
        _this.maxWidth = 0;
        _this.isTouching = false;
        _this.getGroups = function (generateDate, selectedDate) {
            var dayjsDate = dayjs_1["default"](generateDate);
            var arr = [];
            var preList = _this.generateFunc(dayjsDate.subtract(1, 'month').valueOf(), selectedDate);
            var nowList = _this.generateFunc(generateDate, selectedDate, true);
            var nextList = _this.generateFunc(dayjsDate.add(1, 'month').valueOf(), selectedDate);
            var preListIndex = _this.currentSwiperIndex === 0 ? 2 : _this.currentSwiperIndex - 1;
            var nextListIndex = _this.currentSwiperIndex === 2 ? 0 : _this.currentSwiperIndex + 1;
            arr[preListIndex] = preList;
            arr[nextListIndex] = nextList;
            arr[_this.currentSwiperIndex] = nowList;
            return arr;
        };
        _this.handleTouchStart = function (e) {
            if (!_this.props.isSwiper) {
                return;
            }
            _this.isTouching = true;
            _this.startX = e.touches[0].clientX;
        };
        _this.handleTouchMove = function (e) {
            if (!_this.props.isSwiper) {
                return;
            }
            if (!_this.isTouching)
                return;
            var clientX = e.touches[0].clientX;
            var offsetSize = clientX - _this.startX;
            _this.setState({
                offsetSize: offsetSize
            });
        };
        _this.animateMoveSlide = function (offset, callback) {
            _this.setState({
                isAnimate: true
            }, function () {
                _this.setState({
                    offsetSize: offset
                });
                setTimeout(function () {
                    _this.setState({
                        isAnimate: false
                    }, function () {
                        callback && callback();
                    });
                }, ANIMTE_DURATION);
            });
        };
        _this.handleTouchEnd = function () {
            if (!_this.props.isSwiper) {
                return;
            }
            var offsetSize = _this.state.offsetSize;
            _this.isTouching = false;
            var isRight = offsetSize > 0;
            var breakpoint = _this.maxWidth / 2;
            var absOffsetSize = Math.abs(offsetSize);
            if (absOffsetSize > breakpoint) {
                var res = isRight ? _this.maxWidth : -_this.maxWidth;
                return _this.animateMoveSlide(res, function () {
                    _this.props.onSwipeMonth(isRight ? -1 : 1);
                });
            }
            _this.animateMoveSlide(0);
        };
        _this.handleChange = function (e) {
            var _a = e.detail, current = _a.current, source = _a.source;
            if (source === 'touch') {
                _this.currentSwiperIndex = current;
                _this.changeCount += 1;
            }
        };
        _this.handleAnimateFinish = function () {
            if (_this.changeCount > 0) {
                _this.props.onSwipeMonth(_this.isPreMonth ? -_this.changeCount : _this.changeCount);
                _this.changeCount = 0;
            }
        };
        _this.handleSwipeTouchStart = function (e) {
            var _a = e.changedTouches[0], clientY = _a.clientY, clientX = _a.clientX;
            _this.swipeStartPoint = _this.props.isVertical ? clientY : clientX;
        };
        _this.handleSwipeTouchEnd = function (e) {
            var _a = e.changedTouches[0], clientY = _a.clientY, clientX = _a.clientX;
            _this.isPreMonth = _this.props.isVertical
                ? clientY - _this.swipeStartPoint > 0
                : clientX - _this.swipeStartPoint > 0;
        };
        var validDates = props.validDates, marks = props.marks, format = props.format, minDate = props.minDate, maxDate = props.maxDate, generateDate = props.generateDate, selectedDate = props.selectedDate, selectedDates = props.selectedDates;
        _this.generateFunc = helper_1["default"]({
            validDates: validDates,
            format: format,
            minDate: minDate,
            maxDate: maxDate,
            marks: marks,
            selectedDates: selectedDates
        });
        var listGroup = _this.getGroups(generateDate, selectedDate);
        _this.state = {
            listGroup: listGroup,
            offsetSize: 0,
            isAnimate: false
        };
        return _this;
    }
    AtCalendarBody.prototype.componentDidMount = function () {
        var _this = this;
        utils_1.delayQuerySelector('.at-calendar-slider__main').then(function (res) {
            _this.maxWidth = res[0].width;
        });
    };
    AtCalendarBody.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
        var validDates = nextProps.validDates, marks = nextProps.marks, format = nextProps.format, minDate = nextProps.minDate, maxDate = nextProps.maxDate, generateDate = nextProps.generateDate, selectedDate = nextProps.selectedDate, selectedDates = nextProps.selectedDates;
        this.generateFunc = helper_1["default"]({
            validDates: validDates,
            format: format,
            minDate: minDate,
            maxDate: maxDate,
            marks: marks,
            selectedDates: selectedDates
        });
        var listGroup = this.getGroups(generateDate, selectedDate);
        this.setState({
            offsetSize: 0,
            listGroup: listGroup
        });
    };
    AtCalendarBody.prototype.render = function () {
        var _this = this;
        var isSwiper = this.props.isSwiper;
        var _a = this.state, isAnimate = _a.isAnimate, offsetSize = _a.offsetSize, listGroup = _a.listGroup;
        if (!isSwiper) {
            return (react_1["default"].createElement(components_1.View, { className: classnames_1["default"]('main', 'at-calendar-slider__main', "at-calendar-slider__main--" + process.env.TARO_ENV) },
                react_1["default"].createElement(index_2["default"], null),
                react_1["default"].createElement(components_1.View, { className: 'main__body body' },
                    react_1["default"].createElement(components_1.View, { className: 'body__slider body__slider--now' },
                        react_1["default"].createElement(index_1["default"], { list: listGroup[1].list, onClick: this.props.onDayClick, onLongClick: this.props.onLongClick })))));
        }
        /* 需要 Taro 组件库维护 Swiper 使 小程序 和 H5 的表现保持一致  */
        if (process.env.TARO_ENV === 'h5') {
            return (react_1["default"].createElement(components_1.View, { className: classnames_1["default"]('main', 'at-calendar-slider__main', "at-calendar-slider__main--" + process.env.TARO_ENV), onTouchEnd: this.handleTouchEnd, onTouchMove: this.handleTouchMove, onTouchStart: this.handleTouchStart },
                react_1["default"].createElement(index_2["default"], null),
                react_1["default"].createElement(components_1.View, { className: classnames_1["default"]('main__body  body', {
                        'main__body--slider': isSwiper,
                        'main__body--animate': isAnimate
                    }), style: {
                        transform: isSwiper
                            ? "translateX(-100%) translate3d(" + offsetSize + ",0,0)"
                            : '',
                        WebkitTransform: isSwiper
                            ? "translateX(-100%) translate3d(" + offsetSize + "px,0,0)"
                            : ''
                    } },
                    react_1["default"].createElement(components_1.View, { className: 'body__slider body__slider--pre' },
                        react_1["default"].createElement(index_1["default"], { list: listGroup[0].list })),
                    react_1["default"].createElement(components_1.View, { className: 'body__slider body__slider--now' },
                        react_1["default"].createElement(index_1["default"], { list: listGroup[1].list, onClick: this.props.onDayClick, onLongClick: this.props.onLongClick })),
                    react_1["default"].createElement(components_1.View, { className: 'body__slider body__slider--next' },
                        react_1["default"].createElement(index_1["default"], { list: listGroup[2].list })))));
        }
        return (react_1["default"].createElement(components_1.View, { className: classnames_1["default"]('main', 'at-calendar-slider__main', "at-calendar-slider__main--" + process.env.TARO_ENV) },
            react_1["default"].createElement(index_2["default"], null),
            react_1["default"].createElement(components_1.Swiper, { circular: true, current: 1, skipHiddenItemLayout: true, className: classnames_1["default"]('main__body'), onChange: this.handleChange, vertical: this.props.isVertical, onAnimationFinish: this.handleAnimateFinish, onTouchEnd: this.handleSwipeTouchEnd, onTouchStart: this.handleSwipeTouchStart }, listGroup.map(function (item, key) { return (react_1["default"].createElement(components_1.SwiperItem, { key: key, itemId: key.toString() },
                react_1["default"].createElement(index_1["default"], { list: item.list, onClick: _this.props.onDayClick, onLongClick: _this.props.onLongClick }))); }))));
    };
    AtCalendarBody.defaultProps = defaultProps;
    return AtCalendarBody;
}(react_1["default"].Component));
exports["default"] = AtCalendarBody;
//# sourceMappingURL=index.js.map