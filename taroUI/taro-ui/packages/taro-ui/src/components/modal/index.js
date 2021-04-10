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
var taro_1 = require("@tarojs/taro");
var utils_1 = require("../../common/utils");
var index_1 = require("./action/index");
var index_2 = require("./content/index");
var index_3 = require("./header/index");
var AtModal = /** @class */ (function (_super) {
    __extends(AtModal, _super);
    function AtModal(props) {
        var _this = _super.call(this, props) || this;
        _this.handleClickOverlay = function () {
            if (_this.props.closeOnClickOverlay) {
                _this.setState({
                    _isOpened: false
                }, _this.handleClose);
            }
        };
        _this.handleClose = function (event) {
            if (typeof _this.props.onClose === 'function') {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                _this.props.onClose(event);
            }
        };
        _this.handleCancel = function (event) {
            if (typeof _this.props.onCancel === 'function') {
                _this.props.onCancel(event);
            }
        };
        _this.handleConfirm = function (event) {
            if (typeof _this.props.onConfirm === 'function') {
                _this.props.onConfirm(event);
            }
        };
        _this.handleTouchMove = function (e) {
            e.stopPropagation();
        };
        var isOpened = props.isOpened;
        _this.state = {
            _isOpened: isOpened,
            isWEB: taro_1["default"].getEnv() === taro_1["default"].ENV_TYPE.WEB
        };
        return _this;
    }
    AtModal.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
        var isOpened = nextProps.isOpened;
        if (this.props.isOpened !== isOpened) {
            utils_1.handleTouchScroll(isOpened);
        }
        if (isOpened !== this.state._isOpened) {
            this.setState({
                _isOpened: isOpened
            });
        }
    };
    AtModal.prototype.render = function () {
        var _a = this.state, _isOpened = _a._isOpened, isWEB = _a.isWEB;
        var _b = this.props, title = _b.title, content = _b.content, cancelText = _b.cancelText, confirmText = _b.confirmText;
        var rootClass = classnames_1["default"]('at-modal', {
            'at-modal--active': _isOpened
        }, this.props.className);
        if (title || content) {
            var isRenderAction = cancelText || confirmText;
            return (react_1["default"].createElement(components_1.View, { className: rootClass },
                react_1["default"].createElement(components_1.View, { onClick: this.handleClickOverlay, className: 'at-modal__overlay' }),
                react_1["default"].createElement(components_1.View, { className: 'at-modal__container' },
                    title && (react_1["default"].createElement(index_3["default"], null,
                        react_1["default"].createElement(components_1.Text, null, title))),
                    content && (react_1["default"].createElement(index_2["default"], null,
                        react_1["default"].createElement(components_1.View, { className: 'content-simple' }, isWEB ? (react_1["default"].createElement(components_1.Text
                        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                        // @ts-ignore
                        , { 
                            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                            // @ts-ignore
                            dangerouslySetInnerHTML: {
                                __html: content.replace(/\n/g, '<br/>')
                            } })) : (react_1["default"].createElement(components_1.Text, null, content))))),
                    isRenderAction && (react_1["default"].createElement(index_1["default"], { isSimple: true },
                        cancelText && (react_1["default"].createElement(components_1.Button, { onClick: this.handleCancel }, cancelText)),
                        confirmText && (react_1["default"].createElement(components_1.Button, { onClick: this.handleConfirm }, confirmText)))))));
        }
        return (react_1["default"].createElement(components_1.View, { onTouchMove: this.handleTouchMove, className: rootClass },
            react_1["default"].createElement(components_1.View, { className: 'at-modal__overlay', onClick: this.handleClickOverlay }),
            react_1["default"].createElement(components_1.View, { className: 'at-modal__container' }, this.props.children)));
    };
    return AtModal;
}(react_1["default"].Component));
exports["default"] = AtModal;
AtModal.defaultProps = {
    isOpened: false,
    closeOnClickOverlay: true
};
AtModal.propTypes = {
    title: prop_types_1["default"].string,
    isOpened: prop_types_1["default"].bool,
    onCancel: prop_types_1["default"].func,
    onConfirm: prop_types_1["default"].func,
    onClose: prop_types_1["default"].func,
    content: prop_types_1["default"].string,
    closeOnClickOverlay: prop_types_1["default"].bool,
    cancelText: prop_types_1["default"].string,
    confirmText: prop_types_1["default"].string
};
//# sourceMappingURL=index.js.map