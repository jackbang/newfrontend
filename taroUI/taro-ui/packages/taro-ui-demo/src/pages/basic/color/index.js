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
var BasicColor = /** @class */ (function (_super) {
    __extends(BasicColor, _super);
    function BasicColor(props) {
        var _this = _super.call(this, props) || this;
        _this.config = {
            navigationBarTitleText: 'Taro UI'
        };
        _this.state = {
            colorData: [
                {
                    type: '主色',
                    data: [
                        {
                            name: '浅蓝色',
                            hex: '#78A4FA'
                        },
                        {
                            name: '品牌蓝',
                            hex: '#6190E8'
                        },
                        {
                            name: '深蓝色',
                            hex: '#346FC2'
                        }
                    ]
                },
                {
                    type: '辅助色',
                    data: [
                        {
                            name: '蓝色 - Info',
                            hex: '#78A4FA'
                        },
                        {
                            name: '绿色 - Positive',
                            hex: '#13CE66'
                        },
                        {
                            name: '红色 - Negative',
                            hex: '#FF4949'
                        },
                        {
                            name: '黄色 - Warning',
                            hex: '#FFC82C'
                        }
                    ]
                },
                {
                    type: '中性色',
                    data: [
                        {
                            name: '黑色 0',
                            hex: '#333333'
                        },
                        {
                            name: '黑色 1',
                            hex: '#7F7F7F'
                        },
                        {
                            name: '黑色 2',
                            hex: '#B2B2B2'
                        },
                        {
                            name: '灰色 0',
                            hex: '#333333'
                        },
                        {
                            name: '灰色 1',
                            hex: '#666666'
                        },
                        {
                            name: '灰色 2',
                            hex: '#999999'
                        },
                        {
                            name: '灰色 3',
                            hex: '#CCCCCC'
                        },
                        {
                            name: '灰色 4',
                            hex: '#E5E5E5'
                        },
                        {
                            name: '灰色 5',
                            hex: '#F0F0F0'
                        },
                        {
                            name: '灰色 6',
                            hex: '#F7F7F7'
                        }
                    ]
                },
                {
                    type: '其他色',
                    data: [
                        {
                            name: '边框可选色',
                            hex: '#C5D9E8'
                        },
                        {
                            name: '背景色 0',
                            hex: '#ECF5FD'
                        },
                        {
                            name: '背景色 1',
                            hex: '#FAFBFC'
                        }
                    ]
                }
            ]
        };
        return _this;
    }
    BasicColor.prototype.render = function () {
        var colorData = this.state.colorData;
        return (react_1["default"].createElement(components_1.View, { className: 'page' },
            react_1["default"].createElement(doc_header_1["default"], { title: 'Color \u989C\u8272' }),
            react_1["default"].createElement(components_1.View, { className: 'doc-body' }, colorData.map(function (item) { return (react_1["default"].createElement(components_1.View, { className: 'panel', key: item.type },
                react_1["default"].createElement(components_1.View, { className: 'panel__title' }, item.type),
                react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                    react_1["default"].createElement(components_1.View, { className: 'color-list' }, item.data.map(function (color, index) { return (react_1["default"].createElement(components_1.View, { className: 'color-item', key: "color-" + color.hex + "-" + index },
                        react_1["default"].createElement(components_1.View, { className: 'color-item__circle', style: "background: " + color.hex },
                            react_1["default"].createElement(components_1.View, { className: 'inner-circle-1' }),
                            react_1["default"].createElement(components_1.View, { className: 'inner-circle-2', style: "border-color: " + color.hex })),
                        react_1["default"].createElement(components_1.View, { className: 'color-item__info' },
                            react_1["default"].createElement(components_1.Text, { className: 'name' }, color.name),
                            react_1["default"].createElement(components_1.Text, { className: 'hex', selectable: true }, color.hex)))); }))))); }))));
    };
    return BasicColor;
}(react_1["default"].Component));
exports["default"] = BasicColor;
//# sourceMappingURL=index.js.map