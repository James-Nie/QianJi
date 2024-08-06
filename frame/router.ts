import { Components } from './index';
import { register } from './utils';
import { styles } from './decorators';

class Routes {
    path: string;
    element: any;
    children?: Routes[];
}

class RouteParams {
    baseUrl?: string;
    mode?: string;
    routes: Routes[];
}
export function createRouter(params: RouteParams) {
    function deep(routes: Routes[]) {
        let _routes = [];
        routes.forEach(route => {
            _routes.push({
                path: route.path,
                element: route.element
            });
            if(route.children && route.children.length) {
                _routes = _routes.concat(deep(route.children))
            }
        })
        return _routes;
    }

    let renderRoutes = deep(params.routes);
    
    return {
        baseUrl: params.baseUrl || '',
        mode: params.mode || 'hash',
        routes: renderRoutes
    };
}

export default class Route extends Components {
    static Name = 'Route';

    state = {
        activePath: '',
        baseUrl: '/',
        mode: 'hash',
        routes: []
    }

    initActivePath() {
        if(this.state.mode === 'hash') {
            this.setState({
                activePath: location.hash.replace('#/', '/')
            })
        } else {
            this.setState({
                activePath: location.pathname.replace(this.state.baseUrl, '')
            })
        }
    }

    connected(): void {
        window.addEventListener('hashchange', ()=>{
            this.setState({
                activePath: location.hash.replace('#/', '/')
            })
        })

        window.addEventListener('popstate', (event) => {
            console.log(event);
        })

        window.addEventListener('replaceState', (e) => {
            console.log('THEY DID IT AGAIN! replaceState 111111');
        });
        window.addEventListener('pushState', (e) => {
            this.setState({
                activePath: location.pathname.replace(this.state.baseUrl, '')
            })
        });
      
       const _routes = JSON.parse(this.props.routes);
       this.state.baseUrl = !_routes.baseUrl.startsWith('/') ? `/${_routes.baseUrl}`: _routes.baseUrl;
       this.state.mode = _routes.mode;
       this.state.routes = _routes.routes;

       window.sessionStorage.setItem('routeMode', this.state.mode);
       window.sessionStorage.setItem('routeBaseUrl', this.state.baseUrl);

       this.initActivePath();
    }

    render(): string {
        const activeRoute = this.state.routes.find(item => {
            return item.path === this.state.activePath;
        })

        let element = '';
        if(activeRoute && activeRoute.element) {
            element = `<${activeRoute.element}></${activeRoute.element}>`
        }
        
        return element;
    }
}

@styles(`
    .es-router-link {
        display: inline-block;
        padding: 0px 10px;
        text-align: center;
        cursor: pointer;
    }
    a {
        text-decoration: none;
        color: #ffffff;
    }
    a:hover {
        color: var(--es-color-text-1);
    }
`)
class RouteLink extends Components {
    handleClick(){
        const { to } = this.props;
        const baseUrl = window.sessionStorage.getItem('routeBaseUrl');
        const routeMode = window.sessionStorage.getItem('routeMode');
        if(routeMode === 'hash') {
            location.hash = `#${to}`;
        } else if(routeMode === 'history') {
            window.history.pushState({}, '', `${baseUrl}${to}`);
        }
        
    }

    render(): string {
        return `<span class="es-router-link" @click="handleClick">
            <slot></slot>
        </span>`
    }
}

register('es-route', Route);
register('es-route-link', RouteLink)