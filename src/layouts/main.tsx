import React, { ReactNode } from 'react'
import Nav from './Nav'
import NavVert from './NavVert'

interface LayoutProps {
    children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Nav />
            <section className="bg-slate-100 float-left w-full">
                <div className="w-1/6 float-left">
                    <NavVert />
                </div>
                <div className=" py-6 sm:px-6 lg:px-8 w-5/6 float-left">
                    {children}
                </div>
            </section>
        </>
    )
}

export default Layout
