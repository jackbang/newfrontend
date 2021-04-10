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
var index_1 = require("../badge/index");
var AtTabBar = /** @class */ (function (_super) {
    __extends(AtTabBar, _super);
    function AtTabBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // constructor () {
    //   super(...arguments)
    //   this.state = {
    //     isIPhoneX: false
    //   }
    // }
    // componentDidMount () {
    //   const curEnv = Taro.getEnv()
    //   if (
    //     curEnv === Taro.ENV_TYPE.WEAPP &&
    //     Taro.getSystemInfoSync().model.indexOf('iPhone X') >= 0
    //   ) {
    //     this.setState({ isIPhoneX: true })
    //   }
    // }
    AtTabBar.prototype.handleClick = function (index, event) {
        this.props.onClick(index, event);
    };
    AtTabBar.prototype.render = function () {
        var _this = this;
        var _a = this.props, _b = _a.customStyle, customStyle = _b === void 0 ? '' : _b, className = _a.className, fixed = _a.fixed, backgroundColor = _a.backgroundColor, tabList = _a.tabList, current = _a.current, color = _a.color, iconSize = _a.iconSize, fontSize = _a.fontSize, selectedColor = _a.selectedColor;
        // const { isIPhoneX } = this.state
        var defaultStyle = {
            color: color || ''
        };
        var selectedStyle = {
            color: selectedColor || ''
        };
        var titleStyle = {
            fontSize: fontSize ? fontSize + "px" : ''
        };
        var rootStyle = {
            backgroundColor: backgroundColor || ''
        };
        var imgStyle = {
            width: iconSize + "px",
            height: iconSize + "px"
        };
        return (react_1["default"].createElement(components_1.View, { className: classnames_1["default"]({
                'at-tab-bar': true,
                'at-tab-bar--fixed': fixed
                // 'at-tab-bar--ipx': isIPhoneX
            }, className), style: utils_1.mergeStyle(rootStyle, customStyle) }, tabList.map(function (item, i) {
            var _a;
            return (react_1["default"].createElement(components_1.View, { className: classnames_1["default"]('at-tab-bar__item', {
                    'at-tab-bar__item--active': current === i
                }), style: current === i ? selectedStyle : defaultStyle, key: item.title, onClick: _this.handleClick.bind(_this, i) },
                item.iconType ? (react_1["default"].createElement(index_1["default"], { dot: !!item.dot, value: item.text, maxValue: Number(item.max) },
                    react_1["default"].createElement(components_1.View, { className: 'at-tab-bar__icon' },
                        react_1["default"].createElement(components_1.Text, { className: classnames_1["default"]("" + (item.iconPrefixClass || 'at-icon'), (_a = {},
                                _a[(item.iconPrefixClass || 'at-icon') + "-" + item.selectedIconType] = current === i && item.selectedIconType,
                                _a[(item.iconPrefixClass || 'at-icon') + "-" + item.iconType] = !(current === i && item.selectedIconType),
                                _a)), style: {
                                color: current === i ? selectedColor : color,
                                fontSize: iconSize ? iconSize + "px" : ''
                            } })))) : null,
                item.image ? (react_1["default"].createElement(index_1["default"], { dot: !!item.dot, value: item.text, maxValue: Number(item.max) },
                    react_1["default"].createElement(components_1.View, { className: 'at-tab-bar__icon' },
                        react_1["default"].createElement(components_1.Image, { className: classnames_1["default"]('at-tab-bar__inner-img', {
                                'at-tab-bar__inner-img--inactive': current !== i
                            }), mode: 'widthFix', src: item.selectedImage || item.image, style: imgStyle }),
                        react_1["default"].createElement(components_1.Image, { className: classnames_1["default"]('at-tab-bar__inner-img', {
                                'at-tab-bar__inner-img--inactive': current === i
                            }), mode: 'widthFix', src: item.image, style: imgStyle })))) : null,
                react_1["default"].createElement(components_1.View, null,
                    react_1["default"].createElement(index_1["default"], { dot: item.iconType || item.image ? false : !!item.dot, value: item.iconType || item.image ? '' : item.text, maxValue: item.iconType || item.image ? 0 : Number(item.max) },
                        react_1["default"].createElement(components_1.View, { className: 'at-tab-bar__title', style: titleStyle }, item.title)))));
        })));
    };
    return AtTabBar;
}(react_1["default"].Component));
exports["default"] = AtTabBar;
AtTabBar.defaultProps = {
    customStyle: '',
    className: '',
    fixed: false,
    current: 0,
    tabList: [],
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onClick: function () { }
};
AtTabBar.propTypes = {
    customStyle: prop_types_1["default"].oneOfType([prop_types_1["default"].object, prop_types_1["default"].string]),
    className: prop_types_1["default"].oneOfType([prop_types_1["default"].array, prop_types_1["default"].string]),
    fixed: prop_types_1["default"].bool,
    backgroundColor: prop_types_1["default"].string,
    current: prop_types_1["default"].number,
    iconSize: prop_types_1["default"].oneOfType([prop_types_1["default"].number, prop_types_1["default"].string]),
    fontSize: prop_types_1["default"].oneOfType([prop_types_1["default"].number, prop_types_1["default"].string]),
    color: prop_types_1["default"].string,
    selectedColor: prop_types_1["default"].string,
    tabList: prop_types_1["default"].array,
    onClick: prop_types_1["default"].func
};
//# sourceMappingURL=index.js.map