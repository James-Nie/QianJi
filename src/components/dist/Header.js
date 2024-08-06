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
var Header = /** @class */ (function (_super) {
    __extends(Header, _super);
    function Header() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            menus: [{
                    path: '/',
                    name: '首页'
                }, {
                    path: '/page',
                    name: '页面'
                }]
        };
        return _this;
    }
    Header.prototype.connected = function () {
        // console.log('menu page connected==='); 
    };
    Header.prototype.render = function () {
        var menus = this.state.menus;
        return ("<div class=\"es-header\">\n                " + menus.map(function (item) {
            return "<es-route-link to=\"" + item.path + "\">" + item.name + "</es-route-link>";
        }).join('') + "\n            </div>");
    };
    Header.Name = 'Header';
    Header = __decorate([
        QianJi_1.styles("\n.es-header {\n    height: 40px;\n    line-height: 40px;\n    background-color: #1565a7;\n    color: #fff;\n    cursor: pointer;\n}\n")
    ], Header);
    return Header;
}(QianJi_1.Components));
exports["default"] = Header;
