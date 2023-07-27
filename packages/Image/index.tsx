import { prefix } from '../../frame/constant';
import { Components } from '../../frame/index';

export default class Image extends Components {
    static Name = 'Image';

    render() {
        const { src } = this.props;
        const innerStyle = this.getInnerStyle();

        return (
            `<img class="${prefix}image" src="${src}" style="${innerStyle}">
            </img>`
        )
    }

    getInnerStyle() {
        let {width = '100%', height='100%'} = this.props;
        if (!width.includes('%')) {
            width = width +'px'
        }

        if (!height.includes('%')) {
            height = height +'px'
        }
        return `width: ${width}; height: ${height};`
    }
}