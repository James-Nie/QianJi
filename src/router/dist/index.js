"use strict";
exports.__esModule = true;
var router_1 = require("../../frame/router");
var routes = router_1.createRouter({
    baseUrl: '/app',
    mode: 'hash',
    routes: [
        {
            path: "",
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
