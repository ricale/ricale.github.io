import * as styledComponents from 'styled-components';

import normalTheme, { NormalTheme } from './normal';
import getGlobalStyle from './getGlobalStyle';
import media, { MediaQueries } from './media';

type AppTheme = NormalTheme & {
    media: MediaQueries
}
const {
    default: styled,
    css,
    keyframes,
    ThemeProvider,
} = styledComponents as unknown as styledComponents.ThemedStyledComponentsModule<AppTheme>;

const GlobalStyle = getGlobalStyle(normalTheme);

export {
    normalTheme,
    media,
    css,
    keyframes,
    ThemeProvider,
    GlobalStyle,
};

export default styled;
