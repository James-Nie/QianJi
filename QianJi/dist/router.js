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
exports.createRouter = void 0;
var index_1 = require("./index");
var utils_1 = require("./utils");
var decorators_1 = require("./decorators");
var Routes = /** @class */ (function () {
    function Routes() {
    }
    return Routes;
}());
var RouteParams = /** @class */ (function () {
    function RouteParams() {
    }
    return RouteParams;
}());
function createRouter(params) {
    function deep(routes) {
        var _routes = [];
        routes.forEach(function (route) {
            _routes.push({
                path: route.path,
                element: route.element
            });
            if (route.children && route.children.length) {
                _routes = _routes.concat(deep(route.children));
            }
        });
        return _routes;
    }
    var renderRoutes = deep(params.routes);
    return {
        baseUrl: params.baseUrl || '',
        mode: params.mode || 'hash',
        routes: renderRoutes
    };
}
exports.createRouter = createRouter;
var Route = /** @class */ (function (_super) {
    __extends(Route, _super);
    function Route() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            activePath: '',
            baseUrl: '/',
            mode: 'hash',
            routes: []
        };
        return _this;
    }
    Route.prototype.initActivePath = function () {
        if (this.state.mode === 'hash') {
            this.setState({
                activePath: location.hash.replace('#/', '/')
            });
        }
        else {
            this.setState({
                activePath: location.pathname.replace(this.state.baseUrl, '')
            });
        }
    };
    Route.prototype.connected = function () {
        var _this = this;
        window.addEventListener('hashchange', function () {
            _this.setState({
                activePath: location.hash.replace('#/', '/')
            });
        });
        window.addEventListener('popstate', function (event) {
            console.log(event);
        });
        window.addEventListener('replaceState', function (e) {
            console.log('THEY DID IT AGAIN! replaceState 111111');
        });
        window.addEventListener('pushState', function (e) {
            _this.setState({
                activePath: location.pathname.replace(_this.state.baseUrl, '')
            });
        });
        var _routes = JSON.parse(this.props.routes);
        this.state.baseUrl = !_routes.baseUrl.startsWith('/') ? "/" + _routes.baseUrl : _routes.baseUrl;
        this.state.mode = _routes.mode;
        this.state.routes = _routes.routes;
        window.sessionStorage.setItem('routeMode', this.state.mode);
        window.sessionStorage.setItem('routeBaseUrl', this.state.baseUrl);
        this.initActivePath();
    };
    Route.prototype.render = function () {
        var _this = this;
        var activeRoute = this.state.routes.find(function (item) {
            return item.path === _this.state.activePath;
        });
        var element = '';
        if (activeRoute && activeRoute.element) {
            element = "<" + activeRoute.element + "></" + activeRoute.element + ">";
        }
        return element;
    };
    Route.Name = 'Route';
    return Route;
}(index_1.Components));
exports["default"] = Route;
var RouteLink = /** @class */ (function (_super) {
    __extends(RouteLink, _super);
    function RouteLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RouteLink.prototype.handleClick = function () {
        var to = this.props.to;
        var baseUrl = window.sessionStorage.getItem('routeBaseUrl');
        var routeMode = window.sessionStorage.getItem('routeMode');
        if (routeMode === 'hash') {
            location.hash = "#" + to;
        }
        else if (routeMode === 'history') {
            window.history.pushState({}, '', "" + baseUrl + to);
        }
    };
    RouteLink.prototype.render = function () {
        return "<span class=\"es-router-link\" @click=\"handleClick\">\n            <slot></slot>\n        </span>";
    };
    RouteLink = __decorate([
        decorators_1.styles("\n    .es-router-link {\n        display: inline-block;\n        padding: 0px 10px;\n        text-align: center;\n        cursor: pointer;\n    }\n    a {\n        text-decoration: none;\n        color: #ffffff;\n    }\n    a:hover {\n        color: var(--es-color-text-1);\n    }\n")
    ], RouteLink);
    return RouteLink;
}(index_1.Components));
utils_1.register('es-route', Route);
utils_1.register('es-route-link', RouteLink);
