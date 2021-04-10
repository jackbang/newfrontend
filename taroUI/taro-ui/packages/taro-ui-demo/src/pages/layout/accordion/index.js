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
var CardPage = /** @class */ (function (_super) {
    __extends(CardPage, _super);
    function CardPage(props) {
        var _this = _super.call(this, props) || this;
        _this.config = {
            navigationBarTitleText: 'Taro UI'
        };
        _this.state = {
            value1: false,
            value2: true,
            value3: false,
            value4: false
        };
        return _this;
    }
    CardPage.prototype.onClick = function (stateName, value) {
        var _a;
        this.setState((_a = {},
            _a[stateName] = value,
            _a));
    };
    CardPage.prototype.render = function () {
        var _a = this.state, value1 = _a.value1, value2 = _a.value2, value3 = _a.value3, value4 = _a.value4;
        return (react_1["default"].createElement(components_1.View, { className: 'page' },
            react_1["default"].createElement(doc_header_1["default"], { title: 'Accordion \u624B\u98CE\u7434' }),
            react_1["default"].createElement(components_1.View, { className: 'doc-body' },
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u57FA\u7840\u7528\u6CD5"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content no-padding' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(taro_ui_1.AtAccordion, { onClick: this.onClick.bind(this, 'value1'), title: '\u6807\u9898\u4E00', open: value1 },
                                react_1["default"].createElement(taro_ui_1.AtList, { hasBorder: false },
                                    react_1["default"].createElement(taro_ui_1.AtListItem, { title: '\u6807\u9898\u6587\u5B57', thumb: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png' }),
                                    react_1["default"].createElement(taro_ui_1.AtListItem, { title: '\u6807\u9898\u6587\u5B57', note: '\u63CF\u8FF0\u4FE1\u606F', thumb: 'http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png' }))),
                            react_1["default"].createElement(taro_ui_1.AtAccordion, { open: value2, title: '\u9ED8\u8BA4\u5F00\u542F', onClick: this.onClick.bind(this, 'value2') },
                                react_1["default"].createElement(taro_ui_1.AtList, { hasBorder: false },
                                    react_1["default"].createElement(taro_ui_1.AtListItem, { title: '\u6807\u9898\u6587\u5B57', thumb: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png' }),
                                    react_1["default"].createElement(taro_ui_1.AtListItem, { title: '\u6807\u9898\u6587\u5B57', note: '\u63CF\u8FF0\u4FE1\u606F', thumb: 'http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png' }),
                                    react_1["default"].createElement(taro_ui_1.AtListItem, { title: '\u6807\u9898\u6587\u5B57', note: '\u63CF\u8FF0\u4FE1\u606F', thumb: 'http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png' })))))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u914D\u7F6E\u56FE\u6807"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content no-padding' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(taro_ui_1.AtAccordion, { title: '\u6807\u9898\u4E09', open: value4, icon: { value: 'tags', color: '#77a1fd' }, onClick: this.onClick.bind(this, 'value3') },
                                react_1["default"].createElement(taro_ui_1.AtList, { hasBorder: false },
                                    react_1["default"].createElement(taro_ui_1.AtListItem, { title: '\u6807\u9898\u6587\u5B57', thumb: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png' }),
                                    react_1["default"].createElement(taro_ui_1.AtListItem, { title: '\u6807\u9898\u6587\u5B57', note: '\u63CF\u8FF0\u4FE1\u606F', thumb: 'http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png' })))))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u5305\u542B\u63CF\u8FF0\u4FE1\u606F"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content no-padding' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(taro_ui_1.AtAccordion, { title: '\u6807\u9898\u4E09', note: '\u63CF\u8FF0\u4FE1\u606F', open: value3, icon: { value: 'tags', color: '#77a1fd' }, onClick: this.onClick.bind(this, 'value3') },
                                react_1["default"].createElement(taro_ui_1.AtList, { hasBorder: false },
                                    react_1["default"].createElement(taro_ui_1.AtListItem, { title: '\u6807\u9898\u6587\u5B57', thumb: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png' }),
                                    react_1["default"].createElement(taro_ui_1.AtListItem, { title: '\u6807\u9898\u6587\u5B57', note: '\u63CF\u8FF0\u4FE1\u606F', thumb: 'http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png' }),
                                    react_1["default"].createElement(taro_ui_1.AtListItem, { title: '\u6807\u9898\u6587\u5B57', note: '\u63CF\u8FF0\u4FE1\u606F', thumb: 'http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png' })))))))));
    };
    return CardPage;
}(react_1["default"].Component));
exports["default"] = CardPage;
//# sourceMappingURL=index.js.map