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
var PreviewDemo = /** @class */ (function (_super) {
    __extends(PreviewDemo, _super);
    function PreviewDemo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            title: '',
            description: ''
        };
        return _this;
    }
    PreviewDemo.prototype.connected = function () {
    };
    PreviewDemo.prototype.handleClick = function () {
    };
    PreviewDemo.prototype.render = function () {
        var _a = this.props, title = _a.title, description = _a.description, width = _a.width;
        return ("<div class=\"demo\" @click=\"handleClick\">\n                " + (title ? "<h2>" + title + "</h2>" : '') + "\n                " + (description ? "<description>" + description + "</description>" : '') + "\n                <section class=\"preview-demo\">\n                    <slot></slot>\n                </section>\n            </div>");
    };
    PreviewDemo.Name = 'preview-demo';
    PreviewDemo = __decorate([
        QianJi_1.styles("\n.preview-demo {\n    margin-top: 24px;\n    padding: 48px;\n    color: #282f38;\n    background-color: #fff;\n    border: 1px solid rgb(229, 230, 235);\n    border-radius: 2px 2px 0 0;\n}")
    ], PreviewDemo);
    return PreviewDemo;
}(QianJi_1.Components));
exports["default"] = PreviewDemo;
