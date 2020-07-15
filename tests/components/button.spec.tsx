import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import ButtonProperties from '@/renderer/types/components/buttonProperties';
import Button from '@/renderer/components/button/button';

describe('<Button />', () => {
    it('renders Button', () => {
        const buttonProps: ButtonProperties = {
            id: 'test-button',
            text: 'Test Button',
        };

        const wrapper = shallow(
            <Button buttonProperties={buttonProps} action={() => null} />,
        );

        expect(wrapper).toMatchSnapshot();
    });

    it('should render text', () => {
        const buttonProps: ButtonProperties = {
            id: 'test-button',
            text: 'Test Button',
        };

        const wrapper = shallow(
            <Button buttonProperties={buttonProps} action={() => null} />,
        );

        expect(wrapper.text()).toEqual(buttonProps.text);
    });

    it('should apply action', () => {
        const buttonProps: ButtonProperties = {
            id: 'test-button',
            text: 'Test Button',
        };

        const spy = sinon.spy();

        const wrapper = shallow(
            <Button buttonProperties={buttonProps} action={() => spy()} />,
        );

        const button = wrapper.find(`#${buttonProps.id}`);

        button.simulate('click');
        expect(spy.calledOnce).toBe(true);

        button.simulate('click');
        expect(spy.calledTwice).toBe(true);
    });
});
