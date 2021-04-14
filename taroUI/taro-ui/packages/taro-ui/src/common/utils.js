"use strict";
exports.__esModule = true;
exports.mergeStyle = exports.delayGetScrollOffset = exports.delayGetClientRect = exports.handleTouchScroll = exports.pxTransform = exports.isTest = exports.initTestEnv = exports.getEventDetail = exports.uuid = exports.delayQuerySelector = exports.delay = void 0;
var taro_1 = require("@tarojs/taro");
var ENV = taro_1["default"].getEnv();
function delay(delayTime) {
    if (delayTime === void 0) { delayTime = 25; }
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve();
        }, delayTime);
    });
}
exports.delay = delay;
function delayQuerySelector(selectorStr, delayTime) {
    if (delayTime === void 0) { delayTime = 500; }
    return new Promise(function (resolve) {
        var selector = taro_1["default"].createSelectorQuery();
        delay(delayTime).then(function () {
            selector
                .select(selectorStr)
                .boundingClientRect()
                .exec(function (res) {
                resolve(res);
            });
        });
    });
}
exports.delayQuerySelector = delayQuerySelector;
function delayGetScrollOffset(_a) {
    var _b = _a.delayTime, delayTime = _b === void 0 ? 500 : _b;
    return new Promise(function (resolve) {
        delay(delayTime).then(function () {
            taro_1["default"].createSelectorQuery()
                .selectViewport()
                .scrollOffset()
                .exec(function (res) {
                resolve(res);
            });
        });
    });
}
exports.delayGetScrollOffset = delayGetScrollOffset;
function delayGetClientRect(_a) {
    var selectorStr = _a.selectorStr, _b = _a.delayTime, delayTime = _b === void 0 ? 500 : _b;
    var selector = taro_1["default"].createSelectorQuery();
    return new Promise(function (resolve) {
        delay(delayTime).then(function () {
            selector
                .select(selectorStr)
                .boundingClientRect()
                .exec(function (res) {
                resolve(res);
            });
        });
    });
}
exports.delayGetClientRect = delayGetClientRect;
function uuid(len, radix) {
    if (len === void 0) { len = 8; }
    if (radix === void 0) { radix = 16; }
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    var value = [];
    var i = 0;
    radix = radix || chars.length;
    if (len) {
        // Compact form
        for (i = 0; i < len; i++)
            value[i] = chars[0 | (Math.random() * radix)];
    }
    else {
        // rfc4122, version 4 form
        var r 
        // rfc4122 requires these characters
        /* eslint-disable-next-line */
        = void 0;
        // rfc4122 requires these characters
        /* eslint-disable-next-line */
        value[8] = value[13] = value[18] = value[23] = '-';
        value[14] = '4';
        // Fill in random data.  At i==19 set the high bits of clock sequence as
        // per rfc4122, sec. 4.1.5
        for (i = 0; i < 36; i++) {
            if (!value[i]) {
                r = 0 | (Math.random() * 16);
                value[i] = chars[i === 19 ? (r & 0x3) | 0x8 : r];
            }
        }
    }
    return value.join('');
}
exports.uuid = uuid;
function getEventDetail(event) {
    var detail;
    switch (ENV) {
        case taro_1["default"].ENV_TYPE.WEB:
            detail = {
                pageX: event.pageX,
                pageY: event.pageY,
                clientX: event.clientX,
                clientY: event.clientY,
                offsetX: event.offsetX,
                offsetY: event.offsetY,
                x: event.x,
                y: event.y
            };
            break;
        case taro_1["default"].ENV_TYPE.WEAPP:
            detail = {
                pageX: event.touches[0].pageX,
                pageY: event.touches[0].pageY,
                clientX: event.touches[0].clientX,
                clientY: event.touches[0].clientY,
                offsetX: event.target.offsetLeft,
                offsetY: event.target.offsetTop,
                x: event.target.x,
                y: event.target.y
            };
            break;
        case taro_1["default"].ENV_TYPE.ALIPAY:
            detail = {
                pageX: event.target.pageX,
                pageY: event.target.pageY,
                clientX: event.target.clientX,
                clientY: event.target.clientY,
                offsetX: event.target.offsetLeft,
                offsetY: event.target.offsetTop,
                x: event.target.x,
                y: event.target.y
            };
            break;
        case taro_1["default"].ENV_TYPE.SWAN:
            detail = {
                pageX: event.changedTouches[0].pageX,
                pageY: event.changedTouches[0].pageY,
                clientX: event.target.clientX,
                clientY: event.target.clientY,
                offsetX: event.target.offsetLeft,
                offsetY: event.target.offsetTop,
                x: event.detail.x,
                y: event.detail.y
            };
            break;
        default:
            detail = {
                pageX: 0,
                pageY: 0,
                clientX: 0,
                clientY: 0,
                offsetX: 0,
                offsetY: 0,
                x: 0,
                y: 0
            };
            console.warn('getEventDetail暂未支持该环境');
            break;
    }
    return detail;
}
exports.getEventDetail = getEventDetail;
function initTestEnv() {
    if (process.env.NODE_ENV === 'test') {
        taro_1["default"].initPxTransform({
            designWidth: 750,
            deviceRatio: {
                '640': 2.34 / 2,
                '750': 1,
                '828': 1.81 / 2
            }
        });
    }
}
exports.initTestEnv = initTestEnv;
function isTest() {
    return process.env.NODE_ENV === 'test';
}
exports.isTest = isTest;
var scrollTop = 0;
function handleTouchScroll(flag) {
    if (ENV !== taro_1["default"].ENV_TYPE.WEB) {
        return;
    }
    if (flag) {
        scrollTop = document.documentElement.scrollTop;
        // 使body脱离文档流
        document.body.classList.add('at-frozen');
        // 把脱离文档流的body拉上去！否则页面会回到顶部！
        document.body.style.top = -scrollTop + "px";
    }
    else {
        document.body.style.top = '';
        document.body.classList.remove('at-frozen');
        document.documentElement.scrollTop = scrollTop;
    }
}
exports.handleTouchScroll = handleTouchScroll;
function pxTransform(size) {
    if (!size)
        return '';
    var designWidth = 750;
    var deviceRatio = {
        640: 2.34 / 2,
        750: 1,
        828: 1.81 / 2
    };
    return size / deviceRatio[designWidth] + "rpx";
}
exports.pxTransform = pxTransform;
function objectToString(style) {
    if (style && typeof style === 'object') {
        var styleStr_1 = '';
        Object.keys(style).forEach(function (key) {
            var lowerCaseKey = key.replace(/([A-Z])/g, '-$1').toLowerCase();
            styleStr_1 += lowerCaseKey + ":" + style[key] + ";";
        });
        return styleStr_1;
    }
    else if (style && typeof style === 'string') {
        return style;
    }
    return '';
}
/**
 * 合并 style
 * @param {Object|String} style1
 * @param {Object|String} style2
 * @returns {String}
 */
function mergeStyle(style1, style2) {
    if (style1 &&
        typeof style1 === 'object' &&
        style2 &&
        typeof style2 === 'object') {
        return Object.assign({}, style1, style2);
    }
    return objectToString(style1) + objectToString(style2);
}
exports.mergeStyle = mergeStyle;
//# sourceMappingURL=utils.js.map