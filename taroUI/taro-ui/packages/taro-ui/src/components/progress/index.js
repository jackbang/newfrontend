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
var AtProgress = /** @class */ (function (_super) {
    __extends(AtProgress, _super);
    function AtProgress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AtProgress.prototype.render = function () {
        var _a;
        var color = this.props.color;
        var percent = this.props.percent;
        var _b = this.props, strokeWidth = _b.strokeWidth, status = _b.status, isHidePercent = _b.isHidePercent;
        if (typeof percent !== 'number') {
            percent = 0;
        }
        if (percent < 0) {
            percent = 0;
        }
        else if (percent > 100) {
            percent = 100;
        }
        var rootClass = classnames_1["default"]('at-progress', (_a = {},
            _a["at-progress--" + status] = !!status,
            _a), this.props.className);
        var iconClass = classnames_1["default"]('at-icon', {
            'at-icon-close-circle': status === 'error',
            'at-icon-check-circle': status === 'success'
        });
        var progressStyle = {
            width: percent && +percent + "%",
            height: strokeWidth && +strokeWidth + "px",
            backgroundColor: color
        };
        return (react_1["default"].createElement(components_1.View, { className: rootClass },
            react_1["default"].createElement(components_1.View, { className: 'at-progress__outer' },
                react_1["default"].createElement(components_1.View, { className: 'at-progress__outer-inner' },
                    react_1["default"].createElement(components_1.View, { className: 'at-progress__outer-inner-background', style: progressStyle }))),
            !isHidePercent && (react_1["default"].createElement(components_1.View, { className: 'at-progress__content' }, !status || status === 'progress' ? (percent + "%") : (react_1["default"].createElement(components_1.Text, { className: iconClass }))))));
    };
    return AtProgress;
}(react_1["default"].Component));
exports["default"] = AtProgress;
AtProgress.propTypes = {
    color: prop_types_1["default"].string,
    status: prop_types_1["default"].string,
    percent: prop_types_1["default"].number,
    strokeWidth: prop_types_1["default"].number,
    isHidePercent: prop_types_1["default"].bool
};
//# sourceMappingURL=index.js.map