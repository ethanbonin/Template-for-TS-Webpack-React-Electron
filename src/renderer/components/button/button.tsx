import React from 'react';
import Button from '@/renderer/types/components/button';

export interface Props {
    action: React.MouseEventHandler<HTMLElement>;
    buttonProperties: Button;
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
