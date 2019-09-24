import * as React from 'react';
import {shallow} from "enzyme";
import {App} from "../App";

describe("App",  () => {
    it('should say hello', () => {
        const app = shallow(<App/>);

        expect(app.find('div').text()).toEqual('Hello');
    });

});