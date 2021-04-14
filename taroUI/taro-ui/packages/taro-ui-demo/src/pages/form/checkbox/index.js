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
            checkedList1: ['list1'],
            checkedList2: ['list1'],
            checkedList3: ['list1', 'list4'],
            checkboxOption1: [
                { value: 'list1', label: 'iPhone X' },
                { value: 'list2', label: 'HUAWEI P20' },
                { value: 'list3', label: 'OPPO Find X' }
            ],
            checkboxOption2: [
                {
                    value: 'list1',
                    label: 'iPhone X',
                    desc: '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。'
                },
                {
                    value: 'list2',
                    label: 'HUAWEI P20',
                    desc: '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。'
                },
                {
                    value: 'list3',
                    label: 'OPPO Find X',
                    desc: '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。'
                }
            ],
            checkboxOption3: [
                {
                    value: 'list1',
                    label: 'iPhone X',
                    desc: '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。'
                },
                { value: 'list2', label: 'HUAWEI P20' },
                {
                    value: 'list3',
                    label: 'OPPO Find X',
                    desc: '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。',
                    disabled: true
                },
                {
                    value: 'list4',
                    label: 'vivo NEX',
                    desc: '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。',
                    disabled: true
                }
            ]
        };
        return _this;
    }
    Index.prototype.handleChange = function (value) {
        this.setState({
            checkedList1: value
        });
    };
    Index.prototype.handleChangeSnd = function (value) {
        this.setState({
            checkedList2: value
        });
    };
    Index.prototype.handleChangeThd = function (value) {
        this.setState({
            checkedList3: value
        });
    };
    Index.prototype.render = function () {
        return (react_1["default"].createElement(components_1.View, { className: 'page' },
            react_1["default"].createElement(doc_header_1["default"], { title: 'Checkbox \u590D\u9009\u6846' }),
            react_1["default"].createElement(components_1.View, { className: 'doc-body' },
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u57FA\u7840\u7528\u6CD5"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content no-padding' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(components_1.View, { className: 'checkbox-container' },
                                react_1["default"].createElement(taro_ui_1.AtCheckbox, { options: this.state.checkboxOption1, selectedList: this.state.checkedList1, onChange: this.handleChange.bind(this) }))))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u542B\u63CF\u8FF0\u4FE1\u606F"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content no-padding' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(components_1.View, { className: 'checkbox-container' },
                                react_1["default"].createElement(taro_ui_1.AtCheckbox, { options: this.state.checkboxOption2, selectedList: this.state.checkedList2, onChange: this.handleChangeSnd.bind(this) }))))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u9009\u9879\u7981\u7528"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content no-padding' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(components_1.View, { className: 'checkbox-container' },
                                react_1["default"].createElement(taro_ui_1.AtCheckbox, { options: this.state.checkboxOption3, selectedList: this.state.checkedList3, onChange: this.handleChangeThd.bind(this) }))))))));
    };
    return Index;
}(react_1["default"].Component));
exports["default"] = Index;
//# sourceMappingURL=index.js.map