import { Components, styles } from '../../../frame/index';

@styles(`
.preview-demo {
    margin-top: 24px;
    padding: 48px;
    color: #282f38;
    background-color: #fff;
    border: 1px solid rgb(229, 230, 235);
    border-radius: 2px 2px 0 0;
}`)

class PreviewDemo extends Components {
    static Name = 'preview-demo';

    state = {
        title: '',
        description: ''
    }

    connected() {
        
    }

    render() {
        const { title, description, width } = this.props;
        return (
            `<div class="demo" >
                ${
                    title ? `<h2>${title}</h2>`: ''
                }
                ${
                    description ? `<description>${description}</description>`: ''
                }
                <section class="preview-demo">
                    <slot></slot>
                </section>
            </div>`
        )
    }
}

export default PreviewDemo;