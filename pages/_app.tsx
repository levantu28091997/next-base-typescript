import React, { ReactNode } from 'react'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material'

import '@/styles/globals.css'
import { theme } from '@/utils/theme'
import Layout from '@/components/Layout/layout'
import layoutAuth from '@/components/LayoutAuth/layoutAuth'

const layouts:any = {
    default: Layout,
    auth: layoutAuth,
}

type Props = AppProps & {
    Component: {
        layout: string
    }
}

export default function App({ Component, pageProps }: Props) {
    const Layout = layouts[Component.layout??'default'] || ((children?: ReactNode) => <>{children}</>)

    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    )
}
