import { Components } from '../../../frame/index';

export default class Home extends Components {
    static Name = 'Home';

    state = {
        images: [
            'https://portal.zjzwfw.gov.cn/media/oss/image/BOPS/B9DC663BF45A4BD99EA6141F1E2134C1.jpg',
            'https://portal.zjzwfw.gov.cn/media/oss/image/BOPS/42185E03F796C12E7FDD824C5645E5C5.png'
        ],
        buttons: [{
            text: '按钮',
            type: 'primary'
        }],
    }

    connected() {
        // console.log('home page connected===');

    }

    handleClick(args: any) {
        console.log('args===', args)
    }

    addClick() {
        this.setState({
            buttons: this.state.buttons.concat([{
                text: '按钮',
                type: 'danger'
            }])
        })
    }


    render() {
        const { images, buttons } = this.state;
        return (
            `<div class="home">
                <es-card
                    title="This is Title"
                    content="国庆临近，祖国各地国旗飘扬、花团锦簇，节日氛围越加浓厚。25日，天安门广场上的主题大花果篮一经亮相，就吸引了众多游客拍照留念。"
                ></es-card>

                ${images.map(imgSrc => {
                    return `<es-image src="${imgSrc}" width="200" height="200"></es-image>`
                }).join('')}

                <br />
                ${buttons.map((item, index) => {
                    const { text, type } = item;
                    return `<es-button text="${text}" type="${type}" index=${index} @click="handleClick"></es-button>`
                }).join('')}
                <br />
                <es-button @click="addClick" style="display: block;margin-top: 10px;">添加</es-button>
                
            </div>`
        )
    }
}