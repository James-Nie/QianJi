import { Components, prefix, styles } from 'QianJi';

@styles(`
.preview-item-group {
    margin-bottom: 24px;
    display: block;
}`)

class PreviewItemGroup extends Components {
    static Name = 'preview-item-group';

    state = {
        
    }

    connected() {
        
    }

    render() {
        return (
            `<div class="preview-item-group">
                <slot></slot>
            </div>`
        )
    }
}

export default PreviewItemGroup;