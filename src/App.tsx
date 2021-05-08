import { MainPage } from 'pages';
import { GlobalStyle, ThemeProvider, normalTheme, media } from 'themes';

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={{ ...normalTheme, media }}>
        <MainPage />
      </ThemeProvider>
    </>
  );
}

export default App;
