import React from 'react';
import LoadingStyles from './Loading.styles';

const Loading = ({children}) => {
    return (
        <LoadingStyles>
            {children}
        </LoadingStyles>
    );
}
export default Loading;
