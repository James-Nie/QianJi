# EasyFrame

基于原生Web Components规范封装的组件框架，旨在探索Web Components新特性及功能边界，其中封装了框架, 状态管理, 事件, 生命周期, 路由管理, 基于事件的组件传参

### 使用方式：

#### 开发一个组件
``` javascript

import { prefix } from '../../frame/constant';
import { Components } from '../../frame/index';

export default class Button extends Components {
    static Name = 'Button'; // 组件名称

    state = {

    }
    
    // 模板挂载完成事件
    connected() {
        
    }

    // 自定义事件
    handleClick() {
        this.$emit('handleClick', {
            data: this.props
        })
    }

    // 渲染模板封装
    render() {
        const { text, type='primary' } = this.props; //父组件传参
        return `
            <div class="${prefix}button-${type} ${prefix}button">
                ${
                    text ? `<span>${text}</span>`: ''
                }
                <slot></slot> // 插槽
            </div>
        `
    }
}

```

#### 使用组件

``` javascript
export default class Father extends Components {
    static Name = 'Father'; // 组件名称

    // 状态管理
    state = {
        count: 0
    }

    // 模板挂载完成事件
    connected() {
        
    }

    // 系统点击事件
    addClick(ev, args) {
        console.log(ev, args)

        this.setState({
            count: this.state.count + 1
        })
    }

    // 自定义事件接受数据
    handleClick() {
        const { detail } = ev; //数据
        
        console.log('detail==', detail)
    }

    // 渲染模板封装
    render() {
        const { count  } = this.state;
        return `
            <div>
                <div>${count}</div>
                <es-button @click="addClick" type="primary" @handleClick="">按钮</es-button>
            </div>
           
        `
    }
}
```

### 路由

``` javascript

...
render() {
    return `<div class="container">
        <es-route path="/">
            <container-home></container-home> // 页面组件名称
        </es-route>
        <es-route path="/page">
            <container-page></container-page>
        </es-route>
    </div>`
}
```