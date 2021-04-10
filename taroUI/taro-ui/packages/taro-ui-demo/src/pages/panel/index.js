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
require("./index.scss");
var PanelBasic = /** @class */ (function (_super) {
    __extends(PanelBasic, _super);
    function PanelBasic(props) {
        var _this = _super.call(this, props) || this;
        _this.config = {
            navigationBarTitleText: 'Taro UI'
        };
        _this.state = {
            panelNames: {
                basic: {
                    name: '基础',
                    icon: icon_list_basic_png_1["default"]
                },
                view: {
                    name: '视图',
                    icon: icon_list_view_png_1["default"]
                },
                action: {
                    name: '操作反馈',
                    icon: icon_list_action_png_1["default"]
                },
                form: {
                    name: '表单',
                    icon: icon_list_form_png_1["default"]
                },
                layout: {
                    name: '布局',
                    icon: icon_list_layout_png_1["default"]
                },
                navigation: {
                    name: '导航',
                    icon: icon_list_navigation_png_1["default"]
                },
                advanced: {
                    name: '高阶组件',
                    icon: icon_list_hoc_png_1["default"]
                }
            },
            list: {
                basic: [
                    {
                        id: 'Color',
                        name: '颜色'
                    },
                    {
                        id: 'Icon',
                        name: '图标'
                    },
                    {
                        id: 'Typo',
                        name: '字体'
                    },
                    {
                        id: 'Button',
                        name: '按钮'
                    }
                ],
                view: [
                    {
                        id: 'Avatar',
                        name: '头像'
                    },
                    {
                        id: 'Article',
                        name: '文章'
                    },
                    {
                        id: 'Badge',
                        name: '徽标'
                    },
                    {
                        id: 'Countdown',
                        name: '倒计时'
                    },
                    {
                        id: 'Curtain',
                        name: '幕帘'
                    },
                    {
                        id: 'Divider',
                        name: '分割线'
                    },
                    {
                        id: 'NoticeBar',
                        name: '通告栏'
                    },
                    {
                        id: 'Tag',
                        name: '标签'
                    },
                    {
                        id: 'Timeline',
                        name: '时间轴'
                    },
                    {
                        id: 'Swiper',
                        name: '滑块视图容器'
                    },
                    {
                        id: 'Load-More',
                        name: '页面提示'
                    },
                    {
                        id: 'Steps',
                        name: '步骤条'
                    }
                ],
                action: [
                    {
                        id: 'Action-Sheet',
                        name: '动作面板'
                    },
                    {
                        id: 'Activity-Indicator',
                        name: '活动指示器'
                    },
                    {
                        id: 'Modal',
                        name: '模态框'
                    },
                    {
                        id: 'Progress',
                        name: '进度条'
                    },
                    {
                        id: 'Toast',
                        name: '轻提示'
                    },
                    {
                        id: 'Swipe-Action',
                        name: '滑动操作'
                    },
                    {
                        id: 'Message',
                        name: '消息通知'
                    }
                ],
                form: [
                    {
                        id: 'Form',
                        name: '表单'
                    },
                    {
                        id: 'Input',
                        name: '输入框'
                    },
                    {
                        id: 'Radio',
                        name: '单选框'
                    },
                    {
                        id: 'Checkbox',
                        name: '复选框'
                    },
                    {
                        id: 'Switch',
                        name: '开关'
                    },
                    {
                        id: 'Rate',
                        name: '评分'
                    },
                    {
                        id: 'Input-Number',
                        name: '数字输入框'
                    },
                    {
                        id: 'Textarea',
                        name: '多行文本框'
                    },
                    {
                        id: 'Picker',
                        name: '选择器'
                    },
                    {
                        id: 'Picker-View',
                        name: '滚动选择器'
                    },
                    {
                        id: 'Slider',
                        name: '滑动条'
                    },
                    {
                        id: 'Search-Bar',
                        name: '搜索栏'
                    },
                    {
                        id: 'Image-Picker',
                        name: '图片选择器'
                    },
                    {
                        id: 'Range',
                        name: '范围选择器'
                    }
                ],
                layout: [
                    {
                        id: 'Flex',
                        name: '弹性布局'
                    },
                    {
                        id: 'Grid',
                        name: '栅格'
                    },
                    {
                        id: 'List',
                        name: '列表'
                    },
                    {
                        id: 'Card',
                        name: '卡片'
                    },
                    {
                        id: 'Float-Layout',
                        name: '浮动弹层'
                    },
                    {
                        id: 'Accordion',
                        name: '手风琴'
                    }
                ],
                navigation: [
                    {
                        id: 'NavBar',
                        name: '导航栏'
                    },
                    {
                        id: 'TabBar',
                        name: '标签栏'
                    },
                    {
                        id: 'Tabs',
                        name: '标签页'
                    },
                    {
                        id: 'Segmented-Control',
                        name: '分段器'
                    },
                    {
                        id: 'Pagination',
                        name: '分页器'
                    },
                    {
                        id: 'Drawer',
                        name: '抽屉'
                    },
                    {
                        id: 'Indexes',
                        name: '索引选择器'
                    }
                ],
                advanced: [
                    {
                        id: 'Calendar',
                        name: '日历'
                    }
                ]
            },
            currentId: ''
        };
        return _this;
    }
    PanelBasic.prototype.componentDidMount = function () {
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        var id = taro_1["default"].Current.router.params.id;
        this.setState({
            currentId: id.toLowerCase() || ''
        });
    };
    PanelBasic.prototype.gotoComponent = function (id, parent) {
        taro_1["default"].navigateTo({
            url: "/pages/" + parent.toLowerCase() + "/" + id.toLowerCase() + "/index"
        });
    };
    PanelBasic.prototype.render = function () {
        var _this = this;
        var _a = this.state, list = _a.list, currentId = _a.currentId, panelNames = _a.panelNames;
        var itemList = list[currentId] || [];
        var title = (panelNames[currentId] && panelNames[currentId].name) || '';
        var icon = (panelNames[currentId] && panelNames[currentId].icon) || '';
        return (react_1["default"].createElement(components_1.View, { className: 'page' },
            react_1["default"].createElement(components_1.View, { className: 'panel-header' },
                react_1["default"].createElement(components_1.View, { className: 'panel-header__icon' }, icon ? (react_1["default"].createElement(components_1.Image, { src: icon, className: 'img', mode: 'widthFix' })) : (react_1["default"].createElement(components_1.Text, { className: 'at-icon at-icon-list' }))),
                react_1["default"].createElement(components_1.View, { className: 'panel-header__title' }, title)),
            react_1["default"].createElement(components_1.View, { className: 'panel-body' },
                react_1["default"].createElement(components_1.View, { className: 'component-list' }, itemList.map(function (item) { return (react_1["default"].createElement(components_1.View, { className: 'component-list__item', key: item.id, onClick: _this.gotoComponent.bind(_this, item.id, currentId) },
                    react_1["default"].createElement(components_1.Text, { className: 'name' }, item.id + " " + item.name),
                    react_1["default"].createElement(components_1.Text, { className: 'at-icon at-icon-chevron-right' }))); })))));
    };
    return PanelBasic;
}(react_1["default"].Component));
exports["default"] = PanelBasic;
//# sourceMappingURL=index.js.map