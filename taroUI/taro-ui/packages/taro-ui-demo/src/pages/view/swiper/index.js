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
var react_1 = require("react");
var taro_ui_1 = require("taro-ui");
var components_1 = require("@tarojs/components");
var doc_header_1 = require("../../components/doc-header");
require("./index.scss");
var SwiperPage = /** @class */ (function (_super) {
    __extends(SwiperPage, _super);
    function SwiperPage(props) {
        var _this = _super.call(this, props) || this;
        _this.config = {
            navigationBarTitleText: 'Taro UI'
        };
        _this.setAutoPlay = function (e) {
            _this.setState({
                isAutoplay: e.detail.value
            });
        };
        _this.setCircular = function (e) {
            _this.setState({
                isCircular: e.detail.value
            });
        };
        _this.setIndicatorDots = function (e) {
            _this.setState({
                hasIndicatorDots: e.detail.value
            });
        };
        _this.setInterval = function (e) {
            _this.setState({
                interval: e.detail.value
            });
        };
        _this.setDuration = function (e) {
            _this.setState({
                duration: e.detail.value
            });
        };
        _this.state = {
            current: 1,
            duration: 500,
            interval: 5000,
            isCircular: false,
            isAutoplay: false,
            hasIndicatorDots: true,
            imgUrls: [
                'https://img10.360buyimg.com/babel/s700x360_jfs/t25855/203/725883724/96703/5a598a0f/5b7a22e1Nfd6ba344.jpg!q90!cc_350x180',
                'https://img11.360buyimg.com/babel/s700x360_jfs/t1/4776/39/2280/143162/5b9642a5E83bcda10/d93064343eb12276.jpg!q90!cc_350x180',
                'https://img14.360buyimg.com/babel/s700x360_jfs/t1/4099/12/2578/101668/5b971b4bE65ae279d/89dd1764797acfd9.jpg!q90!cc_350x180'
            ]
        };
        return _this;
    }
    SwiperPage.prototype.render = function () {
        var _a = this.state, current = _a.current, isAutoplay = _a.isAutoplay, duration = _a.duration, isCircular = _a.isCircular, interval = _a.interval, hasIndicatorDots = _a.hasIndicatorDots, imgUrls = _a.imgUrls;
        return (react_1["default"].createElement(components_1.View, { className: 'page' },
            react_1["default"].createElement(doc_header_1["default"], { title: 'Swiper \u6ED1\u5757\u89C6\u56FE\u5BB9\u5668' }),
            react_1["default"].createElement(components_1.View, { className: 'doc-body' },
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u57FA\u7840\u7528\u6CD5"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(components_1.Swiper, { indicatorColor: '#999', indicatorActiveColor: '#333', current: current, duration: duration, interval: interval, circular: isCircular, autoplay: isAutoplay, indicatorDots: hasIndicatorDots, previousMargin: '20' }, imgUrls.map(function (item, idx) { return (react_1["default"].createElement(components_1.SwiperItem, { key: idx },
                                react_1["default"].createElement(components_1.Image, { src: item, className: 'slide-image' }))); })),
                            react_1["default"].createElement(components_1.View, { className: 'control-cnt' },
                                react_1["default"].createElement(taro_ui_1.AtList, null,
                                    react_1["default"].createElement(taro_ui_1.AtListItem, { title: '\u6307\u793A\u70B9', switchIsCheck: hasIndicatorDots, isSwitch: true, onSwitchChange: this.setIndicatorDots }),
                                    react_1["default"].createElement(taro_ui_1.AtListItem, { title: '\u81EA\u52A8\u64AD\u653E', switchIsCheck: isAutoplay, isSwitch: true, onSwitchChange: this.setAutoPlay }),
                                    react_1["default"].createElement(taro_ui_1.AtListItem, { title: '\u5FAA\u73AF\u64AD\u653E', switchIsCheck: isCircular, isSwitch: true, onSwitchChange: this.setCircular })),
                                react_1["default"].createElement(components_1.View, { className: 'slider-list' },
                                    react_1["default"].createElement(components_1.View, { className: 'slider-list__item' },
                                        react_1["default"].createElement(components_1.View, { className: 'slider-list__item-header' },
                                            react_1["default"].createElement(components_1.Text, null, "\u5E7B\u706F\u7247\u5207\u6362\u65F6\u957F(ms)")),
                                        react_1["default"].createElement(components_1.View, { className: 'slider-list__item-body' },
                                            react_1["default"].createElement(components_1.Slider, { activeColor: '#6190e8', showValue: true, step: 1, min: 500, max: 2000, value: duration, onChange: this.setDuration }))),
                                    react_1["default"].createElement(components_1.View, { className: 'slider-list__item' },
                                        react_1["default"].createElement(components_1.View, { className: 'slider-list__item-header' },
                                            react_1["default"].createElement(components_1.Text, null, "\u81EA\u52A8\u64AD\u653E\u95F4\u9694\u65F6\u957F(ms)")),
                                        react_1["default"].createElement(components_1.View, { className: 'slider-list__item-body' },
                                            react_1["default"].createElement(components_1.Slider, { activeColor: '#6190e8', showValue: true, step: 1, min: 2000, max: 10000, value: this.state.interval, onChange: this.setInterval })))))))))));
    };
    return SwiperPage;
}(react_1["default"].Component));
exports["default"] = SwiperPage;
//# sourceMappingURL=index.js.map