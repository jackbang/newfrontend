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
var LoadMorePage = /** @class */ (function (_super) {
    __extends(LoadMorePage, _super);
    function LoadMorePage(props) {
        var _this = _super.call(this, props) || this;
        _this.config = {
            navigationBarTitleText: 'Taro UI'
        };
        _this.state = {
            status: 'more'
        };
        return _this;
    }
    LoadMorePage.prototype.handleClick = function () {
        var _this = this;
        this.setState({
            status: 'loading'
        });
        setTimeout(function () {
            _this.setState({
                status: 'noMore'
            });
        }, 2000);
    };
    LoadMorePage.prototype.render = function () {
        return (react_1["default"].createElement(components_1.View, { className: 'page' },
            react_1["default"].createElement(doc_header_1["default"], { title: 'LoadMore \u9875\u9762\u63D0\u793A' }),
            react_1["default"].createElement(components_1.View, { className: 'doc-body' },
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u4E00\u822C\u7528\u6CD5"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content no-padding' },
                        react_1["default"].createElement(taro_ui_1.AtLoadMore, { onClick: this.handleClick.bind(this), status: this.state.status }))))));
    };
    return LoadMorePage;
}(react_1["default"].Component));
exports["default"] = LoadMorePage;
//# sourceMappingURL=index.js.map