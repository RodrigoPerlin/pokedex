import styled from 'styled-components';

export const HomeStyle = styled.div`

.highlights {
  display: grid;
  grid-gap: .2rem;
  grid-template-columns: 100%;
  height: calc(100vh -140px);
  grid-gap: 10px;
  background-color: #c7e5fb;
  padding: 10px;

  @media screen and (max-width: 300px) {
    height: calc(100vh -240px);
    }
}

.highlights__main {
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
}

.rodape{
  text-align: center
}

.link{
  text-decoration: none;
}
`;

export const Item = styled.div`
  text-transform: capitalize;
  margin: 1%;
  text-decoration: none;
  color : #000987;

  :hover{
    color:yellow
  }
    @media screen and (max-width: 300px) {
    margin: auto;
    }
`;


