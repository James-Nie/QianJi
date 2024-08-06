import { register, install, prefix } from 'QianJi';
import Card from './Card/index';
import Button from './Button/index';
import Input from './Input/index';
import Image from './Image/index';
import List from './List/index';
import './index.css';

const components = [Button, Input, Image, Card, List];

install(prefix, components);