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
var Home = /** @class */ (function (_super) {
    __extends(Home, _super);
    function Home() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            images: [
                'https://portal.zjzwfw.gov.cn/media/oss/image/BOPS/B9DC663BF45A4BD99EA6141F1E2134C1.jpg',
                'https://portal.zjzwfw.gov.cn/media/oss/image/BOPS/42185E03F796C12E7FDD824C5645E5C5.png'
            ],
            buttons: [{
                    text: '按钮',
                    type: 'primary'
                }]
        };
        return _this;
    }
    Home.prototype.connected = function () {
        // console.log('home page connected===');
    };
    Home.prototype.handleClick = function (args) {
        console.log('args===', args);
    };
    Home.prototype.addClick = function () {
        this.setState({
            buttons: this.state.buttons.concat([{
                    text: '按钮',
                    type: 'danger'
                }])
        });
    };
    Home.prototype.render = function () {
        var _a = this.state, images = _a.images, buttons = _a.buttons;
        return ("<div class=\"home\">\n                <es-card\n                    title=\"This is Title\"\n                    content=\"\u56FD\u5E86\u4E34\u8FD1\uFF0C\u7956\u56FD\u5404\u5730\u56FD\u65D7\u98D8\u626C\u3001\u82B1\u56E2\u9526\u7C07\uFF0C\u8282\u65E5\u6C1B\u56F4\u8D8A\u52A0\u6D53\u539A\u300225\u65E5\uFF0C\u5929\u5B89\u95E8\u5E7F\u573A\u4E0A\u7684\u4E3B\u9898\u5927\u82B1\u679C\u7BEE\u4E00\u7ECF\u4EAE\u76F8\uFF0C\u5C31\u5438\u5F15\u4E86\u4F17\u591A\u6E38\u5BA2\u62CD\u7167\u7559\u5FF5\u3002\"\n                ></es-card>\n\n                " + images.map(function (imgSrc) {
            return "<es-image src=\"" + imgSrc + "\" width=\"200\" height=\"200\"></es-image>";
        }).join('') + "\n\n                <br />\n                " + buttons.map(function (item, index) {
            var text = item.text, type = item.type;
            return "<es-button text=\"" + text + "\" type=\"" + type + "\" index=" + index + " @click=\"handleClick\"></es-button>";
        }).join('') + "\n                <br />\n                <es-button @click=\"addClick\" style=\"display: block;margin-top: 10px;\">\u6DFB\u52A0</es-button>\n                \n            </div>");
    };
    Home.Name = 'Home';
    return Home;
}(QianJi_1.Components));
exports["default"] = Home;
