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
var CardPage = /** @class */ (function (_super) {
    __extends(CardPage, _super);
    function CardPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.config = {
            navigationBarTitleText: 'Taro UI'
        };
        _this.handleClick = function () {
            taro_1["default"].showToast({
                title: 'Card handleClick',
                icon: 'none'
            });
        };
        return _this;
    }
    CardPage.prototype.render = function () {
        return (react_1["default"].createElement(components_1.View, { className: 'page' },
            react_1["default"].createElement(doc_header_1["default"], { title: 'Card \u5361\u7247' }),
            react_1["default"].createElement(components_1.View, { className: 'doc-body' },
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u57FA\u7840\u5361\u7247"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content no-padding' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(taro_ui_1.AtCard, { title: '\u8FD9\u662F\u4E2A\u6807\u9898', onClick: this.handleClick }, "\u8FD9\u4E5F\u662F\u5185\u5BB9\u533A \u53EF\u4EE5\u968F\u610F\u5B9A\u4E49\u529F\u80FD")))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u5E26\u7F29\u7565\u56FE\u7684\u5361\u7247"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content no-padding' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(taro_ui_1.AtCard, { title: '\u8FD9\u662F\u4E2A\u6807\u9898', thumb: 'http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png' }, "\u8FD9\u4E5F\u662F\u5185\u5BB9\u533A \u53EF\u4EE5\u968F\u610F\u5B9A\u4E49\u529F\u80FD")))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u5E26\u56FE\u6807\u7684\u5361\u7247"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content no-padding' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(taro_ui_1.AtCard, { title: '\u8FD9\u662F\u4E2A\u6807\u9898', icon: { value: 'tags', color: '#77a1fd' } }, "\u8FD9\u4E5F\u662F\u5185\u5BB9\u533A \u53EF\u4EE5\u968F\u610F\u5B9A\u4E49\u529F\u80FD")))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u81EA\u5B9A\u4E49\u56FE\u6807\u7684\u5361\u7247"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content no-padding' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(taro_ui_1.AtCard, { title: '\u8FD9\u662F\u4E2A\u6807\u9898', renderIcon: react_1["default"].createElement(taro_ui_1.AtIcon, { prefixClass: 'at-icon', value: 'image', size: '16', color: '#6190e8', customStyle: { marginRight: '8px' } }) }, "\u8FD9\u4E5F\u662F\u5185\u5BB9\u533A \u53EF\u4EE5\u968F\u610F\u5B9A\u4E49\u529F\u80FD")))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u5E26\u5C0F\u4FE1\u606F\u7684\u5361\u7247"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content no-padding' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(taro_ui_1.AtCard, { note: '\u5C0FTips', title: '\u8FD9\u662F\u4E2A\u6807\u9898', thumb: 'http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png' }, "\u8FD9\u4E5F\u662F\u5185\u5BB9\u533A \u53EF\u4EE5\u968F\u610F\u5B9A\u4E49\u529F\u80FD")))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u81EA\u5B9A\u4E49\u989D\u5916\u4FE1\u606F\u6837\u5F0F\u7684\u5361\u7247"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content no-padding' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(taro_ui_1.AtCard, { note: '\u5C0FTips', extra: '2019/01/23 22:33:33', extraStyle: {
                                    fontSize: '12px',
                                    maxWidth: '200px',
                                    color: '#6190e8'
                                }, title: '\u8FD9\u662F\u4E2A\u6807\u9898', thumb: 'http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png' }, "\u8FD9\u4E5F\u662F\u5185\u5BB9\u533A \u53EF\u4EE5\u968F\u610F\u5B9A\u4E49\u529F\u80FD")))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u901A\u680F\u5361\u7247"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content no-padding' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(taro_ui_1.AtCard, { isFull: true, note: '\u5C0FTips', extra: '\u989D\u5916\u4FE1\u606F', title: '\u8FD9\u662F\u4E2A\u6807\u9898', thumb: 'http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png' }, "\u8FD9\u4E5F\u662F\u5185\u5BB9\u533A \u53EF\u4EE5\u968F\u610F\u5B9A\u4E49\u529F\u80FD \u8FD9\u4E5F\u662F\u5185\u5BB9\u533A \u53EF\u4EE5\u968F\u610F\u5B9A\u4E49\u529F\u80FD \u8FD9\u4E5F\u662F\u5185\u5BB9\u533A \u53EF\u4EE5\u968F\u610F\u5B9A\u4E49\u529F\u80FD")))))));
    };
    return CardPage;
}(react_1["default"].Component));
exports["default"] = CardPage;
//# sourceMappingURL=index.js.map