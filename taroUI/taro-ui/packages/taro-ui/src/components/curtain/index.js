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
var prop_types_1 = require("prop-types");
var react_1 = require("react");
var components_1 = require("@tarojs/components");
var AtCurtain = /** @class */ (function (_super) {
    __extends(AtCurtain, _super);
    function AtCurtain() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AtCurtain.prototype.onClose = function (e) {
        e.stopPropagation();
        this.props.onClose(e);
    };
    AtCurtain.prototype._stopPropagation = function (e) {
        e.stopPropagation();
    };
    AtCurtain.prototype.render = function () {
        var _a;
        var _b = this.props, className = _b.className, customStyle = _b.customStyle, isOpened = _b.isOpened, closeBtnPosition = _b.closeBtnPosition;
        var curtainClass = classnames_1["default"]({
            'at-curtain': true,
            'at-curtain--closed': !isOpened
        }, className);
        var btnCloseClass = classnames_1["default"]((_a = {
                'at-curtain__btn-close': true
            },
            _a["at-curtain__btn-close--" + closeBtnPosition] = closeBtnPosition,
            _a));
        return (react_1["default"].createElement(components_1.View, { className: curtainClass, style: customStyle, onClick: this._stopPropagation },
            react_1["default"].createElement(components_1.View, { className: 'at-curtain__container' },
                react_1["default"].createElement(components_1.View, { className: 'at-curtain__body' },
                    this.props.children,
                    react_1["default"].createElement(components_1.View, { className: btnCloseClass, onClick: this.onClose.bind(this) })))));
    };
    return AtCurtain;
}(react_1["default"].Component));
exports["default"] = AtCurtain;
AtCurtain.defaultProps = {
    customStyle: '',
    className: '',
    isOpened: false,
    closeBtnPosition: 'bottom',
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onClose: function () { }
};
AtCurtain.propTypes = {
    customStyle: prop_types_1["default"].oneOfType([prop_types_1["default"].object, prop_types_1["default"].string]),
    className: prop_types_1["default"].oneOfType([prop_types_1["default"].array, prop_types_1["default"].string]),
    isOpened: prop_types_1["default"].bool,
    closeBtnPosition: prop_types_1["default"].string,
    onClose: prop_types_1["default"].func
};
//# sourceMappingURL=index.js.map