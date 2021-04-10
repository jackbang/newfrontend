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
var PaginationPage = /** @class */ (function (_super) {
    __extends(PaginationPage, _super);
    function PaginationPage(props) {
        var _this = _super.call(this, props) || this;
        _this.config = {
            navigationBarTitleText: 'Taro UI'
        };
        _this.state = {
            list: [],
            current: 1,
            pageSize: 10
        };
        return _this;
    }
    PaginationPage.prototype.onPage = function (data) {
        this.setState({
            current: data.current
        });
        taro_1["default"].showToast({
            title: "Pagination: " + data,
            icon: 'none'
        });
    };
    PaginationPage.prototype.onPageDataChange = function () {
        var _list = new Array(10).fill(1);
        this.setState({
            list: this.state.list.concat(_list)
        });
    };
    PaginationPage.prototype.onCurrentChange = function () {
        this.setState({
            current: 1,
            list: []
        });
    };
    PaginationPage.prototype.render = function () {
        var len = this.state.list.length;
        return (react_1["default"].createElement(components_1.View, { className: 'page' },
            react_1["default"].createElement(doc_header_1["default"], { title: 'Pagination \u5206\u9875\u5668' }),
            react_1["default"].createElement(components_1.View, { className: 'doc-body' },
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u57FA\u7840\u7528\u6CD5"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content no-padding' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(taro_ui_1.AtPagination, { total: 20, pageSize: 10, current: 1 })))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u56FE\u6807\u7C7B\u578B"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content no-padding' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(taro_ui_1.AtPagination, { icon: true, total: 20, pageSize: 10, current: 1 })))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "picker\u5FEB\u901F\u9009\u62E9\u9875\u7801"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content no-padding' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(taro_ui_1.AtPagination, { icon: true, total: 20, pageSize: 10, current: 1 })))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u6539\u53D8\u6570\u636E\u957F\u5EA6"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content no-padding' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(taro_ui_1.AtPagination, { icon: true, total: len, pageSize: this.state.pageSize, current: this.state.current, onPageChange: this.onPage.bind(this) }),
                            react_1["default"].createElement(components_1.View, { className: 'btn-item' },
                                "\u5F53\u524D\u9875\uFF1A",
                                this.state.current,
                                "\uFF0C\u5F53\u524D\u6570\u636E\uFF1A",
                                len,
                                "\u6761\uFF0C\u5206\u9875\u5927\u5C0F\uFF1A",
                                this.state.pageSize),
                            react_1["default"].createElement(components_1.View, { className: 'btn-item' },
                                react_1["default"].createElement(taro_ui_1.AtButton, { type: 'primary', onClick: this.onPageDataChange.bind(this) }, "\u589E\u52A010\u6761\u6570\u636E")),
                            react_1["default"].createElement(components_1.View, { className: 'btn-item' },
                                react_1["default"].createElement(taro_ui_1.AtButton, { onClick: this.onCurrentChange.bind(this) }, "\u91CD\u7F6E"))))))));
    };
    return PaginationPage;
}(react_1["default"].Component));
exports["default"] = PaginationPage;
//# sourceMappingURL=index.js.map