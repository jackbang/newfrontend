"use strict";
exports.__esModule = true;
exports.handleValid = exports.handleDisabled = exports.handleMarks = exports.handleActive = void 0;
var dayjs_1 = require("dayjs");
var isEmpty_1 = require("lodash/isEmpty");
function handleActive(args, item) {
    var selectedDate = args.selectedDate;
    var _value = item._value;
    var start = selectedDate.start, end = selectedDate.end;
    var dayjsEnd = dayjs_1["default"](end);
    var dayjsStart = start ? dayjs_1["default"](start) : dayjsEnd;
    item.isSelected =
        _value.isSame(dayjsEnd) ||
            _value.isSame(dayjsStart) ||
            (_value.isAfter(dayjsStart) && _value.isBefore(dayjsEnd));
    item.isSelectedHead = _value.isSame(dayjsStart);
    item.isSelectedTail = _value.isSame(dayjsEnd);
    item.isToday = _value.diff(dayjs_1["default"](Date.now()).startOf('day'), 'day') === 0;
    return item;
}
exports.handleActive = handleActive;
function handleMarks(args, item) {
    var options = args.options;
    var _value = item._value;
    var marks = options.marks;
    var markList = marks.filter(function (mark) {
        return dayjs_1["default"](mark.value).startOf('day').isSame(_value);
    });
    item.marks = markList.slice(0, 1);
    return item;
}
exports.handleMarks = handleMarks;
// export function handleSelectedDates (args: PluginArg): Calendar.Item {
// const { item, options } = args
// const { _value } = item
// const { selectedDates } = options
// if (selectedDates.length === 0) return args
// _forEach(selectedDates, date => {
//   const { isSelected, isHead, isTail } = item
//   // 如果当前 Item 已经具备了 三种状态下 无需继续判断 跳出循环
//   if (isSelected) {
//     return false
//   }
//   const { start, end } = date
//   const dayjsEnd = dayjs(end).startOf('day')
//   const dayjsStart = dayjs(start).startOf('day')
//   item.isSelected =
//     item.isSelected ||
//     (_value.isAfter(dayjsStart) && _value.isBefore(dayjsEnd))
//   item.isHead = item.isHead || _value.isSame(dayjsStart)
//   item.isTail = item.isTail || _value.isSame(dayjsEnd)
// })
//   return item
// }
function handleDisabled(args, item) {
    var options = args.options;
    var _value = item._value;
    var minDate = options.minDate, maxDate = options.maxDate;
    var dayjsMinDate = dayjs_1["default"](minDate);
    var dayjsMaxDate = dayjs_1["default"](maxDate);
    item.isDisabled =
        !!(minDate && _value.isBefore(dayjsMinDate)) ||
            !!(maxDate && _value.isAfter(dayjsMaxDate));
    return item;
}
exports.handleDisabled = handleDisabled;
function handleValid(args, item) {
    var options = args.options;
    var _value = item._value;
    var validDates = options.validDates;
    if (!isEmpty_1["default"](validDates)) {
        var isInclude = validDates.some(function (date) {
            return dayjs_1["default"](date.value).startOf('day').isSame(_value);
        });
        item.isDisabled = !isInclude;
    }
    delete item._value;
    return item;
}
exports.handleValid = handleValid;
exports["default"] = [handleActive, handleMarks, handleDisabled, handleValid];
//# sourceMappingURL=plugins.js.map