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
var AvatarPage = /** @class */ (function (_super) {
    __extends(AvatarPage, _super);
    function AvatarPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.config = {
            navigationBarTitleText: 'Taro UI'
        };
        return _this;
    }
    AvatarPage.prototype.render = function () {
        var avatarImg = 'http://storage.360buyimg.com/mtd/home/32443566_635798770100444_2113947400891531264_n1533825816008.jpg';
        return (react_1["default"].createElement(components_1.View, { className: 'page' },
            react_1["default"].createElement(doc_header_1["default"], { title: 'Avatar \u5934\u50CF' }),
            react_1["default"].createElement(components_1.View, { className: 'doc-body' },
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u5706\u5F62\u5934\u50CF"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(components_1.View, { className: 'subitem' },
                                react_1["default"].createElement(taro_ui_1.AtAvatar, { circle: true, size: 'small', image: avatarImg })),
                            react_1["default"].createElement(components_1.View, { className: 'subitem' },
                                react_1["default"].createElement(taro_ui_1.AtAvatar, { circle: true, image: avatarImg })),
                            react_1["default"].createElement(components_1.View, { className: 'subitem' },
                                react_1["default"].createElement(taro_ui_1.AtAvatar, { circle: true, size: 'large', image: avatarImg }))))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u5706\u89D2\u77E9\u5F62\u5934\u50CF"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(components_1.View, { className: 'subitem' },
                                react_1["default"].createElement(taro_ui_1.AtAvatar, { size: 'small', image: avatarImg })),
                            react_1["default"].createElement(components_1.View, { className: 'subitem' },
                                react_1["default"].createElement(taro_ui_1.AtAvatar, { image: avatarImg })),
                            react_1["default"].createElement(components_1.View, { className: 'subitem' },
                                react_1["default"].createElement(taro_ui_1.AtAvatar, { size: 'large', image: avatarImg }))))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u5706\u5F62\u5934\u50CF\uFF08\u652F\u6301\u6587\u672C\uFF09"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(components_1.View, { className: 'subitem' },
                                react_1["default"].createElement(taro_ui_1.AtAvatar, { circle: true, size: 'small', text: '\u51F9' })),
                            react_1["default"].createElement(components_1.View, { className: 'subitem' },
                                react_1["default"].createElement(taro_ui_1.AtAvatar, { circle: true, text: '\u51F9' })),
                            react_1["default"].createElement(components_1.View, { className: 'subitem' },
                                react_1["default"].createElement(taro_ui_1.AtAvatar, { circle: true, size: 'large', text: '\u51F9' }))))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u5706\u89D2\u77E9\u5F62\u5934\u50CF\uFF08\u652F\u6301\u6587\u672C\uFF09"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(components_1.View, { className: 'subitem' },
                                react_1["default"].createElement(taro_ui_1.AtAvatar, { size: 'small', text: '\u51F9' })),
                            react_1["default"].createElement(components_1.View, { className: 'subitem' },
                                react_1["default"].createElement(taro_ui_1.AtAvatar, { text: '\u51F9' })),
                            react_1["default"].createElement(components_1.View, { className: 'subitem' },
                                react_1["default"].createElement(taro_ui_1.AtAvatar, { size: 'large', text: '\u51F9' }))))),
                taro_1["default"].getEnv() === taro_1["default"].ENV_TYPE.WEAPP && (react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "openData \u5934\u50CF\uFF08\u4EC5\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u652F\u6301\uFF09"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(components_1.View, { className: 'subitem' },
                                react_1["default"].createElement(taro_ui_1.AtAvatar, { openData: { type: 'userAvatarUrl' }, size: 'small' })),
                            react_1["default"].createElement(components_1.View, { className: 'subitem' },
                                react_1["default"].createElement(taro_ui_1.AtAvatar, { openData: { type: 'userAvatarUrl' } })),
                            react_1["default"].createElement(components_1.View, { className: 'subitem' },
                                react_1["default"].createElement(taro_ui_1.AtAvatar, { size: 'large', openData: { type: 'userAvatarUrl' } })),
                            react_1["default"].createElement(components_1.View, { className: 'subitem' },
                                react_1["default"].createElement(taro_ui_1.AtAvatar, { size: 'large', circle: true, openData: { type: 'userAvatarUrl' } })))))))));
    };
    return AvatarPage;
}(react_1["default"].Component));
exports["default"] = AvatarPage;
//# sourceMappingURL=index.js.map