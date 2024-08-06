import { Components, styles } from '../../../frame/index';

@styles(`
    .preview-content {
        padding: 48px;
        color: #282f38;
        background-color: #fff;
        border: 1px solid rgb(229, 230, 235);
        border-radius: 2px 2px 0 0;
    }
    .divider {
        margin-top: 20px;
        border-bottom: 1px solid var(--color-border);
    }
    description {
        color: var(--color-text-2);
    } 
`)

class PreviewContent extends Components {
    static Name = 'preview-content';

    state = {
        title: '',
        description: ''
    }

    connected() {
        
    }

    render() {
        const { title, description, width } = this.props;
        return (
            `<div class="preview-content" >
                ${
                    title ? `<h1>${title}</h1>`: ''
                }
                ${
                    description ? `<description>${description}</description>`: ''
                }
                <div class="divider"></div>
                <section>
                    <slot></slot>
                </section>
                
            </div>`
        )
    }
}

export default PreviewContent;