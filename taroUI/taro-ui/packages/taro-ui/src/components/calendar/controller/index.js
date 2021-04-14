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
var AtCalendarController = /** @class */ (function (_super) {
    __extends(AtCalendarController, _super);
    function AtCalendarController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AtCalendarController.prototype.render = function () {
        var _a = this.props, generateDate = _a.generateDate, minDate = _a.minDate, maxDate = _a.maxDate, monthFormat = _a.monthFormat, hideArrow = _a.hideArrow;
        var dayjsDate = dayjs_1["default"](generateDate);
        var dayjsMinDate = !!minDate && dayjs_1["default"](minDate);
        var dayjsMaxDate = !!maxDate && dayjs_1["default"](maxDate);
        var isMinMonth = dayjsMinDate && dayjsMinDate.startOf('month').isSame(dayjsDate);
        var isMaxMonth = dayjsMaxDate && dayjsMaxDate.startOf('month').isSame(dayjsDate);
        var minDateValue = dayjsMinDate
            ? dayjsMinDate.format('YYYY-MM')
            : '';
        var maxDateValue = dayjsMaxDate
            ? dayjsMaxDate.format('YYYY-MM')
            : '';
        return (react_1["default"].createElement(components_1.View, { className: 'at-calendar__controller controller' },
            hideArrow ? null : (react_1["default"].createElement(components_1.View, { className: classnames_1["default"]('controller__arrow controller__arrow--left', {
                    'controller__arrow--disabled': isMinMonth
                }), onClick: this.props.onPreMonth.bind(this, isMinMonth) })),
            react_1["default"].createElement(components_1.Picker, { mode: 'date', fields: 'month', end: maxDateValue, start: minDateValue, onChange: this.props.onSelectDate, value: dayjsDate.format('YYYY-MM') },
                react_1["default"].createElement(components_1.Text, { className: 'controller__info' }, dayjsDate.format(monthFormat))),
            hideArrow ? null : (react_1["default"].createElement(components_1.View, { className: classnames_1["default"]('controller__arrow controller__arrow--right', {
                    'controller__arrow--disabled': isMaxMonth
                }), onClick: this.props.onNextMonth.bind(this, isMaxMonth) }))));
    };
    return AtCalendarController;
}(react_1["default"].Component));
exports["default"] = AtCalendarController;
//# sourceMappingURL=index.js.map