import { Components, tag } from 'QianJi';

@tag('input-pre')
export default class InputPreview extends Components {

    state = {
        commonts: [{
            time: new Date().toLocaleDateString(),
            content: '好啊哈好啊哈好啊哈好啊哈好啊哈'
        }],
        comment: ''
    }

    connected() {
        // console.log('home page connected===');
    }

    handleClick() {
        if(this.state.comment) {
            this.setState({
                commonts: this.state.commonts.concat([{
                    time: new Date().toLocaleDateString(),
                    content: this.state.comment
                }]),
                comment: ''
            })
        }
        
    }

    input(ev, args) {
        const { detail } = ev;
        console.log('input===', args)
    }

    change(ev, args) {
        const { detail } = ev;
        console.log('change===', ev, args)

    }

    render() {
        const { commonts } = this.state;
        return (
            `<es-preview-content title="输入框 Input" description="基本表单组件，并在原生控件基础上进行了功能扩展，可以组合使用。">
                <es-preview-demo title="基本用法" description="通过鼠标或键盘输入内容。">
                    <es-input @change="change" @input="input" placeholder='placeholder'></es-input>
                </es-preview-demo>
            </es-preview-content>`
        )
    }
}