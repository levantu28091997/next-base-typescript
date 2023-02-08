import { ReactNode } from 'react';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/components/Layout/layout';
import layoutAuth from '@/components/LayoutAuth/layoutAuth';

const layouts:any = {
    default: Layout,
    auth: layoutAuth,
  };

type Props = AppProps & {
    Component: {
        layout: string
    }
}

export default function App({ Component, pageProps }: Props) {
    const Layout = layouts[Component.layout??'default'] || ((children?: ReactNode) => <>{children}</>);

    return (
        <Layout>
          <Component {...pageProps} />
        </Layout>
    );
}
