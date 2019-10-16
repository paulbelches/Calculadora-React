import React from 'react'
import {shallow} from 'enzyme'
import App from './Components/App/app.jsx'
/*
Check if the component of the app is mounting
*/
describe('Check if the component of the app is mounting', () => {
    it('should render without any problems', () => {
       shallow(<App />);
     });
 });
