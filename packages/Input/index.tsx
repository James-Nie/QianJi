import { prefix } from '../../frame/constant';
import { Components } from '../../frame/index';

export default class Input extends Components {
    static Name = 'Input';
    inputDom;

    connected() {
        this.inputDom = this.shadowRoot.querySelector('#input')
    }

    // input() {
    //     console.log(1111)
    //     this.$emit('input',  this.inputDom.value);
    // }

    change() {
        this.$emit('change',  this.inputDom.value);
    }

    render() {
        const { value, placeholder } = this.props;
        return `
            <span class="${prefix}input-wrapper">
                <input id="input" class="${prefix}input" @input="input" @change="change"></input>
            </span>
        `
    }
}