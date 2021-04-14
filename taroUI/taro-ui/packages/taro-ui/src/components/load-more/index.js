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
var index_1 = require("../activity-indicator/index");
var index_2 = require("../button/index");
var AtLoadMore = /** @class */ (function (_super) {
    __extends(AtLoadMore, _super);
    function AtLoadMore() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AtLoadMore.prototype.onClick = function () {
        this.props.onClick && this.props.onClick(arguments);
    };
    AtLoadMore.prototype.render = function () {
        var _a = this.props, className = _a.className, customStyle = _a.customStyle, loadingText = _a.loadingText, moreText = _a.moreText, status = _a.status, moreBtnStyle = _a.moreBtnStyle, noMoreTextStyle = _a.noMoreTextStyle, noMoreText = _a.noMoreText;
        var component = null;
        if (status === 'loading') {
            component = react_1["default"].createElement(index_1["default"], { mode: 'center', content: loadingText });
        }
        else if (status === 'more') {
            component = (react_1["default"].createElement(components_1.View, { className: 'at-load-more__cnt' },
                react_1["default"].createElement(index_2["default"], { full: true, onClick: this.onClick.bind(this), customStyle: moreBtnStyle }, moreText)));
        }
        else {
            component = (react_1["default"].createElement(components_1.Text, { className: 'at-load-more__tip', style: noMoreTextStyle }, noMoreText));
        }
        return (react_1["default"].createElement(components_1.View, { className: classnames_1["default"]('at-load-more', className), style: customStyle }, component));
    };
    return AtLoadMore;
}(react_1["default"].Component));
exports["default"] = AtLoadMore;
AtLoadMore.defaultProps = {
    customStyle: '',
    className: '',
    noMoreTextStyle: '',
    moreBtnStyle: '',
    status: 'more',
    loadingText: '加载中',
    moreText: '查看更多',
    noMoreText: '没有更多'
};
AtLoadMore.propTypes = {
    customStyle: prop_types_1["default"].oneOfType([prop_types_1["default"].object, prop_types_1["default"].string]),
    className: prop_types_1["default"].oneOfType([prop_types_1["default"].array, prop_types_1["default"].string]),
    noMoreTextStyle: prop_types_1["default"].oneOfType([prop_types_1["default"].object, prop_types_1["default"].string]),
    moreBtnStyle: prop_types_1["default"].oneOfType([prop_types_1["default"].object, prop_types_1["default"].string]),
    status: prop_types_1["default"].oneOf(['more', 'loading', 'noMore']),
    loadingText: prop_types_1["default"].string,
    moreText: prop_types_1["default"].string,
    noMoreText: prop_types_1["default"].string,
    onClick: prop_types_1["default"].func
};
//# sourceMappingURL=index.js.map