"use strict";
exports.__esModule = true;
exports.tag = exports.styles = void 0;
function styles(value) {
    return function (target) {
        target.prototype._styles = function () {
            return value;
        };
    };
}
exports.styles = styles;
function tag(value) {
    console.log('tag===', value);
    return function (target) {
        customElements.define(value, target);
    };
}
exports.tag = tag;
