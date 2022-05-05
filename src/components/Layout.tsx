import React, { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { store } from '../service/redux/store'
import Nav from './Nav'
import NavVert from './NavVert'

interface LayoutProps {
    children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <Provider store={store}>
            <Nav />
            <section className="bg-slate-100 float-left w-full">
                <div className="w-1/6 float-left">
                    <NavVert />
                </div>
                <div className=" py-6 sm:px-6 lg:px-8 w-5/6 float-left">
                    {children}
                </div>
            </section>
        </Provider>
    )
}

export default Layout
