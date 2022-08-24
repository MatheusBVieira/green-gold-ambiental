import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { light } from '../styles/theme';
import GlobalStyles from '../styles/globalStyles';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Content from '../components/Content';
import { useEffect, useState } from 'react';
import Script from 'next/script'
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'

function MyApp({ Component, pageProps }: AppProps) {
  const [scroll, setScroll] = useState(false)
  const router = useRouter()
  
  useEffect(() => {
    const handleRouteChange = (url: any) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    router.events.on('hashChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
      router.events.off('hashChangeComplete', handleRouteChange)
    }
  }, [router.events])


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
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
        <ThemeProvider theme={light}>
          <Header scroll={scroll}  />
          <Content>
            <Component {...pageProps} />
          </Content>
          <Footer/>
          <GlobalStyles />
        </ThemeProvider>
      </>
  );
}

export default MyApp
