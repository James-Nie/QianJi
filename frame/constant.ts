export const prefix = 'es-';
// 内部props名称
export const INNERPROPS = ['class', 'style'];

// 事件属性表达式,以@开头
export const eventReg = /^@[A-Za-z]/;

// props属性表达式
export const propsReg = /^[A-Za-z]/;

// 事件
export const EventsTagMap = [
    // 鼠标事件
    'click',
    'dbclick',
    'mousedown',
    'mouseenter',
    'mouseleave',
    'mousemove',
    'mouseover',
    'mouseout',
    'mouseup',

    // 鼠标事件
    'keydown',
    'keypress',
    'keyup',

    // 表单事件
    'blur',
    'change',
    'focus',
    'focusin',
    'focusout',
    'input',
    'reset',


    // 拖动事件
    'drag',
    'dragend',
    'dragenter',
    'dragleave',
    'dragover',
    'dragstart',
    'drop',

]