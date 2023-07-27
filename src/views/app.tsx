import { Components } from '../../frame/index';

export default class App extends Components {
    state = {
        
    }

    connected() {
       
    }

    render() {
        const { } = this.state;
        return (
            `<div class="container">
                <my-menu></my-menu>
                <div class="container-body">
                    <es-route path="/home">
                        <container-home></container-home>
                    </es-route>
                    <es-route path="/page">
                        <container-page></container-page>
                    </es-route>
                    <es-route path="/page1">
                        <container-page1></container-page1>
                    </es-route>
                </div>
                
            </div>`
        )
    }
}