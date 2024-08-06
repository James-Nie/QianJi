
/**
 * 自定义组件注册
 * @param name 
 * @param Component 
 */
export function register(name, Component) {
    customElements.define(name, Component);
}

/**
 * 批量注册自定义组件
 * @param prefix 
 * @param components 
 */
export function install(prefix: string, components: Array<any>) {
    components.forEach(Item => {
        if (Item.Name && !customElements.get(Item.Name)) {
            register(`${prefix}${Item.Name.toLowerCase()}`, Item);
        }
    })
}


var _wr = function (type) {
    var orig = history[type];
    return function a() {
        var rv = orig.apply(this, arguments);
        var e = new Event(type);
        window.dispatchEvent(e);
        return rv;
    };
};
history.pushState = _wr('pushState');
history.replaceState = _wr('replaceState');
