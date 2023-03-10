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
var TimelinePage = /** @class */ (function (_super) {
    __extends(TimelinePage, _super);
    function TimelinePage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.config = {
            navigationBarTitleText: 'Taro UI'
        };
        return _this;
    }
    TimelinePage.prototype.render = function () {
        return (react_1["default"].createElement(components_1.View, { className: 'page' },
            react_1["default"].createElement(doc_header_1["default"], { title: 'Timeline \u65F6\u95F4\u8F74' }),
            react_1["default"].createElement(components_1.View, { className: 'doc-body' },
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u57FA\u7840\u7528\u6CD5"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(taro_ui_1.AtTimeline, { items: [
                                    { title: '????????????' },
                                    { title: '?????????' },
                                    { title: '??????' },
                                    { title: '??????' }
                                ] })))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u81EA\u5B9A\u4E49\u989C\u8272"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(taro_ui_1.AtTimeline, { items: [
                                    { title: '????????????' },
                                    { title: '?????????', color: 'green' },
                                    { title: '??????', color: 'red' },
                                    { title: '??????', color: 'yellow' }
                                ] })))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u81EA\u5B9A\u4E49\u56FE\u6807"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(taro_ui_1.AtTimeline, { items: [
                                    { title: '????????????', icon: 'check-circle' },
                                    { title: '?????????', icon: 'clock' },
                                    { title: '??????', icon: 'clock' },
                                    { title: '??????', icon: 'clock' }
                                ] })))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u5E7D\u7075\u8282\u70B9"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(taro_ui_1.AtTimeline, { pending: true, items: [
                                    { title: '????????????' },
                                    { title: '?????????' },
                                    { title: '??????' },
                                    { title: '??????' }
                                ] })))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u4E30\u5BCC\u5185\u5BB9"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(taro_ui_1.AtTimeline, { pending: true, items: [
                                    {
                                        title: '????????????',
                                        content: ['??????8:00'],
                                        icon: 'check-circle'
                                    },
                                    {
                                        title: '?????????',
                                        content: ['??????+??????', '??????????????????'],
                                        icon: 'clock'
                                    },
                                    {
                                        title: '??????',
                                        content: ['????????????', '???PPT', '??????PPT?????????'],
                                        icon: 'clock'
                                    },
                                    { title: '??????', content: ['?????????23:00'], icon: 'clock' }
                                ] })))))));
    };
    return TimelinePage;
}(react_1["default"].Component));
exports["default"] = TimelinePage;
//# sourceMappingURL=index.js.map