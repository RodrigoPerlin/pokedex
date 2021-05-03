import styled from 'styled-components';

const ButtonStyles = styled.button`
  border: 2px solid ${props => props.theme.colors.black};
  cursor: pointer;
  font-size: 1em;
  margin:${(props) => (props.margin ? props.margin : '1px')};
  padding: 0.25em 1em;
  border-radius: 3px;

:hover{
  font-weight:${(props) => (props.fontWeight ? props.fontWeight : 'normal')};
  background:${(props) => (props.background ? props.background : props.theme.colors.pink)};
}
`;
export default ButtonStyles;