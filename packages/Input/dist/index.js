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
var Input = /** @class */ (function (_super) {
    __extends(Input, _super);
    function Input() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            id: "input-" + Date.now(),
            value: ''
        };
        return _this;
    }
    Input.prototype.connected = function () {
        this.inputDom = this.shadowRoot.querySelector("#" + this.state.id);
    };
    Input.prototype.input = function () {
        this.$emit('input', this.inputDom.value);
    };
    Input.prototype.change = function () {
        console.log(this.inputDom.value);
        this.$emit('change', this.inputDom.value);
    };
    Input.prototype.render = function () {
        var _a = this.props, value = _a.value, placeholder = _a.placeholder;
        return "\n            <span class=\"" + QianJi_1.prefix + "input-wrapper\">\n                <input\n                    id=\"" + this.state.id + "\"\n                    class=\"" + QianJi_1.prefix + "input\"\n                    placeholder='" + placeholder + "'\n                    @input=\"input\"\n                    @change=\"change\"\n                ></input>\n            </span>\n        ";
    };
    Input.Name = 'Input';
    Input = __decorate([
        QianJi_1.styles("\n.es-input-wrapper {\n    outline: none;\n    appearance: none;\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n    border-radius: var(--border-radius-small);\n    color: var(--color-text-1);\n    padding-left: 12px;\n    padding-right: 12px;\n    font-size: 14px;\n    box-sizing: border-box;\n    transition: color .1s linear, border-color .1s linear, background-color .1s linear;\n    border: 1px solid transparent;\n    background-color: var(--color-fill-2);\n    display: inline-flex;\n    width: 100%;\n    position: relative;\n    align-items: center;\n}\n\n.es-input {\n    line-height: 1.5715;\n    outline: none;\n    appearance: none;\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n    width: 100%;\n    border-radius: var(--border-radius-small);\n    color: var(--color-text-1);\n    padding: 4px 12px;\n    font-size: 14px;\n    box-sizing: border-box;\n    transition: color .1s linear, border-color .1s linear, background-color .1s linear;\n    border: 1px solid transparent;\n    background-color: var(--color-fill-2)\n}\n.es-input, .es-input:focus {\n    border: none;\n    outline: none;\n}\n\n.es-input-wrapper:hover {\n    \n}\n")
    ], Input);
    return Input;
}(QianJi_1.Components));
exports["default"] = Input;
