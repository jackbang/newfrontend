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
var index_1 = require("../button/index");
var MIN_MAXPAGE = 1;
var getMaxPage = function (maxPage) {
    if (maxPage === void 0) { maxPage = 0; }
    if (maxPage <= 0)
        return MIN_MAXPAGE;
    return maxPage;
};
var createPickerRange = function (max) {
    var range = new Array(max).fill(0).map(function (_val, index) { return index + 1; });
    return range;
};
var AtPagination = /** @class */ (function (_super) {
    __extends(AtPagination, _super);
    function AtPagination(props) {
        var _this = _super.call(this, props) || this;
        var _a = _this.props, current = _a.current, _b = _a.pageSize, pageSize = _b === void 0 ? 20 : _b, total = _a.total;
        var maxPage = getMaxPage(Math.ceil(total / pageSize));
        _this.state = {
            currentPage: current || 1,
            maxPage: maxPage,
            pickerRange: createPickerRange(maxPage)
        };
        return _this;
    }
    AtPagination.prototype.onPrev = function () {
        var currentPage = this.state.currentPage;
        var originCur = currentPage;
        currentPage -= 1;
        currentPage = Math.max(1, currentPage);
        if (originCur === currentPage)
            return;
        this.props.onPageChange &&
            this.props.onPageChange({ type: 'prev', current: currentPage });
        this.setState({ currentPage: currentPage });
    };
    AtPagination.prototype.onNext = function () {
        var currentPage = this.state.currentPage;
        var originCur = currentPage;
        var maxPage = this.state.maxPage;
        currentPage += 1;
        currentPage = Math.min(maxPage, currentPage);
        if (originCur === currentPage)
            return;
        this.props.onPageChange &&
            this.props.onPageChange({ type: 'next', current: currentPage });
        this.setState({ currentPage: currentPage });
    };
    AtPagination.prototype.UNSAFE_componentWillReceiveProps = function (props) {
        var total = props.total, _a = props.pageSize, pageSize = _a === void 0 ? 20 : _a, current = props.current;
        var maxPage = getMaxPage(Math.ceil(total / pageSize));
        if (maxPage !== this.state.maxPage) {
            this.setState({
                maxPage: maxPage,
                pickerRange: createPickerRange(maxPage)
            });
        }
        if (typeof current === 'number' && current !== this.state.currentPage) {
            this.setState({ currentPage: current });
        }
    };
    // onPickerChange (evt) {
    //   const { value } = evt.detail
    //   const current = +value + 1
    //   if (current === this.state.currentPage) return
    //   this.props.onPageChange && this.props.onPageChange({ type: 'pick', current })
    //   this.setState({
    //     currentPage: current,
    //   })
    // }
    AtPagination.prototype.render = function () {
        var _a = this.props, icon = _a.icon, 
        // pickerSelect,
        customStyle = _a.customStyle;
        var _b = this.state, currentPage = _b.currentPage, maxPage = _b.maxPage
        // pickerRange,
        ;
        var rootClassName = ['at-pagination'];
        var prevDisabled = maxPage === MIN_MAXPAGE || currentPage === 1;
        var nextDisabled = maxPage === MIN_MAXPAGE || currentPage === maxPage;
        var classObject = {
            'at-pagination--icon': icon
        };
        return (react_1["default"].createElement(components_1.View, { className: classnames_1["default"](rootClassName, classObject, this.props.className), style: customStyle },
            react_1["default"].createElement(components_1.View, { className: 'at-pagination__btn-prev' },
                icon && (react_1["default"].createElement(index_1["default"], { onClick: this.onPrev.bind(this), size: 'small', disabled: prevDisabled },
                    react_1["default"].createElement(components_1.Text, { className: 'at-icon at-icon-chevron-left' }))),
                !icon && (react_1["default"].createElement(index_1["default"], { onClick: this.onPrev.bind(this), size: 'small', disabled: prevDisabled }, "\u4E0A\u4E00\u9875"))),
            react_1["default"].createElement(components_1.View, { className: 'at-pagination__number' },
                react_1["default"].createElement(components_1.Text, { className: 'at-pagination__number-current' }, currentPage),
                "/",
                maxPage),
            react_1["default"].createElement(components_1.View, { className: 'at-pagination__btn-next' },
                icon && (react_1["default"].createElement(index_1["default"], { onClick: this.onNext.bind(this), size: 'small', disabled: nextDisabled },
                    react_1["default"].createElement(components_1.Text, { className: 'at-icon at-icon-chevron-right' }))),
                !icon && (react_1["default"].createElement(index_1["default"], { onClick: this.onNext.bind(this), size: 'small', disabled: nextDisabled }, "\u4E0B\u4E00\u9875")))));
    };
    return AtPagination;
}(react_1["default"].Component));
exports["default"] = AtPagination;
AtPagination.defaultProps = {
    current: 1,
    total: 0,
    pageSize: 20,
    icon: false,
    customStyle: {}
};
AtPagination.propTypes = {
    current: prop_types_1["default"].number,
    total: prop_types_1["default"].number,
    pageSize: prop_types_1["default"].number,
    icon: prop_types_1["default"].bool,
    customStyle: prop_types_1["default"].oneOfType([prop_types_1["default"].object, prop_types_1["default"].string]),
    onPageChange: prop_types_1["default"].func
};
//# sourceMappingURL=index.js.map