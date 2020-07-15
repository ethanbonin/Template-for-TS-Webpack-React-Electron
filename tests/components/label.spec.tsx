import React from 'react';
import LabelProperties, {
    HeaderVariants,
} from '@/renderer/types/components/labelProperties';
import Label from '@/renderer/components/label/label';
import { shallow } from 'enzyme';

describe('<Label />', () => {
    it('renders Label', () => {
        const labelProps: LabelProperties = {
            id: 'label-test',
            text: 'Text Label',
            variant: HeaderVariants.h1,
        };

        const wrapper = shallow(<Label label={labelProps} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('renders all different variants', () => {
        for (const value in HeaderVariants) {
            const labelProps: LabelProperties = {
                id: 'label-test',
                text: 'Text Label',
                variant: value,
            };

            const wrapper = shallow(<Label label={labelProps} />);
            expect(wrapper.type()).toEqual(value);
        }
    });

    it('renders text', () => {
        const labelProps: LabelProperties = {
            id: 'label-test',
            text: 'Text Label',
            variant: HeaderVariants.h1,
        };

        const wrapper = shallow(<Label label={labelProps} />);
        expect(wrapper.text()).toEqual(labelProps.text);
    });
});
