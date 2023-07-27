import { Components } from '../../frame/index';
import { prefix } from '../../frame/constant';

export default class List extends Components {
    static Name = 'List-data';
    constructor() {
        super();
    }

    render() {
        // const {  } = this.props;
        return (
            `<div class="${prefix}-list-data">
                <slot></slot>
            </div>`
        )
    }
}