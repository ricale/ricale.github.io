// https://medium.com/@samuelresua/easy-media-queries-in-styled-components-690b78f50053

import { CSSObject, FlattenSimpleInterpolation, SimpleInterpolation } from 'styled-components';
import { css } from './';

const sizes = {
    mobile: 768,
    tablet: 1024,
}

type CssFirstArg = CSSObject | TemplateStringsArray;
type MediaQuery = (first: CssFirstArg, ...interpolations: SimpleInterpolation[]) => FlattenSimpleInterpolation
export type MediaQueries = {
    mobile: MediaQuery
    tablet: MediaQuery
}

const result: MediaQueries = Object.keys(sizes).reduce((acc, key) => {
    acc[key as keyof MediaQueries] = (first: CssFirstArg, ...interpolations: SimpleInterpolation[]) => css`
        @media (max-width: ${sizes[key as keyof typeof sizes]}px) {
            ${css(first, ...interpolations)};
        }
    `;
    return acc;
}, {} as MediaQueries);

export default result;
