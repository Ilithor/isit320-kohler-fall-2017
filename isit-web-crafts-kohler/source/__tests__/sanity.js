import React from 'react';
import ReactDOM from 'react-dom';
import ReactHome from '../ReactHome';
import HomeButtons from '../HomeButtons';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ElfDebugEnzyme from '../ElfDebugEnzyme';
const elfDebugEnzyme = new ElfDebugEnzyme(true, 'sanity');
configure({adapter: new Adapter()});
import jQuery from 'jquery';
global.jQuery = jQuery;
global.$ = jQuery;
import raf from '../temp-poly-fills';

describe('WebCrafts Sanity Test', () => {

    'use strict';

    it('expects true to be true', () => {
        expect(true).toBe(true);
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ReactHome/>, div);
    });

    it('renders HomeButtons without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<HomeButtons/>, div);
    });

});
