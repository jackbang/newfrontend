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
var classnames_1 = require("classnames");
var chunk_1 = require("lodash/chunk");
var prop_types_1 = require("prop-types");
var react_1 = require("react");
var components_1 = require("@tarojs/components");
var utils_1 = require("../../common/utils");
var AtGrid = /** @class */ (function (_super) {
    __extends(AtGrid, _super);
    function AtGrid() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleClick = function (item, index, row, event) {
            var _a = _this.props, onClick = _a.onClick, _b = _a.columnNum, columnNum = _b === void 0 ? 3 : _b;
            if (typeof onClick === 'function') {
                var clickIndex = row * columnNum + index;
                onClick(item, clickIndex, event);
            }
        };
        return _this;
    }
    AtGrid.prototype.render = function () {
        var _this = this;
        var _a = this.props, data = _a.data, mode = _a.mode, _b = _a.columnNum, columnNum = _b === void 0 ? 3 : _b, hasBorder = _a.hasBorder;
        if (Array.isArray(data) && data.length === 0) {
            return null;
        }
        var gridGroup = chunk_1["default"](data, columnNum);
        var bodyClass = classnames_1["default"](['at-grid__flex-item', 'at-grid-item', "at-grid-item--" + mode], {
            'at-grid-item--no-border': !hasBorder
        });
        return (react_1["default"].createElement(components_1.View, { className: classnames_1["default"]('at-grid', this.props.className) }, gridGroup.map(function (item, i) { return (react_1["default"].createElement(components_1.View, { className: 'at-grid__flex', key: "at-grid-group-" + i }, item.map(function (childItem, index) {
            var _a;
            return (react_1["default"].createElement(components_1.View, { key: "at-grid-item-" + index, className: classnames_1["default"](bodyClass, {
                    'at-grid-item--last': index === columnNum - 1
                }), onClick: _this.handleClick.bind(_this, childItem, index, i), style: {
                    flex: "0 0 " + 100 / columnNum + "%"
                } },
                react_1["default"].createElement(components_1.View, { className: 'at-grid-item__content' },
                    react_1["default"].createElement(components_1.View, { className: 'at-grid-item__content-inner' },
                        react_1["default"].createElement(components_1.View, { className: 'content-inner__icon' },
                            childItem.image && (react_1["default"].createElement(components_1.Image, { className: 'content-inner__img', src: childItem.image, mode: 'scaleToFill' })),
                            childItem.iconInfo && !childItem.image && (react_1["default"].createElement(components_1.Text, { className: classnames_1["default"](childItem.iconInfo.prefixClass || 'at-icon', (_a = {},
                                    _a[(childItem.iconInfo.prefixClass || 'at-icon') + "-" + childItem.iconInfo.value] = childItem
                                        .iconInfo.value,
                                    _a), childItem.iconInfo.className), style: utils_1.mergeStyle({
                                    color: childItem.iconInfo.color,
                                    fontSize: (childItem.iconInfo.size || 24) + "px"
                                }, 
                                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                                childItem.iconInfo.customStyle) }))),
                        react_1["default"].createElement(components_1.Text, { className: 'content-inner__text' }, childItem.value)))));
        }))); })));
    };
    return AtGrid;
}(react_1["default"].Component));
exports["default"] = AtGrid;
AtGrid.defaultProps = {
    data: [],
    columnNum: 3,
    mode: 'square',
    hasBorder: true
};
AtGrid.propTypes = {
    mode: prop_types_1["default"].string,
    onClick: prop_types_1["default"].func,
    hasBorder: prop_types_1["default"].bool,
    columnNum: prop_types_1["default"].number,
    data: prop_types_1["default"].arrayOf(prop_types_1["default"].shape({
        image: prop_types_1["default"].string,
        value: prop_types_1["default"].string,
        iconInfo: prop_types_1["default"].shape({
            size: prop_types_1["default"].number,
            value: prop_types_1["default"].string,
            color: prop_types_1["default"].string,
            prefixClass: prop_types_1["default"].string,
            customStyle: prop_types_1["default"].oneOfType([prop_types_1["default"].object, prop_types_1["default"].string]),
            className: prop_types_1["default"].oneOfType([prop_types_1["default"].array, prop_types_1["default"].string])
        })
    }))
};
//# sourceMappingURL=index.js.map