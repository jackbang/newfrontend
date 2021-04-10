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
var utils_1 = require("../../common/utils");
var ENV = taro_1["default"].getEnv();
var MIN_DISTANCE = 100;
var MAX_INTERVAL = 10;
var AtTabs = /** @class */ (function (_super) {
    __extends(AtTabs, _super);
    function AtTabs(props) {
        var _this = _super.call(this, props) || this;
        _this.updateState = function (idx) {
            if (_this.props.scroll) {
                // 标签栏滚动
                switch (ENV) {
                    case taro_1["default"].ENV_TYPE.WEAPP:
                    case taro_1["default"].ENV_TYPE.ALIPAY:
                    case taro_1["default"].ENV_TYPE.SWAN: {
                        var index = Math.max(idx - 1, 0);
                        _this.setState({
                            _scrollIntoView: "tab" + _this._tabId + index
                        });
                        break;
                    }
                    case taro_1["default"].ENV_TYPE.WEB: {
                        var index = Math.max(idx - 1, 0);
                        var prevTabItem = _this.tabHeaderRef.childNodes[index];
                        prevTabItem &&
                            _this.setState({
                                _scrollTop: prevTabItem.offsetTop,
                                _scrollLeft: prevTabItem.offsetLeft
                            });
                        break;
                    }
                    default: {
                        console.warn('AtTab 组件在该环境还未适配');
                        break;
                    }
                }
            }
        };
        _this.state = {
            _scrollLeft: 0,
            _scrollTop: 0,
            _scrollIntoView: ''
        };
        _this._tabId = utils_1.isTest() ? 'tabs-AOTU2018' : utils_1.uuid();
        // 触摸时的原点
        _this._touchDot = 0;
        // 定时器
        _this._timer = null;
        // 滑动时间间隔
        _this._interval = 0;
        // 是否已经在滑动
        _this._isMoving = false;
        return _this;
    }
    AtTabs.prototype.handleClick = function (index, event) {
        this.props.onClick(index, event);
    };
    AtTabs.prototype.handleTouchStart = function (e) {
        var _this = this;
        var _a = this.props, swipeable = _a.swipeable, tabDirection = _a.tabDirection;
        if (!swipeable || tabDirection === 'vertical')
            return;
        // 获取触摸时的原点
        this._touchDot = e.touches[0].pageX;
        // 使用js计时器记录时间
        this._timer = setInterval(function () {
            _this._interval++;
        }, 100);
    };
    AtTabs.prototype.handleTouchMove = function (e) {
        var _a = this.props, swipeable = _a.swipeable, tabDirection = _a.tabDirection, current = _a.current, tabList = _a.tabList;
        if (!swipeable || tabDirection === 'vertical')
            return;
        var touchMove = e.touches[0].pageX;
        var moveDistance = touchMove - this._touchDot;
        var maxIndex = tabList.length;
        if (!this._isMoving &&
            this._interval < MAX_INTERVAL &&
            this._touchDot > 20) {
            // 向左滑动
            if (current + 1 < maxIndex && moveDistance <= -MIN_DISTANCE) {
                this._isMoving = true;
                this.handleClick(current + 1, e);
                // 向右滑动
            }
            else if (current - 1 >= 0 && moveDistance >= MIN_DISTANCE) {
                this._isMoving = true;
                this.handleClick(current - 1, e);
            }
        }
    };
    AtTabs.prototype.handleTouchEnd = function () {
        var _a = this.props, swipeable = _a.swipeable, tabDirection = _a.tabDirection;
        if (!swipeable || tabDirection === 'vertical')
            return;
        clearInterval(this._timer);
        this._interval = 0;
        this._isMoving = false;
    };
    AtTabs.prototype.getTabHeaderRef = function () {
        if (ENV === taro_1["default"].ENV_TYPE.WEB) {
            this.tabHeaderRef = document.getElementById(this._tabId);
        }
    };
    AtTabs.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
        if (nextProps.scroll !== this.props.scroll) {
            this.getTabHeaderRef();
        }
        if (nextProps.current !== this.props.current) {
            this.updateState(nextProps.current);
        }
    };
    AtTabs.prototype.componentDidMount = function () {
        this.getTabHeaderRef();
        this.updateState(this.props.current);
    };
    AtTabs.prototype.componentWillUnmount = function () {
        this.tabHeaderRef = null;
    };
    AtTabs.prototype.render = function () {
        var _a;
        var _this = this;
        var _b = this.props, _c = _b.customStyle, customStyle = _c === void 0 ? '' : _c, className = _b.className, height = _b.height, tabDirection = _b.tabDirection, animated = _b.animated, tabList = _b.tabList, scroll = _b.scroll, current = _b.current;
        var _d = this.state, _scrollLeft = _d._scrollLeft, _scrollTop = _d._scrollTop, _scrollIntoView = _d._scrollIntoView;
        var heightStyle = { height: height };
        var underlineStyle = {
            height: tabDirection === 'vertical' ? tabList.length * 100 + "%" : '1PX',
            width: tabDirection === 'horizontal' ? tabList.length * 100 + "%" : '1PX'
        };
        var bodyStyle = {};
        var transformStyle = "translate3d(0px, -" + current * 100 + "%, 0px)";
        if (tabDirection === 'horizontal') {
            transformStyle = "translate3d(-" + current * 100 + "%, 0px, 0px)";
        }
        Object.assign(bodyStyle, {
            transform: transformStyle,
            '-webkit-transform': transformStyle
        });
        if (!animated) {
            bodyStyle.transition = 'unset';
        }
        var tabItems = tabList.map(function (item, idx) {
            var itemCls = classnames_1["default"]({
                'at-tabs__item': true,
                'at-tabs__item--active': current === idx
            });
            return (react_1["default"].createElement(components_1.View, { className: itemCls, id: "tab" + _this._tabId + idx, key: item.title, onClick: _this.handleClick.bind(_this, idx) },
                item.title,
                react_1["default"].createElement(components_1.View, { className: 'at-tabs__item-underline' })));
        });
        var rootCls = classnames_1["default"]((_a = {
                'at-tabs': true,
                'at-tabs--scroll': scroll
            },
            _a["at-tabs--" + tabDirection] = true,
            _a["at-tabs--" + ENV] = true,
            _a), className);
        var scrollX = tabDirection === 'horizontal';
        var scrollY = tabDirection === 'vertical';
        return (react_1["default"].createElement(components_1.View, { className: rootCls, style: utils_1.mergeStyle(heightStyle, customStyle) },
            scroll ? (react_1["default"].createElement(components_1.ScrollView, { id: this._tabId, className: 'at-tabs__header', style: heightStyle, scrollX: scrollX, scrollY: scrollY, scrollWithAnimation: true, scrollLeft: _scrollLeft, scrollTop: _scrollTop, scrollIntoView: _scrollIntoView }, tabItems)) : (react_1["default"].createElement(components_1.View, { id: this._tabId, className: 'at-tabs__header' }, tabItems)),
            react_1["default"].createElement(components_1.View, { className: 'at-tabs__body', onTouchStart: this.handleTouchStart.bind(this), onTouchEnd: this.handleTouchEnd.bind(this), onTouchMove: this.handleTouchMove.bind(this), style: utils_1.mergeStyle(bodyStyle, heightStyle) },
                react_1["default"].createElement(components_1.View, { className: 'at-tabs__underline', style: underlineStyle }),
                this.props.children)));
    };
    return AtTabs;
}(react_1["default"].Component));
exports["default"] = AtTabs;
AtTabs.defaultProps = {
    customStyle: '',
    className: '',
    tabDirection: 'horizontal',
    height: '',
    current: 0,
    swipeable: true,
    scroll: false,
    animated: true,
    tabList: [],
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onClick: function () { }
};
AtTabs.propTypes = {
    customStyle: prop_types_1["default"].oneOfType([prop_types_1["default"].object, prop_types_1["default"].string]),
    className: prop_types_1["default"].oneOfType([prop_types_1["default"].array, prop_types_1["default"].string]),
    height: prop_types_1["default"].string,
    tabDirection: prop_types_1["default"].oneOf(['horizontal', 'vertical']),
    current: prop_types_1["default"].number,
    swipeable: prop_types_1["default"].bool,
    scroll: prop_types_1["default"].bool,
    animated: prop_types_1["default"].bool,
    tabList: prop_types_1["default"].array,
    onClick: prop_types_1["default"].func
};
//# sourceMappingURL=index.js.map