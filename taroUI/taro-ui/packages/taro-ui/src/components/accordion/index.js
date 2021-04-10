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
var utils_1 = require("../../common/utils");
var AtAccordion = /** @class */ (function (_super) {
    __extends(AtAccordion, _super);
    function AtAccordion(props) {
        var _this = _super.call(this, props) || this;
        _this.handleClick = function (event) {
            var open = _this.props.open;
            if (!_this.isCompleted)
                return;
            _this.props.onClick && _this.props.onClick(!open, event);
        };
        _this.isCompleted = true;
        _this.startOpen = false;
        _this.state = {
            wrapperHeight: 0
        };
        return _this;
    }
    AtAccordion.prototype.toggleWithAnimation = function () {
        var _this = this;
        var _a = this.props, open = _a.open, isAnimation = _a.isAnimation;
        if (!this.isCompleted || !isAnimation)
            return;
        this.isCompleted = false;
        utils_1.delayQuerySelector('.at-accordion__body', 0).then(function (rect) {
            var height = parseInt(rect[0].height.toString());
            var startHeight = open ? height : 0;
            var endHeight = open ? 0 : height;
            _this.startOpen = false;
            _this.setState({
                wrapperHeight: startHeight
            }, function () {
                setTimeout(function () {
                    _this.setState({
                        wrapperHeight: endHeight
                    }, function () {
                        setTimeout(function () {
                            _this.isCompleted = true;
                            _this.setState({});
                        }, 700);
                    });
                }, 100);
            });
        });
    };
    AtAccordion.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
        if (nextProps.open !== this.props.open) {
            this.startOpen = !!nextProps.open && !!nextProps.isAnimation;
            this.toggleWithAnimation();
        }
    };
    AtAccordion.prototype.render = function () {
        var _a;
        var _b = this.props, customStyle = _b.customStyle, className = _b.className, title = _b.title, icon = _b.icon, hasBorder = _b.hasBorder, open = _b.open, note = _b.note;
        var wrapperHeight = this.state.wrapperHeight;
        var rootCls = classnames_1["default"]('at-accordion', className);
        var prefixClass = (icon && icon.prefixClass) || 'at-icon';
        var iconCls = classnames_1["default"]((_a = {},
            _a[prefixClass] = true,
            _a[prefixClass + "-" + (icon && icon.value)] = icon && icon.value,
            _a['at-accordion__icon'] = true,
            _a));
        var headerCls = classnames_1["default"]('at-accordion__header', {
            'at-accordion__header--noborder': !hasBorder
        });
        var arrowCls = classnames_1["default"]('at-accordion__arrow', {
            'at-accordion__arrow--folded': !!open
        });
        var contentCls = classnames_1["default"]('at-accordion__content', {
            'at-accordion__content--inactive': (!open && this.isCompleted) || this.startOpen
        });
        var iconStyle = {
            color: (icon && icon.color) || '',
            fontSize: (icon && icon.size + "px") || ''
        };
        var contentStyle = { height: wrapperHeight + "px" };
        if (this.isCompleted) {
            contentStyle.height = '';
        }
        return (react_1["default"].createElement(components_1.View, { className: rootCls, style: customStyle },
            react_1["default"].createElement(components_1.View, { className: headerCls, onClick: this.handleClick },
                icon && icon.value && (react_1["default"].createElement(components_1.Text, { className: iconCls, style: iconStyle })),
                react_1["default"].createElement(components_1.View, { className: 'at-accordion__info' },
                    react_1["default"].createElement(components_1.View, { className: 'at-accordion__info__title' }, title),
                    react_1["default"].createElement(components_1.View, { className: 'at-accordion__info__note' }, note)),
                react_1["default"].createElement(components_1.View, { className: arrowCls },
                    react_1["default"].createElement(components_1.Text, { className: 'at-icon at-icon-chevron-down' }))),
            react_1["default"].createElement(components_1.View, { style: contentStyle, className: contentCls },
                react_1["default"].createElement(components_1.View, { className: 'at-accordion__body' }, this.props.children))));
    };
    return AtAccordion;
}(react_1["default"].Component));
exports["default"] = AtAccordion;
AtAccordion.defaultProps = {
    open: false,
    customStyle: '',
    className: '',
    title: '',
    note: '',
    icon: { value: '' },
    hasBorder: true,
    isAnimation: true
};
AtAccordion.propTypes = {
    customStyle: prop_types_1["default"].oneOfType([prop_types_1["default"].object, prop_types_1["default"].string]),
    className: prop_types_1["default"].oneOfType([prop_types_1["default"].array, prop_types_1["default"].string]),
    open: prop_types_1["default"].bool,
    isAnimation: prop_types_1["default"].bool,
    title: prop_types_1["default"].string,
    note: prop_types_1["default"].string,
    icon: prop_types_1["default"].object,
    hasBorder: prop_types_1["default"].bool,
    onClick: prop_types_1["default"].func
};
//# sourceMappingURL=index.js.map