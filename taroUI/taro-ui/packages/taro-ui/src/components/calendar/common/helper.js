"use strict";
exports.__esModule = true;
exports.getGenerateDate = void 0;
var dayjs_1 = require("dayjs");
var flow_1 = require("lodash/flow");
var constant = require("./constant");
var plugins_1 = require("./plugins");
var TOTAL = 7 * 6;
function getFullItem(item, options, selectedDate, isShowStatus) {
    if (!isShowStatus)
        return item;
    var bindedPlugins = plugins_1["default"].map(function (fn) {
        return fn.bind(null, {
            options: options,
            selectedDate: selectedDate
        });
    });
    return flow_1["default"](bindedPlugins)(item);
}
function generateCalendarGroup(options) {
    return function (generateDate, selectedDate, isShowStatus) {
        var date = dayjs_1["default"](generateDate);
        var format = options.format;
        // 获取生成日期的第一天 和 最后一天
        var firstDate = date.startOf('month');
        var lastDate = date.endOf('month');
        var preMonthDate = date.subtract(1, 'month');
        var list = [];
        var nowMonthDays = date.daysInMonth(); // 获取这个月有多少天
        var preMonthLastDay = preMonthDate.endOf('month').day(); // 获取上个月最后一天是周几
        // 生成上个月的日期
        for (var i_1 = 1; i_1 <= preMonthLastDay + 1; i_1++) {
            var thisDate = firstDate.subtract(i_1, 'day').startOf('day');
            var item = {
                marks: [],
                _value: thisDate,
                text: thisDate.date(),
                type: constant.TYPE_PRE_MONTH,
                value: thisDate.format(format)
            };
            item = getFullItem(item, options, selectedDate, isShowStatus);
            list.push(item);
        }
        list.reverse();
        // 生成这个月的日期
        for (var i_2 = 0; i_2 < nowMonthDays; i_2++) {
            var thisDate = firstDate.add(i_2, 'day').startOf('day');
            var item = {
                marks: [],
                _value: thisDate,
                text: thisDate.date(),
                type: constant.TYPE_NOW_MONTH,
                value: thisDate.format(format)
            };
            item = getFullItem(item, options, selectedDate, isShowStatus);
            list.push(item);
        }
        // 生成下个月的日期
        var i = 1;
        while (list.length < TOTAL) {
            var thisDate = lastDate.add(i++, 'day').startOf('day');
            var item = {
                marks: [],
                _value: thisDate,
                text: thisDate.date(),
                type: constant.TYPE_NEXT_MONTH,
                value: thisDate.format(format)
            };
            item = getFullItem(item, options, selectedDate, isShowStatus);
            list.push(item);
        }
        return {
            list: list,
            value: generateDate
        };
    };
}
exports["default"] = generateCalendarGroup;
function getGenerateDate(date) {
    return dayjs_1["default"](date).startOf('month');
}
exports.getGenerateDate = getGenerateDate;
//# sourceMappingURL=helper.js.map