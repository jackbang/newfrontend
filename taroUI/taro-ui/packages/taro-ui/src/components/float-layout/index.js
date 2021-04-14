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
var AtFloatLayout = /** @class */ (function (_super) {
    __extends(AtFloatLayout, _super);
    function AtFloatLayout(props) {
        var _this = _super.call(this, props) || this;
        _this.handleClose = function () {
            if (typeof _this.props.onClose === 'function') {
                // TODO: Fix typings
                // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                // @ts-ignore
                _this.props.onClose();
            }
        };
        _this.close = function () {
            _this.setState({
                _isOpened: false
            }, _this.handleClose);
        };
        _this.handleTouchMove = function (e) {
            e.stopPropagation();
        };
        var isOpened = props.isOpened;
        _this.state = {
            _isOpened: isOpened
        };
        return _this;
    }
    AtFloatLayout.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
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
    AtFloatLayout.prototype.render = function () {
        var _isOpened = this.state._isOpened;
        var _a = this.props, title = _a.title, scrollY = _a.scrollY, scrollX = _a.scrollX, scrollTop = _a.scrollTop, scrollLeft = _a.scrollLeft, upperThreshold = _a.upperThreshold, lowerThreshold = _a.lowerThreshold, scrollWithAnimation = _a.scrollWithAnimation;
        var rootClass = classnames_1["default"]('at-float-layout', {
            'at-float-layout--active': _isOpened
        }, this.props.className);
        return (react_1["default"].createElement(components_1.View, { className: rootClass, onTouchMove: this.handleTouchMove },
            react_1["default"].createElement(components_1.View, { onClick: this.close, className: 'at-float-layout__overlay' }),
            react_1["default"].createElement(components_1.View, { className: 'at-float-layout__container layout' },
                title ? (react_1["default"].createElement(components_1.View, { className: 'layout-header' },
                    react_1["default"].createElement(components_1.Text, { className: 'layout-header__title' }, title),
                    react_1["default"].createElement(components_1.View, { className: 'layout-header__btn-close', onClick: this.close }))) : null,
                react_1["default"].createElement(components_1.View, { className: 'layout-body' },
                    react_1["default"].createElement(components_1.ScrollView, { scrollY: scrollY, scrollX: scrollX, scrollTop: scrollTop, scrollLeft: scrollLeft, upperThreshold: upperThreshold, lowerThreshold: lowerThreshold, scrollWithAnimation: scrollWithAnimation, 
                        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                        // @ts-ignore // TODO: Fix typings
                        onScroll: this.props.onScroll, 
                        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                        // @ts-ignore // TODO: Fix typings
                        onScrollToLower: this.props.onScrollToLower, 
                        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                        // @ts-ignore // TODO: Fix typings
                        onScrollToUpper: this.props.onScrollToUpper, className: 'layout-body__content' }, this.props.children)))));
    };
    return AtFloatLayout;
}(react_1["default"].Component));
exports["default"] = AtFloatLayout;
AtFloatLayout.defaultProps = {
    title: '',
    isOpened: false,
    scrollY: true,
    scrollX: false,
    scrollWithAnimation: false
};
AtFloatLayout.propTypes = {
    title: prop_types_1["default"].string,
    isOpened: prop_types_1["default"].bool,
    scrollY: prop_types_1["default"].bool,
    scrollX: prop_types_1["default"].bool,
    scrollTop: prop_types_1["default"].number,
    scrollLeft: prop_types_1["default"].number,
    upperThreshold: prop_types_1["default"].number,
    lowerThreshold: prop_types_1["default"].number,
    scrollWithAnimation: prop_types_1["default"].bool,
    onClose: prop_types_1["default"].func,
    onScroll: prop_types_1["default"].func,
    onScrollToLower: prop_types_1["default"].func,
    onScrollToUpper: prop_types_1["default"].func
};
//# sourceMappingURL=index.js.map