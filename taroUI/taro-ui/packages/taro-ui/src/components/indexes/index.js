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
var index_1 = require("../list/index");
var index_2 = require("../list/item/index");
var index_3 = require("../toast/index");
var ENV = taro_1["default"].getEnv();
var AtIndexes = /** @class */ (function (_super) {
    __extends(AtIndexes, _super);
    function AtIndexes(props) {
        var _this = _super.call(this, props) || this;
        _this.handleClick = function (item) {
            _this.props.onClick && _this.props.onClick(item);
        };
        _this.handleTouchMove = function (event) {
            event.stopPropagation();
            event.preventDefault();
            var list = _this.props.list;
            var pageY = event.touches[0].pageY;
            var index = Math.floor((pageY - _this.startTop) / _this.itemHeight);
            if (index >= 0 && index <= list.length && _this.currentIndex !== index) {
                _this.currentIndex = index;
                var key = index > 0 ? list[index - 1].key : 'top';
                var touchView = "at-indexes__list-" + key;
                _this.jumpTarget(touchView, index);
            }
        };
        _this.handleTouchEnd = function () {
            _this.currentIndex = -1;
        };
        _this.state = {
            _scrollIntoView: '',
            _scrollTop: 0,
            _tipText: '',
            _isShowToast: false,
            isWEB: taro_1["default"].getEnv() === taro_1["default"].ENV_TYPE.WEB
        };
        // 右侧导航高度
        _this.menuHeight = 0;
        // 右侧导航距离顶部高度
        _this.startTop = 0;
        // 右侧导航元素高度
        _this.itemHeight = 0;
        // 当前索引
        _this.currentIndex = -1;
        _this.listId = utils_1.isTest() ? 'indexes-list-AOTU2018' : "list-" + utils_1.uuid();
        return _this;
    }
    AtIndexes.prototype.jumpTarget = function (_scrollIntoView, idx) {
        var _this = this;
        var _a = this.props, _b = _a.topKey, topKey = _b === void 0 ? 'Top' : _b, list = _a.list;
        var _tipText = idx === 0 ? topKey : list[idx - 1].key;
        if (ENV === taro_1["default"].ENV_TYPE.WEB) {
            utils_1.delayQuerySelector('.at-indexes', 0).then(function (rect) {
                var targetOffsetTop = _this.listRef.childNodes[idx].offsetTop;
                var _scrollTop = targetOffsetTop - rect[0].top;
                _this.updateState({
                    _scrollTop: _scrollTop,
                    _scrollIntoView: _scrollIntoView,
                    _tipText: _tipText
                });
            });
            return;
        }
        this.updateState({
            _scrollIntoView: _scrollIntoView,
            _tipText: _tipText
        });
    };
    AtIndexes.prototype.__jumpTarget = function (key) {
        var list = this.props.list;
        // const index = _findIndex(list, ['key', key])
        var index = list.findIndex(function (item) { return item.key === key; });
        var targetView = "at-indexes__list-" + key;
        this.jumpTarget(targetView, index + 1);
    };
    AtIndexes.prototype.updateState = function (state) {
        var _this = this;
        var _a = this.props, isShowToast = _a.isShowToast, isVibrate = _a.isVibrate;
        var _scrollIntoView = state._scrollIntoView, _tipText = state._tipText, _scrollTop = state._scrollTop;
        // TODO: Fix dirty hack
        /* eslint-disable @typescript-eslint/no-non-null-assertion */
        this.setState({
            _scrollIntoView: _scrollIntoView,
            _tipText: _tipText,
            _scrollTop: _scrollTop,
            _isShowToast: isShowToast
        }, 
        /* eslint-enable @typescript-eslint/no-non-null-assertion */
        function () {
            clearTimeout(_this.timeoutTimer);
            _this.timeoutTimer = setTimeout(function () {
                _this.setState({
                    _tipText: '',
                    _isShowToast: false
                });
            }, 3000);
        });
        if (isVibrate) {
            taro_1["default"].vibrateShort();
        }
    };
    AtIndexes.prototype.initData = function () {
        var _this = this;
        utils_1.delayQuerySelector('.at-indexes__menu').then(function (rect) {
            var len = _this.props.list.length;
            _this.menuHeight = rect[0].height;
            _this.startTop = rect[0].top;
            _this.itemHeight = Math.floor(_this.menuHeight / (len + 1));
        });
    };
    AtIndexes.prototype.handleScroll = function (e) {
        if (e && e.detail) {
            this.setState({
                _scrollTop: e.detail.scrollTop
            });
        }
    };
    AtIndexes.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
        if (nextProps.list.length !== this.props.list.length) {
            this.initData();
        }
    };
    AtIndexes.prototype.componentDidMount = function () {
        if (ENV === taro_1["default"].ENV_TYPE.WEB) {
            this.listRef = document.getElementById(this.listId);
        }
        this.initData();
    };
    AtIndexes.prototype.UNSAFE_componentWillMount = function () {
        this.props.onScrollIntoView &&
            this.props.onScrollIntoView(this.__jumpTarget.bind(this));
    };
    AtIndexes.prototype.render = function () {
        var _this = this;
        var _a = this.props, className = _a.className, customStyle = _a.customStyle, animation = _a.animation, topKey = _a.topKey, list = _a.list;
        var _b = this.state, _scrollTop = _b._scrollTop, _scrollIntoView = _b._scrollIntoView, _tipText = _b._tipText, _isShowToast = _b._isShowToast, isWEB = _b.isWEB;
        var toastStyle = { minWidth: utils_1.pxTransform(100) };
        var rootCls = classnames_1["default"]('at-indexes', className);
        var menuList = list.map(function (dataList, i) {
            var key = dataList.key;
            var targetView = "at-indexes__list-" + key;
            return (react_1["default"].createElement(components_1.View, { className: 'at-indexes__menu-item', key: key, onClick: _this.jumpTarget.bind(_this, targetView, i + 1) }, key));
        });
        var indexesList = list.map(function (dataList) { return (react_1["default"].createElement(components_1.View, { id: "at-indexes__list-" + dataList.key, className: 'at-indexes__list', key: dataList.key },
            react_1["default"].createElement(components_1.View, { className: 'at-indexes__list-title' }, dataList.title),
            react_1["default"].createElement(index_1["default"], null, dataList.items &&
                dataList.items.map(function (item) { return (react_1["default"].createElement(index_2["default"], { key: item.name, title: item.name, onClick: _this.handleClick.bind(_this, item) })); })))); });
        return (react_1["default"].createElement(components_1.View, { className: rootCls, style: customStyle },
            react_1["default"].createElement(index_3["default"], { customStyle: toastStyle, isOpened: _isShowToast, text: _tipText, duration: 2000 }),
            react_1["default"].createElement(components_1.View, { className: 'at-indexes__menu', onTouchMove: this.handleTouchMove, onTouchEnd: this.handleTouchEnd },
                react_1["default"].createElement(components_1.View, { className: 'at-indexes__menu-item', onClick: this.jumpTarget.bind(this, 'at-indexes__top', 0) }, topKey),
                menuList),
            react_1["default"].createElement(components_1.ScrollView, { className: 'at-indexes__body', id: this.listId, scrollY: true, scrollWithAnimation: animation, 
                // eslint-disable-next-line no-undefined
                scrollTop: isWEB ? _scrollTop : undefined, scrollIntoView: !isWEB ? _scrollIntoView : '', onScroll: this.handleScroll.bind(this) },
                react_1["default"].createElement(components_1.View, { className: 'at-indexes__content', id: 'at-indexes__top' }, this.props.children),
                indexesList)));
    };
    return AtIndexes;
}(react_1["default"].Component));
exports["default"] = AtIndexes;
AtIndexes.propTypes = {
    customStyle: prop_types_1["default"].oneOfType([prop_types_1["default"].object, prop_types_1["default"].string]),
    className: prop_types_1["default"].oneOfType([prop_types_1["default"].array, prop_types_1["default"].string]),
    animation: prop_types_1["default"].bool,
    isVibrate: prop_types_1["default"].bool,
    isShowToast: prop_types_1["default"].bool,
    topKey: prop_types_1["default"].string,
    list: prop_types_1["default"].array,
    onClick: prop_types_1["default"].func,
    onScrollIntoView: prop_types_1["default"].func
};
AtIndexes.defaultProps = {
    customStyle: '',
    className: '',
    animation: false,
    topKey: 'Top',
    isVibrate: true,
    isShowToast: true,
    list: []
};
//# sourceMappingURL=index.js.map