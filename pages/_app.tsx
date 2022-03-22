import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { AppProps } from 'next/app';
import { useState } from 'react';
import Head from 'next/head';
import '../styles.css';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <>
      <Head>
        <title>Hello there :)</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{ colorScheme }}
        >
          <Component {...pageProps} />
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}