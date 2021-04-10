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
var mock_data_1 = require("./mock-data");
require("./index.scss");
var Index = /** @class */ (function (_super) {
    __extends(Index, _super);
    function Index(props) {
        var _this = _super.call(this, props) || this;
        _this.config = {
            navigationBarTitleText: 'Taro UI'
        };
        _this.state = {
            value: ''
        };
        return _this;
    }
    // public componentDidMount(): void {
    //   console.log(this.scrollIntoView)
    //   // this.scrollIntoView && this.scrollIntoView('top', 0)
    // }
    Index.prototype.scrollIntoView = function (key) {
        taro_1["default"].showToast({
            title: "scrollIntoView: " + key,
            icon: 'none'
        });
    };
    Index.prototype.onClick = function (item) {
        taro_1["default"].showToast({
            title: "onClick: " + item,
            icon: 'none'
        });
    };
    Index.prototype.handleActionClick = function () {
        if (!this.state.value) {
            return;
        }
        this.setState({
            value: ''
        });
        this.scrollIntoView && this.scrollIntoView(this.state.value.toUpperCase());
    };
    Index.prototype.handleChange = function (value) {
        this.setState({
            value: value
        });
    };
    Index.prototype.render = function () {
        var _this = this;
        return (react_1["default"].createElement(components_1.View, { className: 'page', style: 'height: 100vh;' },
            react_1["default"].createElement(components_1.View, { style: 'height: 100%;' },
                react_1["default"].createElement(taro_ui_1.AtIndexes, { list: mock_data_1["default"], topKey: 'Top', onClick: this.onClick.bind(this), onScrollIntoView: function (fn) {
                        _this.scrollIntoView = fn;
                    } },
                    react_1["default"].createElement(components_1.View, { className: 'custom-area' },
                        "\u7528\u6237\u81EA\u5B9A\u4E49\u5185\u5BB9",
                        react_1["default"].createElement(taro_ui_1.AtSearchBar, { value: this.state.value, onChange: this.handleChange.bind(this), placeholder: '\u8DF3\u8F6C\u5230\u6307\u5B9AKey', onActionClick: this.handleActionClick.bind(this) }))))));
    };
    return Index;
}(react_1["default"].Component));
exports["default"] = Index;
//# sourceMappingURL=index.js.map