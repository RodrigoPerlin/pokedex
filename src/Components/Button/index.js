import React from 'react';
import ButtonStyles from './Button.styles';

const Button = (props) => {
    const { children } = props;
    return (
        <ButtonStyles className='Button' {...props}>
            {children}
        </ButtonStyles>
    );
}
export default Button;
