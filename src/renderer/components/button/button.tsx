import React from 'react';
import ButtonProperties from '@/renderer/types/components/buttonProperties';

export interface Props {
    buttonProperties: ButtonProperties;
    action: React.MouseEventHandler<HTMLElement>;
}

const Button = (props: Props) => {
    const { action, buttonProperties } = props;
    return (
        <button id={buttonProperties.id} onClick={action}>
            {buttonProperties.text}
        </button>
    );
};

export default Button;
