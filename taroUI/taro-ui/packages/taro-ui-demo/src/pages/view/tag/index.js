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
var taro_1 = require("@tarojs/taro");
var doc_header_1 = require("../../components/doc-header");
require("./index.scss");
var TagPage = /** @class */ (function (_super) {
    __extends(TagPage, _super);
    function TagPage(props) {
        var _this = _super.call(this, props) || this;
        _this.config = {
            navigationBarTitleText: 'Taro UI'
        };
        _this.state = {
            tagList: [
                { name: 'tag-1', active: false },
                { name: 'tag-2', active: false },
                { name: 'tag-3', active: true },
                { name: 'tag-4', active: true }
            ],
            hollowTagList: [
                { name: '标签1', active: false },
                { name: '标签2', active: false },
                { name: '标签3', active: true },
                { name: '标签4', active: true }
            ],
            solidTagList: [
                { name: '标签1', active: false },
                { name: '标签2', active: false },
                { name: '标签3', active: true },
                { name: '标签4', active: true }
            ],
            hollowTagList2: [
                { name: '标签1', active: false },
                { name: '标签2', active: false },
                { name: '标签3', active: true },
                { name: '标签4', active: true }
            ],
            solidTagList2: [
                { name: '标签1', active: false },
                { name: '标签2', active: false },
                { name: '标签3', active: true },
                { name: '标签4', active: true }
            ]
        };
        return _this;
    }
    TagPage.prototype.onClick = function (data) {
        var tagList = this.state.tagList;
        var findIndex = tagList.findIndex(function (item) { return item.name === data.name; });
        var active = !tagList[findIndex].active;
        var content = "\u60A8\u70B9\u51FB\u7684 tag \u6807\u7B7E\u540D\u662F\uFF1A" + data.name + "\uFF0C\u70B9\u51FB\u524D\u662F\u5426\u9009\u4E2D\uFF1A" + data.active + "\uFF0C\u70B9\u51FB\u540E\uFF1A" + active;
        tagList[findIndex].active = active;
        this.setState({ tagList: tagList });
        if (taro_1["default"].getEnv() === taro_1["default"].ENV_TYPE.WEB) {
            alert(content);
        }
        else {
            taro_1["default"].showModal({ content: content, showCancel: false });
        }
    };
    TagPage.prototype.handleHollowClick = function (data) {
        var hollowTagList = this.state.hollowTagList;
        var findIndex = hollowTagList.findIndex(function (item) { return item.name === data.name; });
        hollowTagList[findIndex].active = !hollowTagList[findIndex].active;
        this.setState({ hollowTagList: hollowTagList });
    };
    TagPage.prototype.handleSolidClick = function (data) {
        var solidTagList = this.state.solidTagList;
        var findIndex = solidTagList.findIndex(function (item) { return item.name === data.name; });
        solidTagList[findIndex].active = !solidTagList[findIndex].active;
        this.setState({ solidTagList: solidTagList });
    };
    TagPage.prototype.handleHollowSmallClick = function (data) {
        var hollowTagList2 = this.state.hollowTagList2;
        var findIndex = hollowTagList2.findIndex(function (item) { return item.name === data.name; });
        hollowTagList2[findIndex].active = !hollowTagList2[findIndex].active;
        this.setState({ hollowTagList2: hollowTagList2 });
    };
    TagPage.prototype.handleSolidSmallClick = function (data) {
        var solidTagList2 = this.state.solidTagList2;
        var findIndex = solidTagList2.findIndex(function (item) { return item.name === data.name; });
        solidTagList2[findIndex].active = !solidTagList2[findIndex].active;
        this.setState({ solidTagList2: solidTagList2 });
    };
    TagPage.prototype.render = function () {
        var _this = this;
        return (react_1["default"].createElement(components_1.View, { className: 'page' },
            react_1["default"].createElement(doc_header_1["default"], { title: 'Tag \u6807\u7B7E' }),
            react_1["default"].createElement(components_1.View, { className: 'doc-body' },
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u7A7A\u5FC3\u6807\u7B7E"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' }, this.state.hollowTagList.map(function (item, index) { return (react_1["default"].createElement(components_1.View, { className: 'subitem', key: "at-tag-" + index },
                            react_1["default"].createElement(taro_ui_1.AtTag, { name: item.name, active: item.active, circle: index % 2 === 0, onClick: _this.handleHollowClick.bind(_this) }, "\u6807\u7B7E"))); })))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u5B9E\u5FC3\u6807\u7B7E"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' }, this.state.solidTagList.map(function (item, index) { return (react_1["default"].createElement(components_1.View, { className: 'subitem', key: "at-tag-" + index },
                            react_1["default"].createElement(taro_ui_1.AtTag, { type: 'primary', name: item.name, active: item.active, circle: index % 2 === 0, onClick: _this.handleSolidClick.bind(_this) }, "\u6807\u7B7E"))); })))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u70B9\u51FB\u4E8B\u4EF6"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' }, this.state.tagList.map(function (item, index) { return (react_1["default"].createElement(components_1.View, { className: 'subitem', key: "at-tag-" + index },
                            react_1["default"].createElement(taro_ui_1.AtTag, { name: item.name, type: 'primary', active: item.active, circle: index % 2 === 0, onClick: _this.onClick.bind(_this) },
                                "tag-",
                                index + 1))); })))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u4E0D\u53EF\u70B9\u51FB\u6001"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(components_1.View, { className: 'subitem' },
                                react_1["default"].createElement(taro_ui_1.AtTag, { type: 'primary', circle: true, disabled: true }, "\u6807\u7B7E")),
                            react_1["default"].createElement(components_1.View, { className: 'subitem' },
                                react_1["default"].createElement(taro_ui_1.AtTag, { type: 'primary', disabled: true }, "\u6807\u7B7E"))))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u7A7A\u5FC3\u6807\u7B7E\uFF08\u5C0F\uFF09"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' }, this.state.hollowTagList2.map(function (item, index) { return (react_1["default"].createElement(components_1.View, { className: 'subitem', key: "at-tag-" + index },
                            react_1["default"].createElement(taro_ui_1.AtTag, { size: 'small', name: item.name, active: item.active, circle: index % 2 === 0, onClick: _this.handleHollowSmallClick.bind(_this) }, "\u6807\u7B7E"))); })))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u5B9E\u5FC3\u6807\u7B7E\uFF08\u5C0F\uFF09"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' }, this.state.solidTagList2.map(function (item, index) { return (react_1["default"].createElement(components_1.View, { className: 'subitem', key: "at-tag-" + index },
                            react_1["default"].createElement(taro_ui_1.AtTag, { size: 'small', type: 'primary', name: item.name, active: item.active, circle: index % 2 === 0, onClick: _this.handleSolidSmallClick.bind(_this) }, "\u6807\u7B7E"))); })))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u4E0D\u53EF\u70B9\u51FB\u6001\uFF08\u5C0F\uFF09"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(components_1.View, { className: 'subitem' },
                                react_1["default"].createElement(taro_ui_1.AtTag, { size: 'small', type: 'primary', circle: true, disabled: true }, "\u6807\u7B7E")),
                            react_1["default"].createElement(components_1.View, { className: 'subitem' },
                                react_1["default"].createElement(taro_ui_1.AtTag, { size: 'small', type: 'primary', disabled: true }, "\u6807\u7B7E"))))))));
    };
    return TagPage;
}(react_1["default"].Component));
exports["default"] = TagPage;
//# sourceMappingURL=index.js.map