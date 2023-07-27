import { Components } from '../../../frame/index';

export default class Home extends Components {

    state = {
        commonts: [{
            time: new Date().toLocaleDateString(),
            content: '好啊哈好啊哈好啊哈好啊哈好啊哈'
        }],
        comment: ''
    }

    connected() {
        console.log('home page connected===');
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
        const { data } = ev;
        console.log('input===', ev, args)

        this.setState({
            comment: data
        })
    }

    change(ev, args) {
        const { detail } = ev;
        console.log('change===', ev, args)

        this.setState({
            comment: detail
        })
    }

    render() {
        const { commonts } = this.state;
        return (
            `<div>
                评论列表: 
                ${
                    commonts.map(item => {
                        return `<div style="margin: 10px;border-bottom: 1px solid;">
                            <div>时间: ${item.time}</div>
                            <div>评论内容: ${item.content}</div>
                        </div>`
                    }).join('')
                }
                <br />
                <es-input @change="change"></es-input> <es-button @click="handleClick">提交</es-button>
            </div>`
        )
    }
}