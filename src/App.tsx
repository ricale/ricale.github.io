import { MainPage } from './pages';
import { GlobalStyle, ThemeProvider, normalTheme } from './themes';

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={normalTheme}>
        <MainPage />
      </ThemeProvider>
    </>
  );
}

export default App;
