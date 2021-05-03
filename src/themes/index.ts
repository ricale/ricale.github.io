import * as styledComponents from 'styled-components';

import normalTheme, { NormalTheme } from './normal';
import getGlobalStyle from './getGlobalStyle';

const {
    default: styled,
    css,
    keyframes,
    ThemeProvider,
} = styledComponents as unknown as styledComponents.ThemedStyledComponentsModule<NormalTheme>;

const GlobalStyle = getGlobalStyle(normalTheme);

export {
    normalTheme,
    css,
    keyframes,
    ThemeProvider,
    GlobalStyle,
};

export default styled;
