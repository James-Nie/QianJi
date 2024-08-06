"use strict";
exports.__esModule = true;
var QianJi_1 = require("QianJi");
var routes = QianJi_1.createRouter({
    baseUrl: '/app',
    mode: 'hash',
    routes: [
        {
            path: "/",
            element: 'container-home',
            children: [{
                    path: "/Button",
                    element: 'button-pre'
                }, {
                    path: "/Input",
                    element: 'input-pre'
                }]
        }
    ]
});
exports["default"] = routes;
