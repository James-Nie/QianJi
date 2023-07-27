
import { register } from './frame/utils';
import { install } from './packages/index';
import App from './src/views/app';
import Menu from './src/components/menu';
import Home from './src/views/home/home';
import Page from './src/views/page/page';
import Page1 from './src/views/page1/page1';

import './src/index.css';

install();

register(`my-app`, App);
register(`my-menu`, Menu);
register(`container-home`, Home);
register(`container-page`, Page);
register(`container-page1`, Page1);