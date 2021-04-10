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
var utils_1 = require("../../common/utils");
var index_1 = require("./options/index");
var AtSwipeAction = /** @class */ (function (_super) {
    __extends(AtSwipeAction, _super);
    function AtSwipeAction(props) {
        var _this = _super.call(this, props) || this;
        _this.handleOpened = function (event) {
            var onOpened = _this.props.onOpened;
            if (typeof onOpened === 'function') {
                onOpened(event);
            }
        };
        _this.handleClosed = function (event) {
            var onClosed = _this.props.onClosed;
            if (typeof onClosed === 'function') {
                onClosed(event);
            }
        };
        _this.handleClick = function (item, index, event) {
            var _a = _this.props, onClick = _a.onClick, autoClose = _a.autoClose;
            if (typeof onClick === 'function') {
                onClick(item, index, event);
            }
            if (autoClose) {
                _this._reset(false); // TODO: Check behavior
                _this.handleClosed(event);
            }
        };
        _this.onTouchEnd = function (e) {
            if (_this.moveX === -_this.maxOffsetSize) {
                _this._reset(true);
                _this.handleOpened(e);
                return;
            }
            if (_this.moveX === 0) {
                _this._reset(false);
                _this.handleClosed(e);
                return;
            }
            if (_this.state._isOpened && _this.moveX < 0) {
                _this._reset(false);
                _this.handleClosed(e);
                return;
            }
            if (Math.abs(_this.moveX) < _this.maxOffsetSize * _this.moveRatio) {
                _this._reset(false);
                _this.handleClosed(e);
            }
            else {
                _this._reset(true);
                _this.handleOpened(e);
            }
        };
        _this.onChange = function (e) {
            _this.moveX = e.detail.x;
        };
        var isOpened = props.isOpened, maxDistance = props.maxDistance, areaWidth = props.areaWidth, moveRatio = props.moveRatio;
        _this.maxOffsetSize = maxDistance;
        _this.state = {
            componentId: utils_1.uuid(),
            // eslint-disable-next-line no-extra-boolean-cast
            offsetSize: !!isOpened ? -_this.maxOffsetSize : 0,
            _isOpened: !!isOpened,
            needAnimation: false
        };
        _this.moveX = _this.state.offsetSize;
        _this.eleWidth = areaWidth;
        _this.moveRatio = moveRatio || 0.5;
        return _this;
    }
    AtSwipeAction.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
        var isOpened = nextProps.isOpened;
        var _isOpened = this.state._isOpened;
        if (isOpened !== _isOpened) {
            this.moveX = isOpened ? 0 : this.maxOffsetSize;
            this._reset(!!isOpened); // TODO: Check behavior
        }
    };
    AtSwipeAction.prototype._reset = function (isOpened) {
        var _this = this;
        if (isOpened) {
            if (process.env.TARO_ENV === 'jd') {
                this.setState({
                    _isOpened: true,
                    offsetSize: -this.maxOffsetSize + 0.01
                });
            }
            else {
                this.setState({
                    _isOpened: true,
                    offsetSize: -this.maxOffsetSize
                });
            }
        }
        else {
            this.setState({
                offsetSize: this.moveX
            }, function () {
                _this.setState({
                    offsetSize: 0,
                    _isOpened: false
                });
            });
        }
    };
    AtSwipeAction.prototype.render = function () {
        var _this = this;
        var _a = this.state, componentId = _a.componentId, offsetSize = _a.offsetSize;
        var options = this.props.options;
        var rootClass = classnames_1["default"]('at-swipe-action', this.props.className);
        return (react_1["default"].createElement(components_1.View, { id: "swipeAction-" + componentId, className: rootClass, style: {
                width: this.eleWidth + "px"
            } },
            react_1["default"].createElement(components_1.MovableArea, { className: 'at-swipe-action__area', style: {
                    width: this.eleWidth + this.maxOffsetSize + "px",
                    transform: "translate(-" + this.maxOffsetSize + "px, 0)"
                } },
                react_1["default"].createElement(components_1.MovableView, { className: 'at-swipe-action__content', direction: 'horizontal', damping: 50, x: offsetSize, onTouchEnd: this.onTouchEnd, onChange: this.onChange, style: {
                        width: this.eleWidth + "px",
                        left: this.maxOffsetSize + "px"
                    } },
                    this.props.children,
                    Array.isArray(options) && options.length > 0 ? (react_1["default"].createElement(index_1["default"], { options: options, componentId: componentId, customStyle: {
                            transform: "translate(" + this.maxOffsetSize + "px, 0)",
                            opacity: 1
                        } }, options.map(function (item, key) { return (react_1["default"].createElement(components_1.View, { key: item.text + "-" + key, style: item.style, onClick: function (e) { return _this.handleClick(item, key, e); }, className: classnames_1["default"]('at-swipe-action__option', item.className) },
                        react_1["default"].createElement(components_1.Text, { className: 'option__text' }, item.text))); }))) : null))));
    };
    return AtSwipeAction;
}(react_1["default"].Component));
exports["default"] = AtSwipeAction;
AtSwipeAction.defaultProps = {
    options: [],
    isOpened: false,
    disabled: false,
    autoClose: false,
    maxDistance: 0,
    areaWidth: 0
};
AtSwipeAction.propTypes = {
    isOpened: prop_types_1["default"].bool,
    disabled: prop_types_1["default"].bool,
    autoClose: prop_types_1["default"].bool,
    options: prop_types_1["default"].arrayOf(prop_types_1["default"].shape({
        text: prop_types_1["default"].string,
        style: prop_types_1["default"].oneOfType([prop_types_1["default"].object, prop_types_1["default"].string]),
        className: prop_types_1["default"].oneOfType([
            prop_types_1["default"].object,
            prop_types_1["default"].string,
            prop_types_1["default"].array
        ])
    })),
    onClick: prop_types_1["default"].func,
    onOpened: prop_types_1["default"].func,
    onClosed: prop_types_1["default"].func
};
//# sourceMappingURL=index.js.map