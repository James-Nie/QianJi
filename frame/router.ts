import { Components } from './index';
import { register } from './utils';
import {styles} from './decorators';

export default class Route extends Components {
    state = {
        activePath: location.hash
    }

    connected(): void {
        window.addEventListener('hashchange', ()=>{
            this.setState({
                activePath: location.hash
            })
        })
    }

    render(): string {
        const { path } = this.props;
        let activePath = this.state.activePath.replace('#/', '/');
        
        return `${
            path === activePath ? '<slot></slot>' : ''
        }`
    }
}

@styles(`
    .es-router-link {
        display: inline-block;
        padding: 0px 10px;
        text-align: center;
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
        const { href } = this.props;
        location.hash = `#${href}`;
    }

    render(): string {
        return `<span class="es-router-link">
            <a href="javascript:void(0)" @click="handleClick">
                <slot></slot>
            </a>
        </span>`
    }
}

register('es-route', Route);
register('es-route-link', RouteLink)