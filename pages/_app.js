import Head from 'next/head';

import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Metaversus</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Metaversus UI/UX website concept created by Utkarsh Pathrabe using NextJS, TailwindCSS and Framer Motion" />
      <meta name="keywords" content="Metaversus, Utkarsh Pathrabe, NextJS, TailwindCSS, Framer Motion" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
