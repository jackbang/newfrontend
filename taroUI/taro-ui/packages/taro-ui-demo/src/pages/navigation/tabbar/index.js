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
var Index = /** @class */ (function (_super) {
    __extends(Index, _super);
    function Index(props) {
        var _this = _super.call(this, props) || this;
        _this.config = {
            navigationBarTitleText: 'Taro UI'
        };
        _this.state = {
            current1: 0,
            current2: 0,
            current3: 0,
            current4: 0,
            current5: 0
        };
        return _this;
    }
    Index.prototype.handleClick = function (num, value) {
        var _a;
        this.setState((_a = {},
            _a["current" + num] = value,
            _a));
    };
    Index.prototype.render = function () {
        var _a = this.state, current1 = _a.current1, current2 = _a.current2, current3 = _a.current3, current4 = _a.current4, current5 = _a.current5;
        var tabList1 = [
            { title: '待办事项', text: 8 },
            { title: '拍照' },
            { title: '通讯录', dot: true }
        ];
        var tabList2 = [
            { title: '待办事项', iconType: 'bullet-list', text: 'new' },
            { title: '拍照', iconType: 'camera' },
            { title: '文件夹', iconType: 'folder', text: '100', max: 99 }
        ];
        var tabList3 = [
            {
                title: '领取中心',
                image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
                selectedImage: 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png',
                text: 'new'
            },
            {
                title: '找折扣',
                image: 'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png'
            },
            {
                title: '领会员',
                image: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
                text: '100',
                max: 99
            }
        ];
        return (react_1["default"].createElement(components_1.View, { className: 'page' },
            react_1["default"].createElement(doc_header_1["default"], { title: 'TabBar \u6807\u7B7E\u680F' }),
            react_1["default"].createElement(components_1.View, { className: 'doc-body' },
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u6587\u672C\u6807\u7B7E\u680F"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content no-padding' },
                        react_1["default"].createElement(taro_ui_1.AtTabBar, { tabList: tabList1, onClick: this.handleClick.bind(this, 1), current: current1 }))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u56FE\u6807\u6587\u672C\u6807\u7B7E\u680F"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content no-padding' },
                        react_1["default"].createElement(taro_ui_1.AtTabBar, { tabList: tabList2, onClick: this.handleClick.bind(this, 2), current: current2 }))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u81EA\u5B9A\u4E49\u56FE\u6807\u989C\u8272\u3001\u5B57\u4F53\u989C\u8272\u3001\u80CC\u666F\u989C\u8272"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content no-padding' },
                        react_1["default"].createElement(taro_ui_1.AtTabBar, { backgroundColor: '#FAFBFC', color: '#ea6bb8', selectedColor: '#e64340', tabList: tabList2, onClick: this.handleClick.bind(this, 3), current: current3 }))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u56FE\u7247icon"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content no-padding', style: 'padding-bottom: 24px;' },
                        react_1["default"].createElement(taro_ui_1.AtTabBar, { tabList: tabList3, onClick: this.handleClick.bind(this, 5), current: current5 }))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u56FA\u5B9A\u5E95\u90E8"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content no-padding', style: 'padding-bottom: 24px;' },
                        react_1["default"].createElement(taro_ui_1.AtTabBar, { fixed: true, tabList: tabList2, onClick: this.handleClick.bind(this, 4), current: current4 }))))));
    };
    return Index;
}(react_1["default"].Component));
exports["default"] = Index;
//# sourceMappingURL=index.js.map