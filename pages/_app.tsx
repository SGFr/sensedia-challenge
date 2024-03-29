import React from 'react';
import type { AppProps } from 'next/app'
import { Layout } from '../components/Layout/Layout';
import '../global.css';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}