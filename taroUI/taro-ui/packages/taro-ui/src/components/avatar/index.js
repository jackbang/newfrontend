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
var taro_1 = require("@tarojs/taro");
var SIZE_CLASS = {
    large: 'large',
    normal: 'normal',
    small: 'small'
};
var AtAvatar = /** @class */ (function (_super) {
    __extends(AtAvatar, _super);
    function AtAvatar(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            isWEAPP: taro_1["default"].getEnv() === taro_1["default"].ENV_TYPE.WEAPP
        };
        return _this;
    }
    AtAvatar.prototype.render = function () {
        var _a;
        var _b = this.props, size = _b.size, circle = _b.circle, image = _b.image, text = _b.text, openData = _b.openData, customStyle = _b.customStyle;
        var rootClassName = ['at-avatar'];
        var iconSize = SIZE_CLASS[size || 'normal'];
        var classObject = (_a = {},
            _a["at-avatar--" + iconSize] = iconSize,
            _a['at-avatar--circle'] = circle,
            _a);
        var letter = '';
        if (text)
            letter = text[0];
        var elem;
        if (openData && openData.type === 'userAvatarUrl' && this.state.isWEAPP) {
            elem = react_1["default"].createElement(components_1.OpenData, { type: openData.type });
        }
        else if (image) {
            elem = react_1["default"].createElement(components_1.Image, { className: 'at-avatar__img', src: image });
        }
        else {
            elem = react_1["default"].createElement(components_1.Text, { className: 'at-avatar__text' }, letter);
        }
        return (react_1["default"].createElement(components_1.View, { className: classnames_1["default"](rootClassName, classObject, this.props.className), style: customStyle }, elem));
    };
    return AtAvatar;
}(react_1["default"].Component));
exports["default"] = AtAvatar;
AtAvatar.defaultProps = {
    size: 'normal',
    circle: false,
    text: '',
    image: '',
    customStyle: {},
    className: ''
};
AtAvatar.propTypes = {
    size: prop_types_1["default"].oneOf(['large', 'normal', 'small']),
    circle: prop_types_1["default"].bool,
    text: prop_types_1["default"].string,
    image: prop_types_1["default"].string,
    openData: prop_types_1["default"].object,
    customStyle: prop_types_1["default"].oneOfType([prop_types_1["default"].object, prop_types_1["default"].string]),
    className: prop_types_1["default"].oneOfType([prop_types_1["default"].array, prop_types_1["default"].string])
};
//# sourceMappingURL=index.js.map