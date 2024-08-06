# QianJi

基于原生Web Components规范封装的组件框架，旨在探索Web Components新特性及功能边界，其中封装了框架, 状态管理, 事件, 生命周期, 路由管理, 基于事件的组件传参

### 使用方式：

#### 开发一个组件
``` javascript

import { Components, prefix, tag } from 'QianJi';

@tag('es-button')
export default class Button extends Components {
    static Name = 'Button'; // 组件名称

    // 渲染模板封装
    render() {
        const { text, type='primary' } = this.props; //父组件传参, 通过 this.props 取参
        return `
            <div class="${prefix}button-${type} ${prefix}button">
                ${
                    text ? `<span>${text}</span>`: ''
                }
            </div>
        `
    }
}


```

#### 使用组件

``` javascript
import { Components, prefix, tag } from 'QianJi';

@tag('es-home')
export default class Home extends Components {
    static Name = 'Home'; // 组件名称

    // 状态管理，双向绑定
    state = {
        count: 0
    }

    // 渲染模板封装
    render() {
        const { count  } = this.state;
        return `
            <div>
                <div>${count}</div>
                <es-button type="primary">按钮</es-button>
                <es-button type="primary">按钮</es-button>
            </div>
           
        `
    }
}

```

### 路由

``` javascript

// App.tsx
import { createRouter, tag } from "QianJi";

const routes = createRouter({
    baseUrl: '/app',
    mode: 'hash',
    routes: [
        {
            path: "",
            element: 'container-home', // 自定义组件名
            children: [{
                path: "/Button",
                element: 'button-pre',
            },{
                path: "/Input",
                element: 'input-pre',
            }]
        }
    ]
});

@tag('es-app')
export default class App extends Components {
    state = {
        
    }

    connected() {
    
    }

    render() {
        const { } = this.state;
        return (
            `<div class="app-container">
                <es-header></es-header>
                <div class="container-body">
                    <es-sidebar></es-sidebar>
                    <es-route routes=${JSON.stringify(routes)}></es-route>
                </div>
                
            </div>`
        )
    }
}
```


### 安装组件

``` javascript
// main.ts
import './src/views/app';
import './src/views/button';
...
import './src/index.css';

```

### 生命周期

``` javascript
import { Components } from "QianJi";

export default class MyComponent extends Components {
    static Name = 'MyComponent'; // 组件名称


    // 状态管理
    state = {
        count: 0
    }

    // 模板挂载完成事件，当自定义元素第一次被连接到文档 DOM 时被调用。
    connected() {
        console.log('connected')
        // 异步请求数据
        fetch('/api/xxx').then(res => {
            this.setState({
                count: res.count
            })
        })
    }

    // 组件卸载完成事件，当自定义元素与文档 DOM 断开连接时被调用。
    disconnected() {
        console.log('disconnected')
    }

    // 当自定义元素被移动到新文档时被调用。
    adopted() { 
        console.log('adopted')
    }

    // 当自定义元素的一个属性被增加、移除或更改时被调用。
    attributeChanged(){
        console.log('attributeChanged')
    }
    // 渲染模板封装
    render() {
        const { text, type='primary' } = this.props; //父组件传参
        return `
            <div class="${prefix}button-${type} ${prefix}button">
                ${
                    text? `<span>${text}</span>`: ''
                }
            </div>
        `
    }
}
```


### 事件处理

``` javascript
import { Components, prefix，tag } from 'QianJi';

@tag('es-button')
export default class Button extends Components {
    static Name = 'Button'; // 组件名称

    // 自定义事件
    handleClick() {
        this.$emit('handleClick', {
            data: this.props
        })
    }

    // 渲染模板封装
    render() {
        const { text, type='primary' } = this.props; //父组件传参, 通过 this.props 取参
        return `
            <div class="${prefix}button-${type} ${prefix}button" @click="handleClick">
                ${
                    text ? `<span>${text}</span>`: ''
                }
            </div>
        `
    }
}

```

``` javascript
import { Components, tag } from 'QianJi';

@tag('es-father')
export default class Father extends Components {
    static Name = 'Home'; // 组件名称

    // 状态管理，双向绑定
    state = {
        count: 0
    }

    // 自定义事件接受数据
    handleClick(ev, args) {
        const { detail } = ev; //数据
        
        // 更新状态
        this.setState({
            count: this.state.count + 1
        })
    }

    // 渲染模板封装
    render() {
        const { count  } = this.state;
        return `
            <div>
                <div>${count}</div>
                <es-button type="primary" @handleClick="handleClick">按钮</es-button>
            </div>
           
        `
    }
}

```

### 样式 + 插槽

``` javascript
import { Components, styles } from 'QianJi';

// 定义组件内部样式
@styles(`
.preview-demo {
    margin-top: 24px;
    padding: 48px;
    color: #282f38;
    background-color: #fff;
    border: 1px solid rgb(229, 230, 235);
    border-radius: 2px 2px 0 0;
}`)

class PreviewDemo extends Components {
    static Name = 'preview-demo';

    render() {
        const { title, description, width } = this.props;
        return (
            `<div class="demo">
                ${
                    title ? `<h2>${title}</h2>`: ''
                }
                ${
                    description ? `<description>${description}</description>`: ''
                }
                <section class="preview-demo">
                    <slot></slot> // 插槽定义位置
                </section>
            </div>`
        )
    }
}

```

###  使用插槽
``` javascript

render() {
    return (
        `<es-preview-demo title="基本用法" description="按钮分为 主要按钮、次要按钮、虚线按钮、线形按钮和文本按钮五种。">
            <es-button type="primary" >primary</es-button> 
        </es-preview-demo>
    `)
}
```

### 模板定义
``` javascript
import { Components, styles, tag } from 'QianJi';

@tag('es-header')
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

    render() {
        const { menus } = this.state;
        return (
            `<div class="es-header">
                ${
                    menus.length && menus.map(item => {
                        return `<es-route-link to="${item.path}">${item.name}</es-route-link>`
                    }).join('')
                }
            </div>`
        )
    }
}
```
