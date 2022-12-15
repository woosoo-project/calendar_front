import { useEffect, useState } from 'react';
import { Global, ThemeProvider } from '@emotion/react';
import { light, dark } from 'styles/theme';
import { GlobalStyles } from 'styles/global';

type props = {
    children: JSX.Element;
};

const CustomThemeProvider = ({ children }: props) => {
    const [mounted, setMounted] = useState(false);
    const [isDark, setIsDark] = useState(false);
    const [theme, setTheme] = useState(light);

    const handleToggleTheme = () => {
        setIsDark((prev) => {
            window.localStorage.setItem('theme', `${prev ? 'light' : 'dark'}`);
            return !prev;
        });
    };

    useEffect(() => {
        setMounted(true);
        if (
            window.localStorage.getItem('theme') === 'dark' ||
            (window.matchMedia('(prefers-color-scheme: dark)').matches &&
                !window.localStorage.getItem('theme'))
        ) {
            setIsDark(true);
        }
    }, []);

    useEffect(() => {
        if (window.localStorage.getItem('theme') === 'dark') {
            setTheme(dark);
        } else if (window.localStorage.getItem('theme') === 'light') {
            setTheme(light);
        }
    }, [isDark]);

    const body = (
        <ThemeProvider theme={theme}>
            <Global styles={GlobalStyles(theme)} />
            {children}
            <button type="button" onClick={handleToggleTheme}>
                {isDark ? '라이트 모드로 보기' : '다크모로 보기'}
            </button>
        </ThemeProvider>
    );

    return mounted ? body : <div style={{ visibility: 'hidden' }}>{body}</div>;
};

export default CustomThemeProvider;
