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
var utils_1 = require("../../../common/utils");
var AtListItem = /** @class */ (function (_super) {
    __extends(AtListItem, _super);
    function AtListItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleClick = function (event) {
            if (typeof _this.props.onClick === 'function' && !_this.props.disabled) {
                _this.props.onClick(event);
            }
        };
        _this.handleSwitchChange = function (event) {
            if (typeof _this.props.onSwitchChange === 'function' &&
                !_this.props.disabled) {
                _this.props.onSwitchChange(event);
            }
        };
        return _this;
    }
    AtListItem.prototype.handleSwitchClick = function (e) {
        e.stopPropagation();
    };
    AtListItem.prototype.render = function () {
        var _a;
        var _b = this.props, note = _b.note, arrow = _b.arrow, thumb = _b.thumb, iconInfo = _b.iconInfo, disabled = _b.disabled, isSwitch = _b.isSwitch, hasBorder = _b.hasBorder, extraThumb = _b.extraThumb, switchColor = _b.switchColor, switchIsCheck = _b.switchIsCheck;
        var _c = this.props, extraText = _c.extraText, title = _c.title;
        extraText = String(extraText);
        title = String(title);
        var rootClass = classnames_1["default"]('at-list__item', {
            'at-list__item--thumb': thumb,
            'at-list__item--multiple': note,
            'at-list__item--disabled': disabled,
            'at-list__item--no-border': !hasBorder
        }, this.props.className);
        var iconClass = classnames_1["default"]((iconInfo && iconInfo.prefixClass) || 'at-icon', (_a = {},
            _a[((iconInfo && iconInfo.prefixClass) || 'at-icon') + "-" + (iconInfo && iconInfo.value)] = iconInfo && iconInfo.value,
            _a), iconInfo && iconInfo.className);
        return (react_1["default"].createElement(components_1.View, { className: rootClass, onClick: this.handleClick },
            react_1["default"].createElement(components_1.View, { className: 'at-list__item-container' },
                thumb && (react_1["default"].createElement(components_1.View, { className: 'at-list__item-thumb item-thumb' },
                    react_1["default"].createElement(components_1.Image, { className: 'item-thumb__info', mode: 'scaleToFill', src: thumb }))),
                iconInfo && iconInfo.value && (react_1["default"].createElement(components_1.View, { className: 'at-list__item-icon item-icon' },
                    react_1["default"].createElement(components_1.Text, { className: iconClass, style: utils_1.mergeStyle({
                            color: iconInfo.color || '',
                            fontSize: (iconInfo.size || 24) + "px"
                        }, iconInfo.customStyle || '') }))),
                react_1["default"].createElement(components_1.View, { className: 'at-list__item-content item-content' },
                    react_1["default"].createElement(components_1.View, { className: 'item-content__info' },
                        react_1["default"].createElement(components_1.View, { className: 'item-content__info-title' }, title),
                        note && react_1["default"].createElement(components_1.View, { className: 'item-content__info-note' }, note))),
                react_1["default"].createElement(components_1.View, { className: 'at-list__item-extra item-extra' },
                    extraText && react_1["default"].createElement(components_1.View, { className: 'item-extra__info' }, extraText),
                    extraThumb && !extraText && (react_1["default"].createElement(components_1.View, { className: 'item-extra__image' },
                        react_1["default"].createElement(components_1.Image, { className: 'item-extra__image-info', mode: 'aspectFit', src: extraThumb }))),
                    isSwitch && !extraThumb && !extraText && (react_1["default"].createElement(components_1.View, { className: 'item-extra__switch', onClick: this.handleSwitchClick },
                        react_1["default"].createElement(components_1.Switch, { color: switchColor, disabled: disabled, checked: switchIsCheck, onChange: this.handleSwitchChange }))),
                    arrow ? (react_1["default"].createElement(components_1.View, { className: 'item-extra__icon' },
                        react_1["default"].createElement(components_1.Text, { className: "at-icon item-extra__icon-arrow at-icon-chevron-" + arrow }))) : null))));
    };
    return AtListItem;
}(react_1["default"].Component));
exports["default"] = AtListItem;
AtListItem.defaultProps = {
    note: '',
    disabled: false,
    title: '',
    thumb: '',
    isSwitch: false,
    hasBorder: true,
    switchColor: '#6190E8',
    switchIsCheck: false,
    extraText: '',
    extraThumb: '',
    iconInfo: { value: '' }
};
AtListItem.propTypes = {
    note: prop_types_1["default"].string,
    disabled: prop_types_1["default"].bool,
    title: prop_types_1["default"].string,
    thumb: prop_types_1["default"].string,
    onClick: prop_types_1["default"].func,
    isSwitch: prop_types_1["default"].bool,
    hasBorder: prop_types_1["default"].bool,
    switchColor: prop_types_1["default"].string,
    switchIsCheck: prop_types_1["default"].bool,
    extraText: prop_types_1["default"].string,
    extraThumb: prop_types_1["default"].string,
    onSwitchChange: prop_types_1["default"].func,
    arrow: prop_types_1["default"].oneOf(['up', 'down', 'right']),
    iconInfo: prop_types_1["default"].shape({
        size: prop_types_1["default"].number,
        value: prop_types_1["default"].string,
        color: prop_types_1["default"].string,
        prefixClass: prop_types_1["default"].string,
        customStyle: prop_types_1["default"].oneOfType([prop_types_1["default"].object, prop_types_1["default"].string]),
        className: prop_types_1["default"].oneOfType([prop_types_1["default"].array, prop_types_1["default"].string])
    })
};
//# sourceMappingURL=index.js.map