import styled from 'styled-components';

export const AppStyle = styled.div`
   .home {
    background: #f1f1f1;
    display: grid;  
    font-family: Arial, Helvetica, sans-serif;
    grid-template-areas: 
        "header"
        "contents"
        "rodape";
    grid-template-columns: auto;
    grid-template-rows: 140px auto 20px ; 
}

.header {
    background: #fdfdfd;
    text-align: center;
}

.contents {
    grid-area: contents;
    padding: 0 2rem;
}

.rodape {
    background: #fdfdfd;
    color: #333333;
    font-size: .8rem;
    grid-area: rodape;
    text-align: center;
    }
`;



