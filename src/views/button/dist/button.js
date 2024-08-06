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
var ButtonPreview = /** @class */ (function (_super) {
    __extends(ButtonPreview, _super);
    function ButtonPreview() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            buttons: [{
                    text: '按钮',
                    type: 'primary'
                }]
        };
        return _this;
    }
    ButtonPreview.prototype.connected = function () {
        console.log('button page connected===');
    };
    ButtonPreview.prototype.disconnected = function () {
        console.log('button page disconnected===');
    };
    ButtonPreview.prototype.adopted = function () {
        console.log('button page adopted===');
    };
    ButtonPreview.prototype.handleClick = function (args) {
        console.log('args===', args);
    };
    ButtonPreview.prototype.addClick = function () {
        this.setState({
            buttons: this.state.buttons.concat([{
                    text: '按钮',
                    type: 'danger'
                }])
        });
    };
    ButtonPreview.prototype.render = function () {
        var buttons = this.state.buttons;
        return ("<es-preview-content title=\"\u6309\u94AE\" description=\"\u6309\u94AE\u662F\u4E00\u79CD\u547D\u4EE4\u7EC4\u4EF6\uFF0C\u53EF\u53D1\u8D77\u4E00\u4E2A\u5373\u65F6\u64CD\u4F5C\u3002\">\n                <es-preview-demo title=\"\u57FA\u672C\u7528\u6CD5\" description=\"\u6309\u94AE\u5206\u4E3A \u4E3B\u8981\u6309\u94AE\u3001\u6B21\u8981\u6309\u94AE\u3001\u865A\u7EBF\u6309\u94AE\u3001\u7EBF\u5F62\u6309\u94AE\u548C\u6587\u672C\u6309\u94AE\u4E94\u79CD\u3002\">\n                    <es-button type=\"primary\" >primary</es-button>\n                    <es-button type=\"secondary\" >secondary</es-button>\n                    <es-button type=\"dashed\">dashed</es-button>\n                    <es-button type=\"outline\">outline</es-button>\n                    <es-button type=\"text\">text</es-button> \n                </es-preview-demo>\n\n\n                <es-preview-demo title=\"\u6309\u94AE\u5F62\u72B6\" description=\"Button \u6709\u591A\u79CD\u5F62\u72B6\uFF0Csquare - \u957F\u65B9\u5F62 (\u9ED8\u8BA4), circle - \u5706\u5F62, round - \u5168\u5706\u89D2\u3002\">\n                    <es-button type=\"default\"  >default</es-button>\n                    <es-button type=\"primary\" shape='circle'>circle</es-button>\n                    <es-button type=\"primary\" shape='round'>round</es-button>\n                    <es-button type='primary'>Primary</es-button>\n                </es-preview-demo>\n\n\n                <es-preview-demo title=\"\u6309\u94AE\u5C3A\u5BF8\" description=\"\u6309\u94AE\u5206\u4E3A\uFF1A\u8FF7\u4F60\u3001\u5C0F\u3001\u4E2D\u3001\u5927\uFF0C\u56DB\u79CD\u5C3A\u5BF8\u3002\u9AD8\u5EA6\u5206\u522B\u4E3A\uFF1A24px/28px/32px/36px\u3002\u63A8\u8350\u53CA\u9ED8\u8BA4\u4E3A\u5C3A\u5BF8\u300C\u4E2D\u300D\u3002\u53EF\u5728\u4E0D\u540C\u573A\u666F\u53CA\u4E0D\u540C\u4E1A\u52A1\u9700\u6C42\u9009\u62E9\u9002\u5408\u5C3A\u5BF8\u3002\">\n                    <es-button type=\"default\" size=\"mini\">mini</es-button>\n                    <es-button type=\"primary\" size=\"small\">small</es-button>\n                    <es-button type=\"primary\" size=\"default\">default</es-button>\n                    <es-button type=\"primary\" size=\"large\">large</es-button>\n                </es-preview-demo>\n\n                <es-preview-demo title=\"\u6309\u94AE\u72B6\u6001\" description=\"\u6309\u94AE\u72B6\u6001\u5206\u4E3A \u8B66\u544A\uFF0C\u5371\u9669\uFF0C\u6210\u529F \u4E09\u79CD\uFF0C\u53EF\u4EE5\u4E0E\u6309\u94AE\u7C7B\u578B\u540C\u65F6\u751F\u6548\uFF0C\u4F18\u5148\u7EA7\u9AD8\u4E8E\u6309\u94AE\u7C7B\u578B\u3002\">\n                    <es-preview-item-group>\n                        <es-button type=\"default\" status=\"warning\">warning</es-button>\n                        <es-button type=\"primary\" status=\"danger\">danger</es-button>\n                        <es-button type=\"primary\" status=\"success\">success</es-button>\n                    </es-preview-item-group>\n\n                    <es-preview-item-group>\n                        <es-button type=\"default\" status=\"warning\">warning</es-button>\n                        <es-button type=\"primary\" status=\"danger\">danger</es-button>\n                        <es-button type=\"primary\" status=\"success\">success</es-button>\n                    </es-preview-item-group> \n\n                    <es-preview-item-group>\n                        <es-button type=\"default\" status=\"warning\">warning</es-button>\n                        <es-button type=\"primary\" status=\"danger\">danger</es-button>\n                        <es-button type=\"primary\" status=\"success\">success</es-button>\n                    </es-preview-item-group>    \n                </es-preview-demo>\n\n                <es-preview-demo title=\"\u957F\u6309\u94AE\" description=\"\u6309\u94AE\u5BBD\u5EA6\u968F\u7740\u5BB9\u5668\u5BBD\u5EA6\u8FDB\u884C\u9002\u914D\u3002\" width=\"50%\">\n                    <es-preview-item-group>\n                        <es-button type=\"primary\" long=\"long\">primary</es-button>\n                    </es-preview-item-group>\n                    <es-preview-item-group>\n                        <es-button type=\"secondary\" long=\"long\">secondary</es-button>\n                    </es-preview-item-group>\n                    <es-preview-item-group>\n                        <es-button type=\"dashed\" long=\"long\">dashed</es-button>\n                    </es-preview-item-group>\n                    <es-preview-item-group>\n                        <es-button type=\"outline\" long=\"long\">outline</es-button>\n                    </es-preview-item-group>\n                    <es-preview-item-group>\n                        <es-button type=\"text\" long=\"long\">text</es-button> \n                    </es-preview-item-group>\n                </es-preview-demo>\n\n            </es-preview-content>");
    };
    ButtonPreview.Name = 'ButtonPreview';
    ButtonPreview = __decorate([
        QianJi_1.tag('button-pre')
    ], ButtonPreview);
    return ButtonPreview;
}(QianJi_1.Components));
exports["default"] = ButtonPreview;
