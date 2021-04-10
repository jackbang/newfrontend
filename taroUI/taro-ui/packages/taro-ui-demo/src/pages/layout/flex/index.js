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
var components_1 = require("@tarojs/components");
var doc_header_1 = require("../../components/doc-header");
require("./index.scss");
var FlexPage = /** @class */ (function (_super) {
    __extends(FlexPage, _super);
    function FlexPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.config = {
            navigationBarTitleText: 'Taro UI'
        };
        return _this;
    }
    FlexPage.prototype.render = function () {
        return (react_1["default"].createElement(components_1.View, { className: 'page flex-page' },
            react_1["default"].createElement(doc_header_1["default"], { title: 'Flex \u5F39\u6027\u5E03\u5C40' }),
            react_1["default"].createElement(components_1.View, { className: 'doc-body' },
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u57FA\u672C\u6848\u4F8B"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(components_1.View, { className: 'at-row' },
                                react_1["default"].createElement(components_1.View, { className: 'at-col' }, "A"),
                                react_1["default"].createElement(components_1.View, { className: 'at-col' }, "B"),
                                react_1["default"].createElement(components_1.View, { className: 'at-col' }, "C"))))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u5B9A\u4E49\u957F\u5EA6"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(components_1.View, { className: 'at-row' },
                                react_1["default"].createElement(components_1.View, { className: 'at-col at-col-3' }, "A"),
                                react_1["default"].createElement(components_1.View, { className: 'at-col at-col-6' }, "B"),
                                react_1["default"].createElement(components_1.View, { className: 'at-col at-col-2' }, "C"),
                                react_1["default"].createElement(components_1.View, { className: 'at-col at-col-1' }, "D"))))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u5B9A\u4E49\u504F\u79FB"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(components_1.View, { className: 'at-row' },
                                react_1["default"].createElement(components_1.View, { className: 'at-col at-col__offset-2' }, "A"),
                                react_1["default"].createElement(components_1.View, { className: 'at-col at-col__offset-3' }, "B"),
                                react_1["default"].createElement(components_1.View, { className: 'at-col' }, "C"))))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u8D85\u51FA\u6362\u884C"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(components_1.View, { className: 'at-row at-row--wrap' },
                                react_1["default"].createElement(components_1.View, { className: 'at-col at-col-4' }, "A"),
                                react_1["default"].createElement(components_1.View, { className: 'at-col at-col-4' }, "B"),
                                react_1["default"].createElement(components_1.View, { className: 'at-col at-col-4' }, "C"),
                                react_1["default"].createElement(components_1.View, { className: 'at-col at-col-4' }, "D"),
                                react_1["default"].createElement(components_1.View, { className: 'at-col at-col-4' }, "E"))))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u5BBD\u5EA6\u6839\u636E\u5185\u5BB9\u6491\u5F00"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(components_1.View, { className: 'at-row' },
                                react_1["default"].createElement(components_1.View, { className: 'at-col at-col-1 at-col--auto' }, "\u88AB\u5185\u5BB9\u6491\u5F00"),
                                react_1["default"].createElement(components_1.View, { className: 'at-col' }, "B"))))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u5185\u5BB9\u81EA\u52A8\u6362\u884C"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(components_1.View, { className: 'at-row' },
                                react_1["default"].createElement(components_1.View, { className: 'at-col at-col-1 at-col--wrap' }, "\u5185\u5BB9\u81EA\u52A8\u6362\u884C"),
                                react_1["default"].createElement(components_1.View, { className: 'at-col' }, "B"))))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u4FA7\u8F74\u65B9\u5411\u7684\u5BF9\u9F50\u65B9\u5F0F"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(components_1.View, { className: 'at-row' },
                                react_1["default"].createElement(components_1.View, { style: 'height:100px', className: 'at-col' }, "A"),
                                react_1["default"].createElement(components_1.View, { className: 'at-col' }, "\u9ED8\u8BA4\u5BF9\u9F50\u65B9\u5F0F -- stretch"))),
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(components_1.View, { className: 'at-row at-row__align--start' },
                                react_1["default"].createElement(components_1.View, { style: 'height:100px', className: 'at-col' }, "B"),
                                react_1["default"].createElement(components_1.View, { className: 'at-col' }, "\u9876\u90E8\u5BF9\u9F50 -- start"))),
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(components_1.View, { className: 'at-row at-row__align--center' },
                                react_1["default"].createElement(components_1.View, { style: 'height:100px', className: 'at-col' }, "C"),
                                react_1["default"].createElement(components_1.View, { className: 'at-col' }, "\u5C45\u4E2D\u5BF9\u9F50 -- center"))),
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(components_1.View, { className: 'at-row at-row__align--end' },
                                react_1["default"].createElement(components_1.View, { style: 'height:100px', className: 'at-col' }, "D"),
                                react_1["default"].createElement(components_1.View, { className: 'at-col' }, "\u5E95\u90E8\u5BF9\u9F50 -- end"))))),
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u4E3B\u8F74\u65B9\u5411\u7684\u6392\u5217\u65B9\u5F0F"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(components_1.View, { className: 'at-row' },
                                react_1["default"].createElement(components_1.View, { className: 'at-col at-col-5' }, "\u9ED8\u8BA4"),
                                react_1["default"].createElement(components_1.View, { className: 'at-col at-col-5' }, "Start"))),
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(components_1.View, { className: 'at-row at-row__justify--end' },
                                react_1["default"].createElement(components_1.View, { className: 'at-col at-col-5' }, "\u5E95\u90E8\u6392\u5217"),
                                react_1["default"].createElement(components_1.View, { className: 'at-col at-col-5' }, "End"))),
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(components_1.View, { className: 'at-row at-row__justify--center' },
                                react_1["default"].createElement(components_1.View, { className: 'at-col at-col-5' }, "\u5C45\u4E2D\u6392\u5217"),
                                react_1["default"].createElement(components_1.View, { className: 'at-col at-col-5' }, "Center"))),
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(components_1.View, { className: 'at-row at-row__justify--between' },
                                react_1["default"].createElement(components_1.View, { className: 'at-col at-col-5' }, "\u5DE6\u53F3\u6392\u5217"),
                                react_1["default"].createElement(components_1.View, { className: 'at-col at-col-5' }, "Between"))),
                        react_1["default"].createElement(components_1.View, { className: 'example-item' },
                            react_1["default"].createElement(components_1.View, { className: 'at-row at-row__justify--around' },
                                react_1["default"].createElement(components_1.View, { className: 'at-col at-col-5' }, "\u5E73\u5747\u6392\u5217"),
                                react_1["default"].createElement(components_1.View, { className: 'at-col at-col-5' }, "Around"))))))));
    };
    return FlexPage;
}(react_1["default"].Component));
exports["default"] = FlexPage;
//# sourceMappingURL=index.js.map