import { Components } from '../../frame/index';
import { styles } from '../../frame/decorators';

@styles(`
.my-menus {
    height: 40px;
    line-height: 40px;
    background-color: #1565a7;
}
`)
class Menu extends Components {
    state = {
        menus: [{
            path: '/home',
            name: '首页'
        }, {
            path: '/page',
            name: '页面'
        }, {
            path: '/page1',
            name: '页面1'
        }]
    }

    connected() {
        console.log('menu page connected===');
        
    }

    render() {
        const { menus } = this.state;
        return (
            `<div class="my-menus">
                ${
                    menus.map(item => {
                        return `<es-route-link href="${item.path}">${item.name}</es-route-link>`
                    }).join('')
                }
            </div>`
        )
    }
}

export default Menu;