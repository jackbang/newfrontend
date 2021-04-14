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
var AtSteps = /** @class */ (function (_super) {
    __extends(AtSteps, _super);
    function AtSteps() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AtSteps.prototype.handleClick = function (current, event) {
        this.props.onChange(current, event);
    };
    AtSteps.prototype.render = function () {
        var _this = this;
        var _a = this.props, customStyle = _a.customStyle, className = _a.className, items = _a.items, current = _a.current;
        return (react_1["default"].createElement(components_1.View, { className: classnames_1["default"]('at-steps', className), style: customStyle }, !!items &&
            items.map(function (item, i) {
                var _a;
                return (react_1["default"].createElement(components_1.View, { key: item.title, className: classnames_1["default"]({
                        'at-steps__item': true,
                        'at-steps__item--active': i === current,
                        'at-steps__item--inactive': i !== current
                    }), onClick: _this.handleClick.bind(_this, i) },
                    react_1["default"].createElement(components_1.View, { className: 'at-steps__circular-wrap' },
                        i !== 0 && react_1["default"].createElement(components_1.View, { className: 'at-steps__left-line' }),
                        item.status ? (react_1["default"].createElement(components_1.View, { className: classnames_1["default"]({
                                'at-icon': true,
                                'at-icon-check-circle': item.status === 'success',
                                'at-icon-close-circle': item.status === 'error',
                                'at-steps__single-icon': true,
                                'at-steps__single-icon--success': item.status === 'success',
                                'at-steps__single-icon--error': item.status === 'error'
                            }) })) : (react_1["default"].createElement(components_1.View, { className: 'at-steps__circular' }, item.icon ? (react_1["default"].createElement(components_1.Text, { className: classnames_1["default"]('at-icon', (_a = {},
                                _a["at-icon-" + item.icon.value] = item.icon.value,
                                _a['at-steps__circle-icon'] = true,
                                _a)) })) : (react_1["default"].createElement(components_1.Text, { className: 'at-steps__num' }, i + 1)))),
                        i !== items.length - 1 && (react_1["default"].createElement(components_1.View, { className: 'at-steps__right-line' }))),
                    react_1["default"].createElement(components_1.View, { className: 'at-steps__title' }, item.title),
                    react_1["default"].createElement(components_1.View, { className: 'at-steps__desc' }, item.desc)));
            })));
    };
    return AtSteps;
}(react_1["default"].Component));
exports["default"] = AtSteps;
AtSteps.defaultProps = {
    customStyle: '',
    className: '',
    current: 0,
    items: [],
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onChange: function () { }
};
AtSteps.propTypes = {
    customStyle: prop_types_1["default"].oneOfType([prop_types_1["default"].object, prop_types_1["default"].string]),
    className: prop_types_1["default"].oneOfType([prop_types_1["default"].array, prop_types_1["default"].string]),
    current: prop_types_1["default"].number,
    items: prop_types_1["default"].array,
    onChange: prop_types_1["default"].func
};
//# sourceMappingURL=index.js.map