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
var components_1 = require("@tarojs/components");
var taro_1 = require("@tarojs/taro");
var icon_list_action_png_1 = require("../../assets/images/icon-list-action.png");
var icon_list_basic_png_1 = require("../../assets/images/icon-list-basic.png");
var icon_list_form_png_1 = require("../../assets/images/icon-list-form.png");
var icon_list_hoc_png_1 = require("../../assets/images/icon-list-hoc.png");
var icon_list_layout_png_1 = require("../../assets/images/icon-list-layout.png");
var icon_list_navigation_png_1 = require("../../assets/images/icon-list-navigation.png");
var icon_list_view_png_1 = require("../../assets/images/icon-list-view.png");
var logo_taro_png_1 = require("../../assets/images/logo_taro.png");
require("./index.scss");
var Index = /** @class */ (function (_super) {
    __extends(Index, _super);
    function Index(props) {
        var _this = _super.call(this, props) || this;
        _this.config = {
            navigationBarTitleText: 'Taro UI'
        };
        _this.state = {
            list: [
                {
                    id: 'Basic',
                    title: '基础',
                    content: '包含颜色、文本、图标等',
                    icon: icon_list_basic_png_1["default"]
                },
                {
                    id: 'View',
                    title: '视图',
                    content: '包含通告栏、标签、徽标等',
                    icon: icon_list_view_png_1["default"]
                },
                {
                    id: 'Action',
                    title: '操作反馈',
                    content: '包含对话框、进度条、动作面板等',
                    icon: icon_list_action_png_1["default"]
                },
                {
                    id: 'Form',
                    title: '表单',
                    content: '包含输入框、单选框、复选框等',
                    icon: icon_list_form_png_1["default"]
                },
                {
                    id: 'Layout',
                    title: '布局',
                    content: '包含列表、浮层、卡片等',
                    icon: icon_list_layout_png_1["default"]
                },
                {
                    id: 'Navigation',
                    title: '导航',
                    content: '包含标签栏、导航栏、分段器等',
                    icon: icon_list_navigation_png_1["default"]
                },
                {
                    id: 'Advanced',
                    title: '高阶组件',
                    content: '包含日历等',
                    icon: icon_list_hoc_png_1["default"]
                }
            ]
        };
        return _this;
    }
    Index.prototype.onShareAppMessage = function () {
        return {
            title: 'Taro UI',
            path: '/pages/index/index',
            imageUrl: 'http://storage.360buyimg.com/mtd/home/share1535013100318.jpg'
        };
    };
    Index.prototype.gotoPanel = function (id) {
        taro_1["default"].navigateTo({
            url: "/pages/panel/index?id=" + id.toLowerCase()
        });
    };
    Index.prototype.render = function () {
        var _this = this;
        var list = this.state.list;
        return (react_1["default"].createElement(components_1.View, { className: 'page page-index' },
            react_1["default"].createElement(components_1.View, { className: 'logo' },
                react_1["default"].createElement(components_1.Image, { src: logo_taro_png_1["default"], className: 'img', mode: 'widthFix' })),
            react_1["default"].createElement(components_1.View, { className: 'page-title' }, "Taro UI"),
            react_1["default"].createElement(components_1.View, { className: 'module-list' }, list.map(function (item, index) { return (react_1["default"].createElement(components_1.View, { className: 'module-list__item', key: index, "data-id": item.id, "data-name": item.title, "data-list": item.subpages, onClick: _this.gotoPanel.bind(_this, item.id) },
                react_1["default"].createElement(components_1.View, { className: 'module-list__icon' },
                    react_1["default"].createElement(components_1.Image, { src: item.icon, className: 'img', mode: 'widthFix' })),
                react_1["default"].createElement(components_1.View, { className: 'module-list__info' },
                    react_1["default"].createElement(components_1.View, { className: 'title' }, item.title),
                    react_1["default"].createElement(components_1.View, { className: 'content' }, item.content)),
                react_1["default"].createElement(components_1.View, { className: 'module-list__arrow' },
                    react_1["default"].createElement(components_1.Text, { className: 'at-icon at-icon-chevron-right' })))); }))));
    };
    return Index;
}(react_1["default"].Component));
exports["default"] = Index;
//# sourceMappingURL=index.js.map