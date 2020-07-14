import React from 'react';
import label from '@/renderer/types/components/label';

export interface Props {
    label: label;
    additionalText?: string;
}

const Label = (props: Props) => {
    const { label, additionalText } = props;
    const Component = `${label.variant}` as keyof JSX.IntrinsicElements;
    return (
        <Component id={label.id}>
            {label.text} {additionalText}
        </Component>
    );
};

export default Label;
