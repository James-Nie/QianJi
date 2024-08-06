import { prefix } from '../../frame/constant';
import { Components, styles } from '../../frame/index';

@styles(`
.es-input-wrapper {
    outline: none;
    appearance: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    border-radius: var(--border-radius-small);
    color: var(--color-text-1);
    padding-left: 12px;
    padding-right: 12px;
    font-size: 14px;
    box-sizing: border-box;
    transition: color .1s linear, border-color .1s linear, background-color .1s linear;
    border: 1px solid transparent;
    background-color: var(--color-fill-2);
    display: inline-flex;
    width: 100%;
    position: relative;
    align-items: center;
}

.es-input {
    line-height: 1.5715;
    outline: none;
    appearance: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    width: 100%;
    border-radius: var(--border-radius-small);
    color: var(--color-text-1);
    padding: 4px 12px;
    font-size: 14px;
    box-sizing: border-box;
    transition: color .1s linear, border-color .1s linear, background-color .1s linear;
    border: 1px solid transparent;
    background-color: var(--color-fill-2)
}
.es-input, .es-input:focus {
    border: none;
    outline: none;
}

.es-input-wrapper:hover {
    
}
`)
export default class Input extends Components {
    static Name = 'Input';
    inputDom;

    state = {
        id: `input-` + Date.now(),
        value: ''
    }

    connected() {
        this.inputDom = this.shadowRoot.querySelector(`#${this.state.id}`);
    }

    input() {
        this.$emit('input',  this.inputDom.value);
    }

    change() {
        console.log(this.inputDom.value)
        this.$emit('change',  this.inputDom.value);
    }

    render() {
        const { value, placeholder } = this.props;
        return `
            <span class="${prefix}input-wrapper">
                <input
                    id="${this.state.id}"
                    class="${prefix}input"
                    placeholder='${placeholder}'
                    @input="input"
                    @change="change"
                ></input>
            </span>
        `
    }
}