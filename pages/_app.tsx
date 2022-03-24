import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { light } from '../styles/theme';
import GlobalStyles from '../styles/globalStyles';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Content from '../components/Content';
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  });

  const isSticky = () => {
    const scrollTop = window.scrollY;
    scrollTop >= 100 ? setScroll(true) : setScroll(false);
  };

  return (
    <ThemeProvider theme={light}>
      <Header scroll={scroll}  />
      <Content>
        <Component {...pageProps} />
      </Content>
      <Footer/>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp
