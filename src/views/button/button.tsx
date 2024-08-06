import { Components, tag } from 'QianJi';

@tag('button-pre')
export default class ButtonPreview extends Components {
    static Name = 'ButtonPreview';

    state = {
        buttons: [{
            text: '按钮',
            type: 'primary'
        }],
    }

    connected() {
        console.log('button page connected===');
    }

    disconnected() {
        console.log('button page disconnected===');
    }

    adopted() {
        console.log('button page adopted===');
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
        const { buttons } = this.state;
        
        return (
            `<es-preview-content title="按钮" description="按钮是一种命令组件，可发起一个即时操作。">
                <es-preview-demo title="基本用法" description="按钮分为 主要按钮、次要按钮、虚线按钮、线形按钮和文本按钮五种。">
                    <es-button type="primary" >primary</es-button>
                    <es-button type="secondary" >secondary</es-button>
                    <es-button type="dashed">dashed</es-button>
                    <es-button type="outline">outline</es-button>
                    <es-button type="text">text</es-button> 
                </es-preview-demo>


                <es-preview-demo title="按钮形状" description="Button 有多种形状，square - 长方形 (默认), circle - 圆形, round - 全圆角。">
                    <es-button type="default"  >default</es-button>
                    <es-button type="primary" shape='circle'>circle</es-button>
                    <es-button type="primary" shape='round'>round</es-button>
                    <es-button type='primary'>Primary</es-button>
                </es-preview-demo>


                <es-preview-demo title="按钮尺寸" description="按钮分为：迷你、小、中、大，四种尺寸。高度分别为：24px/28px/32px/36px。推荐及默认为尺寸「中」。可在不同场景及不同业务需求选择适合尺寸。">
                    <es-button type="default" size="mini">mini</es-button>
                    <es-button type="primary" size="small">small</es-button>
                    <es-button type="primary" size="default">default</es-button>
                    <es-button type="primary" size="large">large</es-button>
                </es-preview-demo>

                <es-preview-demo title="按钮状态" description="按钮状态分为 警告，危险，成功 三种，可以与按钮类型同时生效，优先级高于按钮类型。">
                    <es-preview-item-group>
                        <es-button type="default" status="warning">warning</es-button>
                        <es-button type="primary" status="danger">danger</es-button>
                        <es-button type="primary" status="success">success</es-button>
                    </es-preview-item-group>

                    <es-preview-item-group>
                        <es-button type="default" status="warning">warning</es-button>
                        <es-button type="primary" status="danger">danger</es-button>
                        <es-button type="primary" status="success">success</es-button>
                    </es-preview-item-group> 

                    <es-preview-item-group>
                        <es-button type="default" status="warning">warning</es-button>
                        <es-button type="primary" status="danger">danger</es-button>
                        <es-button type="primary" status="success">success</es-button>
                    </es-preview-item-group>    
                </es-preview-demo>

                <es-preview-demo title="长按钮" description="按钮宽度随着容器宽度进行适配。" width="50%">
                    <es-preview-item-group>
                        <es-button type="primary" long="long">primary</es-button>
                    </es-preview-item-group>
                    <es-preview-item-group>
                        <es-button type="secondary" long="long">secondary</es-button>
                    </es-preview-item-group>
                    <es-preview-item-group>
                        <es-button type="dashed" long="long">dashed</es-button>
                    </es-preview-item-group>
                    <es-preview-item-group>
                        <es-button type="outline" long="long">outline</es-button>
                    </es-preview-item-group>
                    <es-preview-item-group>
                        <es-button type="text" long="long">text</es-button> 
                    </es-preview-item-group>
                </es-preview-demo>

            </es-preview-content>`
        )
    }
}