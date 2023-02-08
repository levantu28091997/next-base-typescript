import React from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

type LayoutProps = React.PropsWithChildren<{}>;

export default function Layout({ children }:LayoutProps) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}