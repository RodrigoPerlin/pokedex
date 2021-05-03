import styled from 'styled-components';

export const ButtonPagesStyle = styled.div`
 	.buttonDestp{
	display: inline-block;
    margin: 0 6%;
	opacity: 0.5;
	 :hover{
		opacity: 1;
	};
};
  @media screen and (max-width: 768px) {
	.buttonDestp{
		display:none
	}
  }
  
`;


