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
exports.__esModule = true;
var QianJi_1 = require("QianJi");
var index_1 = require("../router/index");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {};
        return _this;
    }
    App.prototype.connected = function () {
        //    console.log('routes===', routes)
    };
    App.prototype.render = function () {
        var _a = this.state;
        return ("<div class=\"app-container\">\n                <es-header></es-header>\n                <div class=\"container-body\">\n                    <es-sidebar></es-sidebar>\n                    <es-route routes=" + JSON.stringify(index_1["default"]) + ">\n                    </es-route>\n                </div>\n                \n            </div>");
    };
    return App;
}(QianJi_1.Components));
exports["default"] = App;
