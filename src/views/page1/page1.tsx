import { Components } from '../../../frame/index';

export default class Page1 extends Components {
    static Name = 'Page1';

    state = {
        time: Date.now()
    }

    connected() {
        setInterval(()=>{
            this.setState({
                time: Date.now()
            })
        }, 1000)
        
    }

    handleClick(args: any) {
        console.log('args===', args)
    }

    render() {
        const { time } = this.state;
        const date = new Date(time);
        const y = date.getFullYear();
        const mon = date.getMonth() +1;
        const d = date.getDate();
        const h = date.getHours();
        const m = date.getMinutes();
        let s:any = date.getSeconds();
        s = s< 10 ? `0${s}` : s
        return (
            `<div>
                当前时间：${y}年${mon}月${d}日 ${h}:${m}:${s}
            </div>`
        )
    }
}