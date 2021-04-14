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
var index_1 = require("./body/index");
var index_2 = require("./footer/index");
var index_3 = require("./header/index");
var AtActionSheet = /** @class */ (function (_super) {
    __extends(AtActionSheet, _super);
    function AtActionSheet(props) {
        var _this = _super.call(this, props) || this;
        _this.handleClose = function () {
            if (typeof _this.props.onClose === 'function') {
                _this.props.onClose();
            }
        };
        _this.handleCancel = function () {
            if (typeof _this.props.onCancel === 'function') {
                return _this.props.onCancel();
            }
            _this.close();
        };
        _this.close = function () {
            _this.setState({
                _isOpened: false
            }, _this.handleClose);
        };
        _this.handleTouchMove = function (e) {
            e.stopPropagation();
            e.preventDefault();
        };
        var isOpened = props.isOpened;
        _this.state = {
            _isOpened: isOpened
        };
        return _this;
    }
    AtActionSheet.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
        var isOpened = nextProps.isOpened;
        if (isOpened !== this.state._isOpened) {
            this.setState({
                _isOpened: isOpened
            });
            !isOpened && this.handleClose();
        }
    };
    AtActionSheet.prototype.render = function () {
        var _a = this.props, title = _a.title, cancelText = _a.cancelText, className = _a.className;
        var _isOpened = this.state._isOpened;
        var rootClass = classnames_1["default"]('at-action-sheet', {
            'at-action-sheet--active': _isOpened
        }, className);
        return (react_1["default"].createElement(components_1.View, { className: rootClass, onTouchMove: this.handleTouchMove },
            react_1["default"].createElement(components_1.View, { onClick: this.close, className: 'at-action-sheet__overlay' }),
            react_1["default"].createElement(components_1.View, { className: 'at-action-sheet__container' },
                title && react_1["default"].createElement(index_3["default"], null, title),
                react_1["default"].createElement(index_1["default"], null, this.props.children),
                cancelText && (react_1["default"].createElement(index_2["default"], { onClick: this.handleCancel }, cancelText)))));
    };
    return AtActionSheet;
}(react_1["default"].Component));
exports["default"] = AtActionSheet;
AtActionSheet.defaultProps = {
    title: '',
    cancelText: '',
    isOpened: false
};
AtActionSheet.propTypes = {
    title: prop_types_1["default"].string,
    onClose: prop_types_1["default"].func,
    onCancel: prop_types_1["default"].func,
    isOpened: prop_types_1["default"].bool.isRequired,
    cancelText: prop_types_1["default"].string
};
//# sourceMappingURL=index.js.map