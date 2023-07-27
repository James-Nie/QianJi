import { prefix } from '../../frame/constant';
import { Components } from '../../frame/index';

export default class Button extends Components {
    static Name = 'Button';

    connected() {
        
    }


    render() {
        const { text, type='primary' } = this.props;
        return `
            <div class="${prefix}button-${type} ${prefix}button">
                ${
                    text ? `<span>${text}</span>`: ''
                }
                <slot></slot>
            </div>
        `
    }
}