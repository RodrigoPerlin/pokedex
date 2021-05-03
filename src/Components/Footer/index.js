import React from 'react';
import FooterStyles from './Footer.styles';

const Footer = (props) => {
    const { children } = props;
    return (
        <FooterStyles data-testid='footer'>
            {children}
        </FooterStyles>
    );
}
export default Footer;
