import { Components } from 'QianJi';
import routes from '../router/index';

export default class App extends Components {
    state = {
        
    }

    connected() {
    //    console.log('routes===', routes)
    }

    render() {
        const { } = this.state;
        return (
            `<div class="app-container">
                <es-header></es-header>
                <div class="container-body">
                    <es-sidebar></es-sidebar>
                    <es-route routes=${JSON.stringify(routes)}>
                    </es-route>
                </div>
                
            </div>`
        )
    }
}