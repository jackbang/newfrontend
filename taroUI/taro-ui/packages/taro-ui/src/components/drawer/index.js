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
var index_1 = require("../list/index");
var index_2 = require("../list/item/index");
var AtDrawer = /** @class */ (function (_super) {
    __extends(AtDrawer, _super);
    function AtDrawer(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            animShow: false,
            _show: props.show
        };
        return _this;
    }
    AtDrawer.prototype.componentDidMount = function () {
        var _show = this.state._show;
        if (_show)
            this.animShow();
    };
    AtDrawer.prototype.onItemClick = function (index) {
        this.props.onItemClick && this.props.onItemClick(index);
        this.animHide();
    };
    AtDrawer.prototype.onHide = function () {
        var _this = this;
        this.setState({ _show: false }, function () {
            _this.props.onClose && _this.props.onClose();
        });
    };
    AtDrawer.prototype.animHide = function () {
        var _this = this;
        this.setState({
            animShow: false
        });
        setTimeout(function () {
            _this.onHide();
        }, 300);
    };
    AtDrawer.prototype.animShow = function () {
        var _this = this;
        this.setState({ _show: true });
        setTimeout(function () {
            _this.setState({
                animShow: true
            });
        }, 200);
    };
    AtDrawer.prototype.onMaskClick = function () {
        this.animHide();
    };
    AtDrawer.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
        var show = nextProps.show;
        if (show !== this.state._show) {
            show ? this.animShow() : this.animHide();
        }
    };
    AtDrawer.prototype.render = function () {
        var _this = this;
        var _a = this.props, mask = _a.mask, width = _a.width, right = _a.right, items = _a.items;
        var _b = this.state, animShow = _b.animShow, _show = _b._show;
        var rootClassName = ['at-drawer'];
        var maskStyle = {
            display: mask ? 'block' : 'none',
            opacity: animShow ? 1 : 0
        };
        var listStyle = {
            width: width,
            transition: animShow
                ? 'all 225ms cubic-bezier(0, 0, 0.2, 1)'
                : 'all 195ms cubic-bezier(0.4, 0, 0.6, 1)'
        };
        var classObject = {
            'at-drawer--show': animShow,
            'at-drawer--right': right,
            'at-drawer--left': !right
        };
        return _show ? (react_1["default"].createElement(components_1.View, { className: classnames_1["default"](rootClassName, classObject, this.props.className) },
            react_1["default"].createElement(components_1.View, { className: 'at-drawer__mask', style: maskStyle, onClick: this.onMaskClick.bind(this) }),
            react_1["default"].createElement(components_1.View, { className: 'at-drawer__content', style: listStyle }, !!items && items.length ? (react_1["default"].createElement(index_1["default"], null, items.map(function (name, index) { return (react_1["default"].createElement(index_2["default"], { key: name + "-" + index, "data-index": index, onClick: _this.onItemClick.bind(_this, index), title: name, arrow: 'right' })); }))) : (this.props.children)))) : (react_1["default"].createElement(components_1.View, null));
    };
    return AtDrawer;
}(react_1["default"].Component));
exports["default"] = AtDrawer;
AtDrawer.defaultProps = {
    show: false,
    mask: true,
    width: '',
    right: false,
    items: []
};
AtDrawer.propTypes = {
    show: prop_types_1["default"].bool,
    mask: prop_types_1["default"].bool,
    width: prop_types_1["default"].string,
    items: prop_types_1["default"].arrayOf(prop_types_1["default"].string),
    onItemClick: prop_types_1["default"].func,
    onClose: prop_types_1["default"].func
};
//# sourceMappingURL=index.js.map