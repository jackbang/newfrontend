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
            radioValue1: 'option1',
            radioValue2: 'option1',
            radioValue3: 'option3',
            radioOptions1: [
                { label: '单选项一', value: 'option1' },
                { label: '单选项二', value: 'option2' },
                { label: '单选项三', value: 'option3' }
            ],
            radioOptions2: [
                { label: '单选项一', value: 'option1', desc: '单选项描述一' },
                { label: '单选项二', value: 'option2', desc: '单选项描述二' },
                { label: '单选项三', value: 'option3', desc: '单选项描述三' }
            ],
            radioOptions3: [
                { label: '单选项一', value: 'option1', desc: '单选项描述' },
                { label: '单选项二', value: 'option2' },
                {
                    label: '单选项三禁用',
                    value: 'option3',
                    desc: '单选项描述',
                    disabled: true
                }
            ]
        };
        return _this;
    }
    Index.prototype.handleRadioChange = function (value) {
        this.setState({
            radioValue1: value
        });
    };
    Index.prototype.handleRadioChangeScnd = function (value) {
        this.setState({
            radioValue2: value
        });
    };
    Index.prototype.handleRadioChangeThd = function (value) {
        this.setState({
            radioValue3: value
        });
    };
    Index.prototype.render = function () {
        return (react_1["default"].createElement(components_1.View, { className: 'page' },
            react_1["default"].createElement(doc_header_1["default"], { title: 'Radio \u5355\u9009\u6846' }),
            react_1["default"].createElement(components_1.View, { className: 'doc-body' },
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u57FA\u7840\u7528\u6CD5"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content no-padding' },
                        react_1["default"].createElement(components_1.View, { className: 'radio-container' },
                            react_1["default"].createElement(taro_ui_1.AtRadio, { options: this.state.radioOptions1, value: this.state.radioValue1, onClick: this.handleRadioChange.bind(this) })))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u542B\u6709\u5355\u9879\u63CF\u8FF0"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content no-padding' },
                        react_1["default"].createElement(components_1.View, { className: 'radio-container' },
                            react_1["default"].createElement(taro_ui_1.AtRadio, { options: this.state.radioOptions2, value: this.state.radioValue2, onClick: this.handleRadioChangeScnd.bind(this) })))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u5355\u9879\u7981\u7528"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content no-padding' },
                        react_1["default"].createElement(components_1.View, { className: 'radio-container' },
                            react_1["default"].createElement(taro_ui_1.AtRadio, { options: this.state.radioOptions3, value: this.state.radioValue3, onClick: this.handleRadioChangeThd.bind(this) })))))));
    };
    return Index;
}(react_1["default"].Component));
exports["default"] = Index;
//# sourceMappingURL=index.js.map