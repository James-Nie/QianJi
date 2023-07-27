import { INNERPROPS, prefix, EventsTagMap, eventReg, propsReg } from './constant';

export default class Components extends HTMLElement {
    templateContent: string;
    styleContent: string;
    shadowRoot: ShadowRoot;
    state: any;
    
    constructor() {
        super();
    }

    render() { return '' }
    _styles() { return '' }
    initCore() {
        this.templateContent = this.render();
        this.shadowRoot = this.shadowRoot || this.attachShadow({
            mode: 'open'
        });

        if(this.shadowRoot.hasChildNodes()) {
            this.shadowRoot.innerHTML = '';
        }

        const childNode = getNodeFromString(this.templateContent);
        this.shadowRoot.appendChild(childNode);

        this.inertStyle();
    }

    private inertStyle(){
        this.styleContent = this._styles ? this._styles() : '';

        const style = document.createElement('style');
        style.innerHTML = this.styleContent;
        this.shadowRoot.appendChild(style);

        this.eventHandle(this.shadowRoot);
    }

    connected() { }
    connectedCallback() {
        this.initCore();
        this.connected();
    }

    disconnected() { }
    disconnectedCallback() {
        this.disconnected();
    }

    adopted() { }
    adoptedCallback() {
        console.log('adoptedCallback');
        this.adopted();
    }

    // 属性改变
    attributeChanged(name, oldValue, newValue) { }
    attributeChangedCallback(name: string, oldValue: string, newValue: string) {
        console.log('attributeChangedCallback', name, oldValue, newValue);
        this.attributeChanged(name, oldValue, newValue);
        this.initCore();
    }

    get props(): any {
        return getProps(this, propsReg);
    }

    set props(newV) {
        Object.keys(newV).forEach(attr => {
            this.setAttribute(attr, newV[attr]);
        })
    }

    setState (newState) {
        Object.keys(newState).forEach(key => {
            this.state[key] =  newState[key];
        })

        this.initCore();
    }

    private eventHandle = function (rootElement) {
        const _this = this;
        let container = rootElement.firstElementChild;
        while (container) {
            if(container.firstElementChild) {
                this.eventHandle(container)
            }
            const eventProps = getProps(container, eventReg);
            
            Object.keys(eventProps).forEach(eventKey => {
                const eventName = eventProps[eventKey];
                const tagName = eventKey.replace(/^@/g, '');
                if (eventName) {
                    container.addEventListener(tagName, (e) => {
                        const PROPS = getProps(e.currentTarget, propsReg)
                        if(_this[eventName]) {
                            _this[eventName].apply(_this, [e, PROPS])
                        }
                        
                    })
                }
            })
            container = container.nextElementSibling;
        }
    }

    // 标签元素向父页面传参
    public $emit = function(type: string, data?:any) {
        this.dispatchEvent(new CustomEvent(type, {
            detail: data,
            bubbles: true,
            cancelable: true,
        }));
    }

}

// 字符串转换为dom节点
function getNodeFromString(templateContent: string) {
    const { document } = window;
    const template = document.createElement('template');
    template.innerHTML = templateContent;
    return template.content.cloneNode(true);
}

function getProps(container, filter) {
    const attrNames = container.getAttributeNames();
    const attrs = {};
    attrNames.forEach((name) => {
        const flag = filter.test(name);
        if (!INNERPROPS.includes(name) && flag) {
            attrs[name] = container.getAttribute(name);
        }
    })
    return attrs;
}
