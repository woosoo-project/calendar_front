import { css, Theme } from '@emotion/react';

export const GlobalStyles = (theme: Theme) => css`
    body {
        background: ${theme.background};
        color: ${theme.text};
    }
`;
