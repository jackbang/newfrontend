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
var forEach_1 = require("lodash/forEach");
var prop_types_1 = require("prop-types");
var react_1 = require("react");
var components_1 = require("@tarojs/components");
var AtFlex = /** @class */ (function (_super) {
    __extends(AtFlex, _super);
    function AtFlex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AtFlex.prototype.render = function () {
        var rootClass = ['at-row'];
        forEach_1["default"](this.props, function (value, key) {
            if (key === 'children') {
                return;
            }
            if (key === 'alignContent') {
                return rootClass.push("at-row--" + value);
            }
            if (key === 'alignContent') {
                return rootClass.push("at-row__align-content--" + value);
            }
            rootClass.push("at-row__" + key + "--" + value);
        });
        return react_1["default"].createElement(components_1.View, { className: classnames_1["default"](rootClass) }, this.props.children);
    };
    return AtFlex;
}(react_1["default"].Component));
exports["default"] = AtFlex;
AtFlex.propTypes = {
    wrap: prop_types_1["default"].oneOf(['no-wrap', 'wrap', 'wrap-reverse']),
    align: prop_types_1["default"].oneOf(['start', 'end', 'center', 'stretch', 'baseline']),
    justify: prop_types_1["default"].oneOf(['start', 'end', 'center', 'between', 'around']),
    dirction: prop_types_1["default"].oneOf(['row', 'column', 'row-reverse', 'column-reverse']),
    alignContent: prop_types_1["default"].oneOf([
        'start',
        'end',
        'center',
        'stretch',
        'between',
        'around'
    ])
};
//# sourceMappingURL=index.js.map