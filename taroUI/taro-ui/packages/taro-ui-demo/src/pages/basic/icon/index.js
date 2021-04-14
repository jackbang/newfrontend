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
var icons_1 = require("./icons");
require("./index.scss");
var IconPage = /** @class */ (function (_super) {
    __extends(IconPage, _super);
    function IconPage(props) {
        var _this = _super.call(this, props) || this;
        _this.config = {
            navigationBarTitleText: 'Taro UI'
        };
        _this.state = {
            icons: icons_1["default"]
        };
        return _this;
    }
    IconPage.prototype.render = function () {
        var icons = this.state.icons;
        var iconColor = '#999';
        var iconSize = 30;
        return (react_1["default"].createElement(components_1.View, { className: 'page' },
            react_1["default"].createElement(doc_header_1["default"], { title: 'ICON \u56FE\u6807' }),
            react_1["default"].createElement(components_1.View, { className: 'doc-body' },
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u4E3B\u8981"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'icon-list' }, icons.main.map(function (icon, index) { return (react_1["default"].createElement(components_1.View, { className: 'icon-list__item', key: "at-icon-" + index },
                            react_1["default"].createElement(components_1.View, { className: 'icon-list__icon' },
                                react_1["default"].createElement(taro_ui_1.AtIcon, { value: icon, color: iconColor, size: iconSize })),
                            react_1["default"].createElement(components_1.View, { className: 'icon-list__name' }, icon))); })))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u6587\u4EF6"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'icon-list' }, icons.file.map(function (icon, index) { return (react_1["default"].createElement(components_1.View, { className: 'icon-list__item', key: "at-icon-" + index },
                            react_1["default"].createElement(components_1.View, { className: 'icon-list__icon' },
                                react_1["default"].createElement(taro_ui_1.AtIcon, { value: icon, color: iconColor, size: iconSize })),
                            react_1["default"].createElement(components_1.View, { className: 'icon-list__name' }, icon))); })))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u6587\u672C"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'icon-list' }, icons.text.map(function (icon, index) { return (react_1["default"].createElement(components_1.View, { className: 'icon-list__item', key: "at-icon-" + index },
                            react_1["default"].createElement(components_1.View, { className: 'icon-list__icon' },
                                react_1["default"].createElement(taro_ui_1.AtIcon, { value: icon, color: iconColor, size: iconSize })),
                            react_1["default"].createElement(components_1.View, { className: 'icon-list__name' }, icon))); })))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u7BAD\u5934"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'icon-list' }, icons.arrow.map(function (icon, index) { return (react_1["default"].createElement(components_1.View, { className: 'icon-list__item', key: "at-icon-" + index },
                            react_1["default"].createElement(components_1.View, { className: 'icon-list__icon' },
                                react_1["default"].createElement(taro_ui_1.AtIcon, { value: icon, color: iconColor, size: iconSize })),
                            react_1["default"].createElement(components_1.View, { className: 'icon-list__name' }, icon))); })))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u5A92\u4F53\u63A7\u5236"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'icon-list' }, icons.media.map(function (icon, index) { return (react_1["default"].createElement(components_1.View, { className: 'icon-list__item', key: "at-icon-" + index },
                            react_1["default"].createElement(components_1.View, { className: 'icon-list__icon' },
                                react_1["default"].createElement(taro_ui_1.AtIcon, { value: icon, color: iconColor, size: iconSize })),
                            react_1["default"].createElement(components_1.View, { className: 'icon-list__name' }, icon))); })))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u591A\u5A92\u4F53"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'icon-list' }, icons.photo.map(function (icon, index) { return (react_1["default"].createElement(components_1.View, { className: 'icon-list__item', key: "at-icon-" + index },
                            react_1["default"].createElement(components_1.View, { className: 'icon-list__icon' },
                                react_1["default"].createElement(taro_ui_1.AtIcon, { value: icon, color: iconColor, size: iconSize })),
                            react_1["default"].createElement(components_1.View, { className: 'icon-list__name' }, icon))); })))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "Logo"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'icon-list' }, icons.logo.map(function (icon, index) { return (react_1["default"].createElement(components_1.View, { className: 'icon-list__item', key: "at-icon-" + index },
                            react_1["default"].createElement(components_1.View, { className: 'icon-list__icon' },
                                react_1["default"].createElement(taro_ui_1.AtIcon, { value: icon, color: iconColor, size: iconSize })),
                            react_1["default"].createElement(components_1.View, { className: 'icon-list__name' }, icon))); })))))));
    };
    return IconPage;
}(react_1["default"].Component));
exports["default"] = IconPage;
//# sourceMappingURL=index.js.map