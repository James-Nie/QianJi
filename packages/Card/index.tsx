import { Components, prefix } from 'QianJi';

export default class Card extends Components {
    static Name = 'Card';

    render() {
        const {title, content} = this.props;
        return `
            <div class="${prefix}card">
                <h2>${title}</h2>
                <div class="content">${content}</div>

                <slot></slot>
            </div>
        `
    }
}