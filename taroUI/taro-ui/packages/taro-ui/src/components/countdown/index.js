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
var prop_types_1 = require("prop-types");
var react_1 = require("react");
var components_1 = require("@tarojs/components");
var item_1 = require("./item");
var toSeconds = function (day, hours, minutes, seconds) { return day * 60 * 60 * 24 + hours * 60 * 60 + minutes * 60 + seconds; };
var AtCountdown = /** @class */ (function (_super) {
    __extends(AtCountdown, _super);
    function AtCountdown(props) {
        var _this = _super.call(this, props) || this;
        var _a = _this.props, _b = _a.day, day = _b === void 0 ? 0 : _b, _c = _a.hours, hours = _c === void 0 ? 0 : _c, _d = _a.minutes, minutes = _d === void 0 ? 0 : _d, _e = _a.seconds, seconds = _e === void 0 ? 0 : _e;
        _this.seconds = toSeconds(day, hours, minutes, seconds);
        var _f = _this.calculateTime(), _day = _f.day, _hours = _f.hours, _minutes = _f.minutes, _seconds = _f.seconds;
        _this.state = {
            _day: _day,
            _hours: _hours,
            _minutes: _minutes,
            _seconds: _seconds
        };
        return _this;
    }
    AtCountdown.prototype.setTimer = function () {
        if (!this.timer)
            this.countdonwn();
    };
    AtCountdown.prototype.clearTimer = function () {
        if (this.timer) {
            clearTimeout(this.timer);
        }
    };
    AtCountdown.prototype.calculateTime = function () {
        var _a = [0, 0, 0, 0], day = _a[0], hours = _a[1], minutes = _a[2], seconds = _a[3];
        if (this.seconds > 0) {
            day = this.props.isShowDay ? Math.floor(this.seconds / (60 * 60 * 24)) : 0;
            hours = Math.floor(this.seconds / (60 * 60)) - day * 24;
            minutes = Math.floor(this.seconds / 60) - day * 24 * 60 - hours * 60;
            seconds =
                Math.floor(this.seconds) -
                    day * 24 * 60 * 60 -
                    hours * 60 * 60 -
                    minutes * 60;
        }
        return {
            day: day,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        };
    };
    AtCountdown.prototype.countdonwn = function () {
        var _this = this;
        var _a = this.calculateTime(), day = _a.day, hours = _a.hours, minutes = _a.minutes, seconds = _a.seconds;
        this.setState({
            _day: day,
            _hours: hours,
            _minutes: minutes,
            _seconds: seconds
        });
        this.seconds--;
        if (this.seconds < 0) {
            this.clearTimer();
            this.props.onTimeUp && this.props.onTimeUp();
            return;
        }
        this.timer = setTimeout(function () {
            _this.countdonwn();
        }, 1000);
    };
    AtCountdown.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
        if (JSON.stringify(this.props) === JSON.stringify(nextProps))
            return;
        var day = nextProps.day, hours = nextProps.hours, minutes = nextProps.minutes, seconds = nextProps.seconds;
        this.seconds = toSeconds(day, hours, minutes, seconds);
        this.clearTimer();
        this.setTimer();
    };
    AtCountdown.prototype.componentDidMount = function () {
        this.setTimer();
    };
    AtCountdown.prototype.componentWillUnmount = function () {
        this.clearTimer();
    };
    AtCountdown.prototype.componentDidHide = function () {
        this.clearTimer();
    };
    AtCountdown.prototype.componentDidShow = function () {
        this.setTimer();
    };
    AtCountdown.prototype.render = function () {
        var _a = this.props, className = _a.className, customStyle = _a.customStyle, format = _a.format, isShowDay = _a.isShowDay, isCard = _a.isCard, isShowHour = _a.isShowHour;
        var _b = this.state, _day = _b._day, _hours = _b._hours, _minutes = _b._minutes, _seconds = _b._seconds;
        return (react_1["default"].createElement(components_1.View, { className: classnames_1["default"]({
                'at-countdown': true,
                'at-countdown--card': isCard
            }, className), style: customStyle },
            isShowDay && react_1["default"].createElement(item_1["default"], { num: _day, separator: format.day }),
            isShowHour && (react_1["default"].createElement(item_1["default"], { num: _hours, separator: format.hours })),
            react_1["default"].createElement(item_1["default"], { num: _minutes, separator: format.minutes }),
            react_1["default"].createElement(item_1["default"], { num: _seconds, separator: format.seconds })));
    };
    return AtCountdown;
}(react_1["default"].Component));
exports["default"] = AtCountdown;
AtCountdown.defaultProps = {
    customStyle: '',
    className: '',
    isCard: false,
    isShowDay: false,
    isShowHour: true,
    format: {
        day: '天',
        hours: '时',
        minutes: '分',
        seconds: '秒'
    },
    day: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
};
AtCountdown.propTypes = {
    customStyle: prop_types_1["default"].oneOfType([prop_types_1["default"].object, prop_types_1["default"].string]),
    className: prop_types_1["default"].oneOfType([prop_types_1["default"].array, prop_types_1["default"].string]),
    isCard: prop_types_1["default"].bool,
    isShowDay: prop_types_1["default"].bool,
    isShowHour: prop_types_1["default"].bool,
    format: prop_types_1["default"].object,
    day: prop_types_1["default"].number,
    hours: prop_types_1["default"].number,
    minutes: prop_types_1["default"].number,
    seconds: prop_types_1["default"].number,
    onTimeUp: prop_types_1["default"].func
};
//# sourceMappingURL=index.js.map