import React from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

type LayoutAuthProps = React.PropsWithChildren<{}>;

export default function LayoutAuth({ children }:LayoutAuthProps) {
    return (
        <>
            <Navbar />
            <div className="flex">
                <div className="side-bar">SideBar</div>
                <div className="content">
                    <main>{children}</main>
                </div>
            </div>
            <Footer />
        </>
    )
}