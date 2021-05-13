import AppRouter from 'router';
import { GlobalStyle, ThemeProvider, normalTheme, media } from 'themes';

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={{ ...normalTheme, media }}>
        <AppRouter />
      </ThemeProvider>
    </>
  );
}

export default App;
