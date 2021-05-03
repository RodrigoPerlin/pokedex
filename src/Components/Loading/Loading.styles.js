import styled from 'styled-components';

const LoadingStyles = styled.div`
    text-align: center;
    font-size: ${props => props.theme.fonts.vinceFive};
    color:${props => props.theme.colors.red};
`;
export default LoadingStyles;