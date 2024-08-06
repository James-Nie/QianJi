import { install } from '../../frame/index';
import Header from './Header';
import Sidebar from './Sidebar';
import PreviewContent from './PreviewContent/Index';
import PreviewDemo from './PreviewDemo/Index';
import PreviewItemGroup from './PreviewGroup/Index';

const prefix = 'es-';

const components = [Header, Sidebar, PreviewContent, PreviewDemo, PreviewItemGroup];

install(prefix, components);