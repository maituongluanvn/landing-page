import '@styles/globals.css';
import '@styles/scss/nextjs-material-kit.scss?v=1.2.0';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
