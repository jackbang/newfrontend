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
var AtTimeline = /** @class */ (function (_super) {
    __extends(AtTimeline, _super);
    function AtTimeline() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AtTimeline.prototype.render = function () {
        var _a = this.props, pending = _a.pending, items = _a.items, customStyle = _a.customStyle;
        var rootClassName = ['at-timeline'];
        if (pending)
            rootClassName.push('at-timeline--pending');
        var rootClassObject = {
            'at-timeline--pending': pending
        };
        var itemElems = items.map(function (item, index) {
            var _a;
            var _b = item.title, title = _b === void 0 ? '' : _b, color = item.color, icon = item.icon, _c = item.content, content = _c === void 0 ? [] : _c;
            var iconClass = classnames_1["default"]((_a = {
                    'at-icon': true
                },
                _a["at-icon-" + icon] = icon,
                _a));
            var itemRootClassName = ['at-timeline-item'];
            if (color)
                itemRootClassName.push("at-timeline-item--" + color);
            var dotClass = [];
            if (icon) {
                dotClass.push('at-timeline-item__icon');
            }
            else {
                dotClass.push('at-timeline-item__dot');
            }
            return (react_1["default"].createElement(components_1.View, { className: classnames_1["default"](itemRootClassName), key: "at-timeline-item-" + index },
                react_1["default"].createElement(components_1.View, { className: 'at-timeline-item__tail' }),
                react_1["default"].createElement(components_1.View, { className: classnames_1["default"](dotClass) }, icon && react_1["default"].createElement(components_1.Text, { className: iconClass })),
                react_1["default"].createElement(components_1.View, { className: 'at-timeline-item__content' },
                    react_1["default"].createElement(components_1.View, { className: 'at-timeline-item__content-item' }, title),
                    content.map(function (sub, subIndex) { return (react_1["default"].createElement(components_1.View, { className: 'at-timeline-item__content-item at-timeline-item__content--sub', key: subIndex }, sub)); }))));
        });
        return (react_1["default"].createElement(components_1.View, { className: classnames_1["default"](rootClassName, rootClassObject, this.props.className), style: customStyle }, itemElems));
    };
    return AtTimeline;
}(react_1["default"].Component));
exports["default"] = AtTimeline;
AtTimeline.defaultProps = {
    pending: false,
    items: [],
    customStyle: {}
};
AtTimeline.propTypes = {
    pending: prop_types_1["default"].bool,
    items: prop_types_1["default"].arrayOf(prop_types_1["default"].object),
    customStyle: prop_types_1["default"].oneOfType([prop_types_1["default"].object, prop_types_1["default"].string])
};
//# sourceMappingURL=index.js.map