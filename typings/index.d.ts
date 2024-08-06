export declare global {
    
}
export declare namespace JSX {
    interface ElementAttributesProperty { props: {}; }
    interface ElementChildrenAttribute { children: {}; }

    interface IntrinsicElements {
        [elemName: string]: any;
    }

    export interface Components {
        name: String;  
        templateContent: string;
        styleContent: string;
    
        render(): string;
        clear(): string;
        props: any;
        styles(): string;
    
        [elemName: string]: any;
    }

    export interface Qianji {
        
    }
}