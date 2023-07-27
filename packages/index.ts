import { register } from '../frame/utils';
import { prefix } from '../frame/constant';
import Card from './Card/index';
import Button from './Button/index';
import Input from './Input/index';
import Image from './Image/index';
import List from './List/index';
import './index.css';

const components = [Button, Input, Image, Card, List];

export function install() {
    components.forEach(Item => {
        if(Item.Name && !customElements.get(Item.Name)) {
            register(`${prefix}${Item.Name.toLowerCase()}`, Item);
        }
    }) 
}