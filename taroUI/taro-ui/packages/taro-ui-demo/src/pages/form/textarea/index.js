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
            value1: '',
            value2: '',
            value3: '',
            value4: ''
        };
        return _this;
    }
    Index.prototype.handleChange = function (stateName, value) {
        var _a;
        this.setState((_a = {},
            _a[stateName] = value,
            _a));
    };
    Index.prototype.render = function () {
        return (react_1["default"].createElement(components_1.View, { className: 'page' },
            react_1["default"].createElement(doc_header_1["default"], { title: 'Textarea \u591A\u884C\u6587\u672C\u6846' }),
            react_1["default"].createElement(components_1.View, { className: 'doc-body' },
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u57FA\u7840"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(taro_ui_1.AtTextarea, { value: this.state.value1, onChange: this.handleChange.bind(this, 'value1'), maxLength: 200, placeholder: '\u4F60\u7684\u95EE\u9898\u662F...' })))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u4E0D\u663E\u793A\u5B57\u6570"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(taro_ui_1.AtTextarea, { count: false, value: this.state.value2, onChange: this.handleChange.bind(this, 'value2'), maxLength: 200, placeholder: '\u4F60\u7684\u95EE\u9898\u662F...' })))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u6587\u5B57\u8D85\u51FA\u4ECD\u53EF\u8F93\u5165"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(taro_ui_1.AtTextarea, { textOverflowForbidden: false, value: this.state.value3, onChange: this.handleChange.bind(this, 'value3'), maxLength: 200, placeholder: '\u4F60\u7684\u95EE\u9898\u662F...' })))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u81EA\u5B9A\u4E49\u9AD8\u5EA6"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(taro_ui_1.AtTextarea, { height: '300', value: this.state.value4, onChange: this.handleChange.bind(this, 'value4'), maxLength: 200, placeholder: '\u4F60\u7684\u95EE\u9898\u662F...' })))))));
    };
    return Index;
}(react_1["default"].Component));
exports["default"] = Index;
//# sourceMappingURL=index.js.map