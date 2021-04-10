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
    Index.prototype.onChange = function (stateName, value) {
        var _a;
        this.setState((_a = {},
            _a[stateName] = value,
            _a));
    };
    Index.prototype.onActionClick = function () {
        taro_1["default"].showToast({
            title: '开始搜索',
            icon: 'success',
            duration: 2000
        });
    };
    Index.prototype.render = function () {
        return (react_1["default"].createElement(components_1.View, { className: 'page' },
            react_1["default"].createElement(doc_header_1["default"], { title: 'SearchBar \u641C\u7D22\u680F' }),
            react_1["default"].createElement(components_1.View, { className: 'doc-body' },
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u57FA\u7840\u7528\u6CD5"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content no-padding' },
                        react_1["default"].createElement(components_1.View, { className: 'component-item' },
                            react_1["default"].createElement(taro_ui_1.AtSearchBar, { value: this.state.value1, onChange: this.onChange.bind(this, 'value1'), onActionClick: this.onActionClick.bind(this) })))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u81EA\u5B9A\u4E49\u6309\u94AE\u6587\u5B57\u548C\u70B9\u51FB\u4E8B\u4EF6"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content no-padding' },
                        react_1["default"].createElement(components_1.View, { className: 'component-item' },
                            react_1["default"].createElement(taro_ui_1.AtSearchBar, { actionName: '\u641C\u4E00\u4E0B', value: this.state.value2, onChange: this.onChange.bind(this, 'value2'), onActionClick: this.onActionClick.bind(this) })))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u59CB\u7EC8\u663E\u793A\u6309\u94AE"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content no-padding' },
                        react_1["default"].createElement(components_1.View, { className: 'component-item' },
                            react_1["default"].createElement(taro_ui_1.AtSearchBar, { placeholder: '\u8BF7\u8F93\u5165ISBN\u53F7', showActionButton: true, value: this.state.value3, onChange: this.onChange.bind(this, 'value3'), onActionClick: this.onActionClick.bind(this) })))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u81EA\u5B9A\u4E49\u8F93\u5165\u6846\u7C7B\u578B"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content no-padding' },
                        react_1["default"].createElement(components_1.View, { className: 'component-item' },
                            react_1["default"].createElement(taro_ui_1.AtSearchBar, { placeholder: '\u8BF7\u8F93\u5165\u6570\u5B57', inputType: 'number', value: this.state.value4, onChange: this.onChange.bind(this, 'value4'), onActionClick: this.onActionClick.bind(this) })))))));
    };
    return Index;
}(react_1["default"].Component));
exports["default"] = Index;
//# sourceMappingURL=index.js.map