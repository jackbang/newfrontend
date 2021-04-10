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
            number1: 1,
            number2: 1,
            number3: 1,
            number4: 1,
            number5: 1,
            number6: 1
        };
        return _this;
    }
    Index.prototype.handleNumberChange = function (stateName, value, e) {
        var _a;
        this.setState((_a = {},
            _a[stateName] = value,
            _a));
        /* eslint-disable-next-line no-console */
        console.log('Event:', e);
    };
    Index.prototype.render = function () {
        return (react_1["default"].createElement(components_1.View, { className: 'page' },
            react_1["default"].createElement(doc_header_1["default"], { title: 'Input Number \u6570\u5B57\u8F93\u5165\u6846' }),
            react_1["default"].createElement(components_1.View, { className: 'doc-body' },
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u57FA\u7840\u7528\u6CD5"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(components_1.View, { className: 'example-item__desc' }, "min=0, max=10, step=1"),
                            react_1["default"].createElement(taro_ui_1.AtInputNumber, { min: 0, max: 10, step: 1, value: this.state.number1, onChange: this.handleNumberChange.bind(this, 'number1') })))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u5C0F\u6570"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(components_1.View, { className: 'example-item__desc' }, "min=0, max=10, step=0.1"),
                            react_1["default"].createElement(taro_ui_1.AtInputNumber, { type: 'digit', min: 0, max: 10, step: 0.1, value: this.state.number2, onChange: this.handleNumberChange.bind(this, 'number2') })))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u7981\u7528\u72B6\u6001"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(taro_ui_1.AtInputNumber, { disabled: true, min: 0, max: 10, step: 1, value: this.state.number3, onChange: this.handleNumberChange.bind(this, 'number3') })))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u7981\u7528\u8F93\u5165\u72B6\u6001"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(taro_ui_1.AtInputNumber, { disabledInput: true, min: 0, max: 10, step: 1, value: this.state.number6, onChange: this.handleNumberChange.bind(this, 'number6') })))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u81EA\u5B9A\u4E49\u5BBD\u5EA6"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(taro_ui_1.AtInputNumber, { width: 200, min: 0, max: 10, step: 1, value: this.state.number4, onChange: this.handleNumberChange.bind(this, 'number4') })))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u5927\u5C3A\u5BF8"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(taro_ui_1.AtInputNumber, { size: 'large', min: 0, max: 10, step: 1, value: this.state.number5, onChange: this.handleNumberChange.bind(this, 'number5') })))))));
    };
    return Index;
}(react_1["default"].Component));
exports["default"] = Index;
//# sourceMappingURL=index.js.map