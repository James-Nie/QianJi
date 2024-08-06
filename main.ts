
import { register } from './QianJi';
import './packages/index';
import './src/components/Index';
import App from './src/views/app';

import Home from './src/views/home/home';
import ButtonPreview from './src/views/button/button';
import InputPreview from './src/views/input/input';

import './src/index.css';


register(`es-app`, App);

register(`container-home`, Home);

register(`button-pre`, ButtonPreview);
register(`input-pre`, InputPreview);