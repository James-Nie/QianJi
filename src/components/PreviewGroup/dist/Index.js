"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var QianJi_1 = require("QianJi");
var PreviewItemGroup = /** @class */ (function (_super) {
    __extends(PreviewItemGroup, _super);
    function PreviewItemGroup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {};
        return _this;
    }
    PreviewItemGroup.prototype.connected = function () {
    };
    PreviewItemGroup.prototype.render = function () {
        return ("<div class=\"preview-item-group\">\n                <slot></slot>\n            </div>");
    };
    PreviewItemGroup.Name = 'preview-item-group';
    PreviewItemGroup = __decorate([
        QianJi_1.styles("\n.preview-item-group {\n    margin-bottom: 24px;\n    display: block;\n}")
    ], PreviewItemGroup);
    return PreviewItemGroup;
}(QianJi_1.Components));
exports["default"] = PreviewItemGroup;
