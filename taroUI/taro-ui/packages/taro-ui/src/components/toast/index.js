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
var img_json_1 = require("./img.json");
var AtToast = /** @class */ (function (_super) {
    __extends(AtToast, _super);
    function AtToast(props) {
        var _this = _super.call(this, props) || this;
        _this.handleClick = function (event) {
            var _a = _this.props, onClick = _a.onClick, status = _a.status;
            if (status === 'loading') {
                return;
            }
            if (onClick) {
                return onClick(event);
            }
            _this.close();
        };
        var isOpened = props.isOpened, duration = props.duration;
        if (isOpened) {
            _this.makeTimer(duration || 0);
        }
        _this._timer = null;
        _this.state = {
            _isOpened: isOpened
        };
        return _this;
    }
    AtToast.prototype.clearTimmer = function () {
        if (this._timer) {
            clearTimeout(this._timer);
            this._timer = null;
        }
    };
    AtToast.prototype.makeTimer = function (duration) {
        var _this = this;
        if (duration === 0) {
            return;
        }
        this._timer = setTimeout(function () {
            _this.close();
        }, +duration);
    };
    AtToast.prototype.close = function () {
        var _isOpened = this.state._isOpened;
        if (_isOpened) {
            this.setState({
                _isOpened: false
            }, this.handleClose // TODO: Fix dirty hack
            );
            this.clearTimmer();
        }
    };
    AtToast.prototype.handleClose = function (event) {
        // TODO: Fix dirty hack
        if (typeof this.props.onClose === 'function') {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            this.props.onClose(event);
        }
    };
    AtToast.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
        var isOpened = nextProps.isOpened, duration = nextProps.duration;
        if (!isOpened) {
            this.close();
            return;
        }
        if (!this.state._isOpened) {
            this.setState({
                _isOpened: true
            });
        }
        else {
            this.clearTimmer();
        }
        this.makeTimer(duration || 0);
    };
    AtToast.prototype.render = function () {
        var _a, _b;
        var _isOpened = this.state._isOpened;
        var _c = this.props, customStyle = _c.customStyle, text = _c.text, icon = _c.icon, status = _c.status, image = _c.image, hasMask = _c.hasMask;
        /* eslint-disable @typescript-eslint/no-non-null-assertion */
        var realImg = image || img_json_1["default"][status] || null;
        var isRenderIcon = !!(icon && !(image || img_json_1["default"][status]));
        /* eslint-enable @typescript-eslint/no-non-null-assertion */
        var bodyClass = classnames_1["default"]('toast-body', (_a = {
                'at-toast__body--custom-image': image,
                'toast-body--text': !realImg && !icon
            },
            _a["at-toast__body--" + status] = !!status,
            _a));
        var iconClass = classnames_1["default"]('at-icon', (_b = {},
            _b["at-icon-" + icon] = icon,
            _b));
        return _isOpened ? (react_1["default"].createElement(components_1.View, { className: classnames_1["default"]('at-toast', this.props.className) },
            hasMask && react_1["default"].createElement(components_1.View, { className: 'at-toast__overlay' }),
            react_1["default"].createElement(components_1.View, { className: bodyClass, style: customStyle, onClick: this.handleClick },
                react_1["default"].createElement(components_1.View, { className: 'toast-body-content' },
                    realImg ? (react_1["default"].createElement(components_1.View, { className: 'toast-body-content__img' },
                        react_1["default"].createElement(components_1.Image, { className: 'toast-body-content__img-item', src: realImg, mode: 'scaleToFill' }))) : null,
                    isRenderIcon && (react_1["default"].createElement(components_1.View, { className: 'toast-body-content__icon' },
                        react_1["default"].createElement(components_1.Text, { className: iconClass }))),
                    text && (react_1["default"].createElement(components_1.View, { className: 'toast-body-content__info' },
                        react_1["default"].createElement(components_1.Text, null, text))))))) : null;
    };
    return AtToast;
}(react_1["default"].Component));
exports["default"] = AtToast;
AtToast.defaultProps = {
    duration: 3000,
    isOpened: false
};
AtToast.propTypes = {
    text: prop_types_1["default"].string,
    icon: prop_types_1["default"].string,
    hasMask: prop_types_1["default"].bool,
    image: prop_types_1["default"].string,
    isOpened: prop_types_1["default"].bool,
    duration: prop_types_1["default"].number,
    status: prop_types_1["default"].oneOf(['', 'error', 'loading', 'success']),
    onClick: prop_types_1["default"].func,
    onClose: prop_types_1["default"].func
};
//# sourceMappingURL=index.js.map