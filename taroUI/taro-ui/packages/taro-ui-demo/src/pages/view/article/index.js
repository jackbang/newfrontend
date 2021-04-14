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
var doc_header_1 = require("../../components/doc-header");
require("./index.scss");
var ArticlePage = /** @class */ (function (_super) {
    __extends(ArticlePage, _super);
    function ArticlePage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.config = {
            navigationBarTitleText: 'Article 文章'
        };
        return _this;
    }
    ArticlePage.prototype.render = function () {
        return (react_1["default"].createElement(components_1.View, { className: 'page' },
            react_1["default"].createElement(doc_header_1["default"], { title: 'Article \u6587\u7AE0' }),
            react_1["default"].createElement(components_1.View, { className: 'doc-body' },
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u793A\u4F8B"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content no-padding' },
                        react_1["default"].createElement(components_1.View, { className: 'at-article' },
                            react_1["default"].createElement(components_1.View, { className: 'at-article__h1' }, "\u8FD9\u662F\u4E00\u7EA7\u6807\u9898\u8FD9\u662F\u4E00\u7EA7\u6807\u9898"),
                            react_1["default"].createElement(components_1.View, { className: 'at-article__info' }, "2017-05-07\u00A0\u00A0\u00A0\u8FD9\u662F\u4F5C\u8005"),
                            react_1["default"].createElement(components_1.View, { className: 'at-article__content' },
                                react_1["default"].createElement(components_1.View, { className: 'at-article__section' },
                                    react_1["default"].createElement(components_1.View, { className: 'at-article__h2' }, "\u8FD9\u662F\u4E8C\u7EA7\u6807\u9898"),
                                    react_1["default"].createElement(components_1.View, { className: 'at-article__h3' }, "\u8FD9\u662F\u4E09\u7EA7\u6807\u9898"),
                                    react_1["default"].createElement(components_1.View, { className: 'at-article__p' }, "\u8FD9\u662F\u6587\u672C\u6BB5\u843D\u3002\u8FD9\u662F\u6587\u672C\u6BB5\u843D\u3002\u8FD9\u662F\u6587\u672C\u6BB5\u843D\u3002\u8FD9\u662F\u6587\u672C\u6BB5\u843D\u3002\u8FD9\u662F\u6587\u672C\u6BB5\u843D\u3002\u8FD9\u662F\u6587\u672C\u6BB5\u843D\u3002\u8FD9\u662F\u6587\u672C\u6BB5\u843D\u3002\u8FD9\u662F\u6587\u672C\u6BB5\u843D\u3002\u8FD9\u662F\u6587\u672C\u6BB5\u843D\u30021234567890123456789012345678901234567890 ABCDEFGHIJKLMNOPQRSTUVWXYZ"),
                                    react_1["default"].createElement(components_1.View, { className: 'at-article__p' }, "\u8FD9\u662F\u6587\u672C\u6BB5\u843D\u3002\u8FD9\u662F\u6587\u672C\u6BB5\u843D\u3002"),
                                    react_1["default"].createElement(components_1.Image, { className: 'at-article__img', src: 'http://storage.360buyimg.com/mtd/home/32443566_635798770100444_2113947400891531264_n1533825816008.jpg', mode: 'widthFix' })),
                                react_1["default"].createElement(components_1.View, { className: 'at-article__section' },
                                    react_1["default"].createElement(components_1.View, { className: 'at-article__h2' }, "\u8FD9\u662F\u4E8C\u7EA7\u6807\u9898"),
                                    react_1["default"].createElement(components_1.View, { className: 'at-article__h3' }, "\u8FD9\u662F\u4E09\u7EA7\u6807\u9898"),
                                    react_1["default"].createElement(components_1.View, { className: 'at-article__p' }, "\u8FD9\u662F\u6587\u672C\u6BB5\u843D\u3002\u8FD9\u662F\u6587\u672C\u6BB5\u843D\u3002\u8FD9\u662F\u6587\u672C\u6BB5\u843D\u3002\u8FD9\u662F\u6587\u672C\u6BB5\u843D\u3002\u8FD9\u662F\u6587\u672C\u6BB5\u843D\u3002\u8FD9\u662F\u6587\u672C\u6BB5\u843D\u3002\u8FD9\u662F\u6587\u672C\u6BB5\u843D\u3002\u8FD9\u662F\u6587\u672C\u6BB5\u843D\u3002\u8FD9\u662F\u6587\u672C\u6BB5\u843D\u30021234567890123456789012345678901234567890 ABCDEFGHIJKLMNOPQRSTUVWXYZ"),
                                    react_1["default"].createElement(components_1.Image, { className: 'at-article__img', src: 'https://img30.360buyimg.com/sku/jfs/t19660/324/841553494/117886/ad2742c1/5aab8d20Ne56ae3bf.jpg', mode: 'widthFix' })))))))));
    };
    return ArticlePage;
}(react_1["default"].Component));
exports["default"] = ArticlePage;
//# sourceMappingURL=index.js.map