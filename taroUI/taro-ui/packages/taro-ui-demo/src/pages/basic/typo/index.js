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
var BasicTypo = /** @class */ (function (_super) {
    __extends(BasicTypo, _super);
    function BasicTypo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.config = {
            navigationBarTitleText: 'Taro UI'
        };
        return _this;
    }
    BasicTypo.prototype.render = function () {
        return (react_1["default"].createElement(components_1.View, { className: 'page' },
            react_1["default"].createElement(doc_header_1["default"], { title: 'Typography \u5B57\u4F53' }),
            react_1["default"].createElement(components_1.View, { className: 'doc-body' },
                react_1["default"].createElement(components_1.View, { className: 'panel' },
                    react_1["default"].createElement(components_1.View, { className: 'panel__title' }, "\u793A\u4F8B"),
                    react_1["default"].createElement(components_1.View, { className: 'panel__content' },
                        react_1["default"].createElement(components_1.View, { className: 'table-typo' },
                            react_1["default"].createElement(components_1.View, { className: 'table-typo__head' },
                                react_1["default"].createElement(components_1.View, { className: 'thead' }, "\u7C7B\u578B"),
                                react_1["default"].createElement(components_1.View, { className: 'thead' }, "\u884C\u9AD8"),
                                react_1["default"].createElement(components_1.View, { className: 'thead' }, "\u7528\u9014")),
                            react_1["default"].createElement(components_1.View, { className: 'table-typo__body' },
                                react_1["default"].createElement(components_1.View, { className: 'table-typo__line' },
                                    react_1["default"].createElement(components_1.View, { className: 'col h0' }, "H0\uFF0C40PX"),
                                    react_1["default"].createElement(components_1.View, { className: 'col' }, "60PX"),
                                    react_1["default"].createElement(components_1.View, { className: 'col' }, "\u4EC5\u7528\u4E8E\u6570\u5B57")),
                                react_1["default"].createElement(components_1.View, { className: 'table-typo__line' },
                                    react_1["default"].createElement(components_1.View, { className: 'col h1' }, "H1\uFF0C36PX"),
                                    react_1["default"].createElement(components_1.View, { className: 'col' }, "54PX"),
                                    react_1["default"].createElement(components_1.View, { className: 'col' }, "\u5927\u6A21\u5757\u6807\u9898")),
                                react_1["default"].createElement(components_1.View, { className: 'table-typo__line' },
                                    react_1["default"].createElement(components_1.View, { className: 'col h2' }, "H2\uFF0C32PX"),
                                    react_1["default"].createElement(components_1.View, { className: 'col' }, "48PX"),
                                    react_1["default"].createElement(components_1.View, { className: 'col' }, "\u5E38\u89C4\u6807\u9898")),
                                react_1["default"].createElement(components_1.View, { className: 'table-typo__line' },
                                    react_1["default"].createElement(components_1.View, { className: 'col h3' }, "H3\uFF0C28PX"),
                                    react_1["default"].createElement(components_1.View, { className: 'col' }, "42PX"),
                                    react_1["default"].createElement(components_1.View, { className: 'col' }, "\u6B63\u6587")),
                                react_1["default"].createElement(components_1.View, { className: 'table-typo__line' },
                                    react_1["default"].createElement(components_1.View, { className: 'col h4' }, "H4\uFF0C24PX"),
                                    react_1["default"].createElement(components_1.View, { className: 'col' }, "36PX"),
                                    react_1["default"].createElement(components_1.View, { className: 'col' }, "\u8F85\u52A9\u4FE1\u606F\u3001\u6CE8\u91CA")),
                                react_1["default"].createElement(components_1.View, { className: 'table-typo__line' },
                                    react_1["default"].createElement(components_1.View, { className: 'col h5' }, "H5\uFF0C20PX"),
                                    react_1["default"].createElement(components_1.View, { className: 'col' }, "30PX"),
                                    react_1["default"].createElement(components_1.View, { className: 'col' }, "\u6807\u7B7E")))))))));
    };
    return BasicTypo;
}(react_1["default"].Component));
exports["default"] = BasicTypo;
//# sourceMappingURL=index.js.map