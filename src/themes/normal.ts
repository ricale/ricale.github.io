import { DefaultTheme } from 'styled-components';

const colors = {
  colorPirmary: 'gold',

  colorBackground: 'black',
  colorOnBackground: 'white',
};

const dimens = {
  bigMargin: '2rem',
  margin: '1rem',
  gutter: '0.5rem',
  spacing: '0.25rem',
  icon: '1.5rem',
};

const text = {
  name: {
    fontSize: '6rem',
    fontFamily: 'monospace',
  },
  h1:      { fontSize: '3.5rem' },
  h2:      { fontSize: '3rem' },
  h3:      { fontSize: '2rem' },
  h4:      { fontSize: '1.5rem' },
  h5:      { fontSize: '1.25rem' },
  h6:      { fontSize: '1.125rem' },
  body1:   { fontSize: '1rem' },
  body2:   { fontSize: '0.875rem' },
  caption: { fontSize: '0.75rem' },

  mobile: {
    name: {
      fontSize: '4rem',
      fontFamily: 'monospace',
    }
  }
};

export interface NormalTheme extends DefaultTheme  {
  colors: typeof colors
  dimens: typeof dimens
  text: typeof text
}

const normalTheme: NormalTheme = {
  colors,
  dimens,
  text,
};

export default normalTheme;
