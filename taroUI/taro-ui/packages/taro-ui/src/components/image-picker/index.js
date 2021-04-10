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
// 生成 jsx 二维矩阵
var generateMatrix = function (files, col, showAddBtn) {
    var matrix = [];
    var length = showAddBtn ? files.length + 1 : files.length;
    var row = Math.ceil(length / col);
    for (var i = 0; i < row; i++) {
        if (i === row - 1) {
            // 最后一行数据加上添加按钮
            var lastArr = files.slice(i * col);
            if (lastArr.length < col) {
                if (showAddBtn) {
                    lastArr.push({ type: 'btn', uuid: utils_1.uuid() });
                }
                // 填补剩下的空列
                for (var j = lastArr.length; j < col; j++) {
                    lastArr.push({ type: 'blank', uuid: utils_1.uuid() });
                }
            }
            matrix.push(lastArr);
        }
        else {
            matrix.push(files.slice(i * col, (i + 1) * col));
        }
    }
    return matrix;
};
var ENV = taro_1["default"].getEnv();
var AtImagePicker = /** @class */ (function (_super) {
    __extends(AtImagePicker, _super);
    function AtImagePicker() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.chooseFile = function () {
            var _a = _this.props, _b = _a.files, files = _b === void 0 ? [] : _b, multiple = _a.multiple, count = _a.count, sizeType = _a.sizeType, sourceType = _a.sourceType;
            var filePathName = ENV === taro_1["default"].ENV_TYPE.ALIPAY ? 'apFilePaths' : 'tempFiles';
            // const count = multiple ? 99 : 1
            var params = {};
            if (multiple) {
                params.count = 99;
            }
            if (count) {
                params.count = count;
            }
            if (sizeType) {
                params.sizeType = sizeType;
            }
            if (sourceType) {
                params.sourceType = sourceType;
            }
            taro_1["default"].chooseImage(params)
                .then(function (res) {
                var targetFiles = res.tempFilePaths.map(function (path, i) { return ({
                    url: path,
                    file: res[filePathName][i]
                }); });
                var newFiles = files.concat(targetFiles);
                _this.props.onChange(newFiles, 'add');
            })["catch"](_this.props.onFail);
        };
        _this.handleImageClick = function (idx) {
            _this.props.onImageClick &&
                _this.props.onImageClick(idx, _this.props.files[idx]);
        };
        _this.handleRemoveImg = function (idx) {
            var _a = _this.props.files, files = _a === void 0 ? [] : _a;
            if (ENV === taro_1["default"].ENV_TYPE.WEB) {
                window.URL.revokeObjectURL(files[idx].url);
            }
            var newFiles = files.filter(function (_, i) { return i !== idx; });
            _this.props.onChange(newFiles, 'remove', idx);
        };
        return _this;
    }
    AtImagePicker.prototype.render = function () {
        var _this = this;
        var _a = this.props, className = _a.className, customStyle = _a.customStyle, files = _a.files, mode = _a.mode, _b = _a.length, length = _b === void 0 ? 4 : _b, _c = _a.showAddBtn, showAddBtn = _c === void 0 ? true : _c;
        var rowLength = length <= 0 ? 1 : length;
        // 行数
        var matrix = generateMatrix(files, rowLength, showAddBtn);
        var rootCls = classnames_1["default"]('at-image-picker', className);
        return (react_1["default"].createElement(components_1.View, { className: rootCls, style: customStyle }, matrix.map(function (row, i) { return (react_1["default"].createElement(components_1.View, { className: 'at-image-picker__flex-box', key: i + 1 }, row.map(function (item, j) {
            return item.url ? (react_1["default"].createElement(components_1.View, { className: 'at-image-picker__flex-item', key: i * length + j },
                react_1["default"].createElement(components_1.View, { className: 'at-image-picker__item' },
                    react_1["default"].createElement(components_1.View, { className: 'at-image-picker__remove-btn', onClick: _this.handleRemoveImg.bind(_this, i * length + j) }),
                    react_1["default"].createElement(components_1.Image, { className: 'at-image-picker__preview-img', mode: mode, src: item.url, onClick: _this.handleImageClick.bind(_this, i * length + j) })))) : (react_1["default"].createElement(components_1.View, { className: 'at-image-picker__flex-item', key: 'empty_' + i * length + j }, item.type === 'btn' && (react_1["default"].createElement(components_1.View, { className: 'at-image-picker__item at-image-picker__choose-btn', onClick: _this.chooseFile },
                react_1["default"].createElement(components_1.View, { className: 'add-bar' }),
                react_1["default"].createElement(components_1.View, { className: 'add-bar' })))));
        }))); })));
    };
    return AtImagePicker;
}(react_1["default"].Component));
exports["default"] = AtImagePicker;
AtImagePicker.defaultProps = {
    className: '',
    customStyle: '',
    files: [],
    mode: 'aspectFill',
    showAddBtn: true,
    multiple: false,
    length: 4,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onChange: function () { }
};
AtImagePicker.propTypes = {
    className: prop_types_1["default"].oneOfType([prop_types_1["default"].string, prop_types_1["default"].array]),
    customStyle: prop_types_1["default"].oneOfType([prop_types_1["default"].string, prop_types_1["default"].object]),
    files: prop_types_1["default"].array,
    mode: prop_types_1["default"].oneOf([
        'scaleToFill',
        'aspectFit',
        'aspectFill',
        'widthFix',
        'top',
        'bottom',
        'center',
        'left',
        'right',
        'top left',
        'top right',
        'bottom left',
        'bottom right'
    ]),
    showAddBtn: prop_types_1["default"].bool,
    multiple: prop_types_1["default"].bool,
    length: prop_types_1["default"].number,
    onChange: prop_types_1["default"].func,
    onImageClick: prop_types_1["default"].func,
    onFail: prop_types_1["default"].func,
    count: prop_types_1["default"].number,
    sizeType: prop_types_1["default"].array,
    sourceType: prop_types_1["default"].array
};
//# sourceMappingURL=index.js.map