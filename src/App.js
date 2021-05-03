import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import Routes from './routes';
import * as S from './App.styles';

const App = () => (
  <ThemeProvider theme={theme}>
    <S.AppStyle>
    <Routes />
    </S.AppStyle>
  </ThemeProvider>

);
export default App;
