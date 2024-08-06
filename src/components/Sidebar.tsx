import { Components, prefix, styles } from 'QianJi';

@styles(`
    .sider-bar {
        width: 260px;
        padding: 4px 12px;
        display: flex;
        flex-direction: column;
        height: 100%;
        border-right: 1px solid #eee;
    }
        .sider-bar-item {
            color: #ccc;
            height: 40px;
        }
`)
class Sidebar extends Components {
    static Name = 'Sidebar';

    state = {
        siders: [{
            path: '/Button',
            name: '按钮 Button'
        }, {
            path: '/Input',
            name: '输入框 Input'
        }, {
            path: '/Image',
            name: '图片 Image'
        }]
    }

    connected() {
        // console.log('menu page connected===');

    }

    render() {
        const { siders } = this.state;
        return (
            `<div class="sider-bar">
                ${siders.map(item => {
                return `<es-route-link to="${item.path}">
                            <div class="sider-bar-item">${item.name}</div>
                        </es-route-link>`
            }).join('')
            }
            </div>`
        )
    }
}

export default Sidebar;