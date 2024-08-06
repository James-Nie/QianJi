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
var InputPreview = /** @class */ (function (_super) {
    __extends(InputPreview, _super);
    function InputPreview() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            commonts: [{
                    time: new Date().toLocaleDateString(),
                    content: '好啊哈好啊哈好啊哈好啊哈好啊哈'
                }],
            comment: ''
        };
        return _this;
    }
    InputPreview.prototype.connected = function () {
        // console.log('home page connected===');
    };
    InputPreview.prototype.handleClick = function () {
        if (this.state.comment) {
            this.setState({
                commonts: this.state.commonts.concat([{
                        time: new Date().toLocaleDateString(),
                        content: this.state.comment
                    }]),
                comment: ''
            });
        }
    };
    InputPreview.prototype.input = function (ev, args) {
        var detail = ev.detail;
        console.log('input===', args);
    };
    InputPreview.prototype.change = function (ev, args) {
        var detail = ev.detail;
        console.log('change===', ev, args);
    };
    InputPreview.prototype.render = function () {
        var commonts = this.state.commonts;
        return ("<es-preview-content title=\"\u8F93\u5165\u6846 Input\" description=\"\u57FA\u672C\u8868\u5355\u7EC4\u4EF6\uFF0C\u5E76\u5728\u539F\u751F\u63A7\u4EF6\u57FA\u7840\u4E0A\u8FDB\u884C\u4E86\u529F\u80FD\u6269\u5C55\uFF0C\u53EF\u4EE5\u7EC4\u5408\u4F7F\u7528\u3002\">\n                <es-preview-demo title=\"\u57FA\u672C\u7528\u6CD5\" description=\"\u901A\u8FC7\u9F20\u6807\u6216\u952E\u76D8\u8F93\u5165\u5185\u5BB9\u3002\">\n                    <es-input @change=\"change\" @input=\"input\" placeholder='placeholder'></es-input>\n                </es-preview-demo>\n            </es-preview-content>");
    };
    return InputPreview;
}(QianJi_1.Components));
exports["default"] = InputPreview;
