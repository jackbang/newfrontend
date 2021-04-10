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
var dogaImages = [
    {
        url: 'https://storage.360buyimg.com/mtd/home/111543234387022.jpg'
    },
    {
        url: 'https://storage.360buyimg.com/mtd/home/221543234387016.jpg'
    },
    {
        url: 'https://storage.360buyimg.com/mtd/home/331543234387025.jpg'
    }
];
var Index = /** @class */ (function (_super) {
    __extends(Index, _super);
    function Index(props) {
        var _this = _super.call(this, props) || this;
        _this.config = {
            navigationBarTitleText: 'Taro UI'
        };
        _this.state = {
            files1: Array.from(dogaImages),
            files2: Array.from(dogaImages),
            files3: Array.from(dogaImages),
            files4: dogaImages.concat([
                {
                    url: 'https://storage.360buyimg.com/mtd/home/36549825_887087111478302_5745542532574478336_n1543234831971.jpg'
                }
            ])
        };
        return _this;
    }
    Index.prototype.onChange = function (stateName, files) {
        var _a;
        this.setState((_a = {},
            _a[stateName] = files,
            _a));
    };
    Index.prototype.onFail = function (mes) {
        taro_1["default"].showToast({
            title: "onFail: " + mes,
            icon: 'none'
        });
    };
    Index.prototype.onImageClick = function (index, file) {
        taro_1["default"].showToast({
            title: "onImageClick: " + index + file,
            icon: 'none'
        });
    };
    Index.prototype.render = function () {
        return (react_1["default"].createElement(components_1.View, { className: 'page' },
            react_1["default"].createElement(doc_header_1["default"], { title: 'ImagePicker \u56FE\u7247\u9009\u62E9\u5668' }),
            react_1["default"].createElement(components_1.View, { className: 'doc-body' },
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u57FA\u7840\u7528\u6CD5"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content no-padding' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(taro_ui_1.AtImagePicker, { files: this.state.files1, onChange: this.onChange.bind(this, 'files1') })))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u591A\u9009\u56FE\u7247"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content no-padding' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(taro_ui_1.AtImagePicker, { multiple: true, files: this.state.files2, onChange: this.onChange.bind(this, 'files2'), onFail: this.onFail.bind(this), onImageClick: this.onImageClick.bind(this) })))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u81EA\u5B9A\u4E49\u6BCF\u884C\u6570\u91CF"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content no-padding' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(taro_ui_1.AtImagePicker, { multiple: true, length: 3, files: this.state.files3, onChange: this.onChange.bind(this, 'files3') })))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u66F4\u6539\u56FE\u7247\u7684\u7F29\u653E\u6A21\u5F0F"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content no-padding' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(taro_ui_1.AtImagePicker, { mode: 'aspectFit', multiple: true, files: this.state.files4, onChange: this.onChange.bind(this, 'files4') })))))));
    };
    return Index;
}(react_1["default"].Component));
exports["default"] = Index;
//# sourceMappingURL=index.js.map