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
var utils_1 = require("../../common/utils");
var AtNavBar = /** @class */ (function (_super) {
    __extends(AtNavBar, _super);
    function AtNavBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AtNavBar.prototype.handleClickLeftView = function (event) {
        this.props.onClickLeftIcon && this.props.onClickLeftIcon(event);
    };
    AtNavBar.prototype.handleClickSt = function (event) {
        this.props.onClickRgIconSt && this.props.onClickRgIconSt(event);
    };
    AtNavBar.prototype.handleClickNd = function (event) {
        this.props.onClickRgIconNd && this.props.onClickRgIconNd(event);
    };
    AtNavBar.prototype.render = function () {
        var _a, _b, _c;
        var _d = this.props, customStyle = _d.customStyle, className = _d.className, color = _d.color, fixed = _d.fixed, border = _d.border, leftIconType = _d.leftIconType, leftText = _d.leftText, title = _d.title, rightFirstIconType = _d.rightFirstIconType, rightSecondIconType = _d.rightSecondIconType;
        var linkStyle = { color: color };
        var defaultIconInfo = {
            customStyle: '',
            className: '',
            prefixClass: 'at-icon',
            value: '',
            color: '',
            size: 24
        };
        var leftIconInfo = leftIconType instanceof Object
            ? __assign(__assign({}, defaultIconInfo), leftIconType) : __assign(__assign({}, defaultIconInfo), { value: leftIconType });
        var leftIconClass = classnames_1["default"](leftIconInfo.prefixClass, (_a = {},
            _a[leftIconInfo.prefixClass + "-" + leftIconInfo.value] = leftIconInfo.value,
            _a), leftIconInfo.className);
        var rightFirstIconInfo = rightFirstIconType instanceof Object
            ? __assign(__assign({}, defaultIconInfo), rightFirstIconType) : __assign(__assign({}, defaultIconInfo), { value: rightFirstIconType });
        var rightFirstIconClass = classnames_1["default"](rightFirstIconInfo.prefixClass, (_b = {},
            _b[rightFirstIconInfo.prefixClass + "-" + rightFirstIconInfo.value] = rightFirstIconInfo.value,
            _b), rightFirstIconInfo.className);
        var rightSecondIconInfo = rightSecondIconType instanceof Object
            ? __assign(__assign({}, defaultIconInfo), rightSecondIconType) : __assign(__assign({}, defaultIconInfo), { value: rightSecondIconType });
        var rightSecondIconClass = classnames_1["default"](rightSecondIconInfo.prefixClass, (_c = {},
            _c[rightSecondIconInfo.prefixClass + "-" + rightSecondIconInfo.value] = rightSecondIconInfo.value,
            _c), rightSecondIconInfo.className);
        return (react_1["default"].createElement(components_1.View, { className: classnames_1["default"]({
                'at-nav-bar': true,
                'at-nav-bar--fixed': fixed,
                'at-nav-bar--no-border': !border
            }, className), style: customStyle },
            react_1["default"].createElement(components_1.View, { className: 'at-nav-bar__left-view', onClick: this.handleClickLeftView.bind(this), style: linkStyle },
                leftIconType && (react_1["default"].createElement(components_1.Text, { className: leftIconClass, style: utils_1.mergeStyle({
                        color: leftIconInfo.color,
                        fontSize: "" + utils_1.pxTransform(parseInt(leftIconInfo.size.toString()) * 2)
                    }, leftIconInfo.customStyle) })),
                react_1["default"].createElement(components_1.Text, { className: 'at-nav-bar__text' }, leftText)),
            react_1["default"].createElement(components_1.View, { className: 'at-nav-bar__title' }, title || this.props.children),
            react_1["default"].createElement(components_1.View, { className: 'at-nav-bar__right-view' },
                react_1["default"].createElement(components_1.View, { className: classnames_1["default"]({
                        'at-nav-bar__container': true,
                        'at-nav-bar__container--hide': !rightSecondIconType
                    }), style: linkStyle, onClick: this.handleClickNd.bind(this) }, rightSecondIconType && (react_1["default"].createElement(components_1.Text, { className: rightSecondIconClass, style: utils_1.mergeStyle({
                        color: rightSecondIconInfo.color,
                        fontSize: "" + utils_1.pxTransform(parseInt(rightSecondIconInfo.size.toString()) * 2)
                    }, rightSecondIconInfo.customStyle) }))),
                react_1["default"].createElement(components_1.View, { className: classnames_1["default"]({
                        'at-nav-bar__container': true,
                        'at-nav-bar__container--hide': !rightFirstIconType
                    }), style: linkStyle, onClick: this.handleClickSt.bind(this) }, rightFirstIconType && (react_1["default"].createElement(components_1.Text, { className: rightFirstIconClass, style: utils_1.mergeStyle({
                        color: rightFirstIconInfo.color,
                        fontSize: "" + utils_1.pxTransform(parseInt(rightFirstIconInfo.size.toString()) * 2)
                    }, rightFirstIconInfo.customStyle) }))))));
    };
    return AtNavBar;
}(react_1["default"].Component));
exports["default"] = AtNavBar;
AtNavBar.defaultProps = {
    customStyle: '',
    className: '',
    fixed: false,
    border: true,
    color: '',
    leftIconType: '',
    leftText: '',
    title: '',
    rightFirstIconType: '',
    rightSecondIconType: ''
};
AtNavBar.propTypes = {
    customStyle: prop_types_1["default"].oneOfType([prop_types_1["default"].object, prop_types_1["default"].string]),
    className: prop_types_1["default"].oneOfType([prop_types_1["default"].array, prop_types_1["default"].string]),
    fixed: prop_types_1["default"].bool,
    border: prop_types_1["default"].bool,
    color: prop_types_1["default"].string,
    leftIconType: prop_types_1["default"].oneOfType([prop_types_1["default"].string, prop_types_1["default"].object]),
    leftText: prop_types_1["default"].string,
    title: prop_types_1["default"].string,
    rightFirstIconType: prop_types_1["default"].oneOfType([prop_types_1["default"].string, prop_types_1["default"].object]),
    rightSecondIconType: prop_types_1["default"].oneOfType([
        prop_types_1["default"].string,
        prop_types_1["default"].object
    ]),
    onClickLeftIcon: prop_types_1["default"].func,
    onClickRgIconSt: prop_types_1["default"].func,
    onClickRgIconNd: prop_types_1["default"].func
};
//# sourceMappingURL=index.js.map