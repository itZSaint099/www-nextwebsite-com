import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.scss';
import { SiteTheme, GlobalStyle } from '../styles/siteTheme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={SiteTheme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
