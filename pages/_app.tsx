import '@styles/globals.css';
import '@styles/scss/nextjs-material-kit.scss?v=1.2.0';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

const variants: any = {
  fadeIn: {
    y: 100,
    opacity: 0,
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
  inactive: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
  fadeOut: {
    opacity: 0,
    y: -100,
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

export default function App({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter();
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>By Luan Mai</title>
      </Head>
      <AnimatePresence initial={false} exitBeforeEnter>
        <motion.div key={asPath} variants={variants} initial="fadeIn" animate="inactive" exit="fadeOut">
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </>
  );
}
