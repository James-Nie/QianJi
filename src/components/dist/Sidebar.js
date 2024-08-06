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
var Sidebar = /** @class */ (function (_super) {
    __extends(Sidebar, _super);
    function Sidebar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            siders: [{
                    path: '/Button',
                    name: '按钮 Button'
                }, {
                    path: '/Input',
                    name: '输入框 Input'
                }, {
                    path: '/Image',
                    name: '图片 Image'
                }]
        };
        return _this;
    }
    Sidebar.prototype.connected = function () {
        // console.log('menu page connected===');
    };
    Sidebar.prototype.render = function () {
        var siders = this.state.siders;
        return ("<div class=\"sider-bar\">\n                " + siders.map(function (item) {
            return "<es-route-link to=\"" + item.path + "\">\n                            <div class=\"sider-bar-item\">" + item.name + "</div>\n                        </es-route-link>";
        }).join('') + "\n            </div>");
    };
    Sidebar.Name = 'Sidebar';
    Sidebar = __decorate([
        QianJi_1.styles("\n    .sider-bar {\n        width: 260px;\n        padding: 4px 12px;\n        display: flex;\n        flex-direction: column;\n        height: 100%;\n        border-right: 1px solid #eee;\n    }\n        .sider-bar-item {\n            color: #ccc;\n            height: 40px;\n        }\n")
    ], Sidebar);
    return Sidebar;
}(QianJi_1.Components));
exports["default"] = Sidebar;
