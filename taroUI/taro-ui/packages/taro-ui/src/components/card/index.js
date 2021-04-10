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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var classnames_1 = require("classnames");
var prop_types_1 = require("prop-types");
var react_1 = require("react");
var components_1 = require("@tarojs/components");
var AtCard = /** @class */ (function (_super) {
    __extends(AtCard, _super);
    function AtCard() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleClick = function (args) {
            if (typeof _this.props.onClick === 'function') {
                _this.props.onClick(args);
            }
        };
        return _this;
    }
    AtCard.prototype.render = function () {
        var _a;
        var _b = this.props, title = _b.title, note = _b.note, extra = _b.extra, extraStyle = _b.extraStyle, thumb = _b.thumb, isFull = _b.isFull, icon = _b.icon, renderIcon = _b.renderIcon;
        var rootClass = classnames_1["default"]('at-card', {
            'at-card--full': isFull
        }, this.props.className);
        var iconClass = classnames_1["default"]((_a = {
                'at-icon': true
            },
            _a["at-icon-" + (icon && icon.value)] = icon && icon.value,
            _a['at-card__header-icon'] = true,
            _a));
        var iconStyle = {
            color: (icon && icon.color) || '',
            fontSize: (icon && icon.size + "px") || ''
        };
        return (react_1["default"].createElement(components_1.View, { onClick: this.handleClick, className: rootClass },
            react_1["default"].createElement(components_1.View, { className: 'at-card__header' },
                thumb && (react_1["default"].createElement(components_1.View, { className: 'at-card__header-thumb' },
                    react_1["default"].createElement(components_1.Image, { className: 'at-card__header-thumb-info', mode: 'scaleToFill', src: thumb }))),
                renderIcon || '',
                !thumb && icon && icon.value && (react_1["default"].createElement(components_1.Text, { className: iconClass, style: iconStyle })),
                react_1["default"].createElement(components_1.Text, { className: 'at-card__header-title' }, title),
                extra && (react_1["default"].createElement(components_1.Text, { style: __assign({}, extraStyle), className: 'at-card__header-extra' }, extra))),
            react_1["default"].createElement(components_1.View, { className: 'at-card__content' },
                react_1["default"].createElement(components_1.View, { className: 'at-card__content-info' }, this.props.children),
                note && react_1["default"].createElement(components_1.View, { className: 'at-card__content-note' }, note))));
    };
    return AtCard;
}(react_1["default"].Component));
exports["default"] = AtCard;
AtCard.defaultProps = {
    note: '',
    isFull: false,
    thumb: '',
    title: '',
    extra: '',
    extraStyle: {}
};
AtCard.propTypes = {
    note: prop_types_1["default"].string,
    isFull: prop_types_1["default"].bool,
    thumb: prop_types_1["default"].string,
    title: prop_types_1["default"].string,
    extra: prop_types_1["default"].string,
    icon: prop_types_1["default"].object,
    onClick: prop_types_1["default"].func,
    renderIcon: prop_types_1["default"].oneOfType([prop_types_1["default"].string, prop_types_1["default"].element]),
    extraStyle: prop_types_1["default"].object // 自定义extra样式
};
//# sourceMappingURL=index.js.map