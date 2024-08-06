import { Components, prefix, styles } from 'QianJi';

@styles(`
.es-header {
    height: 40px;
    line-height: 40px;
    background-color: #1565a7;
    color: #fff;
    cursor: pointer;
}
`)

class Header extends Components {
    static Name = 'Header';

    state = {
        menus: [{
            path: '/',
            name: '首页'
        }, {
            path: '/page',
            name: '页面'
        }]
    }

    connected() {
        // console.log('menu page connected==='); 
    }

    render() {
        const { menus } = this.state;
        return (
            `<div class="es-header">
                ${
                    menus.map(item => {
                        return `<es-route-link to="${item.path}">${item.name}</es-route-link>`
                    }).join('')
                }
            </div>`
        )
    }
}

export default Header;