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
var react_1 = require("react");
var taro_ui_1 = require("taro-ui");
var components_1 = require("@tarojs/components");
var taro_1 = require("@tarojs/taro");
var doc_header_1 = require("../../components/doc-header");
require("./index.scss");
var DrawerPage = /** @class */ (function (_super) {
    __extends(DrawerPage, _super);
    function DrawerPage(props) {
        var _this = _super.call(this, props) || this;
        _this.config = {
            navigationBarTitleText: 'Taro UI'
        };
        _this.state = {
            leftDrawerShow: false,
            rightDrawerShow: false,
            childrenDrawerShow: false,
            childrenItem: ['首页', '可自定义结构', '或自定义样式', '消息', '个人'],
            icons: ['home', '', '', 'message', 'user']
        };
        return _this;
    }
    DrawerPage.prototype.leftDrawerClick = function () {
        this.setState({
            leftDrawerShow: !this.state.leftDrawerShow
        });
    };
    DrawerPage.prototype.rightDrawerClick = function () {
        this.setState({
            rightDrawerShow: !this.state.rightDrawerShow
        });
    };
    DrawerPage.prototype.childrenDrawerClick = function () {
        this.setState({
            childrenDrawerShow: !this.state.childrenDrawerShow
        });
    };
    DrawerPage.prototype.onItemClick = function (index) {
        var ENV = taro_1["default"].getEnv();
        var content;
        if (typeof index !== 'number') {
            content = '';
        }
        else {
            content = "\u4F60\u70B9\u51FB\u4E86\u7B2C " + (+index + 1) + " \u4E2A\u9879\u76EE";
        }
        if (ENV !== 'WEB')
            content && taro_1["default"].showModal({ content: content, showCancel: false });
        else
            content && alert(content);
    };
    DrawerPage.prototype.onClose = function () {
        this.setState({
            leftDrawerShow: false,
            rightDrawerShow: false,
            childrenDrawerShow: false
        });
    };
    DrawerPage.prototype.render = function () {
        var _this = this;
        var icons = this.state.icons;
        return (react_1["default"].createElement(components_1.View, { className: 'page' },
            react_1["default"].createElement(doc_header_1["default"], { title: 'Drawer \u62BD\u5C49' }),
            react_1["default"].createElement(components_1.View, { className: 'doc-body' },
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u5DE6\u8FB9\u6ED1\u51FA"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content no-padding' },
                        react_1["default"].createElement(components_1.View, { className: 'example' },
                            react_1["default"].createElement(taro_ui_1.AtButton, { onClick: this.leftDrawerClick.bind(this) }, "\u663E\u793A Drawer"),
                            react_1["default"].createElement(taro_ui_1.AtDrawer, { show: this.state.leftDrawerShow, mask: true, onItemClick: this.onItemClick.bind(this), onClose: this.onClose.bind(this), items: ['菜单1', '菜单2'] })))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u53F3\u8FB9\u6ED1\u51FA"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content no-padding' },
                        react_1["default"].createElement(components_1.View, { className: 'example' },
                            react_1["default"].createElement(taro_ui_1.AtButton, { onClick: this.rightDrawerClick.bind(this) }, "\u663E\u793A Drawer"),
                            react_1["default"].createElement(taro_ui_1.AtDrawer, { show: this.state.rightDrawerShow, right: true, mask: true, onItemClick: this.onItemClick.bind(this), onClose: this.onClose.bind(this), items: ['菜单1', '菜单2'] })))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u81EA\u5B9A\u4E49\u5185\u5BB9"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content no-padding' },
                        react_1["default"].createElement(components_1.View, { className: 'example' },
                            react_1["default"].createElement(taro_ui_1.AtButton, { onClick: this.childrenDrawerClick.bind(this) }, "\u663E\u793A Drawer"),
                            react_1["default"].createElement(taro_ui_1.AtDrawer, { show: this.state.childrenDrawerShow, mask: true, onItemClick: this.onItemClick.bind(this), onClose: this.onClose.bind(this) }, this.state.childrenItem.map(function (item, index) { return (react_1["default"].createElement(components_1.View, { className: classnames_1["default"]('drawer-item', {
                                    'drawer-item--sub': index === 1 || index === 2
                                }), onClick: _this.onItemClick.bind(_this, index), key: "drawer-item-" + index },
                                item,
                                index !== 3 && icons[index] && (react_1["default"].createElement(taro_ui_1.AtIcon, { value: icons[index], size: '20' })),
                                index === 3 && icons[index] && (react_1["default"].createElement(taro_ui_1.AtBadge, { value: '3' },
                                    react_1["default"].createElement(taro_ui_1.AtIcon, { value: icons[index], size: '20' }))))); }))))))));
    };
    return DrawerPage;
}(react_1["default"].Component));
exports["default"] = DrawerPage;
//# sourceMappingURL=index.js.map