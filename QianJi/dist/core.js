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
var constant_1 = require("./constant");
var Components = /** @class */ (function (_super) {
    __extends(Components, _super);
    function Components() {
        var _this_1 = _super.call(this) || this;
        // 事件处理
        _this_1.eventHandle = function (rootElement) {
            var _this = this;
            var container = rootElement.firstElementChild;
            var _loop_1 = function () {
                if (container.firstElementChild) {
                    this_1.eventHandle(container);
                }
                var eventProps = getProps(container, constant_1.eventReg);
                Object.keys(eventProps).forEach(function (eventKey) {
                    var eventName = eventProps[eventKey];
                    var tagName = eventKey.replace(/^@/g, '');
                    if (eventName) {
                        container.addEventListener(tagName, function (e) {
                            var PROPS = getProps(e.currentTarget, constant_1.propsReg);
                            if (_this[eventName]) {
                                _this[eventName].apply(_this, [PROPS, e]);
                            }
                        });
                    }
                });
                container = container.nextElementSibling;
            };
            var this_1 = this;
            while (container) {
                _loop_1();
            }
        };
        // 标签元素向父页面传参
        _this_1.$emit = function (type, data) {
            this.dispatchEvent(new CustomEvent(type, {
                detail: data,
                bubbles: true,
                cancelable: true
            }));
        };
        return _this_1;
    }
    Components.prototype.render = function () { return ''; };
    Components.prototype._styles = function () { return ''; };
    Components.prototype.initCore = function () {
        this.templateContent = this.render();
        this.shadowRoot = this.shadowRoot || this.attachShadow({
            mode: 'open'
        });
        if (this.shadowRoot.hasChildNodes()) {
            this.shadowRoot.innerHTML = '';
        }
        var childNode = getNodeFromString(this.templateContent);
        this.shadowRoot.appendChild(childNode);
        this.inertStyle();
    };
    Components.prototype.inertStyle = function () {
        this.styleContent = this._styles ? this._styles() : '';
        var style = document.createElement('style');
        style.innerHTML = this.styleContent;
        this.shadowRoot.appendChild(style);
        this.eventHandle(this.shadowRoot);
    };
    Components.prototype.connected = function () { };
    Components.prototype.connectedCallback = function () {
        this.initCore();
        this.connected();
    };
    Components.prototype.disconnected = function () { };
    Components.prototype.disconnectedCallback = function () {
        this.disconnected();
    };
    Components.prototype.adopted = function () { };
    Components.prototype.adoptedCallback = function () {
        console.log('adoptedCallback');
        this.adopted();
    };
    // 属性改变
    Components.prototype.attributeChanged = function (name, oldValue, newValue) { };
    Components.prototype.attributeChangedCallback = function (name, oldValue, newValue) {
        console.log('attributeChangedCallback', name, oldValue, newValue);
        this.attributeChanged(name, oldValue, newValue);
        this.initCore();
    };
    Object.defineProperty(Components.prototype, "props", {
        get: function () {
            return getProps(this, constant_1.propsReg);
        },
        set: function (newV) {
            var _this_1 = this;
            Object.keys(newV).forEach(function (attr) {
                _this_1.setAttribute(attr, newV[attr]);
            });
        },
        enumerable: false,
        configurable: true
    });
    Components.prototype.setState = function (newState) {
        var _this_1 = this;
        Object.keys(newState).forEach(function (key) {
            _this_1.state[key] = newState[key];
        });
        this.initCore();
    };
    return Components;
}(HTMLElement));
exports["default"] = Components;
// 字符串转换为dom节点
function getNodeFromString(templateContent) {
    var document = window.document;
    var template = document.createElement('template');
    template.innerHTML = templateContent;
    return template.content.cloneNode(true);
}
// props获取
function getProps(container, filter) {
    var attrNames = container.getAttributeNames();
    var attrs = {};
    attrNames.forEach(function (name) {
        var flag = filter.test(name);
        if (!constant_1.INNERPROPS.includes(name) && flag) {
            attrs[name] = container.getAttribute(name);
        }
    });
    return attrs;
}
