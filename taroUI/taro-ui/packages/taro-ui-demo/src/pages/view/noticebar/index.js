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
var NoticebarPage = /** @class */ (function (_super) {
    __extends(NoticebarPage, _super);
    function NoticebarPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.config = {
            navigationBarTitleText: 'Taro UI'
        };
        return _this;
    }
    NoticebarPage.prototype.onGotoMore = function () {
        if (taro_1["default"].getEnv() === taro_1["default"].ENV_TYPE.WEB) {
            alert('您点击了更多!');
            return;
        }
        taro_1["default"].showModal({
            content: '点击了更多!',
            cancelText: '取消'
        });
    };
    NoticebarPage.prototype.render = function () {
        return (react_1["default"].createElement(components_1.View, { className: 'page' },
            react_1["default"].createElement(doc_header_1["default"], { title: 'NoticeBar \u901A\u544A\u680F' }),
            react_1["default"].createElement(components_1.View, { className: 'doc-body' },
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u6587\u5B57"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'bar-item' },
                            react_1["default"].createElement(taro_ui_1.AtNoticebar, { single: true }, "[\u5355\u884C] \u8FD9\u662FNoticeBar\u901A\u544A\u680F\uFF0C\u8FD9\u662FNoticeBar\u901A\u544A\u680F\uFF0C\u8FD9\u662FNoticeBar\u901A\u544A\u680F")),
                        react_1["default"].createElement(components_1.View, { className: 'bar-item' },
                            react_1["default"].createElement(taro_ui_1.AtNoticebar, null, "[\u591A\u884C] \u8FD9\u662FNoticeBar\u901A\u544A\u680F\uFF0C\u8FD9\u662FNoticeBar\u901A\u544A\u680F\uFF0C\u8FD9\u662FNoticeBar\u901A\u544A\u680F\uFF0C\u8FD9\u662FNoticeBar\u901A\u544A\u680F\uFF0C\u8FD9\u662FNoticeBar\u901A\u544A\u680F")))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u8DD1\u9A6C\u706F"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'bar-item' },
                            react_1["default"].createElement(taro_ui_1.AtNoticebar, { marquee: true }, "[\u7EAF\u6587\u5B57]\u8FD9\u662FNoticeBar\u901A\u544A\u680F\uFF0C\u8FD9\u662FNoticeBar\u901A\u544A\u680F\uFF0C\u8FD9\u662FNoticeBar\u901A\u544A\u680F[\u7ED3\u675F]")),
                        react_1["default"].createElement(components_1.View, { className: 'bar-item' },
                            react_1["default"].createElement(taro_ui_1.AtNoticebar, { marquee: true, icon: 'volume-plus' }, "[\u5E26icon]\u8FD9\u662FNoticeBar\u901A\u544A\u680F\uFF0C\u8FD9\u662FNoticeBar\u901A\u544A\u680F\uFF0C\u8FD9\u662FNoticeBar\u901A\u544A\u680F\u8FD9\u662FNoticeBar\u901A\u544A\u680F\uFF0C\u8FD9\u662FNoticeBar\u901A\u544A\u680F\uFF0C\u8FD9\u662FNoticeBar\u901A\u544A\u680F[\u7ED3\u675F]")),
                        react_1["default"].createElement(components_1.View, { className: 'bar-item' },
                            react_1["default"].createElement(taro_ui_1.AtNoticebar, { marquee: true }, "[\u8D85\u957F\u6587\u672C]\u8FD9\u662FNoticeBar\u901A\u544A\u680F\uFF0C\u8FD9\u662FNoticeBar\u901A\u544A\u680F\uFF0C\u8FD9\u662FNoticeBar\u901A\u544A\u680F\u8FD9\u662FNoticeBar\u901A\u544A\u680F\uFF0C\u8FD9\u662FNoticeBar\u901A\u544A\u680F\uFF0C\u8FD9\u662FNoticeBar\u901A\u544A\u680F\u8FD9\u662FNoticeBar\u901A\u544A\u680F\uFF0C\u8FD9\u662FNoticeBar\u901A\u544A\u680F\uFF0C\u8FD9\u662FNoticeBar\u901A\u544A\u680F\u8FD9\u662FNoticeBar\u901A\u544A\u680F\uFF0C\u8FD9\u662FNoticeBar\u901A\u544A\u680F\uFF0C\u8FD9\u662FNoticeBar\u901A\u544A\u680F\u8FD9\u662FNoticeBar\u901A\u544A\u680F\uFF0C\u8FD9\u662FNoticeBar\u901A\u544A\u680F\uFF0C\u8FD9\u662FNoticeBar\u901A\u544A\u680F[\u7ED3\u675F]")))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u56FE\u6807"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'bar-item' },
                            react_1["default"].createElement(taro_ui_1.AtNoticebar, { icon: 'volume-plus', single: true }, "[\u5355\u884C] \u8FD9\u662FNoticeBar\u901A\u544A\u680F\uFF0C\u8FD9\u662FNoticeBar\u901A\u544A\u680F\uFF0C\u8FD9\u662FNoticeBar\u901A\u544A\u680F")),
                        react_1["default"].createElement(components_1.View, { className: 'bar-item' },
                            react_1["default"].createElement(taro_ui_1.AtNoticebar, { icon: 'volume-plus' }, "[\u591A\u884C] \u8FD9\u662FNoticeBar\u901A\u544A\u680F\uFF0C\u8FD9\u662FNoticeBar\u901A\u544A\u680F\uFF0C\u8FD9\u662FNoticeBar\u901A\u544A\u680F\uFF0C\u8FD9\u662FNoticeBar\u901A\u544A\u680F\uFF0C\u8FD9\u662FNoticeBar\u901A\u544A\u680F")))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u67E5\u770B\u66F4\u591A"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'bar-item' },
                            react_1["default"].createElement(taro_ui_1.AtNoticebar, { showMore: true, single: true, onGotoMore: this.onGotoMore.bind(this) }, "[\u5355\u884C] \u8FD9\u662FNoticeBar\u901A\u544A\u680F\uFF0C\u8FD9\u662FNoticeBar\u901A\u544A\u680F\uFF0C\u8FD9\u662FNoticeBar\u901A\u544A\u680F")),
                        react_1["default"].createElement(components_1.View, { className: 'bar-item' },
                            react_1["default"].createElement(taro_ui_1.AtNoticebar, { showMore: true, icon: 'volume-plus', single: true, onGotoMore: this.onGotoMore.bind(this) }, "[\u5355\u884C] \u8FD9\u662FNoticeBar\u901A\u544A\u680F\uFF0C\u8FD9\u662FNoticeBar\u901A\u544A\u680F\uFF0C\u8FD9\u662FNoticeBar\u901A\u544A\u680F")),
                        react_1["default"].createElement(components_1.View, { className: 'bar-item' },
                            react_1["default"].createElement(taro_ui_1.AtNoticebar, { showMore: true, moreText: '\u66F4\u591A\u5185\u5BB9', onGotoMore: this.onGotoMore.bind(this) }, "[\u591A\u884C] \u8FD9\u662FNoticeBar\u901A\u544A\u680F\uFF0C\u8FD9\u662FNoticeBar\u901A\u544A\u680F\uFF0C\u8FD9\u662FNoticeBar\u901A\u544A\u680F\uFF0C\u8FD9\u662FNoticeBar\u901A\u544A\u680F\uFF0C\u8FD9\u662FNoticeBar\u901A\u544A\u680F")),
                        react_1["default"].createElement(components_1.View, { className: 'bar-item' },
                            react_1["default"].createElement(taro_ui_1.AtNoticebar, { showMore: true, moreText: '\u66F4\u591A\u5185\u5BB9', icon: 'volume-plus', onGotoMore: this.onGotoMore.bind(this) }, "[\u591A\u884C] \u8FD9\u662FNoticeBar\u901A\u544A\u680F\uFF0C\u8FD9\u662FNoticeBar\u901A\u544A\u680F\uFF0C\u8FD9\u662FNoticeBar\u901A\u544A\u680F\uFF0C\u8FD9\u662FNoticeBar\u901A\u544A\u680F\uFF0C\u8FD9\u662FNoticeBar\u901A\u544A\u680F")))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u5173\u95ED\u6309\u94AE"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'bar-item' },
                            react_1["default"].createElement(taro_ui_1.AtNoticebar, { close: true, single: true }, "[\u5355\u884C] \u8FD9\u662FNoticeBar\u901A\u544A\u680F\uFF0C\u8FD9\u662FNoticeBar\u901A\u544A\u680F\uFF0C\u8FD9\u662FNoticeBar\u901A\u544A\u680F")),
                        react_1["default"].createElement(components_1.View, { className: 'bar-item' },
                            react_1["default"].createElement(taro_ui_1.AtNoticebar, { close: true, icon: 'volume-plus', single: true }, "[\u5355\u884C] \u8FD9\u662FNoticeBar\u901A\u544A\u680F\uFF0C\u8FD9\u662FNoticeBar\u901A\u544A\u680F\uFF0C\u8FD9\u662FNoticeBar\u901A\u544A\u680F")),
                        react_1["default"].createElement(components_1.View, { className: 'bar-item' },
                            react_1["default"].createElement(taro_ui_1.AtNoticebar, { close: true, onGotoMore: this.onGotoMore.bind(this), single: true, showMore: true }, "[\u5355\u884C] \u8FD9\u662FNoticeBar\u901A\u544A\u680F\uFF0C\u8FD9\u662FNoticeBar\u901A\u544A\u680F\uFF0C\u8FD9\u662FNoticeBar\u901A\u544A\u680F")),
                        react_1["default"].createElement(components_1.View, { className: 'bar-item' },
                            react_1["default"].createElement(taro_ui_1.AtNoticebar, { close: true, icon: 'volume-plus', showMore: true, onGotoMore: this.onGotoMore.bind(this), single: true }, "[\u5355\u884C] \u8FD9\u662FNoticeBar\u901A\u544A\u680F\uFF0C\u8FD9\u662FNoticeBar\u901A\u544A\u680F\uFF0C\u8FD9\u662FNoticeBar\u901A\u544A\u680F")),
                        react_1["default"].createElement(components_1.View, { className: 'bar-item' },
                            react_1["default"].createElement(taro_ui_1.AtNoticebar, { close: true }, "[\u591A\u884C] \u8FD9\u662FNoticeBar\u901A\u544A\u680F\uFF0C\u8FD9\u662FNoticeBar\u901A\u544A\u680F\uFF0C\u8FD9\u662FNoticeBar\u901A\u544A\u680F\uFF0C\u8FD9\u662FNoticeBar\u901A\u544A\u680F\uFF0C\u8FD9\u662FNoticeBar\u901A\u544A\u680F")),
                        react_1["default"].createElement(components_1.View, { className: 'bar-item' },
                            react_1["default"].createElement(taro_ui_1.AtNoticebar, { close: true }, "[\u591A\u884C] \u8FD9\u662FNoticeBar\u901A\u544A\u680F\uFF0C\u8FD9\u662FNoticeBar\u901A\u544A\u680F\uFF0C\u8FD9\u662FNoticeBar\u901A\u544A\u680F\uFF0C\u8FD9\u662FNoticeBar\u901A\u544A\u680F\uFF0C\u8FD9\u662FNoticeBar\u901A\u544A\u680F")),
                        react_1["default"].createElement(components_1.View, { className: 'bar-item' },
                            react_1["default"].createElement(taro_ui_1.AtNoticebar, { close: true, icon: 'volume-plus' }, "[\u591A\u884C] \u8FD9\u662FNoticeBar\u901A\u544A\u680F\uFF0C\u8FD9\u662FNoticeBar\u901A\u544A\u680F\uFF0C\u8FD9\u662FNoticeBar\u901A\u544A\u680F\uFF0C\u8FD9\u662FNoticeBar\u901A\u544A\u680F\uFF0C\u8FD9\u662FNoticeBar\u901A\u544A\u680F")))))));
    };
    return NoticebarPage;
}(react_1["default"].Component));
exports["default"] = NoticebarPage;
//# sourceMappingURL=index.js.map