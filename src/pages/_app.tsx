import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import CustomThemeProvider from 'provider/CustomThemeProvider';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <CustomThemeProvider>
            <SessionProvider session={pageProps.session}>
                <Component {...pageProps} />
            </SessionProvider>
        </CustomThemeProvider>
    );
}

export default MyApp;
