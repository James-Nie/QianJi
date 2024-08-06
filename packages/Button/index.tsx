import { Components, prefix } from 'QianJi';

export default class Button extends Components {
    static Name = 'Button';

    connected() {
        
    }


    render() {
        const { text, type='primary', size='default', shape='', status='', long='' } = this.props;
        return `
            <div 
                class="${prefix}btn
                ${prefix}btn-${type}
                ${prefix}btn-size-${size}
                ${shape ? `${prefix}btn-shape-${shape}`: ''}
                ${status ? `${prefix}btn-status-${status}`: ''}
                ${long ? ` ${prefix}btn-long`: ''}">
                ${
                    text ? `<span>${text}</span>`: ''
                }
                <slot></slot>
            </div>
        `
    }
}