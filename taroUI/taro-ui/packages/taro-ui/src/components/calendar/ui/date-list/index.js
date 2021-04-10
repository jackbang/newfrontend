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
var _a;
exports.__esModule = true;
var classnames_1 = require("classnames");
var react_1 = require("react");
var components_1 = require("@tarojs/components");
var constant = require("../../common/constant");
var MAP = (_a = {},
    _a[constant.TYPE_PRE_MONTH] = 'pre',
    _a[constant.TYPE_NOW_MONTH] = 'now',
    _a[constant.TYPE_NEXT_MONTH] = 'next',
    _a);
var AtCalendarList = /** @class */ (function (_super) {
    __extends(AtCalendarList, _super);
    function AtCalendarList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleClick = function (item) {
            if (typeof _this.props.onClick === 'function') {
                _this.props.onClick(item);
            }
        };
        _this.handleLongClick = function (item) {
            if (typeof _this.props.onLongClick === 'function') {
                _this.props.onLongClick(item);
            }
        };
        return _this;
    }
    AtCalendarList.prototype.render = function () {
        var _this = this;
        var list = this.props.list;
        if (!list || list.length === 0)
            return null;
        return (react_1["default"].createElement(components_1.View, { className: 'at-calendar__list flex' }, list.map(function (item) { return (react_1["default"].createElement(components_1.View, { key: "list-item-" + item.value, onClick: _this.handleClick.bind(_this, item), onLongPress: _this.handleLongClick.bind(_this, item), className: classnames_1["default"]('flex__item', "flex__item--" + MAP[item.type], {
                'flex__item--today': item.isToday,
                'flex__item--active': item.isActive,
                'flex__item--selected': item.isSelected,
                'flex__item--selected-head': item.isSelectedHead,
                'flex__item--selected-tail': item.isSelectedTail,
                'flex__item--blur': item.isDisabled ||
                    item.type === constant.TYPE_PRE_MONTH ||
                    item.type === constant.TYPE_NEXT_MONTH
            }) },
            react_1["default"].createElement(components_1.View, { className: 'flex__item-container' },
                react_1["default"].createElement(components_1.View, { className: 'container-text' }, item.text)),
            react_1["default"].createElement(components_1.View, { className: 'flex__item-extra extra' }, item.marks && item.marks.length > 0 ? (react_1["default"].createElement(components_1.View, { className: 'extra-marks' }, item.marks.map(function (mark, key) { return (react_1["default"].createElement(components_1.Text, { key: key, className: 'mark' }, mark)); }))) : null))); })));
    };
    return AtCalendarList;
}(react_1["default"].Component));
exports["default"] = AtCalendarList;
//# sourceMappingURL=index.js.map