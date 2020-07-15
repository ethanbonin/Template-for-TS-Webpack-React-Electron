import React from 'react';
import labelProperties from '@/renderer/types/components/labelProperties';

export interface Props {
    label: labelProperties;
    additionalText?: string;
}

const Label = (props: Props) => {
    const { label, additionalText } = props;
    const Component = `${label.variant}` as keyof JSX.IntrinsicElements;
    return (
        <Component id={label.id}>
            {label.text}
            {additionalText}
        </Component>
    );
};

export default Label;
