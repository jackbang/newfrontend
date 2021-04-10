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
var AtNoticebar = /** @class */ (function (_super) {
    __extends(AtNoticebar, _super);
    function AtNoticebar(props) {
        var _this = _super.call(this, props) || this;
        var animElemId = "J_" + Math.ceil(Math.random() * 10e5).toString(36);
        _this.state = {
            show: true,
            animElemId: animElemId,
            animationData: {
                actions: [{}]
            },
            dura: 15,
            isWEAPP: taro_1["default"].getEnv() === taro_1["default"].ENV_TYPE.WEAPP,
            isALIPAY: taro_1["default"].getEnv() === taro_1["default"].ENV_TYPE.ALIPAY,
            isWEB: taro_1["default"].getEnv() === taro_1["default"].ENV_TYPE.WEB
        };
        return _this;
    }
    AtNoticebar.prototype.onClose = function (event) {
        this.setState({
            show: false
        });
        this.props.onClose && this.props.onClose(event);
    };
    AtNoticebar.prototype.onGotoMore = function (event) {
        this.props.onGotoMore && this.props.onGotoMore(event);
    };
    AtNoticebar.prototype.UNSAFE_componentWillReceiveProps = function () {
        if (!this.timeout) {
            this.interval && clearInterval(this.interval);
            this.initAnimation();
        }
    };
    AtNoticebar.prototype.componentDidMount = function () {
        if (!this.props.marquee)
            return;
        this.initAnimation();
    };
    AtNoticebar.prototype.initAnimation = function () {
        var _this = this;
        var _a = this.state, isWEAPP = _a.isWEAPP, isALIPAY = _a.isALIPAY;
        this.timeout = setTimeout(function () {
            _this.timeout = null;
            if (_this.state.isWEB) {
                var _a = _this.props.speed, speed = _a === void 0 ? 100 : _a;
                var elem = document.querySelector("." + _this.state.animElemId);
                if (!elem)
                    return;
                var width = elem.getBoundingClientRect().width;
                var dura = width / +speed;
                _this.setState({ dura: dura });
            }
            else if (isWEAPP || isALIPAY) {
                var query = taro_1["default"].createSelectorQuery();
                query
                    .select("." + _this.state.animElemId)
                    .boundingClientRect()
                    .exec(function (res) {
                    var queryRes = res[0];
                    if (!queryRes)
                        return;
                    var width = queryRes.width;
                    var _a = _this.props.speed, speed = _a === void 0 ? 100 : _a;
                    var dura = width / +speed;
                    var animation = taro_1["default"].createAnimation({
                        duration: dura * 1000,
                        timingFunction: 'linear'
                    });
                    var resetAnimation = taro_1["default"].createAnimation({
                        duration: 0,
                        timingFunction: 'linear'
                    });
                    var resetOpacityAnimation = taro_1["default"].createAnimation({
                        duration: 0,
                        timingFunction: 'linear'
                    });
                    var animBody = function () {
                        resetOpacityAnimation.opacity(0).step();
                        _this.setState({ animationData: resetOpacityAnimation["export"]() });
                        setTimeout(function () {
                            resetAnimation.translateX(0).step();
                            _this.setState({ animationData: resetAnimation["export"]() });
                        }, 300);
                        setTimeout(function () {
                            resetOpacityAnimation.opacity(1).step();
                            _this.setState({ animationData: resetOpacityAnimation["export"]() });
                        }, 600);
                        setTimeout(function () {
                            animation.translateX(-width).step();
                            _this.setState({ animationData: animation["export"]() });
                        }, 900);
                    };
                    animBody();
                    _this.interval = setInterval(animBody, dura * 1000 + 1000);
                });
            }
        }, 1000);
    };
    AtNoticebar.prototype.render = function () {
        var _a = this.props, single = _a.single, icon = _a.icon, marquee = _a.marquee, customStyle = _a.customStyle, className = _a.className, _b = _a.moreText, moreText = _b === void 0 ? '查看详情' : _b;
        var _c = this.props, showMore = _c.showMore, close = _c.close;
        var _d = this.state, dura = _d.dura, show = _d.show, animElemId = _d.animElemId, animationData = _d.animationData, isWEAPP = _d.isWEAPP, isALIPAY = _d.isALIPAY;
        var rootClassName = ['at-noticebar'];
        if (!single)
            showMore = false;
        var style = {};
        var innerClassName = ['at-noticebar__content-inner'];
        if (marquee) {
            close = false;
            style['animation-duration'] = dura + "s";
            innerClassName.push(animElemId);
        }
        var classObject = {
            'at-noticebar--marquee': marquee,
            'at-noticebar--weapp': marquee && (isWEAPP || isALIPAY),
            'at-noticebar--single': !marquee && single
        };
        var iconClass = ['at-icon'];
        if (icon)
            iconClass.push("at-icon-" + icon);
        return (show && (react_1["default"].createElement(components_1.View, { className: classnames_1["default"](rootClassName, classObject, className), style: customStyle },
            close && (react_1["default"].createElement(components_1.View, { className: 'at-noticebar__close', onClick: this.onClose.bind(this) },
                react_1["default"].createElement(components_1.Text, { className: 'at-icon at-icon-close' }))),
            react_1["default"].createElement(components_1.View, { className: 'at-noticebar__content' },
                icon && (react_1["default"].createElement(components_1.View, { className: 'at-noticebar__content-icon' },
                    react_1["default"].createElement(components_1.Text, { className: classnames_1["default"](iconClass, iconClass) }))),
                react_1["default"].createElement(components_1.View, { className: 'at-noticebar__content-text' },
                    react_1["default"].createElement(components_1.View, { id: animElemId, animation: animationData, className: classnames_1["default"](innerClassName), style: style }, this.props.children))),
            showMore && (react_1["default"].createElement(components_1.View, { className: 'at-noticebar__more', onClick: this.onGotoMore.bind(this) },
                react_1["default"].createElement(components_1.Text, { className: 'text' }, moreText),
                react_1["default"].createElement(components_1.View, { className: 'at-noticebar__more-icon' },
                    react_1["default"].createElement(components_1.Text, { className: 'at-icon at-icon-chevron-right' })))))));
    };
    return AtNoticebar;
}(react_1["default"].Component));
exports["default"] = AtNoticebar;
AtNoticebar.defaultProps = {
    close: false,
    single: false,
    marquee: false,
    speed: 100,
    moreText: '查看详情',
    showMore: false,
    icon: '',
    customStyle: {}
};
AtNoticebar.propTypes = {
    close: prop_types_1["default"].bool,
    single: prop_types_1["default"].bool,
    marquee: prop_types_1["default"].bool,
    speed: prop_types_1["default"].number,
    moreText: prop_types_1["default"].string,
    showMore: prop_types_1["default"].bool,
    icon: prop_types_1["default"].string,
    customStyle: prop_types_1["default"].oneOfType([prop_types_1["default"].object, prop_types_1["default"].string]),
    onClose: prop_types_1["default"].func,
    onGotoMore: prop_types_1["default"].func
};
//# sourceMappingURL=index.js.map