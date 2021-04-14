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
var PageForm = /** @class */ (function (_super) {
    __extends(PageForm, _super);
    function PageForm(props) {
        var _this = _super.call(this, props) || this;
        _this.config = {
            navigationBarTitleText: 'Taro UI'
        };
        _this.state = {
            value1: '',
            value2: '',
            value3: [],
            text: '',
            isOpened: false
        };
        return _this;
    }
    PageForm.prototype.handleChange = function (stateName, value) {
        var _a;
        this.setState((_a = {},
            _a[stateName] = value,
            _a));
    };
    PageForm.prototype.handleSubmit = function () {
        var _a = this.state, value1 = _a.value1, value2 = _a.value2, value3 = _a.value3;
        if (!value1 || !value2) {
            this.setState({
                isOpened: true,
                text: "\u8868\u5355\u5FC5\u586B\u9879\u672A\u586B\u5199\u5B8C\u6574"
            });
        }
        else {
            this.setState({
                isOpened: true,
                text: value3 && value3.length > 0
                    ? value1 + " / " + value2 + " / " + value3.join(',')
                    : value1 + " / " + value2
            });
        }
        this.closeToast();
    };
    PageForm.prototype.closeToast = function () {
        var _this = this;
        setTimeout(function () {
            _this.setState({
                isOpened: false
            });
        }, 2000);
    };
    PageForm.prototype.handleReset = function () {
        this.setState({
            isOpened: true,
            text: "\u8868\u5355\u5DF2\u88AB\u91CD\u7F6E",
            value1: '',
            value2: '',
            value3: []
        });
        this.closeToast();
    };
    PageForm.prototype.render = function () {
        return (react_1["default"].createElement(components_1.View, { className: 'page' },
            react_1["default"].createElement(doc_header_1["default"], { title: 'Form \u8868\u5355' }),
            react_1["default"].createElement(components_1.View, { className: 'doc-body' },
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u8868\u5355\u63D0\u4EA4\u4E0E\u91CD\u7F6E"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content no-padding' },
                        react_1["default"].createElement(components_1.View, { className: 'component-item' },
                            react_1["default"].createElement(taro_ui_1.AtForm, { onSubmit: this.handleSubmit.bind(this), onReset: this.handleReset.bind(this) },
                                react_1["default"].createElement(taro_ui_1.AtInput, { required: true, name: 'value1', title: '\u6587\u672C', type: 'text', placeholder: '\u5355\u884C\u6587\u672C', value: this.state.value1, onChange: this.handleChange.bind(this, 'value1') }),
                                react_1["default"].createElement(taro_ui_1.AtInput, { required: true, name: 'value2', title: '\u5BC6\u7801', type: 'password', placeholder: '\u8BF7\u8F93\u5165\u5BC6\u7801', value: this.state.value2, onChange: this.handleChange.bind(this, 'value2') }),
                                react_1["default"].createElement(taro_ui_1.AtCheckbox, { options: [
                                        { label: 'iPhone X', value: 'iPhone X' },
                                        { label: 'HUAWEI P20', value: 'HUAWEI P20' }
                                    ], selectedList: this.state.value3, onChange: this.handleChange.bind(this, 'value3') }),
                                react_1["default"].createElement(components_1.View, { className: 'component-item__btn-group' },
                                    react_1["default"].createElement(components_1.View, { className: 'component-item__btn-group__btn-item' },
                                        react_1["default"].createElement(taro_ui_1.AtButton, { type: 'primary', formType: 'submit' }, "\u63D0\u4EA4")),
                                    react_1["default"].createElement(components_1.View, { className: 'component-item__btn-group__btn-item' },
                                        react_1["default"].createElement(taro_ui_1.AtButton, { formType: 'reset' }, "\u91CD\u7F6E")))))))),
            react_1["default"].createElement(taro_ui_1.AtToast, { text: this.state.text, isOpened: this.state.isOpened })));
    };
    return PageForm;
}(react_1["default"].Component));
exports["default"] = PageForm;
//# sourceMappingURL=index.js.map